import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroProduto() {
  const [img, setImg] = useState('');
  const [produto, setProduto] = useState('');
  const [qtd, setQtd] = useState('');
  const [preco, setPreco] = useState('');
  const [barcode, setBarcode] = useState('');
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      img,
      name: produto,
      qtd,
      price: preco,
      barcode,
    };

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        const data = await response.json();
        setProdutos([...produtos, data.product]);

        // Limpa os campos após o envio
        setImg('');
        setProduto('');
        setQtd('');
        setPreco('');
        setBarcode('');
      } else {
        console.error('Erro ao adicionar produto:', response.statusText);
      }
    } catch (err) {
      console.error('Erro ao adicionar produto:', err);
    }
  };

  const handleNavigate = () => {
    navigate('/produtos');
  };

  return (
    <main className="px-6 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Cadastro de Produto</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Imagem:</label>
          <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
        </div>
        <div>
          <label>Produto:</label>
          <input type="text" value={produto} onChange={(e) => setProduto(e.target.value)} />
        </div>
        <div>
          <label>Quantidade:</label>
          <input type="number" value={qtd} onChange={(e) => setQtd(e.target.value)} />
        </div>
        <div>
          <label>Preço:</label>
          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </div>
        <div>
          <label>Código de Barras:</label>
          <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>

      <button onClick={handleNavigate}>Ver Produtos</button>
    </main>
  );
}

export default CadastroProduto;