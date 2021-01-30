import logo from './logo.svg';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import Test from './components/Header';
function App() {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <h1>First JSX</h1>
    <h2>Hello Dojo!</h2>
    <h4>Things I need to Do:</h4>
    <ul>
      <li>Learn React</li>
      <li>CLimb Mt. Everest</li>
      <li>Run a marathon</li>
      <li>Feed the cats</li>
    </ul>

    <MyNewComponent someText={"Hello World!"} />
    <MyNewComponent someText={"This Component is being re-used"}/>
    <Test
      lastName={ "Hosari" }
      firstName={ "Rahaf" }
      age={ 25 }
      hairColor={ "Black" }
      />
      <Test 
      lastName={ "Hosari" }
      firstName={ "Jeries" }
      age={ 23 }
      hairColor={ "Brown" }
      />
    {/* <Test props="firstName" props={ 67 }/>  */}
    {/* //Valid. We can send normal strings, but in numbers need curly braces */}
    {/* <Test props={ "firstName" } props={ 67 }/>  */}
    {/* //Valid. A String is still a Javascript expression */}

    </>
  );
}

export default App;
