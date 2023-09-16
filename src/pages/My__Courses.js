import React, { useEffect } from 'react'
import CaruselItem from '../components/CaruselItem'
import '../style/myCourses.css'
import '../style/Carusel.css'
const My__Courses = ({ data = [] }) => {
  useEffect( () =>{
    const navBar = document.querySelector('.nav-bar');
    const navLink = document.querySelector('.nav-bar ul');
    if (navBar) {
      navBar.style.backgroundColor = 'var(--nav__bg_light)';
      navLink.style.Color = 'black';

    }
  }, [])






  return (
    <div className='myCoursesHeader'>
        <title> barcha kurslar</title>
            <div className='cards'>
            {/* cardlar */}
            
            {
                data.map( el =>(
                    <CaruselItem id={el.id} {...el} />
                ))
            }
            {/* cardlar oxiri */}
            
             </div>
    </div>
  )
}

export default My__Courses
