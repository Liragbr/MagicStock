// CadastroProduto.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function CadastroProduto() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [produtos, setProdutos] = useState([]);
  
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      produto,
      quantidade,
      preco,
      codigoBarras,
    };

    setProdutos([...produtos, novoProduto]);

    // Limpa os campos após o envio
    setProduto('');
    setQuantidade('');
    setPreco('');
    setCodigoBarras('');
  };

  const handleNavigate = () => {
    navigate('/produtos');
  };

  return (
    <div className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.leonardo.ai/users/0ee5764b-8b4d-4c04-83f5-c49d36c3e794/generations/54a4e505-fe67-4e1f-bd71-b3b2233630ef/Leonardo_Phoenix_Depict_a_meticulously_organized_and_spotless_3.jpg')",
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex justify-center items-center h-full w-full">
        <div className="m-8 justify-center items-center">
          <div className="w-full max-w-lg border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg">
            <h1 className="text-2xl text-center text-white mb-5">Cadastro de Produto</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <div className="m-2 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-3 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                <input
                  type="text"
                  value={produto}
                  onChange={(e) => setProduto(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-full outline-none"
                  placeholder="Produto"
                  required
                />
              </div>

              <div className="m-2 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-3 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                <input
                  type="number"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-full outline-none"
                  placeholder="Quantidade"
                  required
                />
              </div>

              <div className="m-2 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-3 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                <input
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-full outline-none"
                  placeholder="Preço"
                  required
                />
              </div>

              <div className="m-2 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-3 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                <input
                  type="text"
                  value={codigoBarras}
                  onChange={(e) => setCodigoBarras(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-full outline-none"
                  placeholder="Código de Barras"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 p-3 text-center font-bold text-white bg-gray-900 border-none rounded-lg hover:bg-gray-700 cursor-pointer w-full"
              >
                Cadastrar
              </button>
            </form>
            
            {/* Botão de navegação */}
            <button
              onClick={handleNavigate}
              className="mt-4 p-3 text-center font-bold text-white bg-gray-900 border-none rounded-lg hover:bg-gray-700 cursor-pointer w-full"
            >
              Ir para Lista de Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroProduto;
