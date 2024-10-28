import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About Us/About";
import Shop from "./Pages/Shop/Shop";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login Page/Login";
import Singup from "./Pages/Login Page/Singup";
import Checkout from "./Pages/Check Out/Checkout";
import Wishlist from "./Pages/Check Out/Wishlist";
import Cart from "./Pages/Cart";
import SingleProducts from "./Pages/Single Product/SingleProducts";
import Popup from "./Pages/PopupView.jsx/Popup";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Contactus" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="singup" element={<Singup />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProducts />} />
          <Route path="popup" element={<Popup/>} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
