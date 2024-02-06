import React, { useContext } from 'react'
import "./Wapper.css"
import { ProductContext } from '../../Context/ProductContext/ProductState'
const Wapper = () => {
    const productcontext = useContext(ProductContext)
    const {wapper,closeWapper} = productcontext
  return (
    
    <div className='full-wapper' onClick={()=>{closeWapper()}} style={wapper}></div>
  )
}

export default Wapper
