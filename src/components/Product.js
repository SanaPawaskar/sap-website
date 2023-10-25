import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link';
import Image from 'next/image'
import Radd from "./images/Radd.png"
import HeatExchangersimg from './images/heat-exchangers.png';
import exhaustsilencer from './images/Exhaust.png';
 import Silencer from '../pages/Application/Silencer.png'
function Product() {
  useEffect(() => {
    AOS.init();
  }, [])
return (
<div className='Product-div'>
  <h3 className='Product-heading'data-aos="fade-up"  data-aos-duration="1500">Our Products. </h3> 
   <p className='Common-text-font'data-aos="fade-up"  data-aos-duration="1000">The Epitome of Performance, Reliability, and Style. Engineered to keep your vehicle running 
   smoothly even under the harshest conditions, our radiators are the perfect blend of function and fashion.</p>
   <div className='product-display-div'>
  <div className='side' data-aos="fade-up"  data-aos-duration="1000"> 
<div className="card">
      <Image  src={Radd} width={200} height={200}  alt=""/>
</div>
  <div className="card">
      <Image  src={HeatExchangersimg}  width={200} height={200} alt=""/>
  </div>
 <div className="card">
      <Image  src={exhaustsilencer} width={200} height={200}  alt=""/>
  </div>
<div className="card">
      <Image  src={Silencer} width={200} height={200}  alt=""/>
  </div>
</div>

  <div className='product-name' >
 <h4 className="product-des-name">Radiators
        {/* <Link href="/Product/Radiators">
         <button className='view-more-button'>View Products</button>
         </Link> */}
      </h4>
<h4 className="product-des-name">Heat Exchangers
 {/* <Link href="/Product/HeatExchangers">
         <button className='view-more-button'>View Products</button>
         </Link> */}
         </h4>
 <h4 className="product-des-name">exhaust silencer
 {/* <Link href="/Product/HeatExchangers">
         <button className='view-more-button'>View Products</button>
         </Link> */}
         </h4>
 <h4 className="product-des-name">Other Products
   {/* <Link href="/Product/OtherProducts">
         <button className='view-more-button'>View Products</button>
         </Link> */}
  </h4>
   </div>
</div>

<div className='product-display-moblie'>
<div className='row-product'>
    <div className='col-product'>
      <Image  src={Radd} className="card-img-product-moblie"  width={160} height={160} alt=""/>
      <h4 className="product-des-name">Radiators
        {/* <Link href="/Product/Radiators">
         <button className='view-more-button'>View Products</button>
         </Link> */}
      </h4>
    </div>
    <div className='col-product'>
<Image  src={HeatExchangersimg} width={160} height={160} alt=""/>
<h4 className="product-des-name">Heat Exchangers
 {/* <Link href="/Product/HeatExchangers">
         <button className='view-more-button'>View Products</button>
         </Link> */}
         </h4>
  </div>
</div>
<div className='row-product'>
   <div className='col-product'>
    <Image  src={exhaustsilencer} className="card-img-product-moblie" width={160} height={150} alt=""/>
    <h4 className="product-des-name">exhaust silencer
     {/* <Link href="/Product/HeatExchangers">
         <button className='view-more-button'>View Products</button>
         </Link> */}
         </h4>
   </div>
   <div className='col-product'>
   <Image  src={Silencer} className="card-img-product-moblie" width={150} height={150} alt=""/>
   <h4 className="product-des-name">Other Products
       {/* <Link href="/Product/OtherProducts">
         <button className='view-more-button'>View Products</button>
         </Link> */}
  </h4>
</div>
</div>
</div>


  </div>
  )
}

export default Product
