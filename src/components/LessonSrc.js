import React, { useEffect, useState } from 'react';
import '../style/Lesson__src.css';
import ReactPlayer from 'react-player';
import { svg__message, svg_down, svg_download, svg_next, svg_prew, svg_send } from '../svgG/svg';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LessonSrc = () => {
  const { id } = useParams();
  const { slug } = useParams();
  const [lessonItem, setLessonItem] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const isComments = false;

  const showFinishToast = () => {
    toast.success('Tabriklaymiz, dars yakunlandi!');
  };

  const handleFinished = async () => {
    try {
      const response = await fetch(`https://shark.brim.uz/api/course-manager/course/mark-as-completed?lessonKey=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'success') {
          showFinishToast();
        } else {
          alert('Server bilan aloqa yo\'q');
        }
      } else {
        alert('Hatolik kurs yakunlanishida');
      }
    } catch (error) {
      console.error('Xatolik yuz berdi: ', error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    fetch(`https://shark.brim.uz/api/course-manager/course/watch?lessonKey=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const items = data.data.lesson;
        setLessonItem(items);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, [id, token, navigate]);

  return (
    <>
      {lessonItem ? (
        <>
          <div className="videoPlayer">
            <ReactPlayer
              url={lessonItem.srcUrl}
              controls
              width='100%'
              height='100%'
              style={{ borderRadius: '20px' }}
            />
          </div>
          <div className="lesson__src">
            <h2>Videodars yozma variantini yuklab olish</h2>
            {lessonItem.files.map(el => (
              <div key={el.id} {...el}>
                <a
                  href={el.srcUrl}
                  title={el.title}
                  target="_blank"
                  className="btnPDF btn_hover"
                  type={el.type}
                >
                  {svg_download} Yuklab olish
                </a>
              </div>
            ))}
            <button onClick={handleFinished} className='btn btn_hover'>Ko'rildi!</button>
          </div>
          <div className="lesson__conspect">
            <h2>{lessonItem.title}</h2>
            <p>
              <div dangerouslySetInnerHTML={{ __html: lessonItem.description }} />
            </p>
          </div>
          <div className="lesson__comment-section">
            <h2>Izohlar</h2>
            <div className="comment">
              {!isComments ? (
                <div className="noComments">
                  {svg__message}
                  <p>Hozircha hech qanday izohlar topilmadi!</p>
                </div>
              ) : (
                <p>
                  birinchi kommentariya Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam incidunt dolor
                  repudiandae. Modi et vero doloribus exercitationem blanditiis iusto eligendi nam totam voluptatibus
                  officia quo nostrum maxime necessitatibus excepturi asperiores magni eum deserunt quidem tenetur,
                  sapiente quibusdam pariatur laborum voluptas voluptatum! Sit nihil soluta molestias quae necessitatibus
                  in quo corporis?
                </p>
              )}
              <div className="user_commnetInput">
                <textarea name="comment" idcomment cols="50" rows="20" placeholder="Izohingizni yozing"></textarea>
                <span className="btn_send_hover">{svg_send}</span>
              </div>
            </div>
          </div>
          <div className="prewNextLesson">
            <div className="btnPrew btn btn_hover">
              {svg_prew}
              <span>Oldingisi</span>
            </div>
            <div className="btnNext btn btn_hover">
              <span>Oldingisi</span>
              {svg_next}
            </div>
          </div>
        </>
      ) : (
        null
      )}
    </>
  );
};

export default LessonSrc;
