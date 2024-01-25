import React from 'react'
import "./Middlebanner.css"
import middleimg from "../../Assets/Group 2418.png"
import cardimg1 from "../../Assets/Group 2416.png"
import cardimg2 from "../../Assets/Group 2419.png"
import cardimg3 from "../../Assets/Group 2420.png"
import cardimg4 from "../../Assets/Group 2421.png"
const Middlebanner = () => {
  return (
    <div className='middlebanner'>
        <div className="middleleft">
          <img src={middleimg} alt="" className='middleleftimg' />
        </div>
        <div className="middleright">
          <h2 className='banner-heading'>why gaonSe</h2>
          <p className='banner-context'>In our busy lives, sometimes all we need is a simple, comforting sweetness. That's exactly what GaonSe Jaggery brings to the table not just a sweet treat but a warm hug from our village. Made with love and and care, it's a promise of pure goodness and tradition. Starting with the basics, GaonSe Jaggery is crafted from pure sugarcane juice...</p>
          <div className="banner-logo">
            <div className="banner-logo-card">
              <img src={cardimg1} alt="" />
              <p>100% organic</p>
            </div>
            <div className="banner-logo-card">
              <img src={cardimg2} alt="" />
              <p>chemical free</p>
            </div>
            <div className="banner-logo-card">
              <img src={cardimg3} alt="" />
              <p>Energy boost</p>
            </div>
            <div className="banner-logo-card">
              <img src={cardimg4} alt="" />
              <p>FSSAI approved</p>
            </div>
          </div>
          <a href="https://medium.com/@gaonseindia/gaonse-jaggery-pure-love-genuinetaste-ec677e3d99b8" target='blank' className='context-link'> read more <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      
    </div>
  )
}

export default Middlebanner
