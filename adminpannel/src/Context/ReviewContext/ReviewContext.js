import { createContext,useState } from "react";

export const ReviewContext = createContext()

const ReviewState =(props)=>{
    const url = "http://localhost:5000/"
    const [reviews, setReviews] = useState([]);
    

  const fetchReviews = async () => {
    try {
      const response = await fetch(`${url}api/review/reviews`,{
          method: 'GET',
          headers: {
              'Content_Type': 'application/json',
          },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      const response = await fetch(`${url}api/review/reviews/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete review');
      }

      // Filter out the deleted review from the state
      setReviews(reviews.filter(review => review._id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
    return(
        <ReviewContext.Provider value={{reviews,handleDeleteReview,fetchReviews}}>
            {props.children}
        </ReviewContext.Provider>
    )
}

export default ReviewState