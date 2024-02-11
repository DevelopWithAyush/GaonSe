import React,{useContext,useEffect} from 'react'
import "./ProfileForm.css"
import { ProfileContext } from '../../Context/ProfileContext/ProfileContext'

const ProfileForm = () => {
    const profilecontext = useContext(ProfileContext)
    const {fetchUserData, handleupdate,fullname,setfullname,pincode,setPincode,flatno,setFlatno,area,setArea,landmark,setLandmark,city,setCity,state,setState} =profilecontext;


    useEffect(()=>{
        fetchUserData()
        // eslint-disable-next-line
    },[])
    const handleonsubmit =(e)=>{
        e.preventDefault()
        handleupdate()
    }



    return (
        <form className="profile-form">
         <div className="row">   <div className="input">
                <label htmlFor="">FullName</label>
                <input  required  type="text"  value={fullname} onChange={(e)=>{setfullname(e.target.value)}} />
            </div>
            <div className="input">
                <label htmlFor="">Mobile Number</label>
                <input  required  type="ph"  value={fullname} onChange={(e)=>{setfullname(e.target.value)}} />
            </div>
            </div>
        
        <div className="row">
            
        <div className="input">
                <label htmlFor="">Pincode</label>
                <input  required  type="numer" placeholder='Pincode' value={pincode} onChange={(e)=>{setPincode(e.target.value)}} />
            </div>
            <div className="input">
                <label htmlFor="">House_No., flat_No.,</label>
                <input  required  type="text" placeholder='eg.185' value={flatno} onChange={(e)=>{setFlatno(e.target.value)}} />
            </div>
        </div>
           <div className="row">
           <div className="input">
                <label htmlFor="">Area,Village Localityy</label>
                <input  required  type="text" placeholder='eg.Pachim Vihar' value={area} onChange={(e)=>{setArea(e.target.value)}} />
            </div>
            <div className="input">
                <label htmlFor="">Landmark</label>
                <input  required  type="text" placeholder='eg.Near Indian Petrol Pump' value={landmark} onChange={(e)=>{setLandmark(e.target.value)}} />
            </div>
           </div>
           <div className="row">
           <div className="input">
                <label htmlFor="">city</label>
                <input  required  type="text" placeholder='eg.Delhi' value={city} onChange={(e)=>{setCity(e.target.value)}} />
            </div>
            <div className="input">
                <label htmlFor="">state</label>
                <input  required  type="text" placeholder='eg.Delhi' value={state} onChange={(e)=>{setState(e.target.value)}} />
            </div>
           </div>
            <button className='profile-form-btn' onClick={handleonsubmit}>save detail</button>
        </form>
    )
}

export default ProfileForm
