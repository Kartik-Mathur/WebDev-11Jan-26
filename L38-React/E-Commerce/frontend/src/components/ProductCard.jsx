import React from "react";
import "./ProductCard.css";
import api from "../api";
import { useAuth } from "../context/AuthContext";

const ProductCard = ({ product }) => {
  const { imageUrl, name, description, category, price } = product;
  const { setCart } = useAuth();
  async function addToCartHandler(id) {
    let { data } = await api.get(`/app/add-to-cart/${id}`);
    console.log(data.cart);
    setCart(data.cart);
  }

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />

      <div className="product-content">
        <span className="product-category">{category}</span>

        <h2 className="product-name">{name}</h2>

        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">₹{price}</span>

          <button
            className="add-cart-btn"
            onClick={() => addToCartHandler(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
