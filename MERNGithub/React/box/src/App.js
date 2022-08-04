import React, { useState } from 'react';
import './App.css';

import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';

function App() {
  const [box, setBox] = useState([]);
  
  const boxgenerator = ( color, height, width ) => {
    setBox( box.concat({color,height,width}) );
  }
  
return (
    <>
      <MessageForm youveGotMail={ boxgenerator } />
      <MessageDisplay message={ box } />
    
    </>
);
}

export default App;
