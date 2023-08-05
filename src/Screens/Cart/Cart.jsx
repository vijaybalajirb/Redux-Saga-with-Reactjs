import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart, emptyFromCart, removeFromCart } from "../../Redux/action" 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css"; // Import the Cart styles file

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  let amount =
    cartProducts.length &&
    cartProducts.map((prod) => prod.price).reduce((prev, next) => prev + next);


  return (
    <div className="cart-page"> {/* Add the 'cart-page' class */}
      <Link to="/">Product-List</Link>
      <h1>Cart Page</h1>
      <div className="cart-product-lists">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>Category</th>
              <th>Price</th>
              <th>Cart Action</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <img
                    className="cartimage"
                    style={{ height: "40px" }}
                    src={product.image}
                    alt="product"
                  />
                </td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{Math.round(amount)}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Math.round(amount / 10)}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>{Math.round(amount - amount / 10) / 20}</span>
          </div>
          <div className="adjust-price total">
            <span>Total</span>
            <span>
              {Math.round(amount - amount / 10 + (amount - amount / 10) / 20)}
            </span>
          </div>
        </div>
        <button className="emptycartbutton" onClick={()=>dispatch(emptyFromCart())}>Remove all items from cart</button>
      </div>
    </div>
  );
};

export default Cart;
