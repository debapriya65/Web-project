import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navigation';
import SignIn from './components/SignIn';
import {Link,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <SignIn></SignIn> 
    </div>
  );
}

export default App;
