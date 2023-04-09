import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import Logout from "./pages/Logout/Logout";
import Profile from "./pages/profile/Profile";
import PostView from "./pages/forum/src/components/views/PostView";
import CreatePostView from "./pages/forum/src/components/views/CreatePostView";
import ProfileView from "./pages/forum/src/components/views/ProfileView";
import ExploreView from "./pages/forum/src/components/views/ExploreView";
import PrivateRoute from "./pages/forum/src/components/PrivateRoute";
import SearchView from "./pages/forum/src/components/views/SearchView";
import MessengerView from "./pages/forum/src/components/views/MessengerView";
import theme from "./pages/forum/src/theme";
import './App.css';import Contact from "./pages/contact/Contact";

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
    
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/' exact element={<Home />}/>
          {!token && <Route path='/login' element={<Login />}/>}
          {!token && <Route path='/register' element={<Register />} />}
          {token && <Route path='/logout' element={<Logout />} />}
          {token && <Route path="/forum" element={<ProfileView />} />}
        {token && <Route path="/profile" element={<Profile />} />}
        <Route path="/forum" element={<ExploreView />} />
          <Route path="/forum/posts/:id" element={<PostView />} />
          <Route
            path="/forum/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route path="/forum/users/:id" element={<ProfileView />} />
          <Route path="/forum/search" element={<SearchView />} />
          
      </Routes>

      </BrowserRouter>
      </ThemeProvider>

  );
}

export default App;
