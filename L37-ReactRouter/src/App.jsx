import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import { Link, NavLink, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

// Wrong way of doing routing
// const App = () => {
//   const [currentPage, setCurrentPage] = useState("Dashboard");

//   return (
//     <div>
//       <button onClick={()=>setCurrentPage("Dashboard")}>Dashboard</button>
//       <button onClick={()=>setCurrentPage("Contact")}>Contact</button>
//       <button onClick={()=>setCurrentPage("Faq")}>Faq</button>
//       Welcome to application
//       {currentPage == 'Dashboard' ? <Dashboard /> : ""}
//       {currentPage == 'Contact' ? <Contact /> : ""}
//       {currentPage == 'Faq' ? <Faq /> : ""}

//     </div>
//   )
// }

const App = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

export default App;
