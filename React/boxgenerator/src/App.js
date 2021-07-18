import React, {useState} from 'react';
import './App.css';
import MessageForm from './Components/MessageFrom';
import MessageDisplay from './Components/MessageDisplay';
import NewForm from './Components/NewForm';
import NewDisplay from './Components/NewDisplay';
// import FormDisplay from './Components/FormDisplay';

function App() {

  const [currentMsg, setCurrentMsg] = useState([]);
  
  const sendMsg = ( msg ) => {
    setCurrentMsg([...currentMsg,msg]);
  }

  return (
    <div className="App">
      <NewForm onSend= {sendMsg} />
      <NewDisplay message={ currentMsg }/>
      
    </div>
  );
}

export default App;
