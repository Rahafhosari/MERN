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
        <LoginForm path="/login" />
        <Books path="/success" />
      </Router>
    </div>
  );
}

export default App;
