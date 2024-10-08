import 'tailwindcss/tailwind.css';

const Cadastro = () => {
  return (
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
            <h1 className="mb-5  p-text-xl text-center text-white text-2xl ">Cadastre seus dados</h1>
                <input
                className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg text-white placeholder-white"
                placeholder="Nome"
                type="text"
              />
              <input
                className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg text-white placeholder-white"
                placeholder="Email"
                type="email"
              />
              <input
                className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg text-white placeholder-white"
                placeholder="Senha"
                type="password"
              />
              <input
                className="m-1 w-full h-12 border-2 border-white border-opacity-20 rounded-xl p-5 bg-black bg-opacity-10 backdrop-blur-lg text-white placeholder-white"
                placeholder="Confirmar Senha"
                type="password"
              />
              <button className="mt-10 p-4 m-2 text-center font-bold text-white bg-gray-900 border border-none rounded-lg hover:bg-gray-700 cursor-pointer w-full">
  CADASTRAR
</button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;