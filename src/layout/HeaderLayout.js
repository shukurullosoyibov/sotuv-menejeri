import React, { useEffect, useState } from 'react'
import "../style/Header.css"
import "../style/section-1.css"
import "../style/section-4.css"
import "../style/section-5.css"
import '../style/footer.css'
import '../style/registerModal.css'





import {  Outlet } from 'react-router-dom'

const HeaderLayout = () => {
    const [isModal, setModal] = useState( false);
    const [isRegister, setRegister] = useState( false);
    const [isSigInUp , setSignUp ] = useState(false);

    
   
   
    
    const handelModal = () => {
            setModal(!isModal);
    }
    const handelRegister = () => {
        setRegister(!isRegister);
    }
   const handelRegisterSigInUp = () => {
        // setRegister(!isRegister);
        setSignUp(!isSigInUp);
   }
  return (
    <>
        
                    <Outlet />
      
             


    </>
  )
}

export default HeaderLayout
