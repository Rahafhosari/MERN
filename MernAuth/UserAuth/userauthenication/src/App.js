import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import AllBooks from './components/AllBooks';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
    <UserForm path="/" />
    <AllBooks path="/success" />
    <LoginForm path="/new" />
    </div>
  );
}

export default App;
