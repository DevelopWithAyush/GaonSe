import React from 'react'
import "./UserTable.css"
const UserTable = ({userData}) => {
  return (
    <table>
    <tbody>
      <tr>
        <td>Full Name:</td>
        <td>{userData.fullname}</td>
      </tr>
      
      <tr>
        <td>Phone Number:</td>
        <td>{userData.ph}</td>
      </tr>
      <tr>
        <td>Area:</td>
        <td>{userData.area}</td>
      </tr>
      <tr>
        <td>City:</td>
        <td>{userData.city}</td>
      </tr>
      <tr>
        <td>Flat Number:</td>
        <td>{userData.flatno}</td>
      </tr>
      <tr>
        <td>Landmark:</td>
        <td>{userData.landmark}</td>
      </tr>
      <tr>
        <td>Pincode:</td>
        <td>{userData.pincode}</td>
      </tr>
      <tr>
        <td>State:</td>
        <td>{userData.state}</td>
      </tr>
    </tbody>
  </table>
  )
}

export default UserTable
