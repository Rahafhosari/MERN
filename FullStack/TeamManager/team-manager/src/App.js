import logo from './logo.svg';
import './App.css';
import {Router, Redirect} from "@reach/router";
import PlayersList from './components/PlayersList';
import AddPlayerForm from './components/AddPlayerForm';
import GameStatus from './components/GameStatus';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Team Manager Assignment
      </header>
    <Router>
      <Redirect from='/' to='/players/list' />
      <PlayersList path='/players/list' />
      <GameStatus path='/status/game/1'/>
      <AddPlayerForm path='/addplayer'/>
      {/* <GameStatus path='/status/game/:id'/> */}
    </Router>
    </div>
  );
}

export default App;
