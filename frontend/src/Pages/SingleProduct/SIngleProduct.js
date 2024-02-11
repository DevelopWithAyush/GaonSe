import React, { useContext, useEffect, useState } from 'react'
import {Link,useParams  } from 'react-router-dom'
import ImgCard from '../../Components/ImgCard/ImgCard'
import "./SingleProduct.css"
import { ProductContext } from '../../Context/ProductContext/ProductState'
import ReviewModal from '../../Components/ReviewModal/ReviewModal'
import { CartContext } from '../../Context/CartContext/CartContext'

const SIngleProduct = () => {
    const {productId} = useParams()
    const [rating ,setrating] = useState(0)
   const productcontext = useContext(ProductContext)
    const {getsingleproduct,singleproduct} = productcontext
    const cartcontext = useContext(CartContext)
    const {addToCart,getCart} =cartcontext
    useEffect(()=>{
        getsingleproduct(productId)

        // eslint-disable-next-line
    },[])
    
    // console.log(singleproduct)
    const [accordion,setAccordion] = useState({display:"flex"})
    const discountper = (((singleproduct.mrp -singleproduct.discountPrice)/singleproduct.mrp)*100).toFixed(1);
    
    const [reviewapper ,setreviewapper] = useState({top:"-100%"})
    const [reviebox ,setreviebox] = useState({top:"-100%"})

    // all the code related to the page review page 
    const [start1, setStar1] = useState({ color: "#e4e4e4 " })
    const [start2, setStar2] = useState({ color: "#e4e4e4 " })
    const [start3, setStar3] = useState({ color: "#e4e4e4 " })
    const [start4, setStar4] = useState({ color: "#e4e4e4 " })
    const [start5, setStar5] = useState({ color: "#e4e4e4 " })

    const startclick1 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#e4e4e4" })
        setStar3({ color: "#e4e4e4" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(1)
    }
    const startclick2 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#e4e4e4" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(2)

    }
    const startclick3 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(3)

    }
    const startclick4 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#FFD700" })
        setStar5({ color: "#e4e4e4" })
        setrating(4)

    }
    const startclick5 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#FFD700" })
        setStar5({ color: "#FFD700" })
        setrating(5)

    }



    const startfunction =()=>{
        if(rating ===1){
            startclick1()
        }else if(rating === 2){
            startclick2()
        }else if(rating === 3){
            startclick3()
        }else if(rating ===4){
            startclick4()
        }else if(rating ===5){
            startclick5()
        }
    }

    const handleaddtobag =()=>{
        addToCart(productId,1)
        getCart()
    }


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
                        <button onClick={handleaddtobag}> At to bag <i class="fa-solid fa-bag-shopping"></i></button>
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
                                <p></p>
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
                <button onClick={()=>{setreviewapper({top:"0"})
                                    setreviebox({top:"50%"})
                                    startfunction()
            }}>don't forget to give feedback to us😄</button>
                </div>
            </div>
            <ReviewModal rating={rating} setrating={setrating} reviebox ={reviebox} setreviebox ={setreviebox} reviewwapper = {reviewapper} setreviewapper ={setreviewapper}  productId={productId} start1 = {start1} start2= {start2} start3= {start3} start4= {start4} start5= {start5} startclick1 ={startclick1} startclick2 ={startclick2} startclick3 ={startclick3} startclick4 ={startclick4} startclick5 ={startclick5}/> 

        </section>
    )
}

export default SIngleProduct

