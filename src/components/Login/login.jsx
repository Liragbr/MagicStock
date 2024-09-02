import React, { useEffect } from 'react';
import './login.css';
import { Helmet } from 'react-helmet';

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
      <div className="container">
        <form>
          <h1>Entrar na Plataforma</h1>
          <div className="input-container">
            <input placeholder="Email" type="email" required />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/user--v1.png"
              alt="user--v1"
            />
          </div>
          <div className="input-container">
            <input placeholder="Senha" type="password" required />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/lock--v1.png"
              alt="lock--v1"
            />
            <a href="#">Esqueci minha senha</a>
          </div>
          <button type="submit" className="submit-button">
            Entrar
          </button>
          <div className="register-link">
            <p>
              Não está cadastrado? <a href="#">Cadastrar</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
