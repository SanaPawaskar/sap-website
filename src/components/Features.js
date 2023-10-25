import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Features() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {


    const container = containerRef.current;
    const sections = sectionsRef.current;

    gsap.to(sections, {
      xPercent: -130 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: '+=2500',
       
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSectionRef = (index, element) => {
    sectionsRef.current[index] = element;
  };

  return (
      <div className='features-container' ref={containerRef}>
           <div className='Feature-content'>
   Standout Capabilities
   </div>
   <div className="container" >
  <section className="panel red" ref={(element) => handleSectionRef(0, element)}>
  <h3 className='feature-heading-name'>Cost</h3>
  <p className='Common-text-font'>Receive the perfect quality of your services on time & leave us a review if you like.</p>
      </section>
      <section className="panel orange" ref={(element) => handleSectionRef(1, element)}>
        <h3 className='feature-heading-name'>Cost</h3>
      <p className='Common-text-font'>Inhouse facility for all manufacturing compoenets which reduces costs </p> 
      </section>
      <section className="panel purple" ref={(element) => handleSectionRef(2, element)}>
      <h3 className='feature-heading-name'> Uncompromising Quality</h3>
 <p className='Common-text-font'> With Cusitomised raditors as per requirment  </p> 
      </section>
      <section className="panel green" ref={(element) => handleSectionRef(3, element)}>
      <h3 className='feature-heading-name'>team</h3>
    <p className='Common-text-font' >      Knowledgable team</p>
       </section>
    </div>
    </div>
  );
};


export default Features
