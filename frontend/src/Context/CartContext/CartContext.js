import { createContext, useContext, useEffect, useState } from "react";
import { AlertContext } from "../AlertContext/AlertState";

export const CartContext = createContext()


const CartState = (props) => {
  const [carts, setCarts] = useState([])
  const url = "http://localhost:5000/"
  const alertcontext = useContext(AlertContext)
  const { showAlert } = alertcontext;
  useEffect(() => {
    getCart()
  }, [])

  console.log(carts)

  const getCart = async () => {

    const token = localStorage.getItem("authToken")
    if (!token) {
      showAlert("false", "session expired")
    } else {
      try {
        const response = await fetch(`${url}api/cart`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authToken': localStorage.getItem("authToken")
          },
        })
        const json = await response.json()
        setCarts(json.cart.products)
      } catch (error) {
        showAlert("fail", "some issues")
      }
    }

  }


  const addToCart = async (productId, quantity) => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      showAlert("false", "session expired")
    } else {
      try {
        const response = await fetch(`${url}api/cart/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authToken': localStorage.getItem("authToken")
          },
          body: JSON.stringify({ productId, quantity })
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to add product to cart');
        }
        showAlert("true", "product added")

        // You can perform further actions here after adding the product to the cart
      } catch (error) {
        console.error('Error adding product to cart:', error.message);
        // Handle error scenarios here
      }
    };
  }

  const updatecart = async (quantity, productId) => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      showAlert("false", "session expired")
    } else {

      try {
        await fetch(`${url}api/cart/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authToken': localStorage.getItem("authToken")
          },
          body: JSON.stringify({ quantity:5, productId:"65c6b0c2dbbdc7e622f31b81" })
        });

        const updatedProducts = [...carts];
        const productIndex = updatedProducts.findIndex(item => item.product && item.product._id === productId);
    
        // If product with the given id exists
        if (productIndex !== -1) {
            // Update the quantity
            carts[productIndex].quantity = quantity;
            setCarts(updatedProducts);
            console.log(`Quantity updated for product with ID ${productId}`);
        } else {
            console.log(`Product with ID ${productId} not found`);
        }
        showAlert("true", "product add")
      } catch (error) {
        showAlert("false", "some issue")
      }


    }
  }


  const deleteCartProduct = async(productId)=>{

    const updatedProducts = [...carts];
    // Find the index of the product with the given productId
    const productIndex = updatedProducts.findIndex(item => item._id && item._id === productId);
    console.log(productIndex)
    // If product with the given id exists
    if (productIndex !== -1) {
        // Remove the product from the array
        updatedProducts.splice(productIndex, 1);
        // Update the state with the new array
        setCarts(updatedProducts);
        console.log(`Product with ID ${productId} deleted successfully`);
        console.log(updatedProducts)
        console.log(updatedProducts)
    } else {
        console.log(`Product with ID ${productId} not found`);
    }
  }




  return (
    <CartContext.Provider value={{ getCart, addToCart, carts,updatecart,deleteCartProduct }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState;