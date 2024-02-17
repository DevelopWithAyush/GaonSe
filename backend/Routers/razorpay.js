const express = require("express")
const Razorpay = require("razorpay")
const router = express.Router()
const crypto = require("crypto");
const Order = require("../Models/Order");
const fetchuser = require("../Middleware/fetchuser");
const { isatty } = require("tty");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

router.get("/key", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
})

router.post("/checkout", fetchuser, async (req, res) => {
  try {

    const options = {
      amount: req.body.totalAmount * 100,
      currency: 'INR',
    }
    const razorpayOrder = await instance.orders.create(options);

    const order = new Order({
      user: req.user.id,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      orderid: razorpayOrder.id
    })
    await order.save();



    res.json({
      order: razorpayOrder
    })
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, error: "Could not create order" });
  }
})

router.post("/paymentverification", async (req, res) => {

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
      const updatestatus = await Order.findOneAndUpdate(
        { orderid: razorpay_order_id },
        { $set: { status: 'completed', paymentId: razorpay_payment_id } },
        { new: true }
      );
      if (!updatestatus) {
        res.status(400).json({ message: "order not found" })
      }
      res.status(200).json({ success: true, message: 'Payment success webhook received.' });
    } else {
      await Order.findOneAndUpdate(
        { orderid: razorpay_order_id },
        { $set: { status: 'cancelled', paymentId: razorpay_payment_id } },
        { new: true }
      );
      res.status(400).json({ success: false, message: 'Payment verification failed.' });
    }

  } catch (error) {
    await Order.findOneAndUpdate(
      { orderid: razorpay_order_id },
      { $set: { status: 'cancelled', paymentId: razorpay_payment_id } },
      { new: true }
    );
    console.error('Error in payment verification:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});




module.exports = router 
