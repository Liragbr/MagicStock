import { useRef, useEffect, useState } from "react";
import StickyNavbar from "../../components/Navbar/NavBar";
import "./HomePage.css";

const HomePage = () => {
  const paragraphRef = useRef(null);
  const [paragraphHeight, setParagraphHeight] = useState(0);

  useEffect(() => {
    if (paragraphRef.current) {
      setParagraphHeight(paragraphRef.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <div className="starry-background">
        <div className="background-image"></div>
        <StickyNavbar />
        <h1 className="text-7xl mb-4 text-white">Veja nossos Serviços!</h1>
        <button className="mt-10 custom-button"> Veja mais </button>
      </div>
      <div className="flex h-screen shadow-xl ">
        <div className="w-1/2 p-10 flex flex-col justify-center ml-10">
          <h1 className="text-5xl font-extrabold">Lorem Ipsum</h1>
          <p ref={paragraphRef} className="text-10 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            iste soluta magnam ex possimus magni quaerat illo perspiciatis
            consectetur aliquid officiis cupiditate numquam distinctio nobis
            inventore accusamus, dolor repellendus ut! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Qui enim vel laudantium fuga
            cumque minus nobis modi voluptatum laboriosam labore repellendus
            voluptatem ipsa, nam quam. Aliquam sequi sed omnis quo? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia tenetur
            mollitia unde harum, magni ullam, voluptatibus ipsam doloribus
            labore dolor quibusdam numquam incidunt, fuga inventore? Error
            eligendi eveniet debitis id. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tempora excepturi maiores officia iure, quasi
            itaque odit sequi laborum quae dolor soluta, voluptate inventore
            velit dolorem recusandae optio, maxime deleniti accusantium.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="https://img.icons8.com/ios-filled/1000/1A1A1A/big-parcel.png"
            alt="Descrição da imagem"
            className="object-cover"
            style={{ height: `${paragraphHeight}px` }}
          />
        </div>
      </div>
      <div className="bg-gray-800 h-screen">
        {" "}
        {/* Tem que componentizar isso daqui */}
        <h1 className="text-4xl font-bold text-white pt-20 pl-10">
          Nossa equipe
        </h1>
        <h2 className="text-2xl mt-5 text-white pl-10">
          Conheça os desenvolvedores
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-16 pl-4 pb-60 bg-gray-800">
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Full Stack</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr10 ml-5 ">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Front-End</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr10 ml-5 ">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Full Stack</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr10 ml-5 ">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Full Stack</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr10 ml-5 ">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Full Stack</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr10 ml-5 ">
            <div className="flex flex-col items-start w-full">
              <h1 className="mb-3 text-lg font-bold pt-2">Full Stack</h1>
              <div className="flex items-center pb-3">
                <img
                  src="https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg"
                  alt="Descrição da imagem"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col ml-2">
                  <h2 className="text-sm font-bold ">Felipe Tavares</h2>
                  <h3 className="text-sm">Desenvolvedor</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
