import React, { useEffect, useState } from 'react'
import Carusel from '../components/carusel/Carusel';
import Select from '../components/select/Select';
import Spinner from '../components/Spinner/Spinner';
import classes from './SingleProduct.module.css'
export default function SingleProduct({ item }) {

  const [currentItem, setCurrentItem] = useState(item);
  const { color, price, make, model, amount, storage, ram } = currentItem;
  const [selectedStorage, setStorage] = useState(storage);
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedRam, setSelectedRam] = useState(ram);
  const [isLoaind, setIsLoading] = useState(false);
  const URI = 'https://product-markets.herokuapp.com/products'

  useEffect(() => {
    handleChange()
  }, [selectedColor, selectedRam, selectedStorage])
  const handleChange = async () => {
    setIsLoading(true);
    const res = await fetch(`${URI}?color=${selectedColor}&minram=${selectedRam}&maxram=${selectedRam}&minstorage=${selectedStorage}&maxstorage=${selectedStorage}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },

    }
    )
      .then(data => data.json());
    setCurrentItem(res[0])
    console.log(res)
    setIsLoading(false)
  }

  return (
    <div className={classes.top}>
      {isLoaind && <Spinner />}
      {!isLoaind && (
        <div className={classes.container} >
          <div className={classes.left}>
            <Carusel />
            <div className={classes.buttonGroup}>
              <button>ADD TO CART</button>
              <button> BUY NOW</button>
            </div>

          </div>
          <div className={classes.right}>

            <h2>{`${make.toUpperCase()} ${model.toUpperCase()}`}</h2>
            <h3>{`${color.toUpperCase()}, ${storage} GB ${ram} RAM`}</h3>
            <h1>${price}</h1>
            <p>available in stock : {amount}</p>
            <div className={classes.description}>
              <div>
                <h3>Highlights</h3>
              </div>
              <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>

            </div>
            <div className={classes.params}>
              <Select label='Color' setValue={setSelectedColor} current={color} options={['GREEN', 'RED', 'MIDNIGHTBLUE']} />
              <Select label='Storages' setValue={setStorage} current={storage} options={[64, 128, 256]} />
              <Select label='Ram' setValue={setSelectedRam} current={ram} options={[16, 32]} />
            </div>
            <div className={classes.quantity}>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
