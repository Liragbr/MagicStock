import { useRef, useEffect, useState } from "react";
import StickyNavbar from "../../components/Navbar/NavBar";
import "./HomePage.css";
// import UserReview from "../../components/UsersReview/UsersReview";

const HomePage = () => {
  const paragraphRef = useRef(null);
  const [paragraphHeight, setParagraphHeight] = useState(0);
  const sectionRef = useRef(null); 

  useEffect(() => {
    if (paragraphRef.current) {
      setParagraphHeight(paragraphRef.current.clientHeight);
    }
  }, []);

  const handleScrollToDiv = () => {
    if (sectionRef.current) {
      const targetPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; 
      let start = null;
  
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const ease = easeInOutQuad(progressPercentage);
        window.scrollTo(0, startPosition + distance * ease);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
  
      window.requestAnimationFrame(step);
    }
  };

  return (
    <div>
      <div className="starry-background">
        <div className="background-image"></div>
        <StickyNavbar />
        <h1 className="text-7xl mb-4 text-gray-500 italic">Conheça nossos Serviços!</h1>
        <button className="mt-10 custom-button italic " onClick={handleScrollToDiv}>
          Veja mais
        </button>
      </div>
      
      {/* Seção "Magic Stock" */}
      <div 
        className="starry-background" 
      >
        <div className="flex h-screen justify-center items-center bg-gray-600" ref={sectionRef}>
          <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center ml-10">
            <h1 className="text-5xl font-extrabold italic">Magic Stock</h1>
            <p ref={paragraphRef} className="text-2xl mt-8 italic">
              A MagicStock é uma empresa especializada no gerenciamento de estoques, oferecendo soluções eficientes e personalizadas para otimizar o controle de produtos e recursos das empresas. Nossa tecnologia de ponta permite um gerenciamento preciso e em tempo real, garantindo redução de custos, desperdícios e melhoria na tomada de decisões. Com a MagicStock, sua empresa ganha em eficiência operacional, escalabilidade e controle total do estoque, assegurando um crescimento sustentável e rentável. Investir em nossos serviços é garantir o sucesso do seu negócio através de uma gestão de estoque inteligente e ágil.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <img
              src="https://img.icons8.com/ios-filled/1000/1A1A1A/big-parcel.png"
              alt="Descrição da imagem"
              className="object-cover"
              style={{
                height: `${paragraphHeight * 1.5}px`, 
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
