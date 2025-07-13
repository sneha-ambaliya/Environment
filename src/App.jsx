import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Gallery from './Component/Gallery';
import AboutUS from './Component/AboutUS';
import Support from './Component/Support';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path='/Support' element={<Support />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
