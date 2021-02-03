import './App.css';
import Parameter  from './components/Parameter';
import Home from './components/Home';
import StyleParam from './components/StyleParam';

import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Parameter path="/:var" />
        <StyleParam path="/:color1/:color2/:var"/>
      </Router>
    </div>
  );
}

export default App;
