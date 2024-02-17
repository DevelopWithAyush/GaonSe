import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()



const UserState = (props) => {
    const [users,setUsers] = useState([]) 
    const url = "http://localhost:5000/"
    useEffect(()=>{
        fetchUsers()
    },[])


    const fetchUsers = async () => {
        try {
          const response = await fetch(`${url}api/auth/allUsers`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
      
          const userData = await response.json();
          setUsers(userData)
        } catch (error) {
          console.error('Error fetching users:', error.message);
          // You might want to handle the error further or return a specific value
          return null;
        }
      };
    
    return (
        <UserContext.Provider value={{users}} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState