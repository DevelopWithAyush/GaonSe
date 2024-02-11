import React, { useContext, useState } from 'react'
import "./ProfilePage.css"
import ProfileForm from '../../Components/ProfileForm/ProfileForm'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../../Context/AlertContext/AlertState'
const ProfilePage = () => {
    const navigate = useNavigate()
    const alertcontext = useContext(AlertContext);
    const {showAlert} = alertcontext;
    const [showyou,setShowyou] = useState(false)

  

  return (
    <section className='profile-page'>
        <div className="profile-page-head">
            <button className={showyou===false?"currentlyactive":""} onClick={()=>{setShowyou(false)}}>you</button>
            <button className={showyou===true?"currentlyactive":""} onClick={()=>{setShowyou(true)}}>orders</button>
        </div>

{showyou?(<>
<h1>this is order page</h1>
</>):(
   <>
   <div className="profile-detail">
       <ProfileForm/>
   </div>
   </>

)}

     

        <button onClick={()=>{
            navigate("/")
            localStorage.removeItem("authToken")
            showAlert("true","Logout successfully")


    }}>logout</button>
    </section>
  )
}

export default ProfilePage
