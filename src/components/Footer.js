import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
        {/* footer boshi */}
            <div className="footer">
                    <div className="nav-bar footer__nav">
                            <div className="logo">
                                <span>Logo</span>
                            </div>
                            <ul>
                                <NavLink to='#section3'>
                                <li> Biz kimmmiz? </li></NavLink> 
                                <li> Kurslar</li>
                                <li> Xizmatlar</li>
                                <li> Mustaqil ta'lim</li>
                                <li> Bepul darslar </li>
                                <li> Fikrlar </li>
                            </ul>
                            <div className="register">
                                <button className="rig btn">Ro'yxatdan o'tish</button>
                            </div>
                    </div>
            </div>
        {/* footer   oxiri */}
    </>
  )
}

export default Footer
