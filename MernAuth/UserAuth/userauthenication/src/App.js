import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import Books from './components/Books';
import LoginForm from './components/LoginForm';
import {Router} from "@reach/router";



function App() {
  return (
    <div className="App">
      <Router>
        <UserForm path="/" />
        <Books path="/success" />
        <LoginForm path="/login" />
      </Router>
    </div>
  );
}

export default App;
