import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const Login = () => {
  useEffect(() => {

    document.body.classList.add('login');

    return () => {
      document.body.classList.remove('login');
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tela de Login</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,100;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="relative h-screen w-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://cdn.leonardo.ai/users/0ee5764b-8b4d-4c04-83f5-c49d36c3e794/generations/54a4e505-fe67-4e1f-bd71-b3b2233630ef/Leonardo_Phoenix_Depict_a_meticulously_organized_and_spotless_3.jpg')"
          }}
        ></div>
        <div className="relative flex justify-center items-center h-full w-full">
          <div className="m-8 justify-center items-center">
            <div className="w-full border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg">
              <form className="w-full h-auto p-10 flex flex-col justify-center items-center">
                <h1 className="mb-5 text-2xl text-center text-white">Entrar na Plataforma</h1>
                <div className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <input
                    className="bg-transparent text-white placeholder-white w-full outline-none"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <img
                    className="filter invert"
                    width="20" 
                    height="20"
                    src="https://img.icons8.com/material-rounded/96/user.png"
                    alt="user--v1"
                  />
                </div>
                <div className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <input
                    className="bg-transparent text-black placeholder-black w-full outline-none filter invert"
                    placeholder="Senha"
                    type="password"
                    required
                  />
                  <img
                    className="filter invert"
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-glyphs/30/lock--v1.png"
                    alt="lock--v1"
                  />
                </div>
                <a href="#" className="text-sm text-white cursor-pointer underline mt-2">Esqueci minha senha</a>
                <button type="submit" className="mt-10 p-4 m-2 text-center font-bold text-white bg-gray-900 border border-none rounded-lg hover:bg-gray-700 cursor-pointer w-full">
                  Entrar
                </button>
                <div className="register-link mt-4">
                  <p className="text-white">
                    Não está cadastrado? <Link to="/Cadastro" className="text-white underline">Cadastre-se</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
