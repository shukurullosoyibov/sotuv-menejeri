import React, { useEffect } from 'react'
import { svg_click, svg_payme, svg_x } from '../svgG/svg'
import '../style/PaymentModal.css'

const PaymentModal = (props) => {
    
    const HandlePay = (e) =>{
        e.preventDefault()
    }
  useEffect(()=>{
       console.log(props);
  },[])
  return (
    <section className='paymentSection'>
        
        
        
         <div className="payment">
                        <a onClick={()=>props.handlShowModal()} className='goBack'>{svg_x}</a>
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
                                           {props.courseDetails.oldPriceFormat}
                                            </i>
                                            <span>
                                            {props.courseDetails.oldPriceFormat}
                                            </span>
                                    </div>
                                </div>
                                <button onClick={(e) =>HandlePay(e)}>
                                    <i> To’lov qilish</i> 
                                </button>
                          </div>
                          
                        </div>
                    </div>
                    <div className="pay_img">
                      <img src="https://s3-alpha-sig.figma.com/img/1e87/3f24/a8a0b6c18371c928f8eeeb57c9aa2569?Expires=1696204800&Signature=nMPcbXIJpcggNOOXq85DM8zi0fVd11C8rFCu1DwQZfS3uEvv7t0oguIdgNjvbjZfbRgwMYKpMZnl2iuoH2V5YS70ede0O0zzBQQus3CfpvCNrhQGPQxSMhLiq14mxLJt7OPHyzIcxX8XB-XBVfxEsaYasgihBRJ-Lgw7ecUuMSy4X3~OgIVODh5Z-2x7~qMU1HYlJXEaB4lHzJazAsZcYVMEkga8qrWuAJxPdgg~RIBg6WaO1iQ1gE-GCtrfcFk~Zy0bCyLR-kVXRORBvvOoM5-WO~FEDwjC6A6BbKIOzNzJL6kJ8hjOYZBIujExkERc0rlxb7eYKS-mi18pqmkgdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  alt={props.title} />
                    </div>


        </div>
    </section>
     
   
  )
}

export default PaymentModal
