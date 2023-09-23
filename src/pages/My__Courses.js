import React, { useEffect, useState } from 'react'
import CaruselItem from '../components/CaruselItem'
import '../style/myCourses.css'
import '../style/Carusel.css'
import { AllItemsApi } from '../style/config/config'
const My__Courses = ({ data = [] }) => {
  const [courses, setCourses] = useState([]);
  useEffect( () =>{
    const navBar = document.querySelector('.nav-bar');
    const navLink = document.querySelector('.nav-bar ul');
    if (navBar) {
      navBar.style.backgroundColor = 'var(--nav__bg_light)';
      navLink.style.Color = 'black';

    }
  }, [])

  
  useEffect(() => {
    fetch(AllItemsApi)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // API dan olingan "items" ma'lumotlarini saqlash
        const items = data.data.items;
        setCourses(items);
        console.log(items);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, []);




  return (
    <div className='myCoursesHeader'>
        <title> barcha kurslar</title>
            <div className='cards'>
            {/* cardlar */}
            
            {
                courses.map( el =>(
                    <CaruselItem id={el.id} {...el} />
                ))
            }
            {/* cardlar oxiri */}
            
             </div>
    </div>
  )
}

export default My__Courses
