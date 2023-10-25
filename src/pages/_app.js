import '@/styles/globals.css'
import '@/styles/Aboutus.css'
import '@/styles/Feature.css'
import '@/styles/Awards&Footer&Contact.css'
import '@/styles/Commonstyles.css'
import '@/styles/Product.css'
import '@/styles/Navbar.css'
import '@/styles/Homepage.css'
import '@/styles/Awards.css'
import '@/styles/ApplicationStyle.css'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Topbar from '@/components/Topbar'
export default function App({ Component, pageProps }) {
  return <>
  <Topbar/>
  <Navbar/>
 <Component {...pageProps} />
  <Contact/>
  </> 
}
