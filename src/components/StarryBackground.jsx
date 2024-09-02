import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StarryBackground.css';

const StarryBackground = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/HomePage');
  };

  return (
    <div className="starry-background">
      <div className="background-image"></div>
      <h1 className="text-4xl mb-4 shadow">Bem vindo ao MagicStock</h1>
      <button className="custom-button" onClick={handleClick}>
        Explore
      </button>
    </div>
  );
};

export default StarryBackground;