import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Home/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import DarkModeToggle from './components/DarkMode/DarkModeToggle.jsx';
import ToGithub from './components/ToGithub/ToGithub.jsx';


const routes = (
  <Router>
    <div className="min-h-screen ">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signUp' exact element={<SignUp />} />
      </Routes>
      <ToGithub />
      <DarkModeToggle />
    </div>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App