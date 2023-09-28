import React, { useEffect, useState } from 'react'
import '../style/UserCourse.css';
import { svg_korish, svg_ne, svg_next, svg_right, svg_right2 } from '../svgG/svg';
import ScaleLoader from "react-spinners/ScaleLoader";
import {  Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { RingLoader } from 'react-spinners';




const UserCourse = () => {
  
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
         const items = data.data;
          
         
        setCourses(items);
        
        setLoading(false);
      } else {
        // Serverdan yoki token to'g'ri kelmasa
        // .push('/login'); // O'zgartirilgan sahifa yo'li
      }
    } catch (error) {
      console.error('Xatolik yuz berdi: ', error);
    }
  };

   

  return (
    <div className='userCourseSection'>
        <h1>
              Mening kurslarim
        </h1>
      {
        !courses ? 
        <div className='user_course_header'>
            <span>
               
               {svg_korish}
                
            </span>
            <p>
            Hozircha hech qanday kurslar topilmadi!
            </p>
        </div> :
        <div className='userCourseSections'>
           
          { !loading ?
            courses.items.map(el => (
             

            
              <div key={el.id} {...el} className="userCourseCard">
                  <div className="cardIMG">
                      <img src={el.imageUrl} alt={el.title} />
                  </div> 
                  <div className="cardDetalis">
                   
                      <div className='secction'>
                            <h2>
                                { 
                                  el.title
                                }
                              </h2>
                              <p>
                                { el.short_description.slice(0,80)}...
                              </p>
                        </div>
                         
                      
                      <div className='secction' >
                                <span className='courseQuantity'> 
                                    {el.completedPercent} / 100 % 
                                </span>
                                <div className="Rectang">
                                  <div className="view" style={{ width: el.completedPercent + '%' }}></div>
                                </div>

                        </div>
                       
                      <Link  to={`/lesson/${el.slug}`} >O'qishni boshalsh <span>{svg_ne}</span></Link>
                  </div> 
            </div> 

            ))
            :   <span className='centerRingLoader'>
                  <RingLoader 
                    color="#36d7b7" 
                   size={70} 
                   /> 
                   </span> 
          }
              
              
                      
        </div>
      }



    </div>
  )
}

export default UserCourse
