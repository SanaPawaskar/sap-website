import React from 'react'
import Image from 'next/image'
import Logo from './images/LogoSap.png'
function Topbar() {
  return (
    <div className='topbar-card'>
       <Image src={Logo.src}  width={60} height={60} className='comany-navbar-logo'/>
       <span className='Solgan-tag'> <b className='company-name'>Sap Engineering</b> Heat Solutions Engineered to Perfection</span>
       <button className='callback-button'>Request Callback</button>
    </div>
  )
}

export default Topbar
