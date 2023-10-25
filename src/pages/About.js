import Image from 'next/image'
import Dad from '../components/images/DAd.JPG'
import Brother from '../components/images/Bhai.JPG'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import A1 from '../components/images/About1.JPG'
// import A2 from '../components/images/About2.JPG'
import A3 from '../components/images/About3.JPG'
import AOS from 'aos';
import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';

function About() {
  const boxRef = useRef(null);
 useEffect(() => {
    const boxElement = boxRef.current;

    const scrollTween = gsap.timeline();

    gsap.to(boxElement, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: boxElement,
        containerAnimation: scrollTween,
        start: "center 80%",
        end: "center 20%",
        scrub: true
      }
    });
    AOS.init();
  }, [])
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false
  };
  var setting2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false
  };
return (
    <div className='About-container'data-aos="fade-up"  data-aos-duration="1500">
      <div className='Caro-div'>
        <div className='Slide2'>
        <Slider {...settings}>
          <div>
<Image  width={500} height={500}  src={A1}/>
          </div>
          {/* <div>
 <Image width={500} height={500} src={A2}/>
          </div> */}
  <div>
  <Image width={500} height={500} src={A3}/>
          </div>
          <div> 
  <Image  width={500} height={500} src={A1}/>
          </div>
  </Slider>
        </div>
      </div>
<div className='aboutpage-heading'  data-aos="fade-up"  data-aos-duration="1500">30 Years of Radiating Excellence</div>
<div className='Counter-Up'  data-aos="fade-up"  data-aos-duration="1500">

<div className='Text-about-client'>
<p className='Common-text-font'  data-aos="fade-up"  data-aos-duration="1500">
   Established three decades ago, SAP Engineering has been a pioneer in crafting cutting-edge radiators that redefine performance and efficiency 
   standards. Our commitment to innovation and quality has made us a trusted name in the industry, and our legacy of excellence drives us to continually push the boundaries of radiator technology.Our radiators find their purpose across an array of industries, showcasing their versatility, reliability, and performance. From locomotives that power transportation networks to automobiles that navigate city streets, from airways that connect continents to industrial machinery that drives progress – SAP Engineering radiators play an integral role in keeping things cool.
</p>
</div>
  <div className='Number-clients'  data-aos="fade-up"  data-aos-duration="1500">
  <CountUp className='Counter-no'
    start={0}
    end={100}
    duration={3} /> 
  <h3 className='Couter-up-text'>Cleints</h3>
  <br></br>
   <CountUp className='Counter-no'
    start={0}
    end={30}
    duration={3} /> 
  <h3 className='Couter-up-text'>Years in Operation</h3>
  </div>
</div>

<div className='About-text-div-mission' data-aos="fade-up"  data-aos-duration="1500">
<div className='aboutpage-heading'>Our Mission: Radiators Redefined</div>
     <p className='Common-text-font'>Our mission is simple yet profound - to engineer radiators that not only meet but exceed expectations. We are driven by a passion for innovation and an unwavering commitment to delivering radiator solutions that empower industries and elevate performance.
     </p>
</div>
    
      <div className='Product-heading'  data-aos="fade-up"  data-aos-duration="1000">
      MEET OUR TEAM.
    </div>
    <span className='Brand-slogan'  data-aos="fade-up"  data-aos-duration="1000"> We are Engineers, Developers, Designers.<br></br>
    We Make Radiators In The Best Way Possible.</span>
    
 <div className='Owerns-dov'>
   <div className='container-pic'  >
  <p className='Abour-name-owner'>Owner</p> 
   <div className='right'> 
 <Image src={Dad}  className="image-sec" />
 </div>
 <p className='Abour-name-owner'> Shakir  Pawaskar</p>  
     </div>
 <div className='container-pic' >
<p className='Abour-name-owner'>C.E.O</p>
 <div className='left'>
 <Image  className="image-sec" src={Brother} />
 </div>
<p className='Abour-name-owner'> Shaizad Pawaskar</p>
 </div>
     </div>

  <div className='Common-text-End' data-aos="fade-up"  data-aos-duration="1000">
     Designing and Building Radiators is what we love to do, and we are awesome at it.
     Fueling Success Through Every Job We Take On.
     </div>

     </div>
  )
}

export default About