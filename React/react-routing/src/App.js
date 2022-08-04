import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Location from './components/Location';
import Number from './components/Number';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://v5.reactrouter.com/web/guides/quick-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          Routing Using React Router
        </a>
      </header>
      <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>  
        &nbsp;|&nbsp;
        {/* ------------location-----------*/}
        <Link to="/location/seattle">Seattle</Link>
        &nbsp;|&nbsp;
        <Link to="/location/chicago">Chicago</Link>
        &nbsp;|&nbsp;
        <Link to="/location/burbank">Burbank</Link> 
      </p>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/location/:city">
          <Location />
        </Route>
        {/* <Route path="/:num/">
          <Number />
        </Route> */}
        <Route path="/:word/:color1/:color2">
          <Word />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
