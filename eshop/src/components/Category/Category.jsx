import React from 'react'

import './Category.scss'

import Products from '../Products/Products'

export default function Category() {
  return (
    <div className='category-main-content '>
      <div className="layout">
        <div className="category-title">
          Titel
        </div>
        <Products innerPage={true}/>
      </div>
    </div>
  )
}
