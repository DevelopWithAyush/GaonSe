import React, { useContext } from 'react'
import "./Alert.css"
import { AlertContext } from "../../Context/AlertContext/AlertState"

function Alert() {
const context = useContext(AlertContext)
const {alert,setAlert,alertdet} = context;
const handlecross = ()=>{
    setAlert({bottom:"-100%"})
}
  return (
    <div className={`alertcontainer ${alertdet.type === "true"?"true":"false"}`} style={alert}>
        <div className="alert">
        <i className="fa-solid fa-xmark" onClick={handlecross}></i>
        </div>
        <div className="alertmessage">
            <p>{alertdet.message}</p>
        </div>
      
    </div>
  )
}

export default Alert
