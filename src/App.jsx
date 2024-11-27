
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/Cadastro';
import Contato from './pages/Contato/Contato';
import CadastroProduto from './pages/Login/cadastroProduto'; 



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/Cadastro" element = {<Cadastro />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />

      </Routes>
    </Router>
  );
};

export default App;