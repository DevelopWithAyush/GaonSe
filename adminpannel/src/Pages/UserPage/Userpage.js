import React, { useContext } from 'react'
import "./Userpage.css"
import { UserContext } from '../../Context/UserContext/UserContext'
import UserTable from '../../Components/UserTable/UserTable'
const Userpage = () => {
    const usercontext = useContext(UserContext)
    const {users} = usercontext;
  return (
    <>
    <div className="user-section">
        <h1>users</h1>
    <div className="user-container">
{users.map((userData)=>{
    return( <UserTable  userData={userData}/>

    )
})}
    </div>
    </div>
    </>
  )
}

export default Userpage
