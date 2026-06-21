import React, { useState } from "react";

let allCategories = ["el", "cl", "ho"];

const allProducts = [
  { name: "Wireless Bluetooth Earbuds", price: 2499, category: "el" },
  { name: "Smart Watch Pro", price: 5999, category: "el" },
  { name: "Portable Power Bank 20000mAh", price: 1799, category: "el" },
  { name: "Men's Cotton T-Shirt", price: 699, category: "cl" },
  { name: "Women's Denim Jacket", price: 1899, category: "cl" },
  { name: "Running Shoes", price: 2499, category: "cl" },
  { name: "Formal Shirt", price: 1299, category: "cl" },
  { name: "LED Table Lamp", price: 999, category: "ho" },
  { name: "Non-Stick Cookware Set", price: 3499, category: "ho" },
  { name: "Memory Foam Pillow", price: 1499, category: "ho" },
];

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState(allProducts);

  function categoryHandler(flag, category) {
    let nC;

    if (flag) {
      nC = [...selectedCategories, category];
      setSelectedCategories(nC);
    } else {
      nC = selectedCategories.filter((c) => c != category);
      if (nC.length > 0) setSelectedCategories(nC);
      else {
        nC = allCategories;
        setSelectedCategories(allCategories);
      }
    }

    // Update the products as per the selected categories
    // let newProducts = allProducts.filter((curProduct) => {
    //   let indx = nC.findIndex((el) => el == curProduct.category);
    //   if (indx != -1) return true;
    //   return false;
    // });
    let newProducts = allProducts.filter((curProduct) =>
      nC.findIndex(el => el == curProduct.category) == -1 ? false : true,
    );

    setProducts(newProducts);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <h3>Select your categories:</h3>

        <div className="checkbox-group">
          <input
            onChange={(ev) => categoryHandler(ev.target.checked, "el")}
            id="el"
            type="checkbox"
          />
          <label htmlFor="el">Electronics</label>

          <input
            onChange={(ev) => categoryHandler(ev.target.checked, "cl")}
            id="cl"
            type="checkbox"
          />
          <label htmlFor="cl">Clothing</label>

          <input
            onChange={(ev) => categoryHandler(ev.target.checked, "ho")}
            id="ho"
            type="checkbox"
          />
          <label htmlFor="ho">Home</label>
        </div>
      </div>

      <div className="products-container">
        <h4>Products</h4>

        <ul className="product-list">
          {products.map((item, indx) => {
            return (
              <li className="product-item" key={indx}>
                <div className="product-name">{item.name}</div>

                <div className="product-price">₹{item.price}</div>

                <div className="product-category">{item.category}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
