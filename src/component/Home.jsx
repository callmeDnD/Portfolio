import React from 'react'
import '../Style/home.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import MyImage from './pic.png'
const Home = () => {
  return (
  
   <div className="hmain" id='home'>
        <div className="right">
          <div className="rightc">
    <h1>I am </h1>
    <h1>Chris Raye Mendoza</h1>
    <h1>Web Developer</h1>
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
 </div>
    

  )
}

export default Home