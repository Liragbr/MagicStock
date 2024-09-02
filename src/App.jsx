import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarryBackground from './components/StarryBackground';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/Cadastro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/Cadastro" element = {<Cadastro />} />
        <Route path="/" element={<StarryBackground />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;