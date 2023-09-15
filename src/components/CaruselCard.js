import React from 'react'
import '../style/Carusel.css';
import CaruselItem from './CaruselItem';
import { Link } from 'react-router-dom';

const CaruselCard = ({data = []}) => {
   
    return (
        // kurslarni carusel qismini boshi
        <>
            <div className='cards'>
            {/* cardlar */}
            
            {
                data.slice(0,3).map( el =>(
                    <CaruselItem id={el.id} {...el} />
                ))
            }
            {/* cardlar oxiri */}
           
            </div>
            <div className='all_view-btn '>
                    <Link to='/courses' className='all_view btn'>
                            Barchasini ko’rish
                    </Link>
            </div>
        </>
        
      )
    }

export default CaruselCard
