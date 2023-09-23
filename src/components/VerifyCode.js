import React, { useEffect, useRef, useState } from 'react';
import '../style/Verify.css';
import { svg_prew, svg_x } from '../svgG/svg';
import { API_URL } from '../style/config/config';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const VerifyCode = (props) => {
  const [verificationCode, setVerificationCode] = useState('');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Inputlar uchun ref lar

  const [verificationCode1, setVerificationCode1] = useState('');
  const [verificationCode2, setVerificationCode2] = useState('');
  const [verificationCode3, setVerificationCode3] = useState('');
  const [verificationCode4, setVerificationCode4] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [time, setTime] = useState(60);
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    
    if (/^\d+$/.test(value) && value.length <= 1) {
      // Raqamni tekshirish va 1 belgidan ko'p kiritishni to'xtatish
      setVerificationCode((prevCode) => {
        const updatedCode = [...prevCode]; // O'zgaruvchini yangilash uchun nusxa olish
        updatedCode[index] = value;
        return updatedCode.join(''); // Barcha raqamlarni birlashtirish
      });

      // Keyingi inputga o'zlashtirish
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  // Timer qo'shish uchun useEffect
  const handleTimer = () => {
    setTime(60);
  }

  useEffect(() => {
    let intervalId;

    if (time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setCode(verificationCode1 + verificationCode2 + verificationCode3 + verificationCode4);
      }, 1000);
    } else {
      clearInterval(intervalId); // Timer tugagan
    }

    return () => {
      clearInterval(intervalId); // Component o'chib ketganda intervalni to'xtatish
    };
  }, [time]);

  const handleBack = () => {
    props.setIsRegistered(false);
  }


    let phone = localStorage.getItem("phone").slice(1,13);



  const handleVerification = async () => {
    // SMS kodni serverga jo'natish
    await fetch(API_URL + 'auth/register/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, code }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
       
          setIsSuccess(!isSuccess);
          setIsVerified(true);
          console.log(data,isVerified, verificationError );

        } else {
          
        
          console.log(data,code);
        }
      })
      .catch((error) => {
        setVerificationError(error);
        console.error('Xatolik yuz berdi: ', error);
      });
      toast.success("salom");
  };
 
  return (
    <div className='verify'>
      <Link to='/' className="close" >{svg_x}</Link>
      {!isVerified ? (
        <>
          <div className='css-333'>
            <span onClick={() => handleBack()} className='goPrew'>
              {svg_prew}
            </span>
            <h2>Kodni kiriting</h2>
          </div>
          <div className='numer'>
            <span>+{phone}</span> telefon raqamiga kod yuborildi, ushbu kodni kiriting
          </div>
          <span>Kodni kiriting</span>
          <div className='code__enter__main'>
                      {inputRefs.map((inputRef, index) => (
                    <input
                      key={index}
                      ref={inputRef}
                      type="text"
                      value={verificationCode[index] || ''}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
           
          </div>
          {time ? <span>0:{time}</span> : <span onClick={handleTimer} className='resend'>Qayta yuborish</span>}
          {verificationError && <p className="errors">{verificationError}</p>}
          {isVerified ? (
            <p>Tasdiq qilindi! Endi sahifaga kirishingiz mumkin.</p>
          ) : (
            <button onClick={handleVerification} className='btn__login btn_hover'>Tasdiqlash</button>
          )}
        </>
      ) : (
        <div className="succeess">
          <p>Kodni tasdiqlash muvaffaqiyatli bo'ldi.</p>
        </div>
      )}
    </div>
  );
};

export default VerifyCode;
