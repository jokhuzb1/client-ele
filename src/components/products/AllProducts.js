import React from 'react'
import { images } from '../images';
import classes from './Products.module.css'

export default function AllProducts({ item, handler }) {
  const { price, color, model, storage, ram } = item;
  return (
    <div className={classes.container} onClick={() => handler(item)}>
      <div className={classes.top}>
        <h3>{model.toUpperCase()} {color.toUpperCase()}, {storage} GB, {ram} RAM</h3>
      </div>
      <div className={classes.left}>
        <img src={images[color]} alt={`Iphone ${color}`} />
      </div>
      <div className={classes.middle}>
        <div className={classes.price}>
          <span>Price</span>
          <span>${price}</span>
        </div>
        <small>4.6 * 201 ratings & 54 reviews</small>
      </div>
      <div className={classes.right}>
        <button>BUY NOW</button>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
