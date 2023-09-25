import React, { useEffect, useState } from 'react'
import '../style/UserCourse.css';
import { svg_korish } from '../svgG/svg';
import ScaleLoader from "react-spinners/ScaleLoader";
import {  useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';




const UserCourse = () => {
    const [isCourse, setCourse] = useState(false);
    const [userCourse, setUserCourse] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
    // Tokenni "localStorage" dan olish
   

    // Token mavjud bo'lsa kurslar sahifasini yuklash
    if (token) {
      fetchCourses(token);
      // alert('token mavjud');
    } else {
      // toast.error('Tizimdan chiqib kettiz');
     
      navigate('/');
      // alert('token topilmadi');
      // Token mavjud emas bo'lsa, qayta kirish sahifasiga yo'nlash
    //   history.push('/login'); // O'zgartirilgan sahifa yo'li
    }
  }, [token]);

  const fetchCourses = async (token) => {
    try {
      // Kurslarni olish so'rovi
      const response = await fetch('https://shark.brim.uz/api/profile-manager/profile/my-courses', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
         console.log(data);
        setCourses(data.courses);
        setLoading(false);
      } else {
        // Serverdan yoki token to'g'ri kelmasa
        // history.push('/login'); // O'zgartirilgan sahifa yo'li
      }
    } catch (error) {
      console.error('Xatolik yuz berdi: ', error);
    }
  };

  if (loading) {
    return <div className="load">
              <span>
                    <ScaleLoader
                      color="#36d7b7"
                      height={40}
                      margin={5}
                      radius={0}
                      width={20}
                    />
                </span>
    </div>
   
  }

    // useEffect(() => {
    //     fetch('https://shark.brim.uz/api/profile-manager/profile/my-courses')
    //       .then(response => {
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //       })
    //       .then(data => {
    //         // API dan olingan "items" ma'lumotlarini saqlash
    //         const items = data.data;
           
    //         setCourses(items);
           
    //       })
    //       .catch(error => {
         
    //         console.error('Xatolik:', error);
    //       });
    //   }, []);



  return (
    <div className='userCourseSection'>
        <h1>
              Mening kurslarim
        </h1>
      {
        !isCourse ? 
        <div className='user_course_header'>
            <span>
               
               {svg_korish}
                
            </span>
            <p>
            Hozircha hech qanday kurslar topilmadi!
            </p>
        </div> :
        <div>
            birinchi kurs
        </div>
      }



    </div>
  )
}

export default UserCourse
