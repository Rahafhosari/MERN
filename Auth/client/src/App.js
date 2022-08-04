import React ,{ useState } from 'react';
import './App.css';
import Form from './components/Form'
import {Router} from '@reach/router'
function App() {
 
  return (
    <div className="App">
      <Router>
        <Form path='/reg'/>
        </Router>
        
    </div>
  );
}

export default App;
