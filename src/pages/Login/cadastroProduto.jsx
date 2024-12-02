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
    <main class="px-6 py-8">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold">Produce</h2>
      <span class="text-gray-500">Fresh — August 21, 2023</span>
    </div>


    <div class="mt-4 flex items-center gap-4">
      <button class="bg-green-700 text-white px-4 py-2 rounded-md">Default</button>
      <button class="border px-4 py-2 rounded-md">A-Z</button>
      <button class="border px-4 py-2 rounded-md">List view</button>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      <div class="border rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Heirloom tomato" class="w-full">
        <div class="p-4">
          <h3 class="font-bold">Heirloom tomato</h3>
          <p class="text-green-700">$5.99 / lb</p>
          <p class="text-sm text-gray-500">Grown in San Juan Capistrano, CA</p>
        </div>
      </div>

      <div class="border rounded-lg overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Organic ginger" class="w-full">
        <div class="p-4">
          <h3 class="font-bold">Organic ginger</h3>
          <p class="text-green-700">$12.99 / lb</p>
          <p class="text-sm text-gray-500">Grown in Huntington Beach, CA</p>
        </div>
      </div>
    </div>
  </main>
  );
}

export default CadastroProduto;
