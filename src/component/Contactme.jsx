import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/contactme.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_5gmsvdv';
    const templateId ='template_be2xgaz';
    const publicKey = 'xMfALpd8DUeVIk8_w';
    
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'chris',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('email send successfully', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('error sending mail', error);
      });
  }

  return (
    <div className="ccontent" id='contactme'>
      <div className="ccontent">
        <div className="csub">
          <div className="csubone">
            <div className="csubtext">
              <h1>Let's Build Something </h1>
              <h1>Great Together</h1>
            </div>
          </div>
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
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  required
                  value={name}
                  placeholder='Your Name' 
                  onChange={(e) => setName(e.target.value)} 
                  className='input-box' 
                />
                <input 
                  type="email"  
                  required
                  value={email}
                  placeholder='Your Email Address' 
                  onChange={(e) => setEmail(e.target.value)} 
                  className='input-box' 
                />
                <input 
                  type="text" 
                  required
                  value={message}
                  placeholder='Your Message' 
                  onChange={(e) => setMessage(e.target.value)} 
                  className='input-box' 
                />
                <button type='submit' className='but'>Send Message</button>
              </form>
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
  );
}

export default Contactme;
