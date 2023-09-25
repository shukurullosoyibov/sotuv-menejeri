import React from 'react'
import '../style/Lesson__src.css'
import ReactPlayer from 'react-player';
import { svg__message, svg_down, svg_download } from '../svgG/svg';

const LessonSrc = () => {
    const isComments = false;
  return (
    <>   
            <div className="videoPlayer">
                 <ReactPlayer
                    url="https://youtu.be/2lLP-x888uQ?feature=shared" // Video manzili
                    controls // Kontrollar (play, pause, volume, va h.k.) ko'rsatilsinmi
                    width="100%" // Video o'lchamini o'zgartiring
                    height="auto" // Video ta'rifi
                    border-radius='20'
                />
                
            </div>
            <div className="lesson__src">
                <h2>
                      Videodars yozma variantini yuklab olish
                </h2>
                <a href="https://n.ziyouz.com/books/darsliklar/yangi/7-sinf/O'zbekiston%20tarixi.%207-sinf%20(2017,%20A.Muhammadjonov).pdf" target='_blank' className="btnPDF btn_hover">
                    {svg_download} Yuklab olish
                </a>
                
            </div>
            <div className="lesson__conspect">
                <h2>
                     Sotuv o’zi nima?
                </h2>
                <p>
                     Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus aliqua gravida fuga dolorum augue, donec beatae. Class urna et doloremque facilisis autem risus fuga nullam quibusdam, tortor deleniti, accumsan dolorem? Posuere hac?
                    Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent? Consequuntur a lobortis magnam mollis ac, explicabo nobis, pretium omnis, adipisci placerat, nostrum reiciendis? Illo natoque provident potenti ullamcorper quis hymenaeos lectus nobis nobis dui.
                </p>
            </div>
            <div className="lesson__comment-section">

                    <h2>
                     Izohlar
                    </h2>
                    <div className="comment">
                        {
                        !isComments ? 
                        
                        <div className='noComments'>
                            {svg__message}
                            <p>
                              Hozircha hech qanday izohlar topilmadi!
                            </p>

                         </div>
                        : <p>
                            birinchi kommentariya Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam incidunt dolor repudiandae. Modi et vero doloribus exercitationem blanditiis iusto eligendi nam totam voluptatibus officia quo nostrum maxime necessitatibus excepturi asperiores magni eum deserunt quidem tenetur, sapiente quibusdam pariatur laborum voluptas voluptatum! Sit nihil soluta molestias quae necessitatibus in quo corporis?
                        </p>
                        }
                        <div className="user_commnetInput">
                           <textarea name="comment" idcomment cols="50" rows="20">
                            
                           </textarea>
                        </div>
                    </div>

            </div>


    </>
  )
}

export default LessonSrc
