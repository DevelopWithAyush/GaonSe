import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./ProductCard.css"
import { ModalContext } from '../../Context/ModalContext/ModalContext';
import { ProductContext } from '../../Context/ProductContext/ProductState';
const ProductCard = (props) => {
  const { product } = props;
  const modalcontext = useContext(ModalContext)
  const { openWapper, closeWapper, closedeleteModal, opendeleteModal, deleteModal } = modalcontext

  const productcontext = useContext(ProductContext)
  const { deleteProduct, setDeleteProductId } = productcontext;



  const discountper = (((product.mrp - product.discountPrice) / product.mrp) * 100).toFixed(1);

  return (<>
    <div className='itemcard'>
      {discountper > 0.0 ? <p className='offer'>{discountper}%</p> : <></>}
      <div className='card-img'>
        <img src={product.imgUrls[0]} className='item-card-img' alt="" />

      </div>
      <div className="product-detail">
        <p className='product-name'>{product.productName}</p>
        <p className='review'>⭐⭐⭐⭐ 120 review</p>
        <div className="price">
          <p className='offerprice'>&#8377; {product.discountPrice}</p>
          <p className='mrp'>&#8377;{product.mrp} </p>

        </div>
        <div className="product-item-btn">
          <i class="fa-solid fa-trash" onClick={() => { openWapper(); opendeleteModal(); setDeleteProductId(product._id) }}></i>
          <Link to={`/editproduct/${product._id}`} ><i class="fa-solid fa-pen-to-square" ></i> </Link>
        </div>
      </div>

    </div>

    {/* Delete modal start here  */}

    <div className='deletemodal' style={deleteModal} >
      <p>you really want to delete it</p>
      <div className="deletemodal-btn">
        <button onClick={() => {
          closeWapper()
          closedeleteModal()
        }}>cancle</button>

        <button className='confirm' onClick={() => deleteProduct()}>yes</button>
      </div>

    </div>




  </>
  )
}

export default ProductCard
