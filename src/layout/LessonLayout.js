

import React from 'react'
import {  Link, Outlet } from 'react-router-dom'
import { svg_korish } from '../svgG/svg'
import '../style/LessonLayout.css'

const LessonLayout = () => {


  return (
    <div className='lesson_sections'>
        <div className='lesson__list'>
            <div className="lessonLists">
                <h2>
                    Lesson Content
                </h2>
                <div className="lesson_items">
                     <Link to="/lesson/salom"  className="lesson__item">
                        {svg_korish} 
                        <span>
                                Kirish
                        </span>
                    </Link> 
                    <div className="lesson__item">
                        {svg_korish}
                        <span>
                            Sotuv o’zi nima?
                        </span>
                    </div> 
                </div>
                

            </div>
                <div className="lessonLists">
                <h2>
                    Lesson Content
                </h2>
                <div className="lesson_items">
                    <div className="lesson__item">
                        {svg_korish} 
                        <span>
                                Kirish
                        </span>
                    </div> 
                    <div className="lesson__item">
                        {svg_korish}
                        <span>
                            Sotuv o’zi nima?
                        </span>
                    </div> 
                </div>
                

            </div>
        </div>
       
        

        <div className="lesson_main">
             <Outlet />
             <h2>salom</h2>
        </div>
        

    </div>
  )
}

export default LessonLayout
