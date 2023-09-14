import React from 'react'
import '../img/Rectangle3.png'
const CaruselItem = (props) => {
    const { divStyle, sub__title, title, card_link_span  } = props;
  return (
    <>
      <div className="card">
           
            <div className="img" style={divStyle}>


            </div>
            <div className="card__title">
                <div className="sub__title">
                     {sub__title}
                </div>
                <div className="title">
                   {title}
                </div>
            </div>
            <div className="card__link">
                <span>{card_link_span}</span> 
                <span className='svg'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.6116 12.75H5.25003C5.03721 12.75 4.85901 12.6782 4.71543 12.5346C4.57183 12.391 4.50003 12.2128 4.50003 12C4.50003 11.7872 4.57183 11.609 4.71543 11.4654C4.85901 11.3218 5.03721 11.25 5.25003 11.25H16.6116L13.3192 7.95765C13.1705 7.80894 13.0971 7.6349 13.0991 7.43555C13.101 7.2362 13.1744 7.05896 13.3192 6.90383C13.4744 6.74871 13.6526 6.66859 13.8538 6.66345C14.0551 6.65832 14.2333 6.73332 14.3884 6.88845L18.8673 11.3673C18.9609 11.4609 19.0269 11.5596 19.0654 11.6635C19.1038 11.7673 19.1231 11.8795 19.1231 12C19.1231 12.1205 19.1038 12.2327 19.0654 12.3365C19.0269 12.4404 18.9609 12.5391 18.8673 12.6327L14.3884 17.1115C14.2397 17.2602 14.0631 17.3336 13.8587 17.3317C13.6542 17.3298 13.4744 17.2512 13.3192 17.0961C13.1744 16.941 13.0994 16.7654 13.0942 16.5692C13.0891 16.3731 13.1641 16.1974 13.3192 16.0423L16.6116 12.75Z" fill="#098BED"/>
                </svg></span>
            </div>
        </div>
    </>
  )
}

export default CaruselItem
