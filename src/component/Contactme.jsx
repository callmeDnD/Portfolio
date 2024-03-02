import React from 'react'
import '../Style/contactme.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const Contactme = () => {
  
    
    return (
    
    <div className="ccontent" id='contactme'>
        <div className="ccontent">
            <div className="csub">
                <div className="csubone">
                    <div className="csubtext">
                    <h1>Let's Build Something </h1>
                    <h1>Great Together</h1>
                </div></div>
                <div className="orhere">
                    <p>Or Contact me here</p>
                  </div>  
                  <div className="cicon">
                    <a href="https://web.facebook.com/chrisraye.mendoza.7" className="licons"><FaFacebook/></a>
                    <a href="https://www.instagram.com/itsyurboychris/" className="licons"><AiFillInstagram/></a>
                    <a href="https://web.facebook.com/chrisraye.mendoza.7" className="licons"><FaTelegram/></a>
                    <a href="https://www.tiktok.com/@yallchrismf?is_from_webapp=1&sender_device=pc" className="licons"><FaTiktok/></a>
                          
                    </div>
                
            </div>  
            <div className="csub">
                <div className="csubtwo">
                    <h1>Message me </h1>
                    <div className="cinput">
                        <input type="text" placeholder='Your Name' className='input-box' />
                        <input type="text" placeholder='Your Email Address' className='input-box' />
                        <input type="text" placeholder='Your Message' className='input-box' />
                        <button className='but'>Send Message</button>
                    </div>
                </div>
                <div className="orhereone">
                    <p>Or Contact me here</p>
                  </div>  
                  <div className="ciconone">
                    <a href="https://web.facebook.com/chrisraye.mendoza.7" className="licons"><FaFacebook/></a>
                    <a href="https://www.instagram.com/itsyurboychris/" className="licons"><AiFillInstagram/></a>
                    <a href="https://web.facebook.com/chrisraye.mendoza.7" className="licons"><FaTelegram/></a>
                    <a href="https://www.tiktok.com/@yallchrismf?is_from_webapp=1&sender_device=pc" className="licons"><FaTiktok/></a>
                          
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contactme