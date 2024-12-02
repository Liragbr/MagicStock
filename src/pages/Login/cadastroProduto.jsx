// CadastroProduto.js
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      img,
      produto,
      qtd,
      preco,
      barcode,
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
    <div>
      
    </div>
  );
}

export default CadastroProduto;
