import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'
import Loco from './images/EarhMovingGreen.png'
import Earth from './images/TrainLogo.png'
import High from './images/Automotivelogo.png'
import Gen from './images/GensetLogo.png'
import Link from 'next/link';
function Applications() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
 <div className='Application-section-div' data-aos="fade-up" data-aos-duration="3000">
  <span className='Application-section-title' data-aos="fade-up" id="char">Radiators for Every Realm</span>
  <div className='Application-section-para'  data-aos="fade-up"data-aos-duration="3000">
  <p className='Common-text-font'>Our radiators find their purpose across an array of industries, showcasing their versatility, reliability, and performance. From locomotives that power transportation networks to automobiles that
   navigate city streets, from airways that connect continents to industrial machinery that drives progress – SAP Engineering radiators play an integral role in keeping things cool.</p>
  </div>
  <div className='container-for-application-card-section'>
  <div className='Application-section-card-left'data-aos="fade-up"data-aos-duration="3000">
  <Image className='second'    src={Loco}    alt="Image Display"width={120} height={70}/>
  <h3>Earth Moving</h3>
  <p className='application-sec-des'>"Elevate earth-moving equipment performance with our specialized radiators.Engineered for the toughest terrain,they are the muscle behind every heavy-duty task, 
    ensuring your machinery stays cool under pressure."</p>
    <Link href="/Application/EarthMoving">
         <button className='view-more-button'>View Products</button>
    </Link>
</div>
  <div className='Application-section-card-right'data-aos="fade-down"data-aos-duration="3000">
  <Image className='second'    src={High}  alt="Image Display" width={110} height={90}/>
  <h3>Public-Transport
  </h3>
  <p className='application-sec-des'>"Rev up your vehicle's performance with our cutting-edge automobile radiators.Crafted to keep your engine running cool, these radiators are the heartbeat of automotive excellence, 
    powering every drive with confidence."</p>
    <Link href="/Application/Automoving">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='Application-section-card-left'data-aos="fade-up"data-aos-duration="3000">
  <Image className='second'    src={Earth}  alt="Image Display"width={90} height={80}/>
  <h3>Locomotive</h3>
    <p className='application-sec-des'>"Elevate your locomotive's cooling game with our innovative radiators.
       Precision-engineered for the rail industry, these radiators are the driving force behind every 
       smooth and efficient journey."</p>
       <Link href="/Application/Locomotive">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>
  <div className='Application-section-card-right' data-aos="fade-down"data-aos-duration="3000">
  <Image src={Gen } className='second' width={120} height={70}/>
  <h3>Gen</h3> 
  <p className='application-sec-des'>
  "Empower your generators with our Gen Set radiators.Designed to handle the heat of continuous power generation, our radiators are the silent heroes behind uninterrupted energy, keeping your systems 
  cool and reliable, day in and day out."</p>
  <Link href="/Application/Gensets">
         <button className='view-more-button'>View Products</button>
         </Link>
  </div>

  </div>

      </div>
  
  )
}

export default Applications
