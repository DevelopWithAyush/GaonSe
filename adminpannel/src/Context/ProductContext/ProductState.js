import {  createContext,useState } from "react";

export const ProductContext = createContext()


const ProductState = (props) => {
    const [product,setProduct] = useState([]);
    const url = "http://localhost:5000/"

// some css for wapper 

const [wapper ,setwapper] = useState({display:"none"})

const openWapper = ()=>{
    setwapper({display:"flex"})
}
const closeWapper =()=>{
    setwapper ({display :"none"})
}


const getProducts = async()=>{
    try {
        const response = await fetch(`${url}api/product/products/`,{
            method: 'GET',
            headers:{
                'Content_Type':'application/json',
            },
        })
        const json = await response.json()
        setProduct(json.products.reverse())
      
  

    } catch (error) {
        console.log("error ")
    }
}
  return (
  
    <ProductContext.Provider value={{product,getProducts,wapper,openWapper,closeWapper}}>
        {props.children}
    </ProductContext.Provider>

  )
}

export default ProductState
