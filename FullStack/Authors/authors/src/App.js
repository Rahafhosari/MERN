import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import React, {useState} from 'react';

import AllAuthors from "./components/AllAuthors"
import AuthorsForm from "./components/AuthorsForm"

function App() {
  return (
    <div className="App">
    <Router>
    <AllAuthors path="/" />
    <AuthorsForm path="/new" />
    </Router>
    </div>
  );
}

export default App;
