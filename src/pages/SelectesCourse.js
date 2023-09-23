import React, { useEffect, useState } from 'react'
import SelCourse from '../components/SelCourse'
import '../style/seleact.css'
import { Link, useParams } from 'react-router-dom';
import { svg_check, svg_coursConte1, svg_down, svg_right, svg_right2 } from '../svgG/svg';
import { courseItmSlug } from '../style/config/config';
import PaymentModal from './PaymentModal';

const SelectesCourse = () => {
  const { slug } = useParams();

  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(courseItmSlug + slug);
        if (!response.ok) {
          throw new Error('Tarmoq javobi yaxshi emas');
        }
        const data = await response.json();
        const items = data.data;
  
        setCourseDetails(items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [slug]);

  const handlShowModal = () => {
    setShow(!isShow);
  };
  const [isVideo, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(!isVideo);
  }
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
            
               <span> </span>
               <div dangerouslySetInnerHTML={{ __html: courseDetails.description }} />
               
            
            <button onClick={(e)=>handlShowModal(e)}>
            Kursni sotib olish
          </button>
        </div>
        <div className="selesct__2">
            <div className="img">
             <img src={courseDetails.imageUrl} alt={courseDetails.title} />  
            </div>
              
                   {courseDetails.openLessons && 
                    (  
                      //courseDetails.openLessons.map((el, ind) =>(
                    
                  //       <SelCourse key={ind} {...el} courseDetails={courseDetails} />

                    
                  //  ))
                  <div className='course_1'>
                          <div className="main">
                          <span>{svg_coursConte1}</span> 
                            <span>
                              
                            {courseDetails.openLessons.title}
                            </span>
                            <div className='topicName'>
                                
                                  <div>
                                      {1} topics  
                                  </div>
                            </div>
                            <div className="dDOwn" onClick={() => handleVideo()} >
                              {svg_down}
                            </div>
                          </div>
                          {
                           isVideo &&  
                          
                          <div className="main__content">
                            <div className='lessonContent'>
                              <h4>Lesson Content</h4>
                              <h3>0% COMPLETE 0/{} Steps</h3>
                            </div>{console.log(courseDetails)} 
                          {courseDetails.openActiveLessons && 
                          
                          (  <div className='drOpen'>
                              {  courseDetails.openActiveLessons.map((courseItem) => (  (
                                <div key={courseItem.id} {...courseItem} className="mainDrContent">
                                
                                  <i>{svg_right}</i>  
                                  <span>
                                    {courseItem}
                                  </span>
                                  <i>
                                    {svg_right2}
                                  </i>
                              </div>
                              )
                              ))}
                            </div>
                            )}
                          </div>
                          }
                          
                        </div>
                    
                   )
                   
                   } 

            
                    {/* {select.map((course) => (
                        <SelCourse key={course.id} course_item={course.course_item} course__name={course.course__name} length={course.course_item.length} />
                    ))}
                     (
                        { <SelCourse  course_item={CourseDetalis.benefits} course__name={CourseDetalis.title} />} */}
                    
           
               

            
        </div>

       
    </div>
    </>
  )
}

export default SelectesCourse
