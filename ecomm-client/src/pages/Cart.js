import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Checkout from "../components/CheckoutForm";

const Cart = () => {
  const [checkout, setCheckout] = useState(false);
  const { isEmpty, removeItem, items, cartTotal } = useCart();

  if (isEmpty) return <h1>Your Cart is Empty </h1>;

  const jwt = localStorage.getItem("jwt");

  if (checkout) {
    return (
      <>
        <div className="container">
          <Checkout/>
          <button className="btn red" style={{marginTop:"1rem"}} onClick={()=>setCheckout(false)}>Cancel</button>
        </div>
      </>
    );
  }

  return (
    <div className="container row">
      <ul className="collection col m8 s12">
        {items.map((i) => (
          <li key={i.id} className="collection-item avatar">
            <img src={i.img} alt={i.name} className="circle" />
            <span className="title">{i.name}</span>
            <p className="green-text">
              Price : ${i.price} x {i.quantity} = ${i.itemTotal}
            </p>
            <i
              className="secondary-content red-text material-icons"
              onClick={() => {
                removeItem(i.id);
              }}
            >
              remove_circle
            </i>
          </li>
        ))}
      </ul>
      <div
        className="col m3 s12 offset-m1"
        style={{ position: "sticky", top: "5px" }}
      >
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h3>Total Price</h3>
              <p className="green-text">${cartTotal}</p>
            </div>
            <div className="card-action">
              {jwt ? (
                <button className="btn blue" onClick={()=>setCheckout(true)}>
                  Checkout
                </button>
              ) : (
                <div
                  className="cart-panel red white-text"
                  style={{ padding: "1rem" }}
                >
                  Please Login to Checkout
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
