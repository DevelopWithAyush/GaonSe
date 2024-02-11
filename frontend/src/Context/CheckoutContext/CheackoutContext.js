import { createContext, useContext, useState } from "react";
import { AlertContext } from "../AlertContext/AlertState";
import { CartContext } from "../CartContext/CartContext";
export const CheckoutContext = createContext()

const CheckoutState = (props) => {
    const [amount, setAmount] = useState("")
    const alertcontext = useContext(AlertContext)
    const { showAlert } = alertcontext;
    const cartcontext = useContext(CartContext)
    const { carts } = cartcontext;

    // Filter out the objects where product is not null and map them to the required format
    const items = carts.filter(item => item.product !== null).map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.discountPrice
    }));


    // verify code for payment 

    const handleOnVerify = async (response) => {
        try {
            await fetch('http://localhost:5000/api/paymentverification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                }),
            });
        } catch (error) {

        }
    }





    const handleOnClick = async (totalAmount) => {

        const token = localStorage.getItem("authToken")
        if (!token) {
            showAlert("false", "Seccion expired")
        } else {



            try {
                const response = await fetch('http://localhost:5000/api/key', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': token
                    },
                });

                const data = await response.json();
                const key = data.key

                const res = await fetch(`http://localhost:5000/api/checkout`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': token
                    },
                    body: JSON.stringify({
                        items,
                        totalAmount
                    })
                });
                const json = await res.json()
                const order = json.order



                const options = {
                    key,
                    amount: order.amount,
                    currency: "INR",
                    name: "Gaonse",
                    description: "Ecommerce website",
                    image: "https://res.cloudinary.com/dpqsatnvt/image/upload/v1707135376/logo_v7z9ah.png",
                    order_id: order.id,
                    handler: handleOnVerify,
                    prefill: {
                        name: "Gaurav Kumar",
                        email: "gaurav.kumar@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        "address": " Bank Colony, Gadhroad Shohrabhgadh Bus Stand, Near Laxmi narayan mandir, Meerut, Meerut public.city, Uttar Pradesh - 250002"
                    },
                    theme: {
                        "color": "#e4600c",

                    }
                };

                const razor = new window.Razorpay(options);
                razor.open();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <CheckoutContext.Provider value={{ handleOnClick, amount, setAmount }}>
            {props.children}
        </CheckoutContext.Provider>
    );

}



export default CheckoutState;