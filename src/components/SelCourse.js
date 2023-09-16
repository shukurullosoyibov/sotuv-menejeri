import React from 'react'
import ItemCourse from './ItemCourse'

const SelCourse = (props) => {
    const { id, course__name, course_item} = props;
    const dublicate = (course_item) => [...new Set(course_item)];
  return (
    <div className='course_1'>
        <div className="main">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M16.1167 33.5385C16.6184 33.5385 17.0384 33.3688 17.3769 33.0294C17.7153 32.69 17.8846 32.2695 17.8846 31.7679C17.8846 31.2662 17.7149 30.8461 17.3755 30.5077C17.0362 30.1692 16.6157 30 16.114 30C15.6123 30 15.1923 30.1697 14.8538 30.5091C14.5154 30.8484 14.3462 31.2689 14.3462 31.7706C14.3462 32.2722 14.5158 32.6923 14.8552 33.0308C15.1945 33.3692 15.615 33.5385 16.1167 33.5385ZM16.1167 25.7692C16.6184 25.7692 17.0384 25.5995 17.3769 25.2602C17.7153 24.9208 17.8846 24.5003 17.8846 23.9987C17.8846 23.497 17.7149 23.0769 17.3755 22.7385C17.0362 22.4 16.6157 22.2308 16.114 22.2308C15.6123 22.2308 15.1923 22.4005 14.8538 22.7398C14.5154 23.0792 14.3462 23.4997 14.3462 24.0014C14.3462 24.503 14.5158 24.9231 14.8552 25.2616C15.1945 25.6 15.615 25.7692 16.1167 25.7692ZM16.1167 18C16.6184 18 17.0384 17.8303 17.3769 17.491C17.7153 17.1516 17.8846 16.7311 17.8846 16.2295C17.8846 15.7278 17.7149 15.3077 17.3755 14.9693C17.0362 14.6308 16.6157 14.4616 16.114 14.4616C15.6123 14.4616 15.1923 14.6312 14.8538 14.9706C14.5154 15.31 14.3462 15.7305 14.3462 16.2322C14.3462 16.7338 14.5158 17.1539 14.8552 17.4923C15.1945 17.8308 15.615 18 16.1167 18ZM23.6923 33.2692H32.0769C32.5019 33.2692 32.8581 33.1254 33.1456 32.8378C33.4331 32.5501 33.5769 32.1937 33.5769 31.7686C33.5769 31.3434 33.4331 30.9872 33.1456 30.7C32.8581 30.4128 32.5019 30.2693 32.0769 30.2693H23.6923C23.2673 30.2693 22.911 30.4131 22.6235 30.7007C22.336 30.9883 22.1923 31.3447 22.1923 31.7699C22.1923 32.1951 22.336 32.5512 22.6235 32.8384C22.911 33.1256 23.2673 33.2692 23.6923 33.2692ZM23.6923 25.5H32.0769C32.5019 25.5 32.8581 25.3562 33.1456 25.0686C33.4331 24.7809 33.5769 24.4245 33.5769 23.9994C33.5769 23.5742 33.4331 23.218 33.1456 22.9308C32.8581 22.6436 32.5019 22.5001 32.0769 22.5001H23.6923C23.2673 22.5001 22.911 22.6439 22.6235 22.9315C22.336 23.2191 22.1923 23.5755 22.1923 24.0007C22.1923 24.4259 22.336 24.782 22.6235 25.0692C22.911 25.3564 23.2673 25.5 23.6923 25.5ZM23.6923 17.7308H32.0769C32.5019 17.7308 32.8581 17.5869 33.1456 17.2993C33.4331 17.0117 33.5769 16.6553 33.5769 16.2301C33.5769 15.8049 33.4331 15.4488 33.1456 15.1616C32.8581 14.8744 32.5019 14.7308 32.0769 14.7308H23.6923C23.2673 14.7308 22.911 14.8746 22.6235 15.1623C22.336 15.4499 22.1923 15.8063 22.1923 16.2315C22.1923 16.6567 22.336 17.0128 22.6235 17.3C22.911 17.5872 23.2673 17.7308 23.6923 17.7308ZM10.6154 41C9.60513 41 8.75 40.65 8.05 39.95C7.35 39.25 7 38.3948 7 37.3846V10.6155C7 9.6052 7.35 8.75006 8.05 8.05006C8.75 7.35006 9.60513 7.00006 10.6154 7.00006H37.3845C38.3948 7.00006 39.2499 7.35006 39.9499 8.05006C40.6499 8.75006 40.9999 9.6052 40.9999 10.6155V37.3846C40.9999 38.3948 40.6499 39.25 39.9499 39.95C39.2499 40.65 38.3948 41 37.3845 41H10.6154ZM10.6154 38H37.3845C37.5384 38 37.6794 37.9359 37.8076 37.8077C37.9359 37.6795 38 37.5384 38 37.3846V10.6155C38 10.4616 37.9359 10.3205 37.8076 10.1923C37.6794 10.0641 37.5384 10 37.3845 10H10.6154C10.4615 10 10.3205 10.0641 10.1922 10.1923C10.064 10.3205 9.99995 10.4616 9.99995 10.6155V37.3846C9.99995 37.5384 10.064 37.6795 10.1922 37.8077C10.3205 37.9359 10.4615 38 10.6154 38Z" fill="#098BED"/>
                </svg>
            </span>
            <div>
                {course__name}
                <p>{props.length} topics</p>
            </div>
            <div className="dDOwn">
                <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.9951 22C15.747 22 15.516 21.9617 15.3022 21.885C15.0883 21.8083 14.885 21.6768 14.6923 21.4902L5.4378 12.5333C5.15267 12.2574 5.00681 11.9106 5.00022 11.4928C4.99359 11.075 5.13945 10.7218 5.4378 10.4331C5.73611 10.1444 6.09777 10 6.52279 10C6.94781 10 7.30948 10.1444 7.60779 10.4331L15.9951 18.5507L24.3825 10.4331C24.6676 10.1571 25.026 10.016 25.4576 10.0096C25.8892 10.0032 26.2542 10.1444 26.5525 10.4331C26.8508 10.7218 27 11.0718 27 11.4832C27 11.8946 26.8508 12.2446 26.5525 12.5333L17.2979 21.4902C17.1052 21.6768 16.902 21.8083 16.6881 21.885C16.4743 21.9617 16.2433 22 15.9951 22Z" fill="black"/>
                    </svg>
                </span>
            </div>
        </div>
        <div className="main__content">
           <div>
                 <h4>
                Lesson Content
                </h4>
                <h3>0% COMPLETE0/{props.length} Steps</h3>
           </div>
           <div>
                {/* {  select.course_item === select.id && (

                
                    select.course_item.map( (el) => (
                        <ItemCourse key={el} {...el} />
                    )))
                } */}
                
                {/* {Array.isArray(course_item) && course_item.length > 0 ? (
                     course_item.map((el) => (
                <ItemCourse key={el} {...el} />
                ))
             ) : (
                <p>Dars tarkibi mavjud emas.</p>
            )} */}
            { 
             course_item.id === id &&  console.log(dublicate)}
           </div>
        </div>

    </div>
  )
}

export default SelCourse