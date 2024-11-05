import React from "react";

function Cart({ _cartItems }) {
  return (
    <div className="cart-cont">
      <div className="cart-wrapper">
        {_cartItems.cartItems.length > 0 ? (
          _cartItems.cartItems.map((item) => (
            <div key={item.id} className="cart-list-cont">
              <img src={item.img} alt={item.productNamme} />
              <div id="cart-text">
                <button className="free-shipping">Free shipping</button>
                <h2 className="cart-item-h2">{item.productNamme}</h2>
                <h3 className="cart-item-h3"> ${item.price.toFixed(2)}</h3>
                <h1 className="cart-item-h1"> ${item.price * 1.2}</h1>
                <h4 className="cart-item-h4">
                  {" "}
                  $
                  {item.description.length > 200
                    ? `${item.description.substring(0, 200)}...`
                    : item.description}
                </h4>
              </div>
            </div>
          ))
        ) : (
          <h1>YOU HAVEN'T ADDED ANY ITEMS TO CART</h1>
        )}
      </div>
    </div>
  );
}

export default Cart;