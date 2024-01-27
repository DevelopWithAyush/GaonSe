import React from 'react'
import "./BannerTop.css"
const BannerTop = () => {
    return (
        <section className='banner-top'>

            <div className="banner-top-container">
                <img src="https://res.cloudinary.com/dpqsatnvt/image/upload/v1706373406/Frame_3466054_fcvwdt.png" alt="" className='banner-img' />
                <div className="banner-top-left">
                    <p className='left-top-heading'>gaonSe store</p>
                    <p className='left-bottom-heading'>natural <br />product </p>

                </div>
                <div className="banner-top-right">
                    <p className='right-content'>
                        Playfair Display is very click-friendly when it is italicized. This serif font has beautiful curves and well-rounded corners, making it suitable for both traditional, as well as modern websites. It makes an excellent font for titles and headlines but doesn’t work as well for long stretches of body copy, because it is less readable when used at smaller sizes.</p>
                        <p>
                        Cinzel is a typeface inspired by first-century Roman inscriptions and based on classical proportions. However, its thin lines also lend it a contemporary, bold feel making it a good choice for headlines, especially when paired with Raleway.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default BannerTop
