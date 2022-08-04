import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import React, {useState} from 'react';

import AllAuthors from "./components/AllAuthors"
import AuthorsForm from "./components/AuthorsForm"
import UpdateAuthor from "./components/UpdateAuthor"
import TestCard from "./components/TestCard"

function App() {
  return (
    <div className="App">
    <Router>
    <AllAuthors path="/" />
    <AuthorsForm path="/new" />
    <UpdateAuthor path="author/:id/edit"/>
    </Router>
    {/* <TestCard /> */}
    </div>

  );
}

export default App;
