import React, { useEffect, useState } from 'react';
import './LandingPage.css'
import Header from '../../Components/Header/Header'
import CardContainer from '../../Components/Cardcontainer/CardContainer'
import Card from '../../Components/Card/Card';
import ProductScreen from '../IndividualProduct/Product';
import Footer from '../../Components/Footer/Footer';
import { addToCart, emptyFromCart, removeFromCart } from "../../Redux/action"
import { useDispatch } from "react-redux/es/exports";
import { ProductList,ProductSearch } from "../../Redux/productAction";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const LandingPage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.productData);


    useEffect(() => {
        dispatch(ProductList());
        return ()=>{
          dispatch(ProductList());
        }
      }, []);

      products.map((val)=>console.log(val.id))

    return(
        <React.Fragment>
         <Header/>
         <h4 className='catagory-heading'>Catagories</h4>
         <div className='catagories'>
            <button className='catagories-button' onClick={()=>dispatch(ProductSearch("electronics"))}>Electronics</button>
            <button className='catagories-button' onClick={()=>dispatch(ProductSearch("jewelery"))}>jewelery</button>
            <button className='catagories-button' onClick={()=>dispatch(ProductSearch("men's clothing"))}>Men's clothing</button>
            <button className='catagories-button' onClick={()=>dispatch(ProductSearch("women's clothing"))}>Women's clothing</button>
         </div>
         <Link className='cart-link' to={"/cart"}>Go to Cart</Link>
         
         <CardContainer>
            {
                products.map((item)=>(
                    <Card
                    id = {item.id}
                    name={item.title}
                    image={item.image}
                    price={item.price}
                    currencyType={"rupees"}
                    discount={item.rating.rate}
                    onclick = {()=>dispatch(addToCart(item))}
                    removecart = {()=>dispatch(removeFromCart(item.id))}
                  />
                ))
            }
           
         </CardContainer>
         <Footer/>
        
        </React.Fragment>
       

    )

}


export default LandingPage;