import logo from './logo.svg';
import './App.css';
import {Router, Redirect} from "@reach/router";
import PlayersList from './components/PlayersList';
import AddPlayerForm from './components/AddPlayerForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Team Manager Assignment
      </header>
    <Router>
    <Redirect from='/' to='/players/list' />
    <PlayersList path='/players/list' />
    <AddPlayerForm path='/addplayer' />
    </Router>
    </div>
  );
}

export default App;
