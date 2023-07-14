import React from 'react'

import { MdClose } from "react-icons/md";

import './Search.scss'

import img from '../../../assets/3917c58eda4a3fc6e85eba3c1dd29d15.jpg'


const Search = ({setShowSearch}) => {
  return (
    <div className='search-modal '>
      <div className="form-field">
        <input type="text" autoFocus placeholder='search for products' />
        <span className='close-btn' onClick={()=>setShowSearch(false)}>
          <MdClose/>
        </span>
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
           <div className="image-container">
             <img src={img} alt="not" />
           </div>
           <div className="prod-details">
            <span className="name">Product name</span>
            <span className="desc">Product description</span>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

