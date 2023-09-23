import React, { useState } from 'react';
import { svg_coursConte1, svg_down, svg_right, svg_right2} from '../svgG/svg';
import {  useParams } from 'react-router-dom';

const SelCourse = (props) => {
  const {courseDetails} = props;
  const {slug} = useParams();
 
 
  const [isVideo, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(!isVideo);
  }

  return (
    <>

    <div className='course_1'>
      <div className="main">
       <span>{svg_coursConte1}</span> 
        <span>
          
        {courseDetails.title}
        </span>
        <div className='topicName'>
             
               <div>
                   {props.openActiveLessons.length} topics  
               </div>
        </div>
        <div className="dDOwn" onClick={() => handleVideo()} >
          {svg_down}
        </div>
      </div>
      {
         props &&  
      
      <div className="main__content">
        <div className='lessonContent'>
          <h4>Lesson Content</h4>
          <h3>0% COMPLETE 0/{} Steps</h3>
        </div>
       
        <div className='drOpen'>
          {props.map((courseItem) => (  (
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
