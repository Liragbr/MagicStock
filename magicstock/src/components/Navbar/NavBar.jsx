import React from 'react';
import { Typography } from "@material-tailwind/react";
import './NavBar.css'; // Importando o arquivo CSS
import { Link } from 'react-router-dom';

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="navbar mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">Comece agora</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">Sobre nós</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        
        <a href="#" className="flex items-center">Contato</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        
        <Link href="/login" className="flex items-center">Login</Link>
      </Typography>
      
    </ul>
    
  );

  return (
    <header className="header">
      <div className="logo">
        <img src="../src/assets/logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">MagicStock</span>
      </div>
      <nav>
        {navList}
      </nav>
    </header>
  );
}