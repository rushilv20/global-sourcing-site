import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Process from './components/Process';
import Products from './components/Products';
import SubmitProduct from './components/SubmitProduct';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process" element={<Process />} />
        <Route path="/products" element={<Products />} />
        <Route path="/submit-product" element={<SubmitProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
