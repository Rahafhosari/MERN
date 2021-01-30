import React from 'react';
import './App.css';
import Header from './Componentss/Header';
import Navigation from './Componentss/Navigation';
import Main from './Componentss/Main';
import SubContents from './Componentss/SubContents';
import Advertisement from './Componentss/Advertisement';

function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;





// import logo from './logo.svg';
// import './App.css';

// import MyNewComponent from './components/MyNewComponent';
// import Test from './components/Header';
// function App() {
//   return (
//     <>
//     {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
//     <h1>First JSX</h1>
//     <h2>Hello Dojo!</h2>
//     <h4>Things I need to Do:</h4>
//     <ul>
//       <li>Learn React</li>
//       <li>CLimb Mt. Everest</li>
//       <li>Run a marathon</li>
//       <li>Feed the cats</li>
//     </ul>

//     <MyNewComponent someText={"Hello World!"} />
//     <MyNewComponent someText={"This Component is being re-used"}/>
//     <Test
//       lastName={ "Hosari" }
//       firstName={ "Rahaf" }
//       age={ 25 }
//       hairColor={ "Black" }
//       />
//       <Test 
//       lastName={ "Hosari" }
//       firstName={ "Jeries" }
//       age={ 23 }
//       hairColor={ "Brown" }
//       />
//     </>
//   );
// }

// export default App;
