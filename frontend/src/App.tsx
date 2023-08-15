import React from 'react'
import {Route, Routes} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Dashboard from './Pages/Dashboard';
import axios from "axios";
import UserContextProvider from './UserContext';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route  path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </UserContextProvider>
    
  )
} 

export default App