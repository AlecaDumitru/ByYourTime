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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          {/* <Route path="/products"  element={(<PageCategories/>)}/>
                <Route path="/about" element={(<AboutUs/>)}/>
                <Route path="/contact" element={(<ContactUs/>)}/>
                <Route path="/sign-up" element={(<SignUp/>)}/>
                <Route path="/register" element={(<Register/>)}/>
                <Route path="/products/:id" element={(<Product/>)}/> */}
          <Route path="/events/product" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Categories />} />
          <Route path="/" element={<Slider />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
