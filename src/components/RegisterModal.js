import React, { useRef, useEffect, useState } from 'react'
import {svg1} from '../svgG/svg'
import InputMask from 'react-input-mask';
import ResetPaspord from './ResetPaspord';
import { Link} from 'react-router-dom';
import { API_URL } from '../style/config/config';
import { toast } from 'react-toastify';


//const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/;
//cosnt PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const RegisterModal = () => {
    const [value, setValue] = useState('+998');
    const [isPasswordModal, setPasswordModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
 

    const showSuccessToast = () => {
      toast.success('Hush kelinsiz!');
    };
    
    const showErrorToast = () => {
      toast.error('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    };
    const handlePhoneChange = (e) => {
        setUsername(e.value);
        console.log(value.length);
      };
    const handleReset = () =>{
        setPasswordModal(!isPasswordModal);
        const numChange = (e) =>{
        
            setValue(value + e.key)
           
            // setNum(e.value);
        }
        
    }
    const handleLogin = (e) => {
        e.preventDefault();
        // Foydalanuvchi nomi va parolni serverga yuborish
        fetch(API_URL+'auth/register/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === 'success') {
               alert("hush kelinsiz")
                showSuccessToast();
               const token = data.data.token;
                localStorage.setItem('token', token);
                console.log(token);
                console.log(localStorage.getItem('token', token));
           
              // Tizimga kirishingiz muvaffaqiyatli bo'ldi
              // Bu joyda tizimning asosiy sahifasiga yo'nlashingiz mumkin
             
            } else {
              // alert("afsus xatolik")
              showErrorToast();
              setUsername("");
              setPassword('');
              setLoginError('Foydalanuvchi nomi yoki parol xato. Iltimos, qayta urinib ko\'ring.');
            }
          })
          .catch((error) => {
            console.error('Xatolik yuz berdi: ', error);
          });
      };
      
  return (
    <>  

            <div div className='register__modal'>
                 {
                   
                   
                    
                    <div className="reg__modal__el">
                        <form >
                            <p >
                                Tizimga kirish
                            </p>
                            <div>
                                <label   className='modal_input'>
                                    Telefon raqamingiz
                                    <InputMask
                                    alwaysShowMask={true}
                                //    mask="+998 (99) 999 99 99" // Specify the desired phone number mask
                                    onChange={(e)=> handlePhoneChange(e.target)}
                                    placeholder='+998'
                                    type="tel"
                                    value={username}
                                    // Add any other necessary attributes or event handlers
                                />
                                    
                                </label>
                            </div>
                            <div>
                                <label  className='modal_input' >
                                    Parol
                                    {/* <input type="password" placeholder='*********' /> */}
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </label>
                            </div>
                            <div>
                                <Link to='/resetpassword' >Parolingizni unutdingizmi?</Link>
                            </div>
                        {<div className="modal_register">
                            <button onClick={(e)=>handleLogin(e)} className='btn__login pointer'>Tizimga kirish</button>
                            <Link to='/autho'  className='btn__sign pointer'>
                                <span>
                            
                                    {
                                        svg1
                                    }
                                </span>
                                Ro'yxatdan o'tish
                            </Link>
                            </div> }        
                            
                        </form>
                        <Link to='/' className='modal__close'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 17.4051L9.23585 24.1692C9.05125 24.3538 8.8192 24.4483 8.53971 24.4525C8.26025 24.4568 8.02394 24.3624 7.83078 24.1692C7.6376 23.976 7.54102 23.7419 7.54102 23.4667C7.54102 23.1915 7.6376 22.9573 7.83078 22.7641L14.5949 16L7.83078 9.23587C7.64616 9.05127 7.55172 8.81922 7.54745 8.53973C7.54316 8.26027 7.6376 8.02396 7.83078 7.8308C8.02394 7.63762 8.25812 7.54103 8.53332 7.54103C8.80852 7.54103 9.04269 7.63762 9.23585 7.8308L16 14.5949L22.7641 7.8308C22.9487 7.64618 23.1808 7.55173 23.4602 7.54747C23.7397 7.54318 23.976 7.63762 24.1692 7.8308C24.3624 8.02396 24.4589 8.25813 24.4589 8.53333C24.4589 8.80853 24.3624 9.04271 24.1692 9.23587L17.4051 16L24.1692 22.7641C24.3538 22.9487 24.4482 23.1808 24.4525 23.4603C24.4568 23.7397 24.3624 23.976 24.1692 24.1692C23.976 24.3624 23.7418 24.459 23.4666 24.459C23.1914 24.459 22.9573 24.3624 22.7641 24.1692L16 17.4051Z" fill="black"/>
                                    </svg>
                        </Link>
                    </div>
                   
                    }
                    

            </div>
         

    
           

    </>
    
  )
}

export default RegisterModal
