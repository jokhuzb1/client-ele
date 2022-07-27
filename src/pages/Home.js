import React, { useEffect, useState } from 'react'
import AllProducts from '../components/products/AllProducts'
import classes from './Home.module.css'
import { data } from '../data'
import SingleProductModal from '../components/modals/SingleProduct'
import SingleProduct from './SingleProduct'
export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState('');
  const [products, setProducts] = useState([]);
  const cors = 'https://cors-anywhere.herokuapp.com'
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${cors}/https://product-markets.herokuapp.com/products`, {
      method: "GET",

    }).then(data => data.json());
    setProducts(response)
  }
  const handleItemClick = (item) => {
    console.log(item)
    setCurrentItem(item)
    setShowModal(true)
  }
  return (
    <div className={classes.home}>
      <div className={classes.filter}>

      </div>
      <div className={classes.products}>
        {products.map((item) => (
          <AllProducts
            key={item._id}
            handler={handleItemClick}
            item={item} />
        ))}

        {showModal &&
          (<SingleProductModal
            setShowModal={setShowModal} >
            <SingleProduct item={currentItem} />
          </SingleProductModal>)}
      </div>
    </div>
  )
}
