import React, { useState } from 'react';
import { svg_coursConte1, svg_down, svg_right, svg_right2} from '../svgG/svg';
import { Link } from 'react-router-dom';

const SelCourse = (props) => {
  const { course_item, length } = props;
  const [isVideo, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(!isVideo);
  }

  return (
    <>

    <div className='course_1'>
      <div className="main">
        <span>
             {svg_coursConte1}
        
        </span>
        <div className='topicName'>
              {props.course__name}
               <div>
                   {length} topics  
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
          <h3>0% COMPLETE 0/{length} Steps</h3>
        </div>
       
        <div className='drOpen'>
          {course_item.map((courseItem) => (  (
            <div key={courseItem.id} className="mainDrContent">
            
               <i>{svg_right}</i>  
               <span>
                {courseItem.itemName}
               </span>
               <i>
                {svg_right2}
               </i>
           </div>
          )
           
            
              
          ))}
        </div>
      </div>
      }
      
    </div>
   
    </>
  );
}

export default SelCourse;
