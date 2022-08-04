import logo from './logo.svg';
import './App.css';

import Pokemon from './components/Pokemon';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  return (
    <>
    <div className="App">
      <Pokemon />    
    </div>
    <div>
    <AxiosPokemon />
    </div>
    </>
  );
}

export default App;
