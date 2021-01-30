import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
    <PersonCard firstName="Rahaf" lastName="Hosari" age={ 25 } hairColor="Brown" /> 
    <PersonCard firstName="Jeries" lastName="Hosari" age={ 23 } hairColor="Brown" /> 
    <PersonCard firstName="Mitry" lastName="Hosari" age={ 62 } hairColor="Brown" /> 

    </div>
  );
}

export default App;
