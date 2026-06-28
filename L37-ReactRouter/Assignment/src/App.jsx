import React, { useState } from "react";
import products from "./data/products";
const App = () => {
  const existingCategories = products.map((item) => item.category);
  const [category, setCategory] = useState(["All", ...existingCategories]);

  return (
    <div>
      {category.map((item, indx) => (
        <button key={indx}>{item}</button>
      ))}
    </div>
  );
};

export default App;
