import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { svg_korish } from '../svgG/svg';
import '../style/LessonLayout.css';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const LessonLayout = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
        navigate('/login');
    }
    fetch(`https://shark.brim.uz/api/course-manager/course/sections?key=${slug}`, {
      method: 'GET', // GET metodi
      headers: {
        'Content-Type': 'application/json', // JSON ma'lumotni yuborishni bildirish
        'Authorization': `Bearer ${token}`, // Tokenni yuborish
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // API dan olingan "items" ma'lumotlarini saqlash
        const items = data.data.sections; // sections ichidagi ma'lumotlarni olib chiqarish
      
        setData(items);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, [slug]);

  return (
    <div className='lesson_sections'>

      <div className='lesson__list'>
        <h4 className='user-mobile-course'> Mening kurslarim </h4>
        {data ? (
          data.map((el, ind) => (
            <div key={ind} className="lessonLists">
              <h2>{el.title}</h2>
              { el.activeLessons.map((itm, indx) => (
                  <div key={indx} {...itm} className="lesson_items">
                    {
                      indx !== 0 ? <div className="gorizt"></div> : null 
                    }
                    
                  <Link to={`/lesson/${slug}/${itm.id}`} className="lesson__item">
                  {svg_korish}
                  <span>{itm.title}</span>
                  </Link>
                  
                  </div>
              )) }
            </div>
          ))
        ) : 
        <RingLoader color='#53d76034'/>
        
        }
       
      </div>
      <div className="lesson_main">
        <Outlet />
       
      </div>
    </div>
  );
}

export default LessonLayout;
