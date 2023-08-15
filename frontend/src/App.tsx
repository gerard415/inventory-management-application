import React from 'react'
import {Route, Routes} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route  path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginPage/>}  />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  )
} 

export default App