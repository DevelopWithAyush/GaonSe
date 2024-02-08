import React, { useContext, useEffect } from 'react'
import "./ProductPage.css"
import ProductCard from '../../Components/ProductCard/ProductCard'
import { ProductContext } from '../../Context/ProductContext/ProductState'
import { Link } from 'react-router-dom'
const ProductPage = () => {
    const productcontext = useContext(ProductContext)
    const { product, getProducts } = productcontext

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])
    return (
        <section className="product">
            <h1>all the listed product</h1>
            <div className="product-item">
                {product.map((product) => {
                    return <ProductCard  product ={product}/>

                })}
            </div>

            <Link to="/addproduct" className='product-add'>add product</Link>
        </section>
    )
}

export default ProductPage
