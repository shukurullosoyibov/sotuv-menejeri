import React, { useState } from 'react'
import "../style/Header.css"
import "../style/section-1.css"
import "../style/section-4.css"
import "../style/section-5.css"
import '../style/footer.css'
import '../style/registerModal.css'




import RegisterModal from './RegisterModal'
import { Link } from 'react-router-dom'

// import Sections from './Sections'

const Header = () => {
    const [isModal, setModal] = useState( false);
    const [isRegister, setRegister] = useState( false);
    
    // const data = [
    //     {   id: 0,
        
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/f5cb/2b32/134312119200857c97bd79968ae6ccbd?Expires=1695600000&Signature=Qr6c88OrLpUmCFz8SpWZCPfZ8xUuK4f6PPsPdUqjp7JCWZ7K-Nc60WhizC900aS6dHBv44uiuxmH5q7Vzc9nHe8r5iQtq9FIJaOIG3jJWhWeJekhHi9kKDDfa039k~8AAgxkzDE7M-m9H66b6oin9XH1abXMfztVCI6X4DXUDFdUPp8Rvp0tsRBzroWAD9vT-NLeI2bfV~CxrCahL9rAhFCa9Cmt~M0bsXRU-bL4nHXEhtfmGR~ev4xizbwdjPqke7vuylxc65DEf6vNl3ItPVuZ~ej3AD1hLwVnGvJvpa8ZcAn12~zGhYTc7sfvGm8pStyvBmV0ChZXHXRqr0gWtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Sotuvlarni bosharish",
    //         title: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     },
    //     {   id: 1,
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/cfef/2d6d/83660be01b8578c2850505a83c662dab?Expires=1695600000&Signature=k0mxgIc~mVdOcls3JCQ35MUyWCs2sC86sc~u9Gg6v2ICKR3tJ5pZ9PYAZo55QoDk07jaDf1BX56lTEaZnHj9UVyLFeFnXDRoz-vFyXKoNkVrn9if7oq1xKBo72iWLvohcm4IMiZMxJD7idlWd5NgsCo~UwAQPLO7RdXenHuc8AKzjqR7hsEWCVJLPsJG0fdC4AxNuRVChdi8tx8VN~CkMC8RGfiH9Rtd3Tv7L6ypME4KFPqEXmHhnSxcMCi83xsjVP437SyYHa-8WcoK7XaqH4UvV6zXiSPTb5Kj1lm4jMTKTA9urpbl2wMT3RMRbi6mzVRbo8Jk9z7nbFz871atyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Anonim qo’ng’iroqlar",
    //         title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     },
    //     {   id: 2,
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/8620/8ff6/e6300f5bd2ab2ace1aa2343bcea19392?Expires=1695600000&Signature=IB64DTIAJG4-8y29MkTQ~8wL-pgf5zQn0XbDopQlkPfUtkHxKCTuW5-lgYdNF1wYM1z4swjfDZ9UdX2Oez~oK2fdF5gNvQX1GgQCLIyBA22GUuVVcCx-Z8RZ847aeO85yzOIBJkdvzFdh3aZpo0QiJdj7P9pmzHFLX6yS5H4MhQt~SvGLD2LhLHecAbI1hTlRsQzIo47jUEJ9WRogT3n6vOwfzhDk-Tg2WvSBsPq0gqlJNka~USwebCnElaPqVUAFtsvuAGgKu-4wsGCstEzceZJWLZ-Bpp5AfOTGlzHlMTctmG0Z1MfQw06Fcq5Ib~UgbHepBqXCmkOVRK8bma8Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Sotuvlarni bosharish",
    //         title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     },
    //     {   id: 3,
        
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/f5cb/2b32/134312119200857c97bd79968ae6ccbd?Expires=1695600000&Signature=Qr6c88OrLpUmCFz8SpWZCPfZ8xUuK4f6PPsPdUqjp7JCWZ7K-Nc60WhizC900aS6dHBv44uiuxmH5q7Vzc9nHe8r5iQtq9FIJaOIG3jJWhWeJekhHi9kKDDfa039k~8AAgxkzDE7M-m9H66b6oin9XH1abXMfztVCI6X4DXUDFdUPp8Rvp0tsRBzroWAD9vT-NLeI2bfV~CxrCahL9rAhFCa9Cmt~M0bsXRU-bL4nHXEhtfmGR~ev4xizbwdjPqke7vuylxc65DEf6vNl3ItPVuZ~ej3AD1hLwVnGvJvpa8ZcAn12~zGhYTc7sfvGm8pStyvBmV0ChZXHXRqr0gWtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Sotuvlarni bosharish",
    //         title: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     },
    //     {   id: 4,
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/cfef/2d6d/83660be01b8578c2850505a83c662dab?Expires=1695600000&Signature=k0mxgIc~mVdOcls3JCQ35MUyWCs2sC86sc~u9Gg6v2ICKR3tJ5pZ9PYAZo55QoDk07jaDf1BX56lTEaZnHj9UVyLFeFnXDRoz-vFyXKoNkVrn9if7oq1xKBo72iWLvohcm4IMiZMxJD7idlWd5NgsCo~UwAQPLO7RdXenHuc8AKzjqR7hsEWCVJLPsJG0fdC4AxNuRVChdi8tx8VN~CkMC8RGfiH9Rtd3Tv7L6ypME4KFPqEXmHhnSxcMCi83xsjVP437SyYHa-8WcoK7XaqH4UvV6zXiSPTb5Kj1lm4jMTKTA9urpbl2wMT3RMRbi6mzVRbo8Jk9z7nbFz871atyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Anonim qo’ng’iroqlar",
    //         title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     },
    //     {   id: 5,
    //         divStyle : {
    //             background: `url("https://s3-alpha-sig.figma.com/img/8620/8ff6/e6300f5bd2ab2ace1aa2343bcea19392?Expires=1695600000&Signature=IB64DTIAJG4-8y29MkTQ~8wL-pgf5zQn0XbDopQlkPfUtkHxKCTuW5-lgYdNF1wYM1z4swjfDZ9UdX2Oez~oK2fdF5gNvQX1GgQCLIyBA22GUuVVcCx-Z8RZ847aeO85yzOIBJkdvzFdh3aZpo0QiJdj7P9pmzHFLX6yS5H4MhQt~SvGLD2LhLHecAbI1hTlRsQzIo47jUEJ9WRogT3n6vOwfzhDk-Tg2WvSBsPq0gqlJNka~USwebCnElaPqVUAFtsvuAGgKu-4wsGCstEzceZJWLZ-Bpp5AfOTGlzHlMTctmG0Z1MfQw06Fcq5Ib~UgbHepBqXCmkOVRK8bma8Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
    //              backgroundPosition: '0px -121px',
    //              backgroundSize: 'cover',
    //              backgroundRepeat: 'no-repeat'
    //           },
    //         sub__title:  "Sotuvlarni bosharish",
    //         title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //         card_link_span : "Batafsil ko'rish"
    //     }
    // ]
    const handelModal = () => {
            setModal(!isModal);
    }
    const handelRegister = () => {
        setRegister(!isRegister);
    }
   
  return (<>
     
    <div className='header'>
            {/* header navbar section boshi */}
            <div className="nav-bar">
                    
                    <Link to="/"> 
                        <div className="logo">
                            <span>Logo</span> 

                        </div>
                    </Link> 
                    <ul>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 11.6923C11.0346 11.6923 10.2099 11.3503 9.52595 10.6663C8.84198 9.98236 8.5 9.15769 8.5 8.19233C8.5 7.22694 8.84198 6.40227 9.52595 5.7183C10.2099 5.03434 11.0346 4.69235 12 4.69235C12.9653 4.69235 13.79 5.03434 14.474 5.7183C15.158 6.40227 15.5 7.22694 15.5 8.19233C15.5 9.15769 15.158 9.98236 14.474 10.6663C13.79 11.3503 12.9653 11.6923 12 11.6923ZM6.0192 19.3077C5.59742 19.3077 5.23877 19.1599 4.94327 18.8644C4.64776 18.5689 4.5 18.2102 4.5 17.7885V17.0846C4.5 16.5949 4.63302 16.1414 4.89905 15.7241C5.16507 15.3068 5.52051 14.9859 5.96537 14.7616C6.95384 14.2769 7.95096 13.9135 8.95672 13.6712C9.96249 13.4289 10.9769 13.3077 12 13.3077C13.023 13.3077 14.0375 13.4289 15.0432 13.6712C16.049 13.9135 17.0461 14.2769 18.0346 14.7616C18.4794 14.9859 18.8349 15.3068 19.1009 15.7241C19.3669 16.1414 19.5 16.5949 19.5 17.0846V17.7885C19.5 18.2102 19.3522 18.5689 19.0567 18.8644C18.7612 19.1599 18.4025 19.3077 17.9808 19.3077H6.0192Z" fill="white"/>
                                </svg>
                            </span>
                            <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.25 17.6346C4.0375 17.6346 3.85938 17.5627 3.71563 17.4189C3.57188 17.2751 3.5 17.0969 3.5 16.8843C3.5 16.6717 3.57188 16.4936 3.71563 16.35C3.85938 16.2064 4.0375 16.1346 4.25 16.1346H19.75C19.9625 16.1346 20.1406 16.2065 20.2843 16.3504C20.4281 16.4942 20.5 16.6724 20.5 16.885C20.5 17.0975 20.4281 17.2756 20.2843 17.4192C20.1406 17.5628 19.9625 17.6346 19.75 17.6346H4.25ZM4.25 12.75C4.0375 12.75 3.85938 12.6781 3.71563 12.5343C3.57188 12.3905 3.5 12.2123 3.5 11.9997C3.5 11.7871 3.57188 11.609 3.71563 11.4654C3.85938 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4657C20.4281 11.6095 20.5 11.7877 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5346C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM4.25 7.86538C4.0375 7.86538 3.85938 7.79347 3.71563 7.64965C3.57188 7.50585 3.5 7.32765 3.5 7.11505C3.5 6.90247 3.57188 6.72438 3.71563 6.5808C3.85938 6.4372 4.0375 6.3654 4.25 6.3654H19.75C19.9625 6.3654 20.1406 6.43731 20.2843 6.58113C20.4281 6.72494 20.5 6.90314 20.5 7.11573C20.5 7.32833 20.4281 7.50642 20.2843 7.65C20.1406 7.79358 19.9625 7.86538 19.75 7.86538H4.25Z" fill="white"/>
                                    </svg>
                            </span>
                        </div>
                        { isRegister && ( <div className="dropdown__item">
                            <a onClick={()=> handelModal()} className='btn__login'>Tizimga kirish</a>
                            <a  className='btn__sign'>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"      height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.8746 13.75C18.662 13.75 18.484 13.6781 18.3404 13.5343C18.1968 13.3906 18.125 13.2125 18.125 13V10.75H15.875C15.6625 10.75 15.4844 10.6781 15.3406 10.5343C15.1969 10.3905 15.125 10.2123 15.125 9.99967C15.125 9.78707 15.1969 9.60898 15.3406 9.4654C15.4844 9.32182 15.6625 9.25002 15.875 9.25002H18.125V7C18.125 6.7875 18.1969 6.60937 18.3407 6.46562C18.4845 6.32189 18.6627 6.25002 18.8753 6.25002C19.0879 6.25002 19.266 6.32189 19.4096 6.46562C19.5532 6.60937 19.625 6.7875 19.625 7V9.25002H21.875C22.0875 9.25002 22.2656 9.32193 22.4093 9.46572C22.5531 9.60954 22.625 9.78774 22.625 10.0003C22.625 10.2129 22.5531 10.391 22.4093 10.5346C22.2656 10.6782 22.0875 10.75 21.875 10.75H19.625V13C19.625 13.2125 19.553 13.3906 19.4092 13.5343C19.2654 13.6781 19.0872 13.75 18.8746 13.75ZM8.87498 11.6923C7.91248 11.6923 7.08853 11.3496 6.40313 10.6642C5.71771 9.97876 5.375 9.15481 5.375 8.19232C5.375 7.22982 5.71771 6.40587 6.40313 5.72047C7.08853 5.03506 7.91248 4.69235 8.87498 4.69235C9.83746 4.69235 10.6614 5.03506 11.3468 5.72047C12.0322 6.40587 12.3749 7.22982 12.3749 8.19232C12.3749 9.15481 12.0322 9.97876 11.3468 10.6642C10.6614 11.3496 9.83746 11.6923 8.87498 11.6923ZM2.27885 19.3077C2.02275 19.3077 1.80808 19.221 1.63485 19.0478C1.46162 18.8745 1.375 18.6599 1.375 18.4038V17.0846C1.375 16.5949 1.50802 16.1413 1.77405 15.724C2.04007 15.3067 2.39551 14.9859 2.84038 14.7615C3.82884 14.2769 4.82595 13.9135 5.8317 13.6712C6.83747 13.4289 7.85189 13.3077 8.87498 13.3077C9.89804 13.3077 10.9125 13.4289 11.9182 13.6712C12.924 13.9135 13.9211 14.2769 14.9096 14.7615C15.3544 14.9859 15.7099 15.3067 15.9759 15.724C16.2419 16.1413 16.3749 16.5949 16.3749 17.0846V18.4038C16.3749 18.6599 16.2883 18.8745 16.1151 19.0478C15.9418 19.221 15.7272 19.3077 15.4711 19.3077H2.27885ZM2.87498 17.8077H14.875V17.0846C14.875 16.882 14.8163 16.6945 14.699 16.5221C14.5817 16.3497 14.4224 16.209 14.2211 16.1C13.3596 15.6756 12.4811 15.3541 11.5857 15.1355C10.6902 14.917 9.78668 14.8077 8.87498 14.8077C7.96326 14.8077 7.05969 14.917 6.16428 15.1355C5.26884 15.3541 4.39036 15.6756 3.52883 16.1C3.32754 16.209 3.16824 16.3497 3.05093 16.5221C2.93363 16.6945 2.87498 16.882 2.87498 17.0846V17.8077ZM8.87498 10.1923C9.42498 10.1923 9.89581 9.99649 10.2875 9.60482C10.6791 9.21316 10.875 8.74232 10.875 8.19232C10.875 7.64232 10.6791 7.17149 10.2875 6.77982C9.89581 6.38816 9.42498 6.19232 8.87498 6.19232C8.32498 6.19232 7.85414 6.38816 7.46248 6.77982C7.07081 7.17149 6.87498 7.64232 6.87498 8.19232C6.87498 8.74232 7.07081 9.21316 7.46248 9.60482C7.85414 9.99649 8.32498 10.1923 8.87498 10.1923Z" fill="#098BED"/>
                                        </svg>
                                </span>
                                Ro'yxatdan o'tish
                            </a>
                        </div> )
                        }
                    </div>
           

             </div> 
             {/* navbar section oxirir */}
          
      
             { isModal &&  <RegisterModal handelModal={handelModal} />}
    </div>  

            
    
    
   
    </>
  )
}

export default Header
