import React from "react";
import { Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* <Route path="/logout" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
