import React from 'react';
import { Link } from "react-scroll";
import '../navbar/NavbarStyle.css';
import  Home  from '../home/home';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlinePhone} from 'react-icons/ai';
import {HiOutlineDocumentReport} from 'react-icons/hi';

import {AiFillCloseSquare} from 'react-icons/ai'

const Navbar = () => {
 
  return (
  
  <nav>
    <div className="nav__container">
      <div className="nav__action">
        <Link to='home' activeClass='active' smooth spy className='nav__section'>
         <AiOutlineHome />
        </Link>
        <Link to='about' activeClass='active' smooth spy className='nav__section'>
         <AiOutlineUser />
        </Link>
        <Link to='portfolio' activeClass='active' smooth spy className='nav__section'>
         <RiServiceLine />
        </Link>
        <Link to='services' activeClass='active' smooth spy className='nav__section'>
         <HiOutlineDocumentReport />
        </Link>
        <Link to='contact' activeClass='active' smooth spy className='nav__section'>
         <AiOutlinePhone/>
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar