import React from "react";
const ProductCard = ({
  id,
  rating,
  img,
  categoryName,
  productName,
  description,
  price,
  setCartItems,
}) => {
  function handleAddToCart() {
    setCartItems((curState) => {
      return {
        totalAmount: curState.totalAmount + price,
        numberOfItems: curState.numberOfItems + 1,
        cartItems: [
          ...curState.cartItems,
          {
            id: id,
            productName: productName,
            description: description,
            price: price,
            img: img,
          },
        ],
      };
    });
  }
  return (
    <div className="product-card">
      {rating > 3.9 ? <div className="badge">Hot</div> : null}
      <div className="product-tumb">
        <img src={img} alt="product-img" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{categoryName}</span>
        <h4>
          <a href="##">{productName}</a>
        </h4>
        <p>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>${(price * 1.8).toFixed(2)}</small>${price}
          </div>
          <div className="product-links">
            <a href="##">
              <i className="fa fa-heart"></i>
            </a>
            <button className="addCart-link" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
