import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando dados: ', formData); // Verifique os dados no console

    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      if (response.status === 200) {
        alert('Mensagem enviada com sucesso');
        // Limpar campos após envio
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem', error);
      alert('Erro ao enviar a mensagem');
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a homepage
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contato - MagicStock</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
              <form className="w-full h-auto p-10 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <h1 className="mb-5 text-2xl text-center text-white">Entre em Contato com a MagicStock</h1>

                <div className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <input
                    className="bg-transparent text-white placeholder-white w-full outline-none"
                    placeholder="Nome"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <img
                    className="filter invert"
                    width="20"
                    height="20"
                    src="/src/assets/user.svg"
                    alt="user"
                  />
                </div>

                <div className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <input
                    className="bg-transparent text-white placeholder-white w-full outline-none"
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <img
                    className="filter invert"
                    width="20"
                    height="20"
                    src="/src/assets/email.svg"
                    alt="email"
                  />
                </div>

                <div className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <input
                    className="bg-transparent text-white placeholder-white w-full outline-none"
                    placeholder="Telefone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <img
                    className="filter invert"
                    width="20"
                    height="20"
                    src="/src/assets/phone.svg"
                    alt="phone"
                  />
                </div>

                <div className="m-1 w-full h-16 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg flex items-center">
                  <textarea
                    className="bg-transparent text-white placeholder-white w-full outline-none"
                    placeholder="Mensagem"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-10 p-4 m-2 text-center font-bold text-white bg-gray-900 border border-none rounded-lg hover:bg-gray-700 cursor-pointer w-full"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Botão para voltar para a homepage com o ícone */}
        <button
          onClick={handleGoHome}
          className="absolute top-20 left-6 p-4 text-white bg-gray-300 rounded hover:bg-gray-700 shadow-lg"
        >
          <img
            src="/src/assets/back.svg"
            alt="Voltar"
            className="w-16 h-8"
          />
        </button>
      </div>
    </>
  );
};

export default ContactPage;
