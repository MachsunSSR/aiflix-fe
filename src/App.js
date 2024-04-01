import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import './index.css'
import User from './pages/user/User';
import Home from './pages/dashboard/Home';
import About from './pages/about/About';
import Collaboration from './pages/collaboration/Collaboration';
function App() {
  return (
    <div className="App font-[Inter]">
         <Router>
            <Routes>
            <Route
                path="/login"
                element={<Login />}
              />
            <Route
                path="/"
                element={<Home />}
              />
            <Route
                path="/about"
                element={<About />}
              />
            <Route
                path="/colaboration"
                element={<Collaboration/>}
              />
            <Route
                path="/admin/user"
                element={<User />}
              />
            </Routes>
            </Router>
    </div>
  );
}

export default App;
