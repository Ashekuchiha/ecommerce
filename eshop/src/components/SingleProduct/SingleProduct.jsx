

import React from 'react'

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

// import useFetch from "../../hooks/useFetch";

import RelatedProducts from "./RelatedProducts/RelatedProducts";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import "./SingleProduct.scss";

import { Context } from "../../utils/context";

import img from '../../assets/3917c58eda4a3fc6e85eba3c1dd29d15.jpg'

const SingleProduct = () => {
  return (
    <div className='single-product-main-content'>
      <div className='layout'>
        <div className='single-product-page'>
          <div className='left'>
            <img src={img} alt="not found" />
          </div>
          <div className='right'>
            <span className='name'>Pro Name</span>
            <span className='price'>price</span>
            <span className='desc'>Produ diskjmnm</span>

            <div className='cart-buttons'>
              <div className='quantity-buttons'>
                <span>-</span>
                <span>3</span>
                <span>+</span>
              </div>
              <button className='add-to-cart-button'>
                <FaCartPlus size={20}/>
                ADD TO CART
              </button>
            </div>

            <span className='divider'/>

            < div className='info-item'>

              <span className='text-bold'>
                  catagob : 
                  <span>
                    Headphone
                  </span>
              </span>

              <span className='text-bold'>
                  Share :
                  <span className='social-icons'>
                   <FaFacebookF size={16}/>
                   <FaTwitter size={16}/>
                   <FaInstagram size={16}/>
                   <FaLinkedinIn size={16}/>
                   <FaPinterest size={16}/>
                  </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </div>
    <div>
  </div>
</div>

)

}

export default SingleProduct
