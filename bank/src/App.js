import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import ProfilePage from './components/profile.js';
function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;