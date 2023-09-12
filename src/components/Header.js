import React from 'react'
import "../style/Header.css"
import "../style/section-1.css"
import Caruse_card from '../components/Caruse__card';

const Header = () => {
  return (<>
  
    <div className='header'>
            {/* header navbar section boshi */}
        <div className="nav-bar">
            <div className="logo">
                <span>Logo</span>
            </div>
            <ul>
                <li>Biz kimmmiz?</li>
                <li>Kurslar</li>
                <li>Xizmatlar</li>
                <li>Mustaqil ta'lim</li>
                <li>Bepul darslar</li>
                <li>Fikrlar</li>
            </ul>
            <div className="register">
                <button className="rig btn">Ro'yxatdan o'tish</button>
            </div>
        </div>
        {/* navbar section oxirir */}
            {/* header main boshi */}
        <div className="header-main">
            <div className='main-title'>

            <p>Batafsil ma’lumot olish uchun ushbu tugmani bosing!</p>
            <button className="btn">Batafsil ma’lumot</button>
            </div>
        </div>
        {/* header main oxiri */}
      
    </div>
    {/* section-1 boshi */}
    <div className="header__section-1 content">
            <div className="section-1__title">
                <div className="my_name">
                    <span>01.Kim?</span>
                    <h3>Islombek Ibragimov</h3>
                </div>
                <div className="section-1__title-subtitle">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    </p>
                </div>
                <div className="expirens">
                    <div className="clients">
                        <div>
                            <span>+</span><h2>500</h2>
                        </div>
                       
                        <div className='exp__title'>
                        
                        Mijozlar
                        </div>
                    </div>
                    <div className="experience">
                        <div>
                            <span>+</span><h2>14 yil</h2>
                        </div>
                        
                            <div className='exp__title'>
                            Tajriba
                            </div>
                    </div>
                </div>
            </div>
            <div className="section-1__img">
                
                <div className="doshshed"></div>
            </div>
    </div>
    {/* secton-1 oxiri */}
    {/* section-2 boshi */}
    <div className="header__section-2 content">
            <div className="my_name">
                    <span>01.Kurslar</span>
                    <h3>Bizning professional kurslarimiz    </h3>
            </div>
            <Caruse_card />
    </div>
    
    </>
  )
}

export default Header
