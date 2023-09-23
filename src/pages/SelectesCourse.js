import React, { useEffect, useState } from 'react'
import SelCourse from '../components/SelCourse'
import '../style/seleact.css'
import { Link, useParams } from 'react-router-dom';
import { svg_check } from '../svgG/svg';
import { courseItmSlug } from '../style/config/config';
import PaymentModal from './PaymentModal';

const SelectesCourse = () => {
  const { slug } = useParams();

  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    fetch(courseItmSlug + slug)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Tarmoq javobi yaxshi emas');
        }
        return response.json();
      })
      .then((data) => {
        const items = data.data;
        setCourseDetails(items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  const handlShowModal = () => {
    setShow(!isShow);
  };
  return (
    <>  { isShow &&  <PaymentModal courseDetails={courseDetails} handlShowModal={handlShowModal} />}
   
    <div className='selected__course'>   
        <div className="selesct__1">
            <h3 className='h3'>
            {courseDetails.title}
            </h3>
            <p className='h3'>
               
                {courseItmSlug.short_description}
            </p>
            <div className="keyConsepts">
                     <h5 className='h3'>
                        Key Concepts Covered Include:
                    </h5>
                    {courseDetails.benefits && courseDetails.benefits.map((el, ind) => (
                        <div className="div" key={ind}>
                          <span>{svg_check}</span>
                          <h4>
                            {el.value}
                          </h4>
                        </div>
                      ))}
                    
                   
                
            </div>
            
               {
                courseDetails.description
               }
            
            <button onClick={(e)=>handlShowModal(e)}>
            Kursni sotib olish
          </button>
        </div>
        <div className="selesct__2">
            <div className="img">
             <img src={courseDetails.imageUrl} alt={courseDetails.title} />  
            </div>
            

                <div>
                     (
                        {/* <SelCourse  course_item={CourseDetalis.benefits} course__name={CourseDetalis.title} /> */}
                    )
                </div>

            
        </div>

       
    </div>
    </>
  )
}

export default SelectesCourse
