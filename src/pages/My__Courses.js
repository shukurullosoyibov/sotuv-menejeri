import React from 'react'
import CaruselItem from '../components/CaruselItem'
import '../style/myCourses.css'
import '../style/Carusel.css'
const My__Courses = ({ data = [] }) => {
  return (
    <div className='myCoursesHeader'>
        
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
