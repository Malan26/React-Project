
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Menu.css";

function MenuItem({ image, name, price, product }) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>₹{price}</p>


      {!itemInCart ? (
        <button className="addBtn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      ) : (
        <>
         
          <div className="quantityControl">
            <button onClick={() => removeFromCart(product.id)}>-</button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => addToCart(product)}>+</button>
          </div>

       
          <button className="confirmBtn" onClick={() => navigate("/cart")}>
            Confirm And Go to Cart
          </button>
        </>
      )}
    </div>
  );
}

export default MenuItem;

