import React from 'react'
import Image from 'next/image'
import A1 from '../components/images/About1.JPG'
import LOGO from '../components/images/logo-removebg-preview.png'
import Radi from '../components/images/oil-removebg-preview.png'

function Homepage() {
  const imagesarr = [A1, LOGO, Radi];
  
  return (
  
    <div className='Home-container'>  
      <div className='home-content'>
             <Image className='Logo-name-image' src={LOGO} width={450} height={130}/>
<span className='brand-title'>"Custom radiators Crafted to Perfection"</span>
<p className='Common-text-font'>
At SAP Engineering, we've been at the forefront of radiator manufacturing and 
customization for an impressive 30 years.
 Our journey has been one of innovation, dedication, 
and a relentless pursuit of excellence. From locomotives to automobiles,
 from airways to industrial applications,
 our radiators have left an indelible mark on diverse industries worldwide.
</p>
  </div>
<div className='image-carousel-div'>
    <div className='carousel-div'>
    <Image width={550} height={300} src={A1}/>
    </div>
<div className='homepage-contact-info'>
 <h2 className='get-a-qoute'>Get a Quote!</h2> 
  <span className='email-homepage'>sapengg.sapengg@gmail.com</span>
</div>
</div>
</div>

  )
}

export default Homepage