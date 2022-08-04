import './App.css';
import React from 'react';
import {Router} from "@reach/router";

import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails'; 
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path="/" />
        <ProductDetails path="product/:id" />
        <UpdateProduct path="product/:id/edit"/>
      </Router>
      {/* <ProductsList /> */}
    </div>
  );
}

export default App;

