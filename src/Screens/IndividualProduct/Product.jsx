
import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {ProductList } from '../../Redux/productAction';
import { Link, useParams } from 'react-router-dom';
import './Product.css';

const ProductScreen = () => {

  const params = useParams();
  console.log(params)
  const productID = params.id;
  console.log(productID)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData);

  useEffect(()=>{
    dispatch(ProductList());
  },[])

  const individualData = products.filter((val)=>val.id==productID)[0]


  return (
    <div className="product-screen">
      <div className="product-details">
        <h1 className="product-details-heading">{individualData.title}</h1>
        <img className="product-details-image" src={individualData.image} alt={individualData.title} />
        <p  className="product-details-description" >{individualData.description}</p>
        <p>Price: ${individualData.price.toFixed(2)}</p>
        <h4><Link to={"/"}>Click here for product Screen</Link></h4>
      </div>
    </div>
  );
};

export default ProductScreen;
