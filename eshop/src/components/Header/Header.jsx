import React from 'react'

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//icon
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

//component
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

//style
import "./Header.scss";

export default function Header() {

  const [scrolled,setScrolled]=useState(false);
  const [showCard,setShowCard]=useState(false);
  const [showSearch,setShowSearch]=useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    console.log(offset);
    if(offset > 200){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  },[]);


  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>
          <div className="center">
            My Shop
          </div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)}/>
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={()=>setShowCard(true)}>
              <CgShoppingCart/>
              <span>44</span>
            </span>
          </div>
        </div>
      </header>
      {showCard && <Cart setShowCard={setShowCard} />}
      {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}
