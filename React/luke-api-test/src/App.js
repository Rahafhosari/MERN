import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import DisplayComponent from './components/DisplayComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <br></br>
      <Switch>
        <Route path="/:starwar/:id">
          <DisplayComponent />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
