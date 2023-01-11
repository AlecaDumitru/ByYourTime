import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/EventsAllCategories";
import ContactUs from "./Components/Contact/Contact";
import ProductDetails from "./Components/ProductPage/ProductPage";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import ProductCard from "./Components/ProductCard/ProductCard";
import EventsByCategoryId from "./Pages/EventsByCategoryId";
import HomepageCards from "./Components/HomepageCards/HomepageCards";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/events/product" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Categories />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/category/:id" element={<EventsByCategoryId />} />
          <Route path="/event/:id" element={<ProductDetails />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
