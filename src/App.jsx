import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Home, Menu, MenuItem } from "./Pages";
import { Nav, Footer } from "./Components";
import { AllProvider } from "./Components/AllContext/AllContext";

export default function App() {
  return (
    <>
      <AllProvider>
        <Router basename="/RestaurantExample/">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </AllProvider>
    </>
  );
}
