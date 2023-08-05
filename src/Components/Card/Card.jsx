import React, { useState } from 'react';
import './Card.css';
import ProductScreen from '../../Screens/IndividualProduct/Product';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = ({id,currencyType, name, image, price, onclick,removecart }) => {

 
  const [toggle,setToggle] = useState(true);
  let currencySymbol = "";
  switch (currencyType) {
    case "dollars":
      currencySymbol = "$";
      break;
    case "rupees":
      currencySymbol = "₹";
      break;
    default:
      currencySymbol = "$";
  }
console.log(id)

function handleClick() {
  onclick();
  setToggle(false);
}

function handleClickremove() {
  removecart()
  setToggle(true);
}
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{currencySymbol + " " + price}</p>
      <div className='footer'>
        {
          toggle==true?<button onClick={()=>handleClick()} className='addtocartbutton'>Add to Cart</button>:<button onClick={()=>handleClickremove()} className='addtocartbutton'>Remove</button>
        }
          
          
          <Link className='individual-product-link' to={`/product/${id}`}><button className='viewproductbutton'>View Product</button></Link>
      </div>
    
    </div>
  );
};

export default Card;

