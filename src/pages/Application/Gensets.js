import Image from 'next/image'
import Highway from '../../components/images/HighwayPage.jpg'
import React,{useEffect} from 'react'
import Link from 'next/link';
import AllAluminium from './AllAluminium.png'
import Earth from '../../components/images/TrainLogo.png'
import High from '../../components/images/Automotivelogo.png'
import Loco from '../../components/images/EarhMovingGreen.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Genset from "./Gen-set.png"
import Product4Public from './Busradiators.png'
function Gensets() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container-card'>
    <div>
    <Image  className='application-product-image-indiviual-backgroud' src={Highway}   
     width={1220}  height={350} alt="Image Display"/>
     <h1 className='Application-title'>Gen - Set</h1>
    </div>
    <div className='Application-page-content'>
    <h2 className='Application-tag-line'><b>Keeping Your Vehicles Cool on the Road</b></h2>
    <p className='Common-text-font-thin-line'>At Highway-Moving Radiators, we are your go-to source for top-quality radiators designed to keep your highway-moving vehicles 
    running smoothly. With years of experience, our radiators have powered trucks, buses, and other transportation vehicles on 
    the open road. Explore how our radiators can ensure optimal cooling 
    and efficiency for your fleet. "Rev up your vehicle's performance with our cutting-edge automobile radiators. Crafted to keep your engine running cool, these radiators are the heartbeat of automotive excellence, 
    powering every drive with confidence."</p>
  </div>

  <h3 className='title-product'data-aos="fade-up" data-aos-duration="3000">Gen - Set Products</h3>
     <div className='Product-cat-display'data-aos="fade-up" data-aos-duration="3000">
      <div className='product-card'>
      <Image  src={Genset} width={250} height={260} className=" className='earth-movig-product-image" alt=""/>
        <p className="Common-text-font">Gen-Set Radiators</p>
      </div>
      <div className='product-card'>
      <Image  src={AllAluminium}  width={270} height={270}className=" className='earth-movig-product-image" alt=""/>
      <p className="Common-text-font">All Aluminium Radiators</p>
      </div>
      <div className='product-card'>
      <Image  src={Product4Public}  width={200} height={270} className=" className='earth-movig-product-image" alt=""/>
      <p className="Common-text-font"> All Brass Radiators </p>
      </div>
    
     </div>

     <div className='container-of-other-application'data-aos="fade-up" data-aos-duration="3000">
     <p className='title-product'data-aos="fade-up" data-aos-duration="3000">Other Application Products</p>
     <hr data-aos="fade-up" data-aos-duration="3000"></hr>
     <div className='container-for-other-app-show'>
     <div className='card-other-application'>
  <Image className='second' src={Earth} alt="Image Display"width={120} height={70}/>
  <h3>Locomotive</h3>
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
  <Image src={Loco} className='second' width={110} height={70}/>
  <h3>Earth Moving</h3> 
  <Link href="/Application/EarthMoving">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
      </div>

</div>

   </div>
  )
}

export default Gensets
