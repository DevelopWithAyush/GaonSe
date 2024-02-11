import { createContext, useContext, useState } from "react";
import { AlertContext } from "../AlertContext/AlertState";


export const ProfileContext = createContext();


const ProfileState = (props) => {
    const alertcontext = useContext(AlertContext)
    const {showAlert} = alertcontext;
    const [fullname ,setfullname] =useState('')
    const [pincode,setPincode] = useState("")
    const [flatno,setFlatno] = useState("")
    const [area,setArea] = useState("")
    const [landmark,setLandmark] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")

    const url = "http://localhost:5000/"


    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken")
      if(!token){
        showAlert("false","session expired")
      }
        try {
          // Assuming you have a user ID stored in a variable userId
        // Replace 'user_id_here' with the actual user ID
      
          // Fetch user data
          const response = await fetch(`${url}api/auth/users/`,{
            method: 'GET',
            headers:{
                'Content_Type':'application/json',
                'authToken': localStorage.getItem("authToken")
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const user = await response.json();
          // Handle user data here
          setfullname(user.fullname)
          setPincode(user.pincode)
          setFlatno(user.flatno)
          setArea(user.area)
          setLandmark(user.landmark)
          setCity(user.city)
          setState(user.state)
        } catch (error) {
          // Handle errors here
          showAlert("false","some issue")
        }
      };
      
      // Call the function to fetch user data
      
      const handleupdate = async () => {
        const token = localStorage.getItem("authToken")
        if(!token){
          showAlert("false","session expired")
        }
        try {
            const response = await fetch(`${url}api/auth/users`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  'authToken': localStorage.getItem("authToken")
              },
                body: JSON.stringify({fullname, pincode, flatno, area, landmark, city, state})
            });
            if (!response.ok) {
                throw new Error('Failed to update user information');
            }

            const data = await response.json();
            console.log('Updated user:', data);
            alert('User information updated successfully!');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('An error occurred while updating user information. Please try again later.');
        }
    };



    return (
        <ProfileContext.Provider value={{handleupdate,fetchUserData ,fullname,setfullname,pincode,setPincode,flatno,setFlatno,area,setArea,landmark,setLandmark,city,setCity,state,setState}}>
            {props.children}
        </ProfileContext.Provider>

    )
}

export default ProfileState