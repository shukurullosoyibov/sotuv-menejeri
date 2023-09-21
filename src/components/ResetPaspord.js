import React, { useState } from 'react'
import "../style/registerModal.css"
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

const ResetPaspord = (props) => {
    const [isNumber, setNumber] = useState(true);
    const [isCoding, setCoding] = useState("+998")
    const [isUser, setUser] = useState(false)
    const [num, setNum] = useState([]);

    const numChange = (e) =>{
        if(e.key >=0 || e.key <=9)
        {
            setCoding(isCoding + e.key)
            console.log(e.key);
            setNum(e.value);
        }
      
    }
    const handelNUmber = ()=> {
            // setNum( 
            //     num + e.value;
            // )
            
            if(num === '+998 (91) 109 33 10')
            {
                setNumber(!setNumber);
            }
            else{
                setUser(!isUser);
            }
        }
   

    
  

  return (
    <div className="register__modal">

               
            <div className="reg__modal__el__reset">

                    {
                        isNumber ? (
                            <form className='ParolniTiklash'>
                                   
                                        <p >
                                                Parolni tiklash
                                        </p>
                                            <div>
                                                <label   className='modal_input'>
                                                    Telefon raqamingiz
                                                    <InputMask
                                                    // mask="+998 (99) 999 99 99"
                                                    onKeyDown={(e)=>numChange(e)}
                                                    value={isCoding}
                                                    type="tel" placeholder='+998 91 109 33 10' />
                                                </label>
                                            </div>
                                            {
                                                isUser && (
                                                    <span>
                                                bunday foydalanuvchi ro'yxatdan o'tmagan
                                                 </span>
                                                )
                                            }
                                        <button type='button' className='btn_login' onClick={(e)=> handelNUmber(e)}>
                                            Kodni olish
                                        </button>
                                
                            </form>
                                
                        ) : (
                            <form className="kodniOlish">
                                     
                                    <p >
                                            Kodni olish
                                    </p>
                                    <div>
                                            <label   className='modal_input'>
                                                Kodni kiriting
                                                <input type="tel" placeholder='1234' />
                                            </label>
                                    </div>
                                    <span>
                                        { } soniyadan so'ng qayta jo'natish
                                    </span>
                                        
                                    <button type='button' className='btn_login' >
                                        Tasdiqlash
                                    </button>
                   
                            </form>
                           
                        )
                    }
                
                <Link to='/login' className='modal__close'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 17.4051L9.23585 24.1692C9.05125 24.3538 8.8192 24.4483 8.53971 24.4525C8.26025 24.4568 8.02394 24.3624 7.83078 24.1692C7.6376 23.976 7.54102 23.7419 7.54102 23.4667C7.54102 23.1915 7.6376 22.9573 7.83078 22.7641L14.5949 16L7.83078 9.23587C7.64616 9.05127 7.55172 8.81922 7.54745 8.53973C7.54316 8.26027 7.6376 8.02396 7.83078 7.8308C8.02394 7.63762 8.25812 7.54103 8.53332 7.54103C8.80852 7.54103 9.04269 7.63762 9.23585 7.8308L16 14.5949L22.7641 7.8308C22.9487 7.64618 23.1808 7.55173 23.4602 7.54747C23.7397 7.54318 23.976 7.63762 24.1692 7.8308C24.3624 8.02396 24.4589 8.25813 24.4589 8.53333C24.4589 8.80853 24.3624 9.04271 24.1692 9.23587L17.4051 16L24.1692 22.7641C24.3538 22.9487 24.4482 23.1808 24.4525 23.4603C24.4568 23.7397 24.3624 23.976 24.1692 24.1692C23.976 24.3624 23.7418 24.459 23.4666 24.459C23.1914 24.459 22.9573 24.3624 22.7641 24.1692L16 17.4051Z" fill="black"/>
                                    </svg>
                        </Link>
                        
                    
               
                
            </div>
            </div>
  )
}

export default ResetPaspord
