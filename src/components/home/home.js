import React from 'react';
import './home.css';
import {BsGithub,BsFacebook, BsInstagram, BsBehance } from 'react-icons/bs';
import {AiOutlinePhone} from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation';
import {Motion} from 'framer-motion';
import { fadeIn } from '../../variants'; 
import  Image  from '../../assets/mypic.png';

const home = () => {
  return (
    <section className='section' id='home'>
      

      <div className='container'>
        <div>
          {}
          <div className='myname'>
            <h1>NASHRUDIN <span>HABIBON </span></h1>
          </div>
          <div className='animation_container'>
            <span>I am a </span>
            <TypeAnimation
              sequence={[
                'FRONTEND DEVELOPER', 2000,
                'GRAPHICS DESIGNER', 2000,
                'UI/UX DESIGNER', 2000,
              ]}

              speed={50}
              className='type-animation'
              wrapper='span'
              repeat={Infinity}
            />

          </div>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          <div className='contact__btn'>
            <button>
                <p>Contact Me</p>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
            </button>
          </div>
          {}
          <div className='img__container'>

          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M30.8,-49.9C41.1,-41.3,51.4,-34.7,60.4,-24.7C69.4,-14.7,77.1,-1.3,74.7,10.2C72.3,21.8,59.7,31.3,49.8,43.4C39.8,55.5,32.3,70.2,20.4,77.2C8.5,84.2,-8,83.6,-23,78.9C-37.9,74.2,-51.5,65.3,-61.7,53.5C-71.9,41.7,-78.7,27,-82,11.2C-85.3,-4.7,-85,-21.7,-75.5,-31.2C-66,-40.7,-47.4,-42.7,-33.3,-49.5C-19.1,-56.3,-9.6,-68,0.3,-68.5C10.3,-69,20.5,-58.4,30.8,-49.9Z" transform="translate(100 100)" />
          </svg> */}
           
            <div className='profile'>
              {/* <img src={ Image } alt=''/> */}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home