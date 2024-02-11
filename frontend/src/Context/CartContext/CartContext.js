import { createContext ,useContext,useEffect,useState} from "react";
import { AlertContext } from "../AlertContext/AlertState";

export const CartContext = createContext()


const CartState =(props)=>{
    const [carts,setCarts] = useState([])
    const url = "http://localhost:5000/"
    const alertcontext = useContext(AlertContext)
    const {showAlert} = alertcontext;
    const [cartid,setCartid] =useState()

    useEffect(()=>{
      getCart()
    },[])
 

    const getCart = async()=>{

      const token = localStorage.getItem("authToken")
      if(!token){
        showAlert("false","session expired")
      }else{
        try {
          const response = await fetch(`${url}api/cart`,{
              method: 'GET',
              headers:{
                  'Content-Type':'application/json',
                  'authToken':localStorage.getItem("authToken")
              },
          })
          const json = await response.json()
          setCartid(json.cart._id)
          setCarts(json.cart.products)
      } catch (error) {
          showAlert("fail","some issues")
      }
      }
       
    }
    
    
    const addToCart = async (productId, quantity) => {
      const token = localStorage.getItem("authToken")
      if(!token){
        showAlert("false","session expired")
      }else{
        try {
          const response = await fetch(`${url}api/cart/add`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authToken':localStorage.getItem("authToken")
            },
            body: JSON.stringify({ productId, quantity })
          });
      
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || 'Failed to add product to cart');
          }
          showAlert("true","product added")
      
          // You can perform further actions here after adding the product to the cart
        } catch (error) {
          console.error('Error adding product to cart:', error.message);
          // Handle error scenarios here
        }
      };
    }
    

    return (
        <CartContext.Provider value={{getCart,addToCart,carts}}>
               {props.children}
        </CartContext.Provider>
    )
}

export default CartState;