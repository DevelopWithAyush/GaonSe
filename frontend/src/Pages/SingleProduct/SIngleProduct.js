import React, { useContext, useEffect, useState } from 'react'
import {Link,useParams  } from 'react-router-dom'
import ImgCard from '../../Components/ImgCard/ImgCard'
import "./SingleProduct.css"
import { ProductContext } from '../../Context/ProductContext/ProductState'

const SIngleProduct = () => {
    const {productId} = useParams()

   const context = useContext(ProductContext)
    const {getsingleproduct,singleproduct} = context
    useEffect(()=>{
        getsingleproduct(productId)

        // eslint-disable-next-line
    },[])
    
    // console.log(singleproduct)
    const [accordion,setAccordion] = useState({display:"flex"})
    const discountper = (((singleproduct.mrp -singleproduct.discountPrice)/singleproduct.mrp)*100).toFixed(1);

    return (
        <section className='single-product'>
            <p className="single-navigation navigation-link"><Link to="/"  className='navigation-link' >home</Link>/ <Link to="/product" className='navigation-link' >product</Link>/ <Link  className='navigation-link' to={`/singleproduct/${singleproduct._id}`}> {singleproduct.productName} </Link> </p>
            <div className="product-detials">
             
                <div className="img-section">
                    <ImgCard></ImgCard>
                </div>
                <div className="context-section">
                    <h1>{singleproduct.productName}</h1>
                    <div className="single-price">
                        <p className='offerprice'>&#8377; {singleproduct.discountPrice}</p>
                        <p className='mrp'>&#8377; {singleproduct.mrp} </p>
                        <p className='single-offer'>{discountper}% off</p>

                    </div>
                    <div className="single-btn">
                        <button> At to bag <i class="fa-solid fa-bag-shopping"></i></button>
                        <button> buy now</button>
                    </div>
                    <div className="single-services">
                        <div className="service-card">
                            <i class="fa-solid fa-credit-card"></i>
                            <div className="service-context">
                                <p>100% secure payment</p>
                                <p>pay online securly</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <i class="fa-solid fa-truck"></i>
                            <div className="service-context">
                                <p>100% secure payment</p>
                                <p>pay online securly</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="product-accordion">
                        <div className="accordion-head" onClick={()=>{accordion.display === "none"?setAccordion({display:"flex"}):setAccordion({display:"none"})}}>
                            <p>product description</p>
                            <div className="accordion-btn">
                                <span className='accordion-line1'></span>
                                <span className='accordion-line2'></span>
                            </div>
                        </div>
                        <p className='single-para' style={accordion}> {singleproduct.productDescription} </p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default SIngleProduct

