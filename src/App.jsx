import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarryBackground from './components/StarryBackground';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/login';
import Cadastro from './components/Cadastro/Cadastro';
import Contato from './components/Contato/Contato';
import SobreNos from './components/SobreNos/SobreNos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/Cadastro" element = {<Cadastro />} />
        <Route path="/" element={<StarryBackground />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/SobreNos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
};

export default App;