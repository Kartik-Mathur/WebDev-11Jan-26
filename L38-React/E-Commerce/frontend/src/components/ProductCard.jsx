import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { imageUrl, name, description, category, price, adminId } = product;
    // console.log(product)
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />

      <div className="product-content">
        <span className="product-category">{category}</span>

        <h2 className="product-name">{name}</h2>

        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
