import React, { useEffect, useState } from 'react'
import AllProducts from '../components/products/AllProducts'
import classes from './Home.module.css'
import SingleProductModal from '../components/modals/SingleProduct'
import SingleProduct from './SingleProduct'
import Spinner from '../components/Spinner/Spinner'
import Sidebar from '../components/Sidebar/Sidebar/Sidebar'

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState('');
  const [products, setProducts] = useState([]);

  const URI = 'https://product-markets.herokuapp.com/products'
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(URI, {
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
    <>
      {products.length > 0 && (
        <div className={classes.home}>
          <div className={classes.filter}>
            <Sidebar />
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
      )}
      {!products.length && <Spinner />}
    </>
  )
}
