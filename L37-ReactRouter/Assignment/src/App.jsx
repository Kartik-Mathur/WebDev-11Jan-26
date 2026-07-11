import React, { useState } from "react";
import products from "./mydata/products";
import "./App.css";

const App = () => {
  const existingCategories = products.map((item) => item.category);
  const [category, setCategory] = useState(["All", ...existingCategories]);
  const [items, setItems] = useState(products);

  function categoryHandler(c) {
    if (c == "All") return setItems(products);

    const updatedItems = products.filter((i) => i.category == c);
    setItems(updatedItems);
  }

  return (
    <div className="app">
      <div className="category-container">
        {category.map((item, indx) => (
          <button
            onClick={() => categoryHandler(item)}
            className="category-btn"
            key={indx}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="products-container">
        {items.map((d, i) => {
          return (
            <div className="category-section" key={i}>
              {d.items.map((e) => {
                return (
                  <div className="product-card" key={e.id}>
                    <img src={e.image} alt={e.name} className="product-image" />

                    <div className="product-info">
                      <h3>{e.name}</h3>

                      <span className="category">{d.category}</span>

                      <p className="description">{e.description}</p>

                      <h2 className="price">₹{e.price}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
