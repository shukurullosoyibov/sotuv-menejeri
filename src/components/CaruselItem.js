import React from 'react'
import '../img/Rectangle3.png'
import { Link } from 'react-router-dom';
import { svg_10 } from '../svgG/svg';
import RingLoader from "react-spinners/RingLoader";
const CaruselItem = (props) => {
    const { id, slug, title, short_description, imageUrl } = props;
    


  return (
    <>  
      <div className="card">
           
            <div className="img" >
             {
              imageUrl ?  <img src={imageUrl}  alt="rasm" />
                : <RingLoader color="#36d7b7" 
                size={150}></RingLoader>
             } 

            </div>
            <div className="card__title">
                <div className="sub__title">
                     {title}
                </div>
                <div className="title">
                   {short_description.slice(0,70)}...
                </div>
            </div>
            <div  className="card__link">
                <Link to ={ `/courses/${slug}`}>
                
              

                    <span > Batafsil ko’rish</span> 
                    {svg_10}
                  </Link>
            </div>
        </div>
    </>
  )
}

export default CaruselItem
