import { Routes, Route } from 'react-router';
import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="Products" element={ <Products /> } />
          <Route path="Pricing" element={ <Pricing /> } />
          <Route path="Blog" element={ <Blog /> } />
      </Routes>
    </div>
  )
}
export default App;