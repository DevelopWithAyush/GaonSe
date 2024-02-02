import React, { useContext, useEffect } from 'react'
import "./ReviewModal.css"
import { ReviewContext } from '../../Context/ReviewContext/ReviewState'
const ReviewModal = ({ productId}) => {

    const reviewcontext = useContext(ReviewContext)
    const{reviewapper,handleclose,reviebox,startclick1,startclick2,startclick3,startclick4,startclick5,start1,start2,start3,start4,start5,comments,setComments,fetchExistingReview,addAndUpdate} = reviewcontext


    useEffect(()=>{
        fetchExistingReview(productId)

    },[productId])


    const handleonsubmit =(e)=>{
e.preventDefault()
addAndUpdate(productId)
    }
return (
    <>
        <div className="review-wapper" style={reviewapper} onClick={(e)=>{
            e.preventDefault()
            handleclose()}}></div>
        <div className="review-box" style={reviebox}>
            <div className="head"><i class="fa-solid fa-xmark" onClick={handleclose}></i></div>
            <p>Give feedback to us</p>
            <div className="star-box">
                <i class="fa-solid fa-star" onClick={startclick1} style={start1}></i>
                <i class="fa-solid fa-star" onClick={startclick2} style={start2}></i>
                <i class="fa-solid fa-star" onClick={startclick3} style={start3}></i>
                <i class="fa-solid fa-star" onClick={startclick4} style={start4}></i>
                <i class="fa-solid fa-star" onClick={startclick5} style={start5}></i>
            </div>
            <form className="commetbox">
                <textarea required name="comment" id="" cols="30" rows="10" placeholder='Please write your feedback here' onChange={(e) => { setComments(e.target.value) }} value={comments} ></textarea>
                <button type='submit' onClick={handleonsubmit}> submit</button>
            </form>
        </div>
    </>
)
}

export default ReviewModal
