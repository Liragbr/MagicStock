import React, { useEffect, useState } from 'react';

function VisualizarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (response.ok) {
          const data = await response.json();
          setProdutos(data);
        } else {
          console.error('Erro ao buscar produtos:', response.statusText);
        }
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <main className="px-6 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Lista de Produtos</h2>
      </div>

      <div>
        {produtos.length > 0 ? (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id} className="mb-4">
                <img src={produto.img} alt={produto.name} className="w-16 h-16" />
                <div>
                  <h3 className="text-xl font-semibold">{produto.name}</h3>
                  <p>Quantidade: {produto.qtd}</p>
                  <p>Preço: R${produto.price}</p>
                  <p>Código de Barras: {produto.barcode}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default VisualizarProdutos;