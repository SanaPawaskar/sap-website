import Image from 'next/image'
import Highway from '../../components/images/Trainpage.jpg'
import React,{useEffect} from 'react'
import Link from 'next/link';
import Loco from '../../components/images/EarhMovingGreen.png'
import High from '../../components/images/Automotivelogo.png'
import Gen from '../../components/images/GensetLogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Product1Loco from "./LocomotiveRadiator.png"
import Product2Loco from "./RailwayAfterCooler.png"
import Product3Loco from "./Product3Loco.png"
import Product4Loco from "./AfterCoolerRailway.png"
function Locomotive() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container-card'>
    <div>
    <Image className='application-product-image-indiviual-backgroud'src={Highway }   
   width={1220}  height={350} alt="Image Display"/>
     <h1 className='Application-title'>Locomotive</h1>
    </div>
    <div className='Application-page-content'>
    <h2 className='Application-tag-line'><b>Engineered for Rail Performance</b></h2>
    <p className='Common-text-font-thin-line'>At Locomotive Radiators, we take pride in providing top-of-the-line radiator 
    solutions for locomotives that power rail transport 
    across the globe. With a legacy of excellence, our radiators are trusted by railway companies for their unparalleled cooling efficiency and durability. Explore how our radiators keep the locomotive industry on track.</p>
 </div>
 <h3 className='title-product'data-aos="fade-up" data-aos-duration="3000">Locomotive Products</h3>
     <div className='Product-cat-display'data-aos="fade-up" data-aos-duration="3000">
      <div className='product-card'>
      <Image  src={Product1Loco} className=" className='earth-movig-product-image" width={150} height={200} alt=""/>
        <p className="Common-text-font"> Radiators</p>
      </div>
      <div className='product-card'>
      <Image  src={Product2Loco} className=" className='earth-movig-product-image" width={200} height={200} alt=""/>
      <p className="Common-text-font">Railway After-Cooler</p>
      </div>
      <div className='product-card'>
      <Image  src={Product4Loco} className=" className='earth-movig-product-image" width={150} height={200} alt=""/>
      <p className="Common-text-font">After Cooler Railway</p>
      </div>
     </div>
<div className='container-of-other-application'data-aos="fade-up" data-aos-duration="3000">
     <p className='title-product'data-aos="fade-up" data-aos-duration="3000">Other Application Products</p>
     <hr data-aos="fade-up" data-aos-duration="3000"></hr>
  <div className='container-for-other-app-show'>
  <div className='card-other-application'>
  <Image className='second' src={Loco} alt="Image Display"width={120} height={70}/>
  <h3>Earth Moving</h3>
       <Link href="/Application/Locomotive">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='card-other-application'>
  <Image className='second'src={High} alt="Image Display" width={110} height={80}/>
  <h3>Highway</h3>
    <Link href="/Application/Automoving">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='card-other-application'>
  <Image src={Gen} className='second' width={110} height={70}/>
  <h3>Gen-set</h3> 
  <Link href="/Application/Gensets">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  </div>
</div>


   </div>
  )
}

export default Locomotive
