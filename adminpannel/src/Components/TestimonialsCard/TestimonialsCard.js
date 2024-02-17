import React, { useContext } from 'react'
import "./TestimonialsCard.css"
import { ReviewContext } from '../../Context/ReviewContext/ReviewContext'
const TestimonialsCard = (props) => {
  const {review} = props
  const  reviewcontext = useContext(ReviewContext)
  const {handleDeleteReview} = reviewcontext;
   return (
    review.reviewer === null || review.product === null ?null:
    <div className='testimonials-card'>
      <p className='testimonials-card-content'> {review.comments} </p>
      <div className="testimonials-down">
      <div className="testimonials-review">
        <p className='testimonials-name'>{review.reviewer?.fullname}</p>
      </div>
      <i class="fa-solid fa-trash" onClick={()=>{handleDeleteReview(review._id)}}></i>
      </div>
    </div>
  )
}

export default TestimonialsCard
