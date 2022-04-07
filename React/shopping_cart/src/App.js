import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
             <Route exact path="/" element={<ProductList/>} />
             <Route path="/my-cart" element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
  
}

export default App;