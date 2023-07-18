
import React from "react";
import StarRating from "./StarRating";

const Product = ({ product }) => {
  const isLowStock = product.stock < 20;

  return (
    <div className="grid-container">
      <div className={`product-card ${isLowStock ? "low-stock" : ""}`}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      <p>Stock: {product.stock}</p>
      <p style={{ color: isLowStock ? 'red' : 'inherit' }}>
        {isLowStock && 'Low in Stock!'}
        </p>
      <StarRating rating={product.rating} />
    </div>
    </div>

  );
};

export default Product;
