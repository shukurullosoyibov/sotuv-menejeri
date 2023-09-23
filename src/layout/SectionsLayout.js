import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CaruselCard from '../components/CaruselCard'
import { fikrApi } from '../style/config/config';
import { svg_01, svg_like, svg_past, svg_true } from '../svgG/svg';
import 'font-awesome/css/font-awesome.min.css';


const SectionsLayout = (props) => {
    const [fikr, setFikr] = useState([]);
    const [banner, setBanner] = useState([]);
    const [mustaqiltalim, setMustaqiltalim] = useState([]);
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://shark.brim.uz/api/home/testimonial')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            
            if (data.message === "success") {
                console.log(data.data);
              const items = data.data;
              setFikr(items);
            //   alert("Fikrlar yuklandi");
            } else {
            //   alert("Fikrlar yuklanmadi");
            }
          })
          .catch(error => {
            console.error('Serverda xatolik:', error);
            // alert("Serverda xatolik: " + error.message);
          });
      
      
          fetch('https://shark.brim.uz/api/home/banner')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              if (data.message === "success") {
                 console.log(data.data);
                const item = data.data;
                setBanner(item);
                // alert("banner yuklandi");
              } else {
                // alert("banner yuklanmadi");
              }
            })
            .catch(error => {
              console.error('Serverda xatolik:', error);
            //   alert("Serverda xatolik: " + error.message);
            });
    

        fetch('https://shark.brim.uz/api/home/index-info')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              if (data.message === "success") {
                 console.log(data.data);
                const item = data.data;
                setMustaqiltalim(item);
                // alert("banner yuklandi");
              } else {
                // alert("banner yuklanmadi");
              }
            })
            .catch(error => {
              console.error('Serverda xatolik:', error);
            //   alert("Serverda xatolik: " + error.message);
            });

            fetch('https://shark.brim.uz/api/home/services')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              
              if (data.message === "success") {
                  console.log(data.data);
                const items = data.data;
                setService(items);
              
              } else {
               
              }
            })
            .catch(error => {
              console.error('Serverda xatolik:', error);
            
            });
        }, []);

   
  return (
  
    <>
                    <Outlet/>
                <div className="header-main" style={{ background: `url(${banner.imageUrl})` }}>

                        <div className='main-title'>
                            <p>{banner.text}</p>
                            <button className="btn btn_hover">{banner.button_label}</button>
                        </div>
                </div>
                {/* section-1 boshi */}
                    <div id='bizkimmiz' className="header__section-1 content">
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
                <div id='kurslar' className="header__section-2 content">
                        <div className="my_name">
                                <span>01.Kurslar</span>
                                <h3>Bizning professional kurslarimiz    </h3>
                        </div>
                    { <CaruselCard  />}
                </div>
                {/* section-2 oxiri */}
                {/* section-3 boshi */}
                <div id="xizmatlar" className='header__section-3 content'>
                        <div className="section-1__title">
                                    <div className="my_name">
                                        <span>01.Kim?</span>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <div className="section-1__title-subtitle">
                                        <p>
                                        {service.content}
                                        </p>
                                    </div>
                                    <div className="my__sales">
                                        <div className="my__sale">

                                            {  service.serviceItems &&
                                               ( service.serviceItems.map((el,ind) =>(

                                                    <div key={ind} {...el} className="sale__1">
                                                        <span>
                                                        {svg_true}
                                                        </span>
                                                        <div className="sale__title">
                                                            <h4>
                                                                {el.name}
                                                            </h4>
                                                            <h6>
                                                            {el.short_description}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                ))) 
                                            }
                                            
                                            <Link to="/autho" className="btn btn_hover">
                                                Ro'yxatdan o'tish
                                            </Link>
                                        </div>
                                        
                                    </div>
                        </div>
                        <div className="section-1__img section_3">
                            <div className="section__3-img" style={{ background: `url(${service.imageUrl})` }} >

                            <div className="doshshed"></div>
                            </div>
                            
                        </div>
                </div>
                {/* section-3 oxiri */}
                {/* section-4 boshi */}
                <div  id="mustaqiltalim" className="header__section-4 content">
                    <div className="section-4__1">
                        <div className="section-4__1_f">
                            <div className="my_name">
                                    <span>Barchasi ta’limdan boshlanadi!</span>
                                    <h3>Mustaqil ta’lim </h3>
                            </div>
                            <Link to="/autho" className="btn btn_hover">Ro’yxatdan o’tish</Link>
                        </div>
                        <div className="section-4_2_f">
                            <h4>
                            Professional sotuvchi bo’lishni ikkita yo’li bor!
                            </h4>
                            <div className="section-4_2_f--card">
                                <span>
                                    {svg_past}
                                </span>
                                <h4>Online darslar o’qib  <span>1 oyda</span></h4>
                            </div>
                            <div className="section-4_2_f--card">
                                <span>
                                    {svg_like}
                                </span> 
                                <h4>Mijozlardan so’shiklar eshitib <span>1-2 yilda</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="section-4__2">
                        {  mustaqiltalim &&
                            mustaqiltalim.map((el, ind) =>(

                                <div key={ind}   className="section-4__2-cards">
                                    <div className='card__title__1'>
                                    <span >{svg_01}</span>
                                            <span>
                                               {el.title}
                                            </span>
                                            
                                    </div>
                                    <div className='card__title__2'>
                                        <h4>{el.content}
                                        </h4>
                                    </div>
                            </div>

                            ))
                        }
                        
    
                    
                    </div>
                </div>
                {/* section-4 oxiri */}
                {/* section-5 boshi */}
                <div  className="header__section-5 content">
                    <div id= "bepuldarslar" className="section-5__1-f">
                        <div className="my_name">
                            <span>
                                Bepul birinchi dars
                            </span>
                            <h3>
                                Birinchi darsni sizga bepulga taqdim etamiz!
                            </h3>
                            <Link to="/autho" className="btn btn_hover">Ro'yxatdan o'tish</Link>
                        </div>
                    </div>
                    <div id='fikrlar' className="sectiot-5__youTube">
                        <div className="my_name">
                            <span >
                                Fikrlar
                            </span>
                            <h3 >
                                Ishtirokchilar fikrlari
                            </h3>
                        </div>
                        <div className="sectiot-5__youTube__cards">
                        {fikr.map((el, ind) => (
                                        <div key={ind} className="youTube__cards">
                                        <div className='you-tube__logo'>
                                            <iframe
                                            width="387"
                                            height="254"
                                             src={`https://www.youtube.com/embed/${el.url.split("v=")[1]}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            ></iframe>
                                        </div>
                                        </div>
                                    ))}
                            
                            
                        
                        </div>

                    </div>


                </div>
                {/* section-5 oxiri */}
                
                
    </>
  )
}

export default SectionsLayout
