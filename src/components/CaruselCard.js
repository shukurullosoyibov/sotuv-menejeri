import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../style/Carusel.css';
import CaruselItem from './CaruselItem';
import { Link } from 'react-router-dom';
import { HomeCourseApi } from '../style/config/config';
import { RingLoader } from 'react-spinners';
import '../style/config/Responsive style/maxWidth576.css'

const CaruselCard = () => {
    const [courses, setCourses] = useState([]);
    
    
  useEffect(() => {
    fetch(HomeCourseApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // API dan olingan "items" ma'lumotlarini saqlash
        const items = data.data;
       
        setCourses(items);
       
      })
      .catch(error => {
     
        console.error('Xatolik:', error);
      });
  }, []);
   
    return (
        // kurslarni carusel qismini boshi
        <>
         {courses.length > 0 ? (
            <div className='cards'>
          
           
          <AliceCarousel
            autoPlay
            autoPlayInterval={2500}
            mouseTracking
            infinite
            items={courses.map((el) => (
              <CaruselItem key={el.id} {...el} />
            ))}
            responsive={{
              0: { items: 1 },
              100: { items: 1 },
             
              600: { items: 1 },
              620: { items: 1 },
              900: { items: 3 },
              
             
            }}
          />
          </div>
        ) : (
         <section className='caruselSectionLoader'>
                    <p>Ma'lumotlar yuklanmoqda...</p>
                    <RingLoader color="#36d7b7" 
                          size={150}></RingLoader>
         </section> 
        )}
            
            {/* cardlar oxiri */}
           
           
            <div className='all_view-btn '>
                    <Link to='/courses' className='all_view btn btn_hover '>
                            Barchasini ko’rish
                    </Link>
            </div>
        </>
        
      )
    }

export default CaruselCard
