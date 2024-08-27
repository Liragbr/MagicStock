import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/componets/page.jsx"; // Certifique-se de que o caminho está correto
import App from "./App.jsx"; // Exemplo de outra página
import Home from "./pages/home/components/page.jsx"; // Exemplo de outra página

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      {/* Outras rotas podem ser adicionadas aqui */}
    </Routes>
  );
};

export default AppRoutes;