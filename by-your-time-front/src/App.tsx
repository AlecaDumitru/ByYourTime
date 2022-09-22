import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Categories from './Pages/EventsAllCategories';
import ContactUs from './Components/Contact/Contact';



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
                <Route path="/contact" element={(<ContactUs/>)}/>
                <Route path="/events"  element={(<Categories/>)}/>
                <Route path="/" element={(<Slider/>)}/>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
