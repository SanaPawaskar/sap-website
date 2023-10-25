import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Contact() {
  const today = new Date();
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
 <div className='Contact-div'data-aos="fade-up" data-aos-duration="3000">
      <h3 className='aboutpage-heading-div'>Let's Redefine Radiators Together !!</h3>
      <p className='contact-text'>Ready to experience the SAP Engineering difference? Get in touch with us today and discover how our radiators can revolutionize your industry. Whether you're seeking unmatched performance or energy efficiency,
         we have the perfect solution waiting for you.</p>
         <h2 className='title-product'data-aos="fade-up" data-aos-duration="3000">Contact Our Team</h2>
 </div>
 <hr data-aos="fade-up" data-aos-duration="3000"></hr>
    <div className='contact-footer-main-div' data-aos="fade-up" data-aos-duration="3000">
      <div className='container-card-footer-conatct'>
     <div className='Contact-Container'>
    <div className='form-div'>
      <div className='row-left'>
      <div className='input-container'>
    <input className='input-box'  placeholder=' Name'/>
    </div>
 <div className='input-container'>
    <input className='input-box'  placeholder='Company Name'/>
    </div>
      </div>
    <div className='row-right'>
     <div className='input-container'>
    <input className='input-box'  placeholder='Contact Number'/>
    </div>
    <div className='input-container'>
    <input className='input-box' placeholder='Email Address'/>
    </div>
    </div>
    </div>
    <button className='contact-from-submit-button'>Submit</button>
        </div>
           <div className='main-footer-card'>
       <div className='rowfootor'>
           <div className='colfootor colfootor2'>
            <h3 className='colfootor-h2'>  SAP ENGINEERING </h3>
            <a  className='footor-text' target="_blank" href="https://www.google.co.in/maps/dir//19.10180310,72.89035250">A/5,Aslam Compound, Next To Kamani Oil Mill, Shree Nagar,Saki-Viha, Mumbai-400072, Maharashtra, India
            </a>
          </div>
          <div className='colfootor colfootor2'>
            <h2 className='colfootor-h2'> Get In Touch  </h2>
            <a href="tel:18005325200"  className='footor-text'> +91-22-28477291 / +91-22-28471182</a><br></br>
            <a href="mailto:contactus@1clickcapital.com"  className='footor-text'>sapengg.sapengg@gmail.com</a><br></br>
             </div>
        </div>
        </div> 
        
       </div>
      <div className='Powered-by'>
     <p className="footer-style1">Copyright &copy;{today.getFullYear()} by SAP Engineering. All Rights Reserved </p>
     {/* <p className="footer-style1">All Rights Reserved </p> */}
  <p className="footer-style1">Developed By SANA SHAKIR PAWASKAR</p>
</div>
      </div>
      </>
  )
}

export default Contact