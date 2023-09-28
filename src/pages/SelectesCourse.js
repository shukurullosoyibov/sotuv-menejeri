import React, { useEffect, useState } from 'react'
import SelCourse from '../components/SelCourse'
import '../style/seleact.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { svg_check, svg_coursConte1, svg_down, svg_right, svg_right2 } from '../svgG/svg';
import { courseItmSlug } from '../style/config/config';
import PaymentModal from './PaymentModal';

const SelectesCourse = () => {
  const { slug } = useParams();

  const [courseDetails, setCourseDetails] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isShow, setShow] = useState(false);
  const [isVideo, setVideo] = useState(false);
  const [enrol, setEnrol] = useState(false);
  let token = null;
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  const fetchDataToken = async (token) => {
    try {
      const response = await fetch(courseItmSlug + slug, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      if (response.ok) {
        const data = await response.json();
       
        if( data.data.userHasEnrolled)
        {

          setEnrol(true)
        }
        else{
          setEnrol(false)
        }
        // Ma'lumotlarni olishdan so'ng kerakli ishlarni bajaring
        return data;
      } else {
        throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

 

  useEffect(() => {
   



  }, []);

 







  useEffect(() => {

    token = getTokenFromLocalStorage();
   
    if (token) {
      fetchDataToken(token).then((fetchedData) => {
        setData(fetchedData);
    
        
        setLoading(false);
      });
    } else {
      setLoading(false);
    }






    const fetchData = async () => {
      try {
        const response = await fetch(courseItmSlug + slug);
        if (!response.ok) {
          throw new Error('Tarmoq javobi yaxshi emas');
        }
        const data = await response.json();
        console.log(data);
        const items = data.data;
  
        setCourseDetails(items);
        setLoading(false);
      }
      catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
    console.log(courseDetails);
    
  }, []);

  const handlShowModal = () => {
    setShow(!isShow);
  };
 

  const handleVideo = () => {
    setVideo(!isVideo);
  }

    const handelLessonModal = () =>{
      navigate(`/lesson/${slug}`);
    }

 
  
  
  return (
    <>  { isShow &&  <PaymentModal courseDetails={courseDetails} handlShowModal={handlShowModal} />}
  
  <div class="courseDetalis content">
          
                    <div className="img">
                    <img src={courseDetails.imageUrl} alt={courseDetails.title} />  
                    </div>
             
                            {/* {select.map((course) => (
                                <SelCourse key={course.id} course_item={course.course_item} course__name={course.course__name} length={course.course_item.length} />
                            ))}
                            (
                                { <SelCourse  course_item={CourseDetalis.benefits} course__name={CourseDetalis.title} />} */}
                           
        <div class="title">
            <h3 className='h3'>
                { courseDetails.title}
            </h3>
        </div>
        <div class="descpritiopns">
            <span> </span>
                  <div dangerouslySetInnerHTML={{ __html: courseDetails.description }} />
            </div>
        <div class="course_video_item">
            <p>Course Content</p>
        {courseDetails.openLessons && 
                    (  
                     
                  <div className='course_1'>
                          <div className="main">
                                
                                
                                <div className='topicName'>
                                  <span>
                                    {svg_coursConte1}
                                  </span>
                                  <span>
                                    { courseDetails.title}
                                    <h6>{courseDetails.openLessons.length} topics </h6> 
                                  </span>
                                
                                    
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
                              <h3>0% COMPLETE 0/{courseDetails.openLessons.length} Steps</h3>
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
        </div>
        <div class="konspe">
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
                       <div className="selesct__1">
                          <p className='h3'>
                            
                              {courseDetails.short_description}
                          </p>
                       </div>
              
          </div>
              {
                  !localStorage.getItem('token') ? 
                  <Link to='/autho' className='btn btn_hover'>Ro'yxatdan o'tish</Link> :
                  !courseDetails.is_free ? <button onClick={(e)=>handlShowModal(e) } className='btn btn_hover'>Sotib olish</button> :
                  <button onClick={(e)=>handelLessonModal(e)} className='btn btn_hover'> Davom etish </button>
             }
           
        </div>
</div>





























    <div className='selected__course'>   
       
       

       
    </div>
    </>
  )
}

export default SelectesCourse
