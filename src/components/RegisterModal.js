import React, { useRef, useEffect, useState } from 'react'
import {svg1, svg_x} from '../svgG/svg'
import InputMask from 'react-input-mask';
import ResetPaspord from './ResetPaspord';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../style/config/config';
import { toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import { RingLoader } from 'react-spinners';


//const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}$/;
//cosnt PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const RegisterModal = () => {
    const [value, setValue] = useState('+998');
    const [isPasswordModal, setPasswordModal] = useState(false);
    const [username, setUsername] = useState('+998');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState( false);

    const LoaderFunction = () =>{
      setLoading(true);
      
      setTimeout( ()=>{
        setLoading(false);
        navigate('/');
      }, 2000)
    }

    const navigate = useNavigate();
    const showSuccessToast = () => {
      toast.success('Hush kelibsiz!');
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
    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch(API_URL + 'auth/register/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data.message === 'success') {
            LoaderFunction();
            showSuccessToast();
            const token = data.data.token;
            localStorage.setItem('token', token);
            
          } else {
            showErrorToast();
            setUsername("");
            setPassword('');
            setLoginError('Foydalanuvchi nomi yoki parol xato. Iltimos, qayta urinib ko\'ring.');
          }
        } else {
          showErrorToast();
          setUsername("");
          setPassword('');
          setLoginError('Foydalanuvchi nomi yoki parol xato. Iltimos, qayta urinib ko\'ring.');
        }
      } catch (error) {
        console.error('Xatolik yuz berdi: ', error);
      }
    };
    
      // if (loading){
      //   return   <RingLoader 
      //           color="#36d7b7" 
      //           size={150} />
      // }
  return (
    <>  

            <div className='register__modal'>
                
                   
                   
                   
                    <div className="reg__modal__el">
                    {  !loading ?
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
                                     autoFocus={true}
                                    onChange={(e)=> handlePhoneChange(e.target)}
                                    placeholder='+998'
                                    type="text"
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
                      :
                      <RingLoader 
                         color="#36d7b7" 
                         size={70} />
                       }
                        <Link to='/' className='modal__close'>
                                   {svg_x}
                        </Link>
                    </div>
                   
                    

            </div>
         

    
           

    </>
    
  )
}

export default RegisterModal
