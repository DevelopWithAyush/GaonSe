import { createContext,useContext,useState } from "react";
import { AlertContext } from "../AlertContext/AlertState";

export const ReviewContext = createContext()


const ReviewState = (props) => {
    const Alertcontext = useContext(AlertContext)
    const { showAlert } = Alertcontext

    const url = "http://localhost:5000/"
    const [rating, setrating] = useState(0)
    const [start1, setStar1] = useState({ color: "#e4e4e4 " })
    const [start2, setStar2] = useState({ color: "#e4e4e4 " })
    const [start3, setStar3] = useState({ color: "#e4e4e4 " })
    const [start4, setStar4] = useState({ color: "#e4e4e4 " })
    const [start5, setStar5] = useState({ color: "#e4e4e4 " })

    const [existingReview, setExistingReview] = useState(null);
    const [comments, setComments] = useState('');

    const [reviewapper ,setreviewapper] = useState({top:"-100%"})
    const [reviebox ,setreviebox] = useState({top:"-100%"})
    const handleclose = () => {
        setreviewapper({ top: "-100%" })
        setreviebox({ top: "-100%" })
    }

    const startclick1 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#e4e4e4" })
        setStar3({ color: "#e4e4e4" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(1)
    }
    const startclick2 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#e4e4e4" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(2)

    }
    const startclick3 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#e4e4e4" })
        setStar5({ color: "#e4e4e4" })
        setrating(3)

    }
    const startclick4 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#FFD700" })
        setStar5({ color: "#e4e4e4" })
        setrating(4)

    }
    const startclick5 = () => {
        setStar1({ color: "#FFD700" })
        setStar2({ color: "#FFD700" })
        setStar3({ color: "#FFD700" })
        setStar4({ color: "#FFD700" })
        setStar5({ color: "#FFD700" })
        setrating(5)

    }

  
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViNDRkYTU2MGYwOTMzYjc5NzQzNDMwIn0sImlhdCI6MTcwNjcwNDE3NX0.kKMIQXSJsslL1L7LVndXkD7ywNL5ilCOQKbN9fs3ABY"


    const fetchExistingReview = async (productId) => {
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


    const startfunction =()=>{
        if(rating ===1){
            startclick1()
        }else if(rating === 2){
            startclick2()
        }else if(rating === 3){
            startclick3()
        }else if(rating ===4){
            startclick4()
        }else if(rating ===5){
            startclick5()
        }
    }
    
  

    const addAndUpdate = async(productId)=>{
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
    <ReviewContext.Provider value={{fetchExistingReview,addAndUpdate,startfunction,startclick1,startclick2,startclick3,startclick4,startclick5,start1,start2,start3,start4,start5,reviebox,reviewapper,setreviebox,setreviewapper,setComments,handleclose,comments}}>
        {props.children}
    </ReviewContext.Provider>
      
  )
}

export default ReviewState
