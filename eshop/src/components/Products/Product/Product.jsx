import React from 'react'

import "./Product.scss";

import img from '../../../assets/3917c58eda4a3fc6e85eba3c1dd29d15.jpg'
const Product = () => {
  return (
    <div className='product-card'>
      <div className='thumbnail'>
        <img src={img} alt="not found"/>
      </div>
      <div className='prod-details'>
        <span className='name'>Product NAme</span>
        <span className='price'>&#8377; 499</span>
      </div>
    </div>
  )
}

export default Product
