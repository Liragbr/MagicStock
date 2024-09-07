
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarryBackground from './components/StarryBackground';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/Cadastro';
import Contato from './pages/Contato/Contato';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/Cadastro" element = {<Cadastro />} />
        <Route path="/" element={<StarryBackground />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
    </Router>
  );
};

export default App;