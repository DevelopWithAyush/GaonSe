import React, { useContext, useEffect } from 'react'
import "./Review.css"
import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard" 
import { ReviewContext } from '../../Context/ReviewContext/ReviewContext'
const Review = () => {
  const reviewcontext = useContext(ReviewContext)
  const {reviews,fetchReviews} = reviewcontext;
  useEffect(()=>{
    fetchReviews()
  },[])
  return (
    <section className='review-section'>
        <h1>review section</h1>
        <div className="review-box">
            {reviews.map((review)=>{
              return (
                <TestimonialsCard review = {review}/>
              )
            })}
        </div>
      
    </section>
  )
}

export default Review
