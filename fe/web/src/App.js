import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import Logout from "./pages/Logout/Logout";
import Forum from "./pages/forum/Forum";
import Profile from "./pages/profile/Profile";

function App() {
  const [token, setToken] = useState("");
  const checkAuth = () => {
    let tkn = localStorage.getItem('token');
    setToken(tkn);
  }

  useEffect(() => {
    checkAuth();
  }, [])
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          {!token && <Route path='/login' element={<Login />}/>}
          {!token && <Route path='/register' element={<Register />} />}
          {token && <Route path='/logout' element={<Logout />} />}
          {token && <Route path="/forum" element={<Forum />} />}
          {token && <Route path="/profile" element={<Profile />} />}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
