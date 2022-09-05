import React, { useState } from 'react';
import './navbar.css';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import{HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import{FaFacebook,FaPinterest,FaYoutube,FaTelegram,FaTwitter} from 'react-icons/fa';
import { Link } from 'react-scroll'
function Navbar() {
  const [nav,setNav] = useState(false);
  const handleNav = ()=>setNav(!nav)
  return (
    <div name="home" className={nav ? 'navbar navbar-bg':'navbar'}>
        <div className={nav ? 'logo dark':'logo'}>
        <h1>Beaches</h1>
        </div>
<ul className='nav-menu'>
   
    <Link to="home" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Home</li></Link>
    <Link to="destination"smooth={true} duration={500} style={{cursor:"pointer"}}><li>Destinations</li></Link>
    <Link to="search" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Travel</li></Link>
    <Link to="search" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Book</li></Link>
    <Link to="selects" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Views</li></Link>
</ul>
<div className='nav-icons'>
    <BiSearch className="icon" style={{marginRight:'1rem'}}/ >
    <BsPerson className="icon"/>
</div>
<div className='hamburger' onClick={handleNav}>
    {!nav?(<HiOutlineMenuAlt4 className="icon"/>):( <AiOutlineClose className='icon'/>)}
</div>
    <div className={nav ? 'mobile-menu active':'mobile-menu'}>
  <ul className='mobile-nav'>
  <Link to="home" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Home</li></Link>
    <Link to="destination"smooth={true} duration={500} style={{cursor:"pointer"}}><li>Destinations</li></Link>
    <Link to="search" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Travel</li></Link>
    <Link to="search" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Book</li></Link>
    <Link to="selects" smooth={true} duration={500} style={{cursor:"pointer"}}><li>Views</li></Link>
  </ul>
   <div className='mobile-menu-bottom'>
      <div className='menu-icons'>
      <button type="button">Search</button>
      <button type="button">Account</button>
    </div>
      <div className='social-icons'>
        <FaFacebook className="icon"/>
        <FaYoutube className="icon"/>
        <FaTwitter className="icon"/>
        <FaPinterest className="icon"/>
        <FaTelegram className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
