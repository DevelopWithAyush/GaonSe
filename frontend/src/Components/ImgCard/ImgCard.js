import React, { useContext, useState } from 'react';
import "./ImgCard.css";
import { ProductContext } from '../../Context/ProductContext/ProductState';

const ImgCard = (props) => {
    const context = useContext(ProductContext);
    const { imgUrls } = context;
    const [selectedImg, setSelectedImg] = useState(imgUrls[0]);

    const handleImgClick = (img) => {
        setSelectedImg(img);
    };

    return (
        <section className='img-card'>
            <div className="img-card-left">
                {imgUrls.map((img) => (
                    <div className="small-frame" key={img} onClick={() => handleImgClick(img)}>
                        <img src={img} alt={`Thumbnail ${img}`} />
                    </div>
                ))}
            </div>
            <div className="img-card-right">
                <div className="large-frame">
                    <img src={selectedImg} alt="SelectedImage" />
                </div>
            </div>
        </section>
    );
}

export default ImgCard;
