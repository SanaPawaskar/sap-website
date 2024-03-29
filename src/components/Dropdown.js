import React, { useState } from 'react'
import { Dropdownitems } from './Dropdownitems'

export default function Dropdown() {
  const [click, setClick] = useState(false)
  const handleClick =() => setClick(!click)

  return (
    <div>
      <ul onClick={handleClick}
      className={click ? 'dropdowm-menu-clicked' :'dropdown-menu'}>
        {MenuItems.map((item, index) => {
          <li key={index}>
           <Link className={item.cName} to={item.path} onClick={() =>
          setClick(false)}>
            {item.title}
           </Link>
          </li>
        })}

      </ul>
    </div>
  )
}
