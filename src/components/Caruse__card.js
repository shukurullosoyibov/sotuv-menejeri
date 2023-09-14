import React from 'react'
import '../style/Carusel.css';
import CaruselItem from './CaruselItem';

const Caruse__card = ({data = []}) => {
    // 

  return (
    // kurslarni carusel qismini boshi
    <>
        <div className='cards'>
        {/* cardlar */}
        
        {
            data.map( el =>(
                <CaruselItem id={el.id} {...el} />
            ))
        }
        {/* cardlar oxiri */}
       
    </div>
    <div className='all_view-btn '>
            <button className='all_view btn'>
                    Barchasini ko’rish
            </button>
    </div>
    
    </>
    
  )
}

export default Caruse__card;
