import React, { useState } from 'react';
import './App.css';
import Tabs  from './Components/Tabs';
import TabsDisplay  from './Components/TabsDisplay';


function App() {
  const [currentTab, setcurrentTab] = useState("");
  
  const newTabContent = (content) => {
  setcurrentTab(content);
}

  return (
    <div className="App">
        <h1>Tabs</h1>
      <div>
      <Tabs newTab={ newTabContent } />
      <TabsDisplay content={ currentTab }/>
      </div>
    </div>
  );
}

export default App;
