import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../Context/ProductContext/ProductState';
import "./AddProduct.css"
const AddProduct = () => {
    const productContext = useContext(ProductContext);
    const {addProduct, productName, setProductName, mrp, setMrp, discountPrice, setDiscountPrice, stocks, setStocks, category, setCategory, productDescription, setProductDescription, img1, setImg1, img2, setImg2, img3, setImg3, img4, setImg4, } = productContext;
  

    useEffect(()=>{
        setProductName("")
        setMrp("")
        setDiscountPrice("")
        setCategory("")
        setProductDescription("")
        setStocks("")
        setImg1("")
        setImg2("")
        setImg3("")
        setImg4("")
    },[])
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addProduct()
      // Do something with the form data, e.g., call an action to update the product details
    };
  
    return (
      <div className="editproduct">
        <h1>add product</h1>
        <div className="editproduct-img-part">
        {!img1?<></>:<img src={img1} alt="img1" />}
        {!img2?<></>:<img src={img2} alt="img2" />}
        {!img3?<></>:<img src={img3} alt="img3" />}
        {!img4?<></>:<img src={img4} alt="img4" />}
        </div>
  
        <div className="editproduct-box">
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className="biginput"
              type="text"
              required
              placeholder="ProductName"
            />
            <div className="form-price">
              <input
                onChange={(e) => setMrp(e.target.value)}
                value={mrp}
                type="number"
                name="mrp"
                required
                placeholder="MRP"
              />
              <input
                onChange={(e) => setDiscountPrice(e.target.value)}
                value={discountPrice}
                type="number"
                name="selling"
                required
                placeholder="Selling Price"
              />
            </div>
            <div className="product-stocks">
              <input
                onChange={(e) => setStocks(e.target.value)}
                value={stocks}
                type="number"
                name="stocks"
                required
                placeholder="Stocks"
              />
              <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                type="text"
                name="category"
                required
                placeholder="Category"
              />
            </div>
            <div className="imgurls">
              <input
                onChange={(e) => setImg1(e.target.value)}
                value={img1}
                type="text"
                name="img1"
                required
                placeholder="Image1"
              />
              <input
                onChange={(e) => setImg2(e.target.value)}
                value={img2}
                type="text"
                name="img2"
                required
                placeholder="Image2"
              />
              <input
                onChange={(e) => setImg3(e.target.value)}
                value={img3}
                type="text"
                name="img3"
                required
                placeholder="Image3"
              />
              <input
                onChange={(e) => setImg4(e.target.value)}
                value={img4}
                type="text"
                name="img4"
                required
                placeholder="Image4"
              />
            </div>
            <textarea
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
              name="productdescription"
              id="description"
              cols="30"
              rows="10"
              placeholder="Description of the product"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default AddProduct
