import React, { useEffect, useState } from 'react'
import { svg_click, svg_payme, svg_x } from '../svgG/svg'
import '../style/PaymentModal.css'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const PaymentModal = ({ handlShowModal, courseDetails }) => {
  const {slug} = useParams();
      const [payment, setPaymnet] = useState();
      const token = localStorage.getItem("token");
      const [isRegister, setRegister] = useState( false);
      const [logoUrl, setLogoUrl] = useState('');
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState(null);
      const showInfoToast = () => {
          toast.success("To'lov amalga oshirildi");
        };
        const showErrorToast = (err) => {
          toast.error("To'lov amalga oshirildi" + err);
        };
     
    
     
 
        const fetchData = async (token) => {
          try {
            const response = await fetch('https://shark.brim.uz/api/profile-manager/profile/index', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
        
            if (!response.ok) {
              throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
            }
        
            const data = await response.json();
            return data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        };
        
        useEffect(() => {
          const token = localStorage.getItem('token');
          if (token) {
            fetchData(token)
              .then((fetchedData) => {
                setData(fetchedData);
                setLoading(false);
              })
              .catch((error) => {
                console.error(error);
                setLoading(false);
              });
          } else {
            alert('Token olinmadi');
            setLoading(false);
          }
        }, []);
        
        const handleBuyCourse = async (e) => {
          e.preventDefault();
          try {
            const token = localStorage.getItem('token');
            const params = new URLSearchParams();
             
              params.append('slug', slug);
            
        
            const response = await fetch(`https://shark.brim.uz/api/course-manager/course-payment/get-payme-url?courseKey=${slug}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
             
            });
        
            if (!response.ok) {
              throw new Error('Tarmoq javobi yaxshi emas');
            }
        
            const responseData = await response.json();
              console.log(params);
              console.log(responseData);
              console.log(responseData.data.url);
            if (responseData.message === 'success') {
              const paymentURL = responseData.data.url;
              
              console.log('Kurs sotib olingan:', responseData.course);
              showInfoToast();
              window.open(paymentURL, '_blank');
            } else if (responseData.message) {
              console.log(responseData.message);
              showErrorToast(responseData.message);
            } else {
              console.error(responseData);
              console.error(slug);
              console.error(token);
              alert('To\'lov muvaffaqiyatli amalga oshmadi. Iltimos, qayta urinib ko\'ring.');
            }
          } catch (error) {
            showErrorToast(error);
           
            console.error('Xatolik yuz berdi:', error);
            alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
          }
        };
        


    
   
 

  return (
    <section className='paymentSection'>
        
        
        
         <div className="payment">
                        <a onClick={()=>handlShowModal()} className='goBack'>{svg_x}</a>
                    <div className="pay_detalis">
                        <span>Kursni sotib olish</span>
                        <br />
                        <i>
                          Kursni davomini ko’rish uchun, sotib oling!
                        </i>
                        <div className="payment_selects">
                          <div className="payment_select">
                            <span>
                            To’lov tizimini tanlang
                            </span>
                             <div className='pay_sel_item'>
                                <label>
                                  <div>
                                    {svg_click} 
                                  </div>
                                  <input type="radio" name='pay' />
                                </label>
                                <label>
                                  {svg_payme}
                                  <input type="radio" name='pay' />
                                </label>
                                <label>
                                  <div className="apelsin">

                                  </div>
                                  <input type="radio" name='pay' />
                                </label>
                             </div>
                            
                          </  div>
                          <div className="button css-3yl5u2">
                                <div className='price_main'>
                                    <div className='price_title'>
                                            Kurs umumiy narxi
                                    </div>
                                    <div className='price_chegirma'>
                                            <i>
                                           {courseDetails.priceFormat}
                                            </i>
                                            <span>
                                            {courseDetails.priceFormat}
                                            </span>
                                    </div>
                                </div>
                                <button onClick={(e) =>handleBuyCourse(e)}>
                                    <i> To’lov qilish</i> 
                                </button>
                          </div>
                          
                        </div>
                    </div>
                    <div className="pay_img">
                      <img src="https://s3-alpha-sig.figma.com/img/1e87/3f24/a8a0b6c18371c928f8eeeb57c9aa2569?Expires=1696204800&Signature=nMPcbXIJpcggNOOXq85DM8zi0fVd11C8rFCu1DwQZfS3uEvv7t0oguIdgNjvbjZfbRgwMYKpMZnl2iuoH2V5YS70ede0O0zzBQQus3CfpvCNrhQGPQxSMhLiq14mxLJt7OPHyzIcxX8XB-XBVfxEsaYasgihBRJ-Lgw7ecUuMSy4X3~OgIVODh5Z-2x7~qMU1HYlJXEaB4lHzJazAsZcYVMEkga8qrWuAJxPdgg~RIBg6WaO1iQ1gE-GCtrfcFk~Zy0bCyLR-kVXRORBvvOoM5-WO~FEDwjC6A6BbKIOzNzJL6kJ8hjOYZBIujExkERc0rlxb7eYKS-mi18pqmkgdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt={courseDetails.title} />
                    </div>


        </div>
    </section>
     
   
  )
}

export default PaymentModal
