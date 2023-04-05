import React from 'react';
import './home.css';
// import '../..//animation.css'
import {TypeAnimation} from 'react-type-animation';
import {Motion} from 'framer-motion';
import { fadeIn } from '../../variants'; 
import  Image  from '../../assets/pic.png';

const home = () => {
  return (
    <section className='section' id='home'>
       
      <div className='container'>
        <div className='container-left'>
              <div className="container-name">
                <span>Hello! I am</span>
                <span>NASHRUDIN H.</span>
                <span>Let me build web stuff for you</span>
              <span>
              "A Front-end Web Developer who love to turn ideas into reality through web development. I like to craft solid and scalable frontend products with great user experience"
              </span> 
              </div>
        </div>
        <div className="container-right">
          <img src={Image} alt="" />
        </div>
      </div>
      
    </section>
  )
}

export default home