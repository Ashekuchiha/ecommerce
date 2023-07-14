import React from 'react'

// import { useNavigate } from "react-router-dom";

import img from '../../../assets/banner-img.png'

import "./Category.scss";

const Category = (categories) => {
    //const navigate = useNavigate();
  return (
    <div className="shop-by-category">
            <div className="categories">
                    <div className="category">
                        <img src={img} alt='not found'/>
                    </div>
                    <div className="category">
                        <img src={img} alt='not found'/>
                    </div>
                    <div className="category">
                        <img src={img} alt='not found'/>
                    </div>
                    <div className="category">
                        <img src={img} alt='not found'/>
                    </div>
            </div>
        </div>
  )
}

export default Category
