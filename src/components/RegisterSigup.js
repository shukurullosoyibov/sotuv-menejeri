import React, { useState } from 'react'
import { svg1 } from '../svgG/svg'
import '../style/refisterSigInUp.css'
import { Link } from 'react-router-dom'
import { API_URL } from '../style/config/config'
import VerifyCode from './VerifyCode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterSigup = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [fish, setFish] = useState('');
    const [password, setPassword] = useState('');
    const [password_repeat, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('+998');
    const [isRegistered, setIsRegistered] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    
    const handleFirstname = (e) => {
        setFish(e.value);
        const words = e.split(' ');
        setFirstname(words[0]);
        setLastname(words[1])
    }
    const handlePhoneNumberChange = (e) => {
        
      const inputValue = e.target.value;
    //   const phoneNumberPattern = /^\+998\s?(\d{2}\s?\d{3}\s?\d{2}\s?\d{2}|\d{9})$/;
   

    setPhone(inputValue);
      
    };
  
    const handleRegistration = (e) => {
        e.preventDefault();
       
      // Parolni solishtirish
      if (password !== password_repeat) {
        setPasswordError("Parollar mos kelmadi!");
        return;
      }
      else if((password === password_repeat) && (phone.length===13) && firstname &&  lastname)
      {
        setPasswordError('');
    
      
  
      // Parol mos kelgan bo'lsa, serverga so'rov yuborish
      fetch(API_URL+'auth/register/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstname,lastname, phone, password,password_repeat }),
      })
        .then((response) => response.json())
        .then((data) => {
            
            if(data.message==='success'){
                localStorage.setItem("phone", phone);
                toast("success");
                setIsRegistered(true);
               
            }
           
          else {
            setPasswordError(data.error);
          
          }
        })
        .catch((error) => {
          console.error('Xatolik yuz berdi: ', error);
        });
       
    }
    else if( !firstname){
      setPasswordError('ism kiritilmadi');
    }
    };
  
  

  return (
    <div div className='register__sigInUp'>
        { !isRegistered ? 
            (<div className="reg__modal__el__sign">
                <form >
                    <p >
                        Ro'yxatdan o'tish
                    </p>
                    <div >
                        <label className='modal_input'>
                            Ism va familiya
                            <input type="tel" placeholder='ism va familiyani kiriting' 
                            value={fish}
                            onChange={(e)=>handleFirstname(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label   className='modal_input'>
                            Telefon raqamingiz
                            <input
                                type="tel" 
                                placeholder='+998 91' value={phone}
                                onChange={(e)=>handlePhoneNumberChange(e)} // Telefon raqamini kiritish funksiyasi
                                />
                        </label>
                    </div>
                    <div>
                    <label className='modal_input'>
                            Parol
                            <input
                                type="password"
                                placeholder='*********'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </label>
                    </div>
                    <div>
                    <label className='modal_input'>
                            Parolni qaytaring
                            <input
                                type="password"
                                placeholder='*********'
                                value={password_repeat}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            </label>
                    </div>
                    {passwordError && <p className="error">{passwordError}</p>}
                  {<div className="modal_register">
                 
                              <button
                                type='submit'
                                onClick={(e)=>handleRegistration(e)}
                                className='btn__login pointer btn_hover'
                                >
                                  Ro'yxatdan o'tish
                            </button>
                    <Link to='/login'  className='btn__sign pointer'>
                        <span>
                      
                            {
                                svg1
                            }
                        </span>
                        Tizimga kirish 
                    </Link>
                    </div> }        
                    
                </form>
                <Link to='/' className='modal__close'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 17.4051L9.23585 24.1692C9.05125 24.3538 8.8192 24.4483 8.53971 24.4525C8.26025 24.4568 8.02394 24.3624 7.83078 24.1692C7.6376 23.976 7.54102 23.7419 7.54102 23.4667C7.54102 23.1915 7.6376 22.9573 7.83078 22.7641L14.5949 16L7.83078 9.23587C7.64616 9.05127 7.55172 8.81922 7.54745 8.53973C7.54316 8.26027 7.6376 8.02396 7.83078 7.8308C8.02394 7.63762 8.25812 7.54103 8.53332 7.54103C8.80852 7.54103 9.04269 7.63762 9.23585 7.8308L16 14.5949L22.7641 7.8308C22.9487 7.64618 23.1808 7.55173 23.4602 7.54747C23.7397 7.54318 23.976 7.63762 24.1692 7.8308C24.3624 8.02396 24.4589 8.25813 24.4589 8.53333C24.4589 8.80853 24.3624 9.04271 24.1692 9.23587L17.4051 16L24.1692 22.7641C24.3538 22.9487 24.4482 23.1808 24.4525 23.4603C24.4568 23.7397 24.3624 23.976 24.1692 24.1692C23.976 24.3624 23.7418 24.459 23.4666 24.459C23.1914 24.459 22.9573 24.3624 22.7641 24.1692L16 17.4051Z" fill="black"/>
                            </svg>
                </Link>
            </div>)
            :
            (
              <VerifyCode setIsRegistered={setIsRegistered}/>
            )
        }
    </div>
  )
}

export default RegisterSigup
