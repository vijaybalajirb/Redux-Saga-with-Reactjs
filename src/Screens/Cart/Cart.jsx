import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart, emptyFromCart, removeFromCart } from "../../Redux/action" 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartData);
  const [localCartProducts, setLocalCartProducts] = useState(cartProducts);
  const dispatch = useDispatch();

  console.log(localCartProducts)

  const handleIncrement = (id) => {
    const updatedLocalCartProducts = localCartProducts.map((product) =>
      product.id === id ? { ...product, item: product.item + 1 } : product
    );
    setLocalCartProducts(updatedLocalCartProducts);
  };

  const handleDecrement = (id) => {
    const updatedLocalCartProducts = localCartProducts.map((product) =>
      product.id === id && product.item > 1
        ? { ...product, item: product.item - 1 }
        : product
    );
    setLocalCartProducts(updatedLocalCartProducts);
  };

  // Calculate the amount locally
  const amount =
    localCartProducts.length &&
    localCartProducts
      .map((prod) => prod.price * prod.item)
      .reduce((prev, next) => prev + next);

  const onRemoveProudct = (id) => {
    dispatch(removeFromCart(id));
    setLocalCartProducts(localCartProducts.filter((item) => item.id !== id))
    console.log("remove")
  }

  const onEmptyCart = () => {
    setLocalCartProducts({})
    dispatch(emptyFromCart());
  }

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
              <th>Add items</th>
              <th>Price</th>
              <th>Cart Action</th>
            </tr>
          </thead>
          <tbody>
            {localCartProducts.length>0 && localCartProducts.map((product) => (
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
                <td><button onClick={(e)=>handleDecrement(product.id)}>-</button>{product.item}<button onClick={(e)=>handleIncrement(product.id)}>+</button></td>
                <td>{product.price*product.item}</td>
                <td><button onClick={() => onRemoveProudct(product.id)}>Remove</button></td>
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
        <button className="emptycartbutton" onClick={()=>onEmptyCart()}>Remove all items from cart</button>
      </div>
    </div>
  );
};

export default Cart;
