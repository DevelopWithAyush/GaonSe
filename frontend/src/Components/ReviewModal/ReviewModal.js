import React, { useContext, useEffect, useState } from 'react'
import "./ReviewModal.css"
import { AlertContext } from '../../Context/AlertContext/AlertState'
const ReviewModal = ({ productId, reviebox, setreviebox, reviewwapper, setreviewapper,setrating ,rating,start1,start2,start3,start4,start5,startclick1,startclick2,startclick3,startclick4,startclick5 }) => {
    const url = "http://localhost:5000/"

    // review data 
    const [existingReview, setExistingReview] = useState(null);
    const [comments, setComments] = useState('');

    const context = useContext(AlertContext)
    const { showAlert } = context

  

    const handleclose = () => {
        setreviewapper({ top: "-100%" })
        setreviebox({ top: "-100%" })
    }
        const authToken = localStorage.getItem("authToken")

    // here we start the api fetaching for review 


     useEffect(() => {
        // // review star 
    

        const fetchExistingReview = async () => {
            try {
                const response = await fetch(`${url}api/review/user-review/${productId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': authToken
                    },
                })
                const json = await response.json()
                setExistingReview(json);
                setrating(json.rating)
                setComments(json.comments)

            } catch (error) {
                console.log("some internal server error")
                setExistingReview(null);
            }
        }

        fetchExistingReview();

    }, [productId])

    console.log(comments)
    console.log(rating)
   

    const handleonsubmit = async (e) => {
        e.preventDefault();
        if (existingReview) {
            try {
                const response = await fetch(`${url}api/review/update-review/${productId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': authToken
                    },
                    body: JSON.stringify({
                        rating,
                        comments
                    })
                });
                const json = await response.json();
                setExistingReview(json);
                setrating(json.rating);
                setComments(json.comments);
                showAlert("true", "Review updated");
                handleclose();
            } catch (error) {
                showAlert("false", "Review not updated");
            }
        } else {
            try {
                const response = await fetch(`${url}api/review/add-review`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authToken': authToken
                    },
                    body: JSON.stringify({
                        product: productId,
                        rating,
                        comments
                    })
                });
                const json = await response.json();
                await setExistingReview(json); // Add await here
                setComments(json.comments);
                setrating(json.rating);
                showAlert("true", "Review added");
                handleclose();
            } catch (error) {
                showAlert("false", "Review not added");
            }
        }
    }

return (
    <>
        <div className="review-wapper" style={reviewwapper} onClick={handleclose}></div>
        <div className="review-box" style={reviebox}>
            <div className="head"><i className="fa-solid fa-xmark" onClick={handleclose}></i></div>
            <p>Give feedback to us</p>
            <div className="star-box">
                <i className="fa-solid fa-star" onClick={startclick1} style={start1}></i>
                <i className="fa-solid fa-star" onClick={startclick2} style={start2}></i>
                <i className="fa-solid fa-star" onClick={startclick3} style={start3}></i>
                <i className="fa-solid fa-star" onClick={startclick4} style={start4}></i>
                <i className="fa-solid fa-star" onClick={startclick5} style={start5}></i>
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
