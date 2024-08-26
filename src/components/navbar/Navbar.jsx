import React from "react";
import './Navbar.css';
import MagicBranco from './imagens/stockbranco.png';
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <img src={MagicBranco} height={'50px'}/>
            <a href="/" className="logo">Magic Stock</a>
            <nav className="navbar">
                <a href="/">Sobre nós</a>
                <a href="/">Serviços</a>
                <a href="/">Contatos</a>
                <Link to="/Login">Login </Link>
            </nav>
        </header>   
        
    )

}

export default Navbar