import './App.css';
import {useState} from 'react';
import { navigate } from '@reach/router'

import Parameter  from './components/Parameter';
import Home from './components/Home';
import StyleParam from './components/StyleParam';
import Starwars from './components/Starwars';
import People from './components/People';
import Planets from './components/Planets';
// import Search from './components/Search';


import axios from 'axios';

import {Router} from '@reach/router'

function App() {
  const [displayData, setDisplayData] = useState('');
  
  const handleClick = (starwar, id) => {
    axios.get(`http://swapi.dev/api/${starwar}/${id}`)
      .then(response => {
        setDisplayData(response.data);
        navigate(`/${starwar}/${id}`);
        console.log(response.data);
      })
  }

  return (
    <div className="App">
      <Starwars handleClick={handleClick} />
      {/* <Router>  */}
        {/* ****Routing Practice**** */}
        {/* <Home path="/home" />
        <Parameter path="/:var" />
        <StyleParam path="/:color1/:color2/:var"/> */}
      {/* </Router> */}
        <Router>
          {/* <Starwars  /> */}
          <People path="/people/:id" displayData={displayData} />
          <Planets path="/planet/:id" displayData={displayData} /> 
        </Router>
        <>
        {/* <Search path="/"/> */}
        </>
    </div>
  );
}

export default App;

// {/* navigate(`/${resource}/${selectedId}`); */}
