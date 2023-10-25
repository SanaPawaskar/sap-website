import React,{useEffect} from 'react'
import Image from 'next/image'
import Iaf from './images/IAFback.png'
import ISO from './images/iso.png'
import IAS from './images/IAS_About.png'
import Coin from "./images/hand-money-rupee-coin-icon.png"
import file from "./images/533a54387426139341580bc74816e153-removebg-preview.png"
import Balance from './images/PngItem_5979111.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Awards() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<div className='container-card-award-section-div'>
  <div className='awards-div'> 
    <div className="row-feature"data-aos="fade-up" data-aos-duration="3000">
     <div className="column-feature">
        <div className='card1'>
           <Image src={Balance} width={70} height={70} className='coin-icon'/>
             Legal Status of Firm Individual - Proprietor </div>
         <div className='card1'> 
           <Image  src={file} width={70} height={70} className='coin-icon'/>
              GST Number 27AADPP4387L1Z4  </div>
         <div className='card1'> 
          <Image  width={70} height={70} src={Coin} className='coin-icon'/>
          Nature of Business Manufacturer </div>    
           </div>
    </div>

 <div className='Product-heading'>Certified By</div>
    <div className='awrds-section'>
      <div className='awards-container' data-aos="fade-up" data-aos-duration="3000">
      <Image className='image1-awrd' src={Iaf} width={110} height={70}/> 
      <p className="Common-text-font-thin-line"> <b className='bold-class'>NSIC/GP/MUM//2012/18921</b> <br></br> This certification attests to the company's dedication to maintaining quality, safety, and performance standards in its operations.</p>
      </div>
      <div className='awards-container'  data-aos="fade-down"  data-aos-easing="linear"
     data-aos-duration="1500">
      <Image className='image2-awrd' src={ISO}width={180} height={100}/>
    <p  className="Common-text-font-thin-line"><b className='bold-class'>ISO 9001:2005 Q-205021092113</b><br></br> ISO certificates  Our quality represent the sheer dedication 
of our organisation to not only be the best but also to be a leading example in the global effort to create a 
 better and cleaner tomorrow.</p>
      </div>
      <div className='awards-container'  data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="1500">
      <Image className='image4' src={IAS}width={70} height={80}/>
      <p  className="Common-text-font-thin-line"> <b className='bold-class'>QCS -2021-SPEG-2708</b><br></br>This certification signifies that the company meets specific quality,
       safety, and performance criteria, which can
        enhance its credibility and reputation within its 
        industry.</p>
      </div>
     
        
        
       
       </div>
      

     </div>

     </div>
   
  )
}

export default Awards
