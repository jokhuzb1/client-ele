import React from 'react';
import classes from './categories.module.css';
export default function Categories() {
  return (
    <div className={classes.category}>
      <ul>
        <li>Products</li>
        <li>Brands</li>
        <li>Deals & Sales</li>
        <li>Services</li>
        <li>Gift Cards</li>
      </ul>
    </div>
  )
} 
