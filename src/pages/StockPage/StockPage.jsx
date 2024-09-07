
import SearchBar from "../../components/Componentes/Searchbar/SearchBar"; // Importe o componente SearchBar
import "./HomePage.css";

const StockPage = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
    // Adicione a lógica de pesquisa aqui
  };

  <div className="flex items-start">
    <div className="box-border h-70 w-64 p-4 border-2 rounded-lg  border-gray-400">
      <form action="">
        <h1 className="font-semibold mb-3">Filtros</h1>
        <label className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span className="font-semibold">Opção1</span>
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span className="font-semibold">Opção2</span>
        </label>
        <label htmlFor="price" className="block mb-2">
          Preço
        </label>
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="100"
          className="w-220"
        />
      </form>
    </div>
    <div className="ml-10 flex flex-col">
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg  border-gray-400">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg  border-gray-400">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
    </div>
    <div className="ml-4 flex flex-col ">
      <div className="ml-4 mt-13 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
    </div>
    <div className="ml-4 flex flex-col ">
      <div className="ml-4 mt-13 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
      <div className="ml-4 mt-4 box-border h-64 w-64 p-4 border-2 rounded-lg border-gray-400 ">
        {/* Conteúdo da nova caixa */}
      </div>
    </div>
  </div>;
};

export default StockPage;
