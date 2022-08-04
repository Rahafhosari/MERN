import './App.css';
import { Router } from '@reach/router';
import Main from './Components/Main';
import Details from './Components/Details';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Main path="people/"/>
        <Details path="people/:id" />
      </Router>
      </header>
    </div>
  );
}

export default App;
