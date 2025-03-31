import React from 'react'
import Header from './styles/Header';

const ProductList = ({products}) => {
    console.log("products",products);
  return (
    <div className='mt-5'>
        <Header heading={"Popular Products"}/>
    </div>
  )
}

export default ProductList