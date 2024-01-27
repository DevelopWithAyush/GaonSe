import React, { createContext, useContext, useEffect, useState } from "react";
import { AlertContext } from "../AlertContext/AlertState";

export const ProductContext = createContext();

const ProductState = (props) => {
    const alercontext = useContext(AlertContext)
    const {showAlert} = alercontext;
 const [product,setProduct] = useState([]);
 const [category,setCategory] = useState([])
 const [singleproduct,setSingleproduct] = useState([])
 const [imgUrls,setimgUrls] = useState([])
 const [carts,setCarts] = useState([])
 const [disprice,setDisprice] = useState(0)
 const url = "http://localhost:5000/"

useEffect(()=>{
    getCategory()
    getCart("65b44da560f0933b79743430")
    // eslint-disable-next-line
},[])
 

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
        if(json.success === false){
            showAlert("false","someerror")
        }
  
        // console.log(product)

    } catch (error) {
        showAlert("fail","some issues")
    }
}
const getCategory = async()=>{
    try {
        const response = await fetch(`${url}api/product/category`,{
            method: 'GET',
            headers:{
                'Content_Type':'application/json',
            },
        })
        const json = await response.json()
        setCategory(json.category)
  
        if(json.success === false){
            showAlert("false","someerror")
        }

    } catch (error) {
        showAlert("fail","some issues")
    }
}
const getsingleproduct = async(productId)=>{
    try {
        const response = await fetch(`${url}api/product/singleproduct/${productId}`,{
            method: 'GET',
            headers:{
                'Content_Type':'application/json',
            },
        })
        const json = await response.json()
        setSingleproduct(json)
        setimgUrls(json.imgUrls)
    } catch (error) {
        showAlert("fail","some issues")
    }
}
const getCart = async(userid)=>{
    try {
        const response = await fetch(`${url}api/cart/${userid}`,{
            method: 'GET',
            headers:{
                'Content_Type':'application/json',
            },
        })
        const json = await response.json()
        setCarts(json.cartItems)
    } catch (error) {
        showAlert("fail","some issues")
    }
}

// some sort 
// on price increasing order 
  const lowtohigh = ()=>{
    const sortedProducts = [...product].sort((a, b) => a.discountPrice - b.discountPrice);
    setProduct(sortedProducts)
  }
//   on price decreasing order 
const hightolow = ()=>{
    const sortedProductsDescending = [...product].sort((a, b) => b.discountPrice - a.discountPrice);
    setProduct(sortedProductsDescending)
}
  return (
    <ProductContext.Provider value={{disprice,setDisprice, getProducts ,product,category,getsingleproduct,singleproduct,imgUrls ,lowtohigh,hightolow ,carts}} >
        {props.children}
    </ProductContext.Provider>
    
  )
}

export default ProductState
