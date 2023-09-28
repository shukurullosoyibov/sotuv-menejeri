import React, { useEffect, useState } from 'react'
import "../style/Header.css"
import "../style/section-1.css"
import "../style/section-4.css"
import "../style/section-5.css"
import '../style/footer.css'
import '../style/registerModal.css'

import { toast } from 'react-toastify';
import { RingLoader } from 'react-spinners';


// import RegisterModal from './RegisterModal'
import { Link, useNavigate } from 'react-router-dom';
import { fikrApi } from '../style/config/config'
import { avg_sign, svg_drp, svg_korish, svg_logout, svg_user, svg_x } from '../svgG/svg'

// import RegisterSigup from './RegisterSigup'

// import Sections from './Sections'

const Header = (props) => {
    // const [isModal, setModal] = useState( false);

    const [isRegister, setRegister] = useState( false);
    const [logoUrl, setLogoUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [isMobile, setMobileShow] = useState(false)
    const showInfoToast = () => {
        toast.error('Tizimdan chiqdiz');
      };
   
      const navigate = useNavigate();
    const getTokenFromLocalStorage = () => {
        return localStorage.getItem('token');
      };
      const fetchData = async (token) => {
        try {
          const response = await fetch('https://shark.brim.uz/api/profile-manager/profile/index', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            // Ma'lumotlarni olishdan so'ng kerakli ishlarni bajaring
            return data;
          } else {
            throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
          }
        } catch (error) {
          console.error(error);
        }
      };
    
let token = getTokenFromLocalStorage();
        useEffect(() => {
            

            if (token) {
            fetchData(token).then((fetchedData) => {
                
                setData(fetchedData);
               
                setLoading(false);
            });
            } else {
                // alert(' token olinmadi');

            setLoading(false);
            }
        }, []);
        const clearTokenFromLocalStorage = () => {
             localStorage.setItem('token', "");
             navigate('/');
             showInfoToast();
            
          };
        
   
    // useEffect( () =>{
    //     const navBar = document.querySelector('.nav-bar');
    //     if (navBar) {
    //       navBar.style.backgroundColor = 'var(--nav__bg_black)';
    //     }
    //   }, [])
    
    // const handelModal = () => {
    //         setModal(!isModal);
    // }
    const handelRegister = () => {
        setRegister(!isRegister);
    }
    
   const mobileMenu = () =>{
        setMobileShow(!isMobile);
   }
  return (<>
     
    <div className='header'>
            {/* header navbar section boshi */}
            <div id='nav-br' className="nav-bar">
                    <span onClick={()=>mobileMenu()} className='mobile' >
                    <pre>
                    {!isMobile ? svg_drp : svg_x}
                    </pre>
                    </span>  
                    <Link to="/"> 
                        <div className="logo">
                            <span>Logo</span> 

                        </div>
                    </Link> 

                    <ul className={ isMobile ? 'navUL active' : '' }  >
                       <li className={ !isMobile ?  'mobileLogo' : ' mobileLogo active' }  >
                            <Link to="/"> 
                              <div className="logo">
                                  <span>Logo</span> 

                              </div>
                            </Link> 
                            <span onClick={()=>mobileMenu()} className='mobile' >
                            {!isMobile ? svg_drp : svg_x}
                            </span>  
                       </li>
                        <li className='active'> <a href='#bizkimmiz'>Biz kimmmiz? </a> </li>
                        <li> <a href='#kurslar' >Kurslar</a></li>
                        <li> <a href='#xizmatlar' >Xizmatlar</a></li>
                        <li> <a href='#mustaqiltalim' >Mustaqil ta'lim</a></li>
                        <li> <a href='#bepuldarslar' >Bepul darslar</a></li>
                        <li> <a href='#fikrlar' >Fikrlar</a></li>
                    </ul>
                    <div className="register dropdown" onClick={()=>handelRegister()}>
                        <div className="dropdown-main">
                            <span>
                              {svg_user}
                            </span>
                            <span>
                                  {svg_drp} 
                            </span>
                        </div>
                        { isRegister && 
                         <div className="dropdown__item">
                           { !token ?
                            <>
                         
                            <Link to='/login'  className='btn__login'>Tizimga kirish</Link>
                            <Link to='/autho' className='btn__sign'>
                                <span>
                                {avg_sign}
                                </span>
                                Ro'yxatdan o'tish
                            </Link>
                            
                            </> :
                            (token && data.data) ?
                            <div className='user_info'>
                                      <p>salom</p>
                                      <h5>
                                        {data.data.firstname} {" "+data.data.lastname}
                                      </h5>
                                      <Link to="/userCourse">
                                          <span>{svg_korish} <h4>Mening kurslarim</h4></span>
                                        
                                      </Link>
                                      <a onClick={()=>clearTokenFromLocalStorage()} > <span>{svg_logout} <h4 className='red'>Tizimdan chiqish</h4> </span></a>
                           </div>
                           : 
                           !data.data ?
                           <RingLoader 
                           color="#36d7b7" 
                           size={150} />
                           :null

                          
                           }
                           
                        </div> 
                           
                        }
                    </div>
           

             </div> 
             {/* navbar section oxirir */}
          
      
    </div>  

            
    
    
   
    </>
  )
}

export default Header
