import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
        {/* footer boshi */}
            <div className="footer">
                    <div className="nav-bar footer__nav">
                            <Link to="/"> 
                                <div className="logo">
                                    <span>Logo</span> 

                                </div>
                            </Link> 
                            <ul>
                                <li className=''> <a className='active' href='#bizkimmiz'>Biz kimmmiz? </a> </li>
                                <li> <a href='#kurslar' >Kurslar</a></li>
                                <li> <a href='#xizmatlar' >Xizmatlar</a></li>
                                <li> <a href='#mustaqiltalim' >Mustaqil ta'lim</a></li>
                                <li> <a href='#bepuldarslar' >Bepul darslar</a></li>
                                <li> <a href='#fikrlar' >Fikrlar</a></li>
                            </ul>
                            <div className="register">
                                <i className="rig btn btn_hover"><Link to='/autho'>Ro'yxatdan o'tish</Link></i>
                            </div>
                    </div>
            </div>
        {/* footer   oxiri */}
    </>
  )
}

export default Footer
