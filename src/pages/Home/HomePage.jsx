import  { useRef, useEffect, useState } from "react";
import StickyNavbar from "../../components/Navbar/NavBar";
import "./HomePage.css";
import ProfileGrid from "../../components/profile/profilegrid";
import UserReview from "../../components/UsersReview/UsersReview";

const HomePage = () => {
  const paragraphRef = useRef(null);
  const [paragraphHeight, setParagraphHeight] = useState(0);
  const targetDivRef = useRef(null); // Referência para a div de destino

  useEffect(() => {
    if (paragraphRef.current) {
      setParagraphHeight(paragraphRef.current.clientHeight);
    }
  }, []);

  const handleScrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="starry-background">
        <div className="background-image"></div>
        <StickyNavbar />
        <h1 className="text-7xl mb-4 text-white">Conheça nossos Serviços!</h1>
        <button className="mt-10 custom-button" onClick={handleScrollToDiv}>
          Veja mais
        </button>
      </div>
      <div className="flex h-screen" ref={targetDivRef}>
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
      <div className="bg-gray-800 h-screen box-shadow ">
        <h1 className="text-4xl font-bold text-white pt-20 pl-10">
          Nossa equipe
        </h1>
        <h2 className="text-2xl mt-5 text-white pl-10">
          Conheça os desenvolvedores
        </h2>
        <div>
          <ProfileGrid />
        </div>
        <div className="bg-white h-screen box-shadow">
          <UserReview />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;