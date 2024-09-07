import React from 'react';
import '../StarryBackground.css';

const NotFoundPage = () => {
  return (
    <div>
      <div className="starry-background">
        <div className="background-image"></div>
        <h1 className="text-4xl mb-4 text-white">Página não encontrada</h1>
        
        <h1 className="text-3xl font-semibold mt-3 text-white">Erro 404</h1>
            <p className="mt-4 text-white">A página que você está procurando não existe.</p>
            <button className="custom-button mt-10" onClick={() => window.location.href = '/'}>Voltar para a Home</button>
      </div>
      
    </div>
  );
};

export default NotFoundPage;