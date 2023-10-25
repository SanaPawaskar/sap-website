import { useRef, useEffect } from 'react';
import Image from 'next/image'
import Eng from './images/Developmentimage1.png'
import Manu from './images/Developmentimage2.png'
import A2 from './images/Developmentimage3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function DevelopmentComp() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<div className='Development' >
<div className='home-brand-heading' data-aos="fade-up"  data-aos-duration="1500">
<h3 className='Product-heading'data-aos="fade-up"  data-aos-duration="1500" >We Provide.</h3>
<h1 className='Brand-tag'data-aos="fade-up"  data-aos-duration="1500" >
  Quality.Development.Assurance</h1>
</div>
 <div className='homepage-product'data-aos="fade-up"  data-aos-duration="1500">
 <div className='right-up-section'data-aos="fade-up"  data-aos-duration="1500">
      <p className='QDA'> Suppliers</p>
<Image className='first-development' src={A2} alt="Image Display" width={310} height={260}/>
   </div>
 <div className='mid-section'data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="50">
<Image className='second-development'src={Manu} alt="Image Display"
    width={300} height={260}/>
        <p className='QDA'> Brand archetype:<b> MANUFACTURER</b></p>
</div>
<div className='left-up'data-aos="fade-up"  data-aos-duration="1500" data-aos-delay="70">
 <Image className='third-development'src={Eng}  alt="Image Display"
          width={310} height={290}/>
  <p className='QDA'> Brand emotion: <b>Reliable Confidence</b></p> 
</div>
    </div>
     </div>
  )
}

export default DevelopmentComp
