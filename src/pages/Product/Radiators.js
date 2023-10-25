import React from 'react'
import Image from 'next/image'
import Product4Public from '../Application/Busradiators.png'
import Radd from "../../components/images/Radd.png"
import Product3Public from '../../components/images/Reserve Tank.png'
import AllAluminium from '../Application/AllAluminium.png'
function Radiators() {
  return (
    <div>
<p className='Product-cat-page-title'>Radiators </p>
<div className='Product-cat-display-page'>
<div className='Product-pic-of-that'>
<div className='product-card-cat-container'>
<Image  src={Product4Public}width={200} height={250} alt=""/>
        <p className="Common-text-font">Alluminium Bus Radiator</p>
      </div>
</div>
<div className='Product-pic-of-that'>
<div className='product-card-cat-container'>
<Image  src={Radd} width={200} height={250} alt=""/>
      <p className="Common-text-font">Inter Coolter Buses</p>
      </div>
</div>
<div className='Product-pic-of-that'>
<div className='product-card-cat-container'>
<Image  src={Product3Public} width={180} height={170} alt=""/>
      <p className="Common-text-font">Reserve Tank</p>
      </div>
</div>
<div className='Product-pic-of-that'>
<div className='product-card-cat-container'>
<Image  src={AllAluminium} width={240} height={250} alt=""/>
      <p className="Common-text-font">All Aluminium Radiators</p>
      </div>

</div>

</div>
    </div>
  )
}

export default Radiators
