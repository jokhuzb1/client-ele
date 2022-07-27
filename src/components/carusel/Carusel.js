import React, { useState } from 'react'
import classes from './Carusel.module.css'
import { images } from '../images'
export default function Carusel() {
  const [active, setActive] = useState('black')
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {Object.keys(images).map((image, index) => (
          <div key={index} onMouseEnter={() => setActive(image)} className={`${classes['img-card']} ${active === image ? classes.active : ''}`}>
            <img src={images[image]} alt='Iphone ' />
          </div>
        ))}

      </div>
      <div className={classes.right}>
        <img src={images[active]} alt="" />
      </div>
    </div>
  )
}
