


// 7 night change 

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleOrderConfirm = () => {
    if (cartItems.length === 0) return;
    setShowPopup(true);
   
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="cartPage">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cartList">
            {cartItems.map((item) => (
              <div key={item.id} className="cartItem">
                <img src={item.thumbnail} alt={item.title} />
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <p className="price">Rs {item.price}</p>
                  <p className="quantity">Qty: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <button className="orderBtn" onClick={handleOrderConfirm}>
            Confirm Order
          </button>
        </>
      )}

     
      {showPopup && (
        <div className="popupMessage">
          <p> Order Confirmed!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;





