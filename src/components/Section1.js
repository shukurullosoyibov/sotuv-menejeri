import React from 'react'
import CaruselCard from './CaruselCard'

const Section1 = ({data = []}) => {
    
  return (
    <>  {/* section-1 boshi */}
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
    <div id='header__2' className="header__section-2 content">
            <div className="my_name">
                    <span>01.Kurslar</span>
                    <h3>Bizning professional kurslarimiz    </h3>
            </div>
           { <CaruselCard data={data} />}
    </div>
    {/* section-2 oxiri */}
    {/* section-3 boshi */}
    <div className='header__section-3 content'>
            <div className="section-1__title">
                        <div className="my_name">
                            <span>01.Kim?</span>
                            <h3>Islombek Ibragimov</h3>
                        </div>
                        <div className="section-1__title-subtitle">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                            </p>
                        </div>
                        <div className="my__sales">
                            <div className="my__sale">
                                <div className="sale__1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"      height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M17.6346 23.577L13.7628 19.7052C13.532 19.4744 13.242 19.3564 12.8926 19.351C12.5432 19.3457 12.2478 19.4637 12.0064 19.7052C11.765 19.9467 11.6442 20.2394 11.6442 20.5834C11.6442 20.9274 11.765 21.2201 12.0064 21.4615L16.5801 26.0352C16.8814 26.3365 17.2329 26.4872 17.6346 26.4872C18.0363 26.4872 18.3878 26.3365 18.6891 26.0352L27.9615 16.7628C28.1923 16.5321 28.3103 16.242 28.3156 15.8927C28.321 15.5433 28.203 15.2479 27.9615 15.0065C27.72 14.765 27.4273 14.6443 27.0833 14.6443C26.7393 14.6443 26.4466 14.765 26.2051 15.0065L17.6346 23.577ZM20.0028 35.8333C17.8129 35.8333 15.7545 35.4178 13.8276 34.5867C11.9007 33.7556 10.2245 32.6276 8.79919 31.2029C7.3738 29.7782 6.24537 28.1028 5.4139 26.1767C4.58242 24.2507 4.16669 22.1927 4.16669 20.0028C4.16669 17.8129 4.58224 15.7546 5.41335 13.8277C6.24447 11.9007 7.37238 10.2246 8.7971 8.79925C10.2219 7.37386 11.8973 6.24543 13.8233 5.41396C15.7493 4.58249 17.8073 4.16675 19.9972 4.16675C22.1871 4.16675 24.2455 4.58231 26.1724 5.41342C28.0993 6.24453 29.7754 7.37244 31.2008 8.79716C32.6262 10.2219 33.7546 11.8973 34.5861 13.8234C35.4175 15.7494 35.8333 17.8074 35.8333 19.9972C35.8333 22.1871 35.4177 24.2455 34.5866 26.1724C33.7555 28.0993 32.6276 29.7755 31.2029 31.2008C29.7781 32.6262 28.1027 33.7547 26.1766 34.5861C24.2506 35.4176 22.1927 35.8333 20.0028 35.8333ZM20 33.3334C23.7222 33.3334 26.875 32.0417 29.4583 29.4584C32.0416 26.875 33.3333 23.7223 33.3333 20C33.3333 16.2778 32.0416 13.125 29.4583 10.5417C26.875 7.95837 23.7222 6.66671 20 6.66671C16.2778 6.66671 13.125 7.95837 10.5416 10.5417C7.95831 13.125 6.66665 16.2778 6.66665 20C6.66665 23.7223 7.95831 26.875 10.5416 29.4584C13.125 32.0417 16.2778 33.3334 20 33.3334Z" fill="#098BED"/>
                                        </svg>
                                    </span>
                                    <div className="sale__title">
                                        <h4>
                                            10x sotuv
                                        </h4>
                                        <h6>
                                        Sotuvchilar uchun online darslik
                                        </h6>
                                    </div>
                                </div>
                                <div className="sale__2">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"      height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M17.6346 23.577L13.7628 19.7052C13.532 19.4744 13.242 19.3564 12.8926 19.351C12.5432 19.3457 12.2478 19.4637 12.0064 19.7052C11.765 19.9467 11.6442 20.2394 11.6442 20.5834C11.6442 20.9274 11.765 21.2201 12.0064 21.4615L16.5801 26.0352C16.8814 26.3365 17.2329 26.4872 17.6346 26.4872C18.0363 26.4872 18.3878 26.3365 18.6891 26.0352L27.9615 16.7628C28.1923 16.5321 28.3103 16.242 28.3156 15.8927C28.321 15.5433 28.203 15.2479 27.9615 15.0065C27.72 14.765 27.4273 14.6443 27.0833 14.6443C26.7393 14.6443 26.4466 14.765 26.2051 15.0065L17.6346 23.577ZM20.0028 35.8333C17.8129 35.8333 15.7545 35.4178 13.8276 34.5867C11.9007 33.7556 10.2245 32.6276 8.79919 31.2029C7.3738 29.7782 6.24537 28.1028 5.4139 26.1767C4.58242 24.2507 4.16669 22.1927 4.16669 20.0028C4.16669 17.8129 4.58224 15.7546 5.41335 13.8277C6.24447 11.9007 7.37238 10.2246 8.7971 8.79925C10.2219 7.37386 11.8973 6.24543 13.8233 5.41396C15.7493 4.58249 17.8073 4.16675 19.9972 4.16675C22.1871 4.16675 24.2455 4.58231 26.1724 5.41342C28.0993 6.24453 29.7754 7.37244 31.2008 8.79716C32.6262 10.2219 33.7546 11.8973 34.5861 13.8234C35.4175 15.7494 35.8333 17.8074 35.8333 19.9972C35.8333 22.1871 35.4177 24.2455 34.5866 26.1724C33.7555 28.0993 32.6276 29.7755 31.2029 31.2008C29.7781 32.6262 28.1027 33.7547 26.1766 34.5861C24.2506 35.4176 22.1927 35.8333 20.0028 35.8333ZM20 33.3334C23.7222 33.3334 26.875 32.0417 29.4583 29.4584C32.0416 26.875 33.3333 23.7223 33.3333 20C33.3333 16.2778 32.0416 13.125 29.4583 10.5417C26.875 7.95837 23.7222 6.66671 20 6.66671C16.2778 6.66671 13.125 7.95837 10.5416 10.5417C7.95831 13.125 6.66665 16.2778 6.66665 20C6.66665 23.7223 7.95831 26.875 10.5416 29.4584C13.125 32.0417 16.2778 33.3334 20 33.3334Z" fill="#098BED"/>
                                        </svg>
                                    </span>
                                    <div className="sale__title">
                                        <h4>
                                                 Mijoz “Pod klyuch”
                                        </h4>
                                        <h6>
                                                 Mijozlarni jalb qilish va sotuv bo’limini pod klyuch qurish
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="max__sale">
                            <div className="sale__3">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40"      height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M17.6346 23.577L13.7628 19.7052C13.532 19.4744 13.242 19.3564 12.8926 19.351C12.5432 19.3457 12.2478 19.4637 12.0064 19.7052C11.765 19.9467 11.6442 20.2394 11.6442 20.5834C11.6442 20.9274 11.765 21.2201 12.0064 21.4615L16.5801 26.0352C16.8814 26.3365 17.2329 26.4872 17.6346 26.4872C18.0363 26.4872 18.3878 26.3365 18.6891 26.0352L27.9615 16.7628C28.1923 16.5321 28.3103 16.242 28.3156 15.8927C28.321 15.5433 28.203 15.2479 27.9615 15.0065C27.72 14.765 27.4273 14.6443 27.0833 14.6443C26.7393 14.6443 26.4466 14.765 26.2051 15.0065L17.6346 23.577ZM20.0028 35.8333C17.8129 35.8333 15.7545 35.4178 13.8276 34.5867C11.9007 33.7556 10.2245 32.6276 8.79919 31.2029C7.3738 29.7782 6.24537 28.1028 5.4139 26.1767C4.58242 24.2507 4.16669 22.1927 4.16669 20.0028C4.16669 17.8129 4.58224 15.7546 5.41335 13.8277C6.24447 11.9007 7.37238 10.2246 8.7971 8.79925C10.2219 7.37386 11.8973 6.24543 13.8233 5.41396C15.7493 4.58249 17.8073 4.16675 19.9972 4.16675C22.1871 4.16675 24.2455 4.58231 26.1724 5.41342C28.0993 6.24453 29.7754 7.37244 31.2008 8.79716C32.6262 10.2219 33.7546 11.8973 34.5861 13.8234C35.4175 15.7494 35.8333 17.8074 35.8333 19.9972C35.8333 22.1871 35.4177 24.2455 34.5866 26.1724C33.7555 28.0993 32.6276 29.7755 31.2029 31.2008C29.7781 32.6262 28.1027 33.7547 26.1766 34.5861C24.2506 35.4176 22.1927 35.8333 20.0028 35.8333ZM20 33.3334C23.7222 33.3334 26.875 32.0417 29.4583 29.4584C32.0416 26.875 33.3333 23.7223 33.3333 20C33.3333 16.2778 32.0416 13.125 29.4583 10.5417C26.875 7.95837 23.7222 6.66671 20 6.66671C16.2778 6.66671 13.125 7.95837 10.5416 10.5417C7.95831 13.125 6.66665 16.2778 6.66665 20C6.66665 23.7223 7.95831 26.875 10.5416 29.4584C13.125 32.0417 16.2778 33.3334 20 33.3334Z" fill="#098BED"/>
                                        </svg>
                                    </span>
                                    <div className="sale__title">
                                        <h4>
                                                 Maksimal sotuvlar
                                        </h4>
                                        <h6>
                                                Sotuv bo’limi rahbarlari uchun mahsus kurslar
                                        </h6>
                                    </div>
                                </div>
                                <div className="btn">
                                    Ro'yxatdan o'tish
                                </div>
                            </div>
                        </div>
            </div>
            <div className="section-1__img section_3">
                <div className="section__3-img">
                <div className="doshshed"></div>
                </div>
                
            </div>
    </div>
      {/* section-3 oxiri */}
    {/* section-4 boshi */}
    <div className="header__section-4 content">
        <div className="section-4__1">
            <div className="section-4__1_f">
                <div className="my_name">
                        <span>Barchasi ta’limdan boshlanadi!</span>
                        <h3>Mustaqil ta’lim </h3>
                </div>
                <div className="btn">Ro’yxatdan o’tish</div>
            </div>
            <div className="section-4_2_f">
                <h4>
                Professional sotuvchi bo’lishni ikkita yo’li bor!
                </h4>
                <div className="section-4_2_f--card">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_6_96)">
                                <path d="M26.8957 26.2241H16.7409C16.4834 26.224 16.233 26.3086 16.0283 26.4648C15.8236 26.621 15.6759 26.8401 15.608 27.0885C15.5401 27.3369 15.5558 27.6007 15.6525 27.8393C15.7493 28.0779 15.9219 28.2781 16.1436 28.409C20.568 31.0234 22.8662 34.0731 23.1694 37.7323C23.2751 39.0022 24.4062 40.0166 25.6902 39.9998C27.0003 39.9789 28.2277 39.4537 29.147 38.5209C30.067 37.5872 30.5741 36.3508 30.5745 35.0396V34.6446C30.5745 31.4415 29.6258 29.3992 27.8752 26.7509C27.7682 26.589 27.6227 26.4561 27.4518 26.3642C27.2809 26.2722 27.0898 26.2241 26.8957 26.2241Z" fill="#FFC380"/>
                                <path d="M39.3408 24.8935C39.3408 26.922 37.6906 28.5723 35.6621 28.5723H16.7409C16.5307 28.5723 16.3243 28.5159 16.1434 28.4088C14.8152 27.6235 13.4741 26.977 12.3965 26.4574C12.0207 26.2762 11.6657 26.1051 11.3428 25.9437C11.1478 25.8461 10.9837 25.6962 10.8691 25.5108C10.7545 25.3253 10.6938 25.1116 10.6938 24.8935V9.86547C10.6938 9.64743 10.7545 9.43369 10.8691 9.24821C10.9837 9.06273 11.1478 8.91284 11.3428 8.81531C16.0868 6.44367 20.0302 6.15688 24.6287 6.15688C25.3408 6.15688 26.0691 6.16375 26.818 6.17078C27.6463 6.17859 28.5026 6.18672 29.4004 6.18672H33.1121C35.1405 6.18672 36.7908 7.83695 36.7908 9.86547C36.7908 10.5475 36.6043 11.1867 36.2795 11.7349C37.3364 12.382 38.0432 13.5473 38.0432 14.8748C38.0432 15.5569 37.8567 16.1961 37.5318 16.7443C38.5888 17.3913 39.2955 18.5567 39.2955 19.8842C39.2955 20.8383 38.9304 21.7087 38.3327 22.363C38.9836 23.049 39.3408 23.9438 39.3408 24.8935Z" fill="#FFCF99"/>
                                <path d="M8.01664 12.3552V6.17179H5.66852V12.3552C5.66852 13.0033 6.19453 13.5293 6.84258 13.5293C7.49063 13.5293 8.01664 13.0033 8.01664 12.3552Z" fill="#73C3FF"/>
                                <path d="M8.01664 12.3552V6.17179H5.66852V12.3552C5.66852 13.0033 6.19453 13.5293 6.84258 13.5293C7.49063 13.5293 8.01664 13.0033 8.01664 12.3552Z" fill="#73C3FF"/>
                                <path d="M11.852 28.5723H1.8333C1.18526 28.5723 0.659241 28.0462 0.659241 27.3982V7.36086C0.659241 6.71203 1.18526 6.1868 1.8333 6.17195H9.34729C10.7867 6.1868 12.0351 7.01726 12.6386 8.22422C12.8942 8.73355 13.0269 9.29568 13.026 9.86555V27.3982C13.026 28.0463 12.5 28.5723 11.852 28.5723Z" fill="#EC4444"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_96">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                    </span>
                    <h4>Online darslar o’qib  <span>1 oyda</span></h4>
                </div>
                <div className="section-4_2_f--card">
                    <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_6_120)">
                                <path d="M26.8957 19.9326H16.7409C16.4834 19.9327 16.233 19.8482 16.0283 19.692C15.8236 19.5358 15.6759 19.3166 15.608 19.0682C15.5401 18.8198 15.5558 18.556 15.6525 18.3174C15.7493 18.0788 15.9219 17.8786 16.1436 17.7477C20.568 15.1333 22.8662 12.0837 23.1694 8.42444C23.2751 7.15452 24.4062 6.14015 25.6902 6.15694C27.0003 6.17788 28.2277 6.70304 29.147 7.63585C30.067 8.56952 30.5741 9.80593 30.5745 11.1172V11.5121C30.5745 14.7152 29.6258 16.7576 27.8752 19.4058C27.7682 19.5678 27.6227 19.7006 27.4518 19.7926C27.2809 19.8845 27.0898 19.9326 26.8957 19.9326Z" fill="#FFC380"/>
                                <path d="M39.3408 21.2632C39.3408 19.2348 37.6906 17.5845 35.6621 17.5845H16.7409C16.5307 17.5845 16.3243 17.6409 16.1434 17.7479C14.8152 18.5332 13.4741 19.1797 12.3965 19.6993C12.0207 19.8805 11.6657 20.0517 11.3428 20.2131C11.1478 20.3106 10.9837 20.4605 10.8691 20.646C10.7545 20.8314 10.6938 21.0452 10.6938 21.2632V36.2913C10.6938 36.5093 10.7545 36.723 10.8691 36.9085C10.9837 37.094 11.1478 37.2439 11.3428 37.3414C16.0868 39.7131 20.0302 39.9999 24.6287 39.9999C25.3408 39.9999 26.0691 39.993 26.818 39.986C27.6463 39.9781 28.5026 39.97 29.4004 39.97H33.1121C35.1405 39.97 36.7908 38.3198 36.7908 36.2913C36.7908 35.6092 36.6043 34.97 36.2795 34.4218C37.3364 33.7748 38.0432 32.6094 38.0432 31.2819C38.0432 30.5999 37.8567 29.9606 37.5318 29.4124C38.5888 28.7654 39.2955 27.6 39.2955 26.2725C39.2955 25.3185 38.9304 24.4481 38.3327 23.7938C38.9836 23.1078 39.3408 22.213 39.3408 21.2632Z" fill="#FFCF99"/>
                                <path d="M36.8987 11.0248H34.394C33.7456 11.0248 33.2199 10.499 33.2199 9.85069C33.2199 9.20233 33.7456 8.67663 34.394 8.67663H36.8987C37.547 8.67663 38.0727 9.20233 38.0727 9.85069C38.0727 10.499 37.5471 11.0248 36.8987 11.0248ZM19.3659 11.0248H16.8613C16.2129 11.0248 15.6872 10.499 15.6872 9.85069C15.6872 9.20233 16.2129 8.67663 16.8613 8.67663H19.3659C20.0143 8.67663 20.54 9.20233 20.54 9.85069C20.54 10.499 20.0145 11.0248 19.3659 11.0248ZM23.1241 4.51764C22.7183 4.51764 22.3238 4.3071 22.1063 3.93045L20.854 1.76131C20.5298 1.19983 20.7222 0.481704 21.2837 0.157564C21.8452 -0.166655 22.5633 0.0257669 22.8874 0.587251L24.1398 2.75639C24.464 3.31788 24.2716 4.036 23.7101 4.36014C23.5321 4.46333 23.3299 4.51766 23.1241 4.51764ZM30.6359 4.51764C30.4301 4.51767 30.228 4.46334 30.0499 4.36014C29.4884 4.03592 29.296 3.31788 29.6202 2.75639L30.8726 0.587251C31.1967 0.0257669 31.9149 -0.166811 32.4763 0.157564C33.0378 0.481783 33.2302 1.19983 32.906 1.76131L31.6537 3.93045C31.4364 4.3071 31.0416 4.51764 30.6359 4.51764Z" fill="#29CCB1"/>
                                <path d="M8.01664 33.8015V39.9849H5.66852V33.8015C5.66852 33.1535 6.19453 32.6274 6.84258 32.6274C7.49063 32.6274 8.01664 33.1535 8.01664 33.8015Z" fill="#73C3FF"/>
                                <path d="M36.8987 11.0248H34.394C33.7456 11.0248 33.2199 10.499 33.2199 9.85069C33.2199 9.20233 33.7456 8.67663 34.394 8.67663H36.8987C37.547 8.67663 38.0727 9.20233 38.0727 9.85069C38.0727 10.499 37.5471 11.0248 36.8987 11.0248ZM19.3659 11.0248H16.8613C16.2129 11.0248 15.6872 10.499 15.6872 9.85069C15.6872 9.20233 16.2129 8.67663 16.8613 8.67663H19.3659C20.0143 8.67663 20.54 9.20233 20.54 9.85069C20.54 10.499 20.0145 11.0248 19.3659 11.0248ZM23.1241 4.51764C22.7183 4.51764 22.3238 4.3071 22.1063 3.93045L20.854 1.76131C20.5298 1.19983 20.7222 0.481704 21.2837 0.157564C21.8452 -0.166655 22.5633 0.0257669 22.8874 0.587251L24.1398 2.75639C24.464 3.31788 24.2716 4.036 23.7101 4.36014C23.5321 4.46333 23.3299 4.51766 23.1241 4.51764ZM30.6359 4.51764C30.4301 4.51767 30.228 4.46334 30.0499 4.36014C29.4884 4.03592 29.296 3.31788 29.6202 2.75639L30.8726 0.587251C31.1967 0.0257669 31.9149 -0.166811 32.4763 0.157564C33.0378 0.481783 33.2302 1.19983 32.906 1.76131L31.6537 3.93045C31.4364 4.3071 31.0416 4.51764 30.6359 4.51764Z" fill="#29CCB1"/>
                                <path d="M8.01664 33.8015V39.9849H5.66852V33.8015C5.66852 33.1535 6.19453 32.6274 6.84258 32.6274C7.49063 32.6274 8.01664 33.1535 8.01664 33.8015Z" fill="#73C3FF"/>
                                <path d="M11.852 17.5845H1.8333C1.18526 17.5845 0.659241 18.1105 0.659241 18.7585V38.7959C0.659241 39.4447 1.18526 39.9699 1.8333 39.9848H9.34729C10.7867 39.9699 12.0351 39.1395 12.6386 37.9325C12.8942 37.4232 13.0269 36.8611 13.026 36.2912V18.7585C13.026 18.1104 12.5 17.5845 11.852 17.5845Z" fill="#29CC43"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_120">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                    </span>
                    <h4>Mijozlardan so’shiklar eshitib <span>1-2 yilda</span></h4>
                </div>
            </div>
        </div>
        <div className="section-4__2">
            <div className="section-4__2-cards">
                <div className='card__title__1'>
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M6.61412 19.0615L10.9577 14.7179C11.1312 14.5444 11.3361 14.4588 11.5725 14.461C11.8088 14.4633 12.0137 14.5549 12.1872 14.7359C12.3487 14.9121 12.4295 15.1177 12.4295 15.3526C12.4295 15.5876 12.3487 15.7918 12.1872 15.9653L7.38141 20.789C7.17052 20.9999 6.92448 21.1054 6.64329 21.1054C6.36209 21.1054 6.11604 20.9999 5.90514 20.789L3.52021 18.4041C3.35869 18.2426 3.27979 18.0395 3.28352 17.795C3.28726 17.5504 3.3699 17.3474 3.53144 17.1859C3.69297 17.0243 3.89663 16.9436 4.14242 16.9436C4.38822 16.9436 4.59064 17.0243 4.74967 17.1859L6.61412 19.0615ZM6.61412 10.1769L10.9577 5.83333C11.1312 5.65983 11.3361 5.5742 11.5725 5.57646C11.8088 5.5787 12.0137 5.6703 12.1872 5.85127C12.3487 6.02749 12.4295 6.23309 12.4295 6.46806C12.4295 6.703 12.3487 6.90723 12.1872 7.08073L7.38141 11.9045C7.17052 12.1154 6.92448 12.2208 6.64329 12.2208C6.36209 12.2208 6.11604 12.1154 5.90514 11.9045L3.52021 9.51953C3.35869 9.35799 3.27979 9.15495 3.28352 8.91041C3.28726 8.66586 3.3699 8.46281 3.53144 8.30127C3.69297 8.13974 3.89663 8.05898 4.14242 8.05898C4.38822 8.05898 4.59064 8.13974 4.74967 8.30127L6.61412 10.1769ZM16.0529 19.3172C15.8049 19.3172 15.5971 19.2333 15.4294 19.0656C15.2617 18.8978 15.1779 18.6899 15.1779 18.4419C15.1779 18.1938 15.2617 17.9861 15.4294 17.8186C15.5971 17.651 15.8049 17.5673 16.0529 17.5673H24.2195C24.4675 17.5673 24.6753 17.6512 24.8429 17.819C25.0107 17.9867 25.0945 18.1946 25.0945 18.4427C25.0945 18.6907 25.0107 18.8984 24.8429 19.066C24.6753 19.2335 24.4675 19.3172 24.2195 19.3172H16.0529ZM16.0529 10.4327C15.8049 10.4327 15.5971 10.3488 15.4294 10.181C15.2617 10.0132 15.1779 9.80531 15.1779 9.55727C15.1779 9.30926 15.2617 9.1015 15.4294 8.93398C15.5971 8.76647 15.8049 8.68271 16.0529 8.68271H24.2195C24.4675 8.68271 24.6753 8.76659 24.8429 8.93436C25.0107 9.10215 25.0945 9.31005 25.0945 9.55806C25.0945 9.80609 25.0107 10.0139 24.8429 10.1814C24.6753 10.3489 24.4675 10.4327 24.2195 10.4327H16.0529Z" fill="#098BED"/>
                                </svg> 
                        </span>
                        <span>
                            Rivoj
                        </span>
                        
                </div>
                <div className='card__title__2'>
                    <h4>Haqiqiy mijoz, “Men o’ylab ko’raman” degandan keyin boshlanadi!
                    </h4>
                </div>
            </div>
            <div className="section-4__2-cards">
                <div className='card__title__1'>
                        <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M5.02573 23.9165C4.43641 23.9165 3.93758 23.7124 3.52925 23.304C3.12091 22.8957 2.91675 22.3969 2.91675 21.8076V9.69226C2.91675 9.10294 3.12091 8.60411 3.52925 8.19577C3.93758 7.78744 4.43641 7.58327 5.02573 7.58327H9.91675V5.60895C9.91675 5.01965 10.1209 4.52083 10.5292 4.1125C10.9376 3.70417 11.4364 3.5 12.0257 3.5H15.9744C16.5637 3.5 17.0625 3.70417 17.4709 4.1125C17.8792 4.52083 18.0834 5.01965 18.0834 5.60895V7.58327H22.9744C23.5637 7.58327 24.0625 7.78744 24.4709 8.19577C24.8792 8.60411 25.0834 9.10294 25.0834 9.69226V21.8076C25.0834 22.3969 24.8792 22.8957 24.4709 23.304C24.0625 23.7124 23.5637 23.9165 22.9744 23.9165H5.02573ZM5.02573 22.1666H22.9744C23.0641 22.1666 23.1464 22.1292 23.2212 22.0544C23.296 21.9796 23.3334 21.8973 23.3334 21.8076V9.69226C23.3334 9.6025 23.296 9.52022 23.2212 9.44542C23.1464 9.37064 23.0641 9.33325 22.9744 9.33325H5.02573C4.93598 9.33325 4.8537 9.37064 4.77889 9.44542C4.70411 9.52022 4.66672 9.6025 4.66672 9.69226V21.8076C4.66672 21.8973 4.70411 21.9796 4.77889 22.0544C4.8537 22.1292 4.93598 22.1666 5.02573 22.1666ZM11.6667 7.58327H16.3334V5.60895C16.3334 5.5192 16.296 5.43693 16.2212 5.36215C16.1464 5.28734 16.0641 5.24994 15.9744 5.24994H12.0257C11.936 5.24994 11.8537 5.28734 11.7789 5.36215C11.7041 5.43693 11.6667 5.5192 11.6667 5.60895V7.58327Z" fill="#098BED"/>
                            </svg>
                        </span>
                        <span>
                             Boshqaruv
                        </span>
                        
                </div>
                <div className='card__title__2'>
                    <h4>Eng kuchli sotuvchi bu - sotuvni boshqaradigan inson
                    </h4>
                </div>
            </div>
            <div className="section-4__2-cards">
                <div className='card__title__1'>
                        <span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M3.79175 24.2083V22.2901L5.54169 20.5401V24.2083H3.79175ZM8.45842 24.2083V17.6234L10.2084 15.8735V24.2083H8.45842ZM13.1251 24.2083V15.8735L14.875 17.6526V24.2083H13.1251ZM17.7917 24.2083V17.6526L19.5417 15.9026V24.2083H17.7917ZM22.4584 24.2083V12.9567L24.2084 11.2068V24.2083H22.4584ZM3.79175 17.7557V15.2901L11.6667 7.41509L16.3334 12.0818L24.2084 4.20679V6.67242L16.3334 14.5474L11.6667 9.88073L3.79175 17.7557Z" fill="#098BED"/>
                            </svg> 
                        </span>
                        <span>
                              Sotuv
                        </span>
                        
                </div>
                <div className='card__title__2'>
                    <h4>Sotuvning birinchi qonuni bu “sotmaslik
                    </h4>
                </div>
            </div>
            <div className="section-4__2-cards">
                <div className='card__title__1'>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M6.39429 25.0834C5.43854 25.0834 4.62 24.7427 3.93869 24.0614C3.2574 23.3801 2.91675 22.5616 2.91675 21.6058C2.91675 20.6501 3.2574 19.8315 3.93869 19.1502C4.62 18.469 5.43854 18.1283 6.39429 18.1283C6.73651 18.1283 7.06924 18.1795 7.39246 18.282C7.71569 18.3845 8.01191 18.5284 8.28114 18.7139L13.1251 13.8699V9.75289C12.3742 9.55994 11.7528 9.15487 11.2607 8.53766C10.7686 7.92044 10.5225 7.20598 10.5225 6.39429C10.5225 5.43854 10.8632 4.62 11.5445 3.93869C12.2258 3.2574 13.0443 2.91675 14.0001 2.91675C14.9558 2.91675 15.7743 3.2574 16.4556 3.93869C17.1369 4.62 17.4776 5.43854 17.4776 6.39429C17.4776 7.20598 17.2334 7.92044 16.745 8.53766C16.2567 9.15487 15.6334 9.55994 14.875 9.75289V13.8699L19.7369 18.7139C20.0062 18.5284 20.2988 18.3845 20.6148 18.282C20.9308 18.1795 21.2611 18.1283 21.6058 18.1283C22.5616 18.1283 23.3801 18.469 24.0614 19.1502C24.7427 19.8315 25.0834 20.6501 25.0834 21.6058C25.0834 22.5616 24.7427 23.3801 24.0614 24.0614C23.3801 24.7427 22.5616 25.0834 21.6058 25.0834C20.6501 25.0834 19.8315 24.7427 19.1502 24.0614C18.469 23.3801 18.1283 22.5616 18.1283 21.6058C18.1283 21.3154 18.1627 21.033 18.2315 20.7587C18.3003 20.4843 18.4013 20.2275 18.5344 19.9882L14.0001 15.4539L9.46571 19.9882C9.59883 20.2275 9.6998 20.4843 9.76861 20.7587C9.83741 21.033 9.8718 21.3154 9.8718 21.6058C9.8718 22.5616 9.53116 23.3801 8.84986 24.0614C8.16857 24.7427 7.35004 25.0834 6.39429 25.0834ZM21.6045 23.3334C22.084 23.3334 22.492 23.1656 22.8286 22.8299C23.1651 22.4942 23.3334 22.0867 23.3334 21.6072C23.3334 21.1276 23.1656 20.7196 22.8299 20.3831C22.4942 20.0465 22.0867 19.8783 21.6072 19.8783C21.1276 19.8783 20.7196 20.0461 20.3831 20.3818C20.0465 20.7174 19.8783 21.125 19.8783 21.6045C19.8783 22.084 20.0461 22.492 20.3818 22.8286C20.7174 23.1651 21.125 23.3334 21.6045 23.3334ZM13.9987 8.12183C14.4782 8.12183 14.8863 7.95401 15.2228 7.61836C15.5594 7.28271 15.7276 6.87512 15.7276 6.3956C15.7276 5.91608 15.5598 5.50806 15.2241 5.17154C14.8885 4.83499 14.4809 4.66672 14.0014 4.66672C13.5219 4.66672 13.1138 4.83455 12.7773 5.1702C12.4408 5.50586 12.2725 5.91345 12.2725 6.39295C12.2725 6.87247 12.4403 7.2805 12.776 7.61704C13.1116 7.95357 13.5192 8.12183 13.9987 8.12183ZM6.39295 23.3334C6.87247 23.3334 7.2805 23.1656 7.61704 22.8299C7.95357 22.4942 8.12183 22.0867 8.12183 21.6072C8.12183 21.1276 7.95401 20.7196 7.61836 20.3831C7.28271 20.0465 6.87512 19.8783 6.3956 19.8783C5.91608 19.8783 5.50806 20.0461 5.17154 20.3818C4.83499 20.7174 4.66672 21.125 4.66672 21.6045C4.66672 22.084 4.83454 22.492 5.17019 22.8286C5.50586 23.1651 5.91345 23.3334 6.39295 23.3334Z" fill="#098BED" />
                            </svg>
                        </span>
                        <span>
                            Marketing
                        </span>
                        
                </div>
                <div className='card__title__2'>
                    <h4>“Vkusingizdagi” Mijozni toping
                    </h4>
                </div>
            </div>
           
        </div>
    </div>
      {/* section-4 oxiri */}
    {/* section-5 boshi */}
    <div className="header__section-5 content">
        <div className="section-5__1-f">
            <div className="my_name">
                <span>
                    Bepul birinchi dars
                </span>
                <h3>
                    Birinchi darsni sizga bepulga taqdim etamiz!
                </h3>
                <div className="btn">Ro'yxatdan o'tish</div>
            </div>
        </div>
        <div className="sectiot-5__youTube">
            <div className="my_name">
                <span >
                    Fikrlar
                </span>
                <h3 >
                    Ishtirokchilar fikrlari
                </h3>
            </div>
            <div className="sectiot-5__youTube__cards">
                <div className="youTube__cards">
                    <div className='you-tube__logo'>
                        <img src="https://s3-alpha-sig.figma.com/img/40e8/e59f/22524a7ebce7164ce3ea4684d6b9c162?Expires=1695600000&Signature=c4txkn8Xd2fi-qa7VNQmVHplYIGLf0Nn1QxF8cA~-2W1~5Q8ZIrs2AEBozGSiaQII5ocs2T5V9zqoKloP9DFs7Z5eWEuHaAciWMtX49ayYXSbP~0aLWA2ewRUrcr79xkfDFRVqZ0~xSXu9Bj3sTAYsM7HJSxocxQKxnGKt~zH~sHM8WZzPMdMAfMFUV-uf4~XnDqhl5jLsW8fRndXLbpDO7yhSFriFQlwC9HHm3gWtH-wKi4CCuFNEqsGcwdEmR~yzHYNfnWokwn32rZzRxvJ0Iu3dXzJqfgiArW7dmYHdsib0mCpLjmDi9Z89QZ3df~HWuUHdS6XTfizmEZ6WzJhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="youtube logo" />
                    </div>
                </div>
                <div className="youTube__cards">
                    <div className='you-tube__logo'>
                        <img src="https://s3-alpha-sig.figma.com/img/40e8/e59f/22524a7ebce7164ce3ea4684d6b9c162?Expires=1695600000&Signature=c4txkn8Xd2fi-qa7VNQmVHplYIGLf0Nn1QxF8cA~-2W1~5Q8ZIrs2AEBozGSiaQII5ocs2T5V9zqoKloP9DFs7Z5eWEuHaAciWMtX49ayYXSbP~0aLWA2ewRUrcr79xkfDFRVqZ0~xSXu9Bj3sTAYsM7HJSxocxQKxnGKt~zH~sHM8WZzPMdMAfMFUV-uf4~XnDqhl5jLsW8fRndXLbpDO7yhSFriFQlwC9HHm3gWtH-wKi4CCuFNEqsGcwdEmR~yzHYNfnWokwn32rZzRxvJ0Iu3dXzJqfgiArW7dmYHdsib0mCpLjmDi9Z89QZ3df~HWuUHdS6XTfizmEZ6WzJhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="youtube logo" />
                    </div>
                </div>
                <div className="youTube__cards">
                    <div className='you-tube__logo'>
                        <img src="https://s3-alpha-sig.figma.com/img/40e8/e59f/22524a7ebce7164ce3ea4684d6b9c162?Expires=1695600000&Signature=c4txkn8Xd2fi-qa7VNQmVHplYIGLf0Nn1QxF8cA~-2W1~5Q8ZIrs2AEBozGSiaQII5ocs2T5V9zqoKloP9DFs7Z5eWEuHaAciWMtX49ayYXSbP~0aLWA2ewRUrcr79xkfDFRVqZ0~xSXu9Bj3sTAYsM7HJSxocxQKxnGKt~zH~sHM8WZzPMdMAfMFUV-uf4~XnDqhl5jLsW8fRndXLbpDO7yhSFriFQlwC9HHm3gWtH-wKi4CCuFNEqsGcwdEmR~yzHYNfnWokwn32rZzRxvJ0Iu3dXzJqfgiArW7dmYHdsib0mCpLjmDi9Z89QZ3df~HWuUHdS6XTfizmEZ6WzJhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="youtube logo" />
                    </div>
                </div>
               
            </div>

        </div>


    </div>
      {/* section-5 oxiri */}
    </>
  )
}

export default Section1
