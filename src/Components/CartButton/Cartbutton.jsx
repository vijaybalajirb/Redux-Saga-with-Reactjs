import React, { useEffect, useState } from 'react';
import cartbutton from '../../assets/cartbutton.png'
import { useSelector } from "react-redux";
import './Cartbutton.css';
import { Link } from 'react-router-dom';

const Cartbutton = () => {
    
 const cartProducts = useSelector((state) => state.cartData);
 

  return (
    <Link to={"/cart"}>
    <div className="cart-container">
      <button className="cart-button">
         {/* <span>&#128722;</span> */}
         <img className='carticon' src={cartbutton}></img>
        <span className="cart-count">{cartProducts.length}</span>
      </button>
    </div>
    </Link>
  );
};

export default Cartbutton;
