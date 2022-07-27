import React, { useState } from 'react'
import classes from './Navbar.module.css';
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import axios from 'axios';

export default function Navbar() {
  const [showBtn, setShowBtn] = useState(false)
  // const data = {

  //   "model": "iphone12",
  //   "make": "apple",
  //   "price": 900,
  //   "color": "green",
  //   "image": [
  //     "urlhttps://google.comurl:https://amazon.com",
  //     "://google.comurl:https://amazon.com"
  //   ],
  //   "ram": 16,
  //   "storage": 64,
  //   "amount": 3,
  //   "__v": 0
  // }
  // const baseUrl = 'https://cors-anywhere.herokuapp.com/https://product-markets.herokuapp.com/products'

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <h1>JB HI-FI</h1>
      </div>
      <div className={classes.search}>
        <input type='text' onBlur={() => setShowBtn(false)} onFocus={() => setShowBtn(true)} placeholder=' Search for products ' />
        {showBtn && <button>search</button>}
        {/* <button className={classes.addButton}>add</button> */}

      </div>
      <div className={classes.profile}>
        <div className={classes['p-item']}>
          <MdOutlineFavoriteBorder className={classes.icon} />
          <span>Wish List</span>
        </div>
        <div>
          <span>My Account</span>
        </div>
        <div>
          <span>My Cart</span>
        </div>
      </div>
    </div>
  )
} 
