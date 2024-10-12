import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Testimonials from "./Pages/Testimonials";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Privacypolicy from "./Pages/Privacypolicy";
import Terms_of_service from "./Pages/Terms_of_service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsofservice" element={<Terms_of_service />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
