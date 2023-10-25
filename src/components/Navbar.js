import React, {useState} from 'react'
import Image from 'next/image'
import Logo from './images/LogoSap.png'
import Link from 'next/link';
import Dropdown from './Dropdown';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div>

{/* <div className='Navbar-for-desktop'>
<ul className="dropdown-for-desktop">
  <Link href="/"><li className='nav-item-desktop'>Home</li></Link>
  <Link href="/Productpage"> <li className='nav-item-desktop'> Applications &Products</li></Link>
  {dropdown && <Dropdown/>}
  <Link href="/About"> <li className='nav-item-desktop'>About us</li></Link>
  <Link href="/"> <li className='nav-item-desktop'>Contact</li></Link> 
   </ul>
    
</div> */}
<nav>
<ul id='primary-navigation' className='primary-navigation flex'>
<Link href="/"><li className='nav-item-desktop'>Home</li></Link>
  <Link href="/Productpage"> <li className='nav-item-desktop'> Applications &Products</li></Link>

  <Link href="/About"> <li className='nav-item-desktop'>About us</li></Link>
  <Link href="/"> <li className='nav-item-desktop'>Contact</li></Link> 

</ul>

</nav>
{/* /****************Navbar for mobile view */ }
{/* <div className="nav">
    <div className="navbar">
<div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
<div className={isMenuOpen ? "hamBox hamBoxOpen" : "hamBox"}>
<span className={ isMenuOpen ? "lineTop spin" : "lineTop"}></span>
<span className={ isMenuOpen ? "lineBottom spin" : "lineBottom"}></span>

</div>

</div>
   </div>
   <div className="nav-overlay" style={
    { top: isMenuOpen ? "0" : "-100%",
     transitionDelay: isMenuOpen ? "0s" : "0s",}
   }>
  <ul className="dropdown">
  <Link href="/index"><li className='nav-item'>Home</li></Link>
  <Link href="/Productpage"> <li className='nav-item'> Applications &Products</li></Link>
  <Link href="/About"> <li className='nav-item'>About us</li></Link>
  <Link href="/Contact"> <li className='nav-item'>Contact</li></Link>
  </ul>


   </div>

</div> */}
    </div>
  )
}

export default Navbar