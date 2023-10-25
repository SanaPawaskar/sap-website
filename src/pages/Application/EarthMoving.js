import React,{useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Radi1 from '../../components/images/240_F_57859746_O2vuW9kSarXapPjYpSGxY4PvTQfslGS0.jpg'
import EarthMovingImage from '../../components/images/EarthMovingPage.jpg'
import Product from '@/components/Product'
import Earth from '../../components/images/TrainLogo.png'
import High from '../../components/images/Automotivelogo.png'
import Gen from '../../components/images/GensetLogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Product1Public from '../../components/images/aluminium1.png'
import intercooler from './intercooler.png'
import Brass from './Busradiators.png'
import Radd from "../../components/images/Radd.png"
function EarthMoving() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  className='container-card'>
     <div>
     <Image className='application-product-image-indiviual-backgroud' src={EarthMovingImage} width={1250}height={400}  
      alt="Image Display"/>
      <h1 className='Application-title'data-aos="fade-up" data-aos-duration="3000">Earth Moving</h1>
     </div>
     <div className='Application-page-content'data-aos="fade-up" data-aos-duration="3000">
     <h2 className='Application-tag-line'><b>Powering Progress, Cooling Efficiency</b></h2>
     <p className='Common-text-font-thin-line'>At Earth-Moving Radiators, we specialize in providing top-of-the-line cooling solutions for the most rugged of applications. With decades of experience, our radiators have powered heavy machinery and earth-moving equipment across industries. Discover how our radiators keep your equipment cool, ensuring peak performance and longevity.
     "Elevate earth-moving equipment performance with our specialized radiators. Engineered for the toughest terrain, our radiators are the muscle behind every heavy-duty task, 
    ensuring your machinery stays cool under pressure."</p>
    </div>
    
    <h3 className='title-product'data-aos="fade-up" data-aos-duration="3000">Earth Moving Construction Products</h3>
     <div className='Product-cat-display'data-aos="fade-up" data-aos-duration="3000">
     
      <div className='product-card'>
      <Image className='earth-movig-product-image' src={intercooler} width={100 } height={250} alt=""/>
      <p className="Common-text-font">InterCoolers </p>
      </div>
      <div className='product-card'>
      <Image  className='earth-movig-product-image' src={Brass} width={150} height={250} alt=""/>
      <p className="Common-text-font">Product1</p>
      </div>
      <div className='product-card'>
      <Image  className='earth-movig-product-image'  src={Radd} width={200 } height={250} alt=""/>
      <p className="Common-text-font">Alluminium Radiators</p>
      </div>
     </div>

     <div className='container-of-other-application'data-aos="fade-up" data-aos-duration="3000">
     <p className='title-product'data-aos="fade-up" data-aos-duration="3000">Other Application Products</p>
     <hr data-aos="fade-up" data-aos-duration="3000"></hr>

<div className='container-for-other-app-show'>
  <div className='card-other-application'>
  <Image  src={Earth} alt="Image Display"width={120} height={70}/>
  <h3>Locomotive</h3>
       <Link href="/Application/Locomotive">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='card-other-application'>
  <Image src={High} alt="Image Display" width={110} height={70}/>
  <h3>Highway</h3>
    <Link href="/Application/Automoving">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='card-other-application'>
  <Image src={Gen}  width={110} height={70}/>
  <h3>Gen</h3> 
  <Link href="/Application/Gensets">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
</div>
</div>
    </div>
  )
}

export default EarthMoving
