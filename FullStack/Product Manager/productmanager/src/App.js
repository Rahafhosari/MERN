import './App.css';
import {Router} from "@reach/router";

import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';



function App() {
  return (
    <div className="App">
      <Router>
      <ProductForm path="/" />
      </Router>
      <ProductsList path="/" />
    </div>
  );
}

export default App;
