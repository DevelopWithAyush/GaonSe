import React, { useState } from 'react'
import "./Email.css"
const Email = () => {
  const [emaillabel,setemaillabel] = useState({top:"25%",fontSize:"2rem"})
  const handlefocus = ()=>{
setemaillabel({top:"4%",fontSize:"1.5rem"})
  }

  const handleblur = ()=>{
    setemaillabel({top:"25%" ,fontSize:"2rem"})
  }
  return (
    <div className='emailcontainer'>
      <div className='emailbox'>
        
      <p className='emailboxtext'>just give your email so we can inform about offer</p>
        <form className="emailform">
            <input type="email"  onFocus={handlefocus} onBlur={handleblur}   />
          <p className='emaillabel' style={emaillabel}>Enter your email here</p>
            <button>submit</button>
            
        </form>
      </div>
   
      
    </div>
  )
}

export default Email
