
import './App.css';
import React from 'react';
import Search from './components/Search';
import People from './components/People';
import Planet from './components/Planet';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import DisplayComponent from './components/DisplayComponent';

//1. Install Axios npm i axsios
//2. Install React Router npm install react-router-dom@5
//3. Seach Component
//4. API Call with specific data
//5. Pass data to Display Component.

function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Search />   
          <br></br><br></br>
          <hr></hr>
          <Switch>
            {/* USING ONE COMPONENT TO DISPLAY */}
            {/* <Route path="/:type/:id">
              <DisplayComponent />
            </Route> */}
            <Route path="/:starwar/:id">
              <DisplayComponent />
            </Route>
            
            {/* USING SEPARATE COMPONENTS TO DISPLAY */}

            {/* <Route path="/planets/:id">
              <Planet />
            </Route>

            <Route path="/people/:id">
              <People />
            </Route> */}

          </Switch>
          <hr></hr>
          {/* <Link to="/people/:id">People</Link> 
          &nbsp;  &nbsp; |   &nbsp;  &nbsp;
          <Link to="/planet/:id">Planet</Link> 
          <hr></hr>  */}
        </BrowserRouter>
      </div>
  );
}

export default App;
