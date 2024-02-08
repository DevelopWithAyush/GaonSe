import React, { useContext } from 'react'
import "./Wapper.css"
import { ModalContext } from '../../Context/ModalContext/ModalContext'
const Wapper = () => {
    const modalcontext = useContext(ModalContext)
    const {wapper,closeWapper,closedeleteModal,closeeditModal} = modalcontext
  return (
    
    <div className='full-wapper' onClick={()=>{closeWapper();
    closedeleteModal()
    closeeditModal()
    }} style={wapper}></div>
  )
}

export default Wapper
