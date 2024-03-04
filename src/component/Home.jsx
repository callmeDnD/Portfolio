import React, { useState, useEffect } from 'react';
import '../Style/home.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import MyImage from './pic.png'
const Typewriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(''); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === texts[currentTextIndex].length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCurrentIndex(0);
          setDisplayText('');
        }, 1000); // Change this delay to control how long to wait before displaying the next text
        return;
      }

      setDisplayText((prevText) => prevText + texts[currentTextIndex][currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 100); // Change the speed by adjusting this interval (milliseconds)

    return () => clearInterval(intervalId);
  }, [currentIndex, currentTextIndex, texts]);

  return <span>{displayText}</span>;
};

const Home = () => {
  const texts = ['Web Developer', 'Student', 'Handsome'];
  return (

  
   <div className="hmain" id='home'>
        <div className="right">
          <div className="rightc">
    <h1>I am </h1>
    <h1>Chris Raye Mendoza</h1>
   <h1><Typewriter texts={texts} /></h1>


   <div className="icon">
      <a href="https://web.facebook.com/chrisraye.mendoza.7"><FaFacebook className="icons"/></a>
      <a href="https://www.instagram.com/itsyurboychris/" ><AiFillInstagram className='icons'/></a> 
      <a href="https://github.com/Twosixtwentysix" ><FaGithub className='icons'/></a>
      </div></div>
</div>
   


   
        <div className="left">
            <div className="circle">
            
            <img src={MyImage} alt='' className="circle-img"/>
            </div>
        </div>
        <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
 </div>
    

  )
}

export default Home