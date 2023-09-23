import React, { useState } from 'react'

import {svg_down, svg_download, svg_lock, svg_next,  svg_prew,  svg_right } from '../svgG/svg'
import '../style/CourseSales.css'


const Coursesales = () => {
  const [itemID, setItemID] = useState(0);
  const [itemIDInher, setItemIDInher] = useState(0);

  const changeID = (id) => {
    setItemID(id);
  };

  const changeIDInher = (id) => {
    setItemIDInher(id);
  };

    const select = [
        {
          id: 0,
          course__name: 'Sotuvlarni bosharish',
          course_price: 100000,
          course_item: [
            {
              id: 0,
              itemName: 'Kirish',
              datalis: "Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae.",
              srcURL: 'https://www.youtube.com/watch?v=0NdDKClb1eQ',
              see: true,
            },
          ],
        },
        {
          id: 1,
          course__name: "Anonim qo'ng'iroqlar",
       
          course_price: 150000,
          course_item: [
            {
              id: 0,
              itemName: "Kirish",
              datalis: "Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae.",
              srcURL: "https://www.youtube.com/watch?v=ToBF-MDbhJ0",
              see: false,
            },
            {
              id: 1,
              itemName: "Sotuv o'zi nima",
              datalis: "Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae.",
              srcURL: "https://www.youtube.com/watch?v=ToBF-MDbhJ0",
              see: false,

            },
          ],
        },
      ];
      return (
        <section>
          <div className="course_pay">
            {select.map((item, index) => (
              <div key={index} className="mainDrContent" onClick={() => changeID(index)}>
                <span>Lesson Content</span>
                {item.course_item.map((itm, ind) => (
                  <a key={ind} onClick={() => changeIDInher(ind)} className="linkCourse">
                    <i>{itm.see ? svg_right : svg_lock}</i>
                    <span>{itm.itemName}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="course_details">
            {/* <div className="payment">
                    <div className="pay_detalis">
                        <span>Kursni sotib olish</span>
                        <i>
                          Kursni davomini ko’rish uchun, sotib oling!
                        </i>
                        <div className="payment_selects">
                          <div className="payment_select">
                            <span>
                            To’lov tizimini tanlang
                            </span>
                             <div className='pay_sel_item'>
                                <label>
                                  <div>
                                    {svg_click} 
                                  </div>
                                  <input type="radio" name='pay' />
                                </label>
                                <label>
                                  {svg_payme}
                                  <input type="radio" name='pay' />
                                </label>
                                <label>
                                  <div className="apelsin">

                                  </div>
                                  <input type="radio" name='pay' />
                                </label>
                             </div>
                            
                          </  div>
                        </div>
                    </div>
                    <div className="pay_img">
                      <img src="../img/Ellipse31.png"  alt="payment img" />
                    </div>


            </div> */}
            <div className="courseSRC">
              <h2>
              Videodars yozma variantini yuklab olish
              </h2>
              <button>
                {svg_down}
                PDF
              </button>
              <button>
                {svg_download}
                Yuklab olish
              </button>
            </div>
            <div className="courseDetails">
              {select.map((item, index) => (
                <div key={index} className="courseMain">
                  {itemID === index ? (
                    item.course_item.map((itm, ind) => (
                      <a key={ind} className="course-itm">
                        {
                          itemIDInher ===ind ? (
                          <>
                          <h1>{itm.itemName}</h1>
                          <br/>
                            <span>{itm.datalis}</span>
                          </>
                          ) : null
                        }
                      
                      </a>
                    ))
                  ) : (
                    null
                  )}
                </div>
              ))}
            </div>
            <div className="pagin">
              <div className="prew">
                <i>{svg_prew}</i>
                Oldingisi
              </div>
              <div className="next">
                Keyingisi
                <i>{svg_next}</i>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default Coursesales;

