import { createContext,useState } from "react";


export const ModalContext = createContext()

const ModalState = (props)=>{

    
const [wapper ,setwapper] = useState({display:"none"})

const openWapper = ()=>{
    setwapper({display:"flex"})
}
const closeWapper =()=>{
    setwapper ({display :"none"})
}

const [deleteModal,setDeleteModal] = useState({display:"none"})
 
const opendeleteModal = ()=>{
setDeleteModal({display:"flex"})
}
const closedeleteModal =()=>{
    setDeleteModal({display:"none"})
}
const [editModal,setEditModal] = useState({display:"none"})
 
const openeditModal = ()=>{
setEditModal({display:"flex"})
}
const closeeditModal =()=>{
    setEditModal({display:"none"})
}

    return(
        <ModalContext.Provider value={{editModal,openeditModal,closeeditModal,wapper,openWapper,closeWapper,deleteModal,opendeleteModal,closedeleteModal}}>
        {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState