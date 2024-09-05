import React from 'react';
import './Intro.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Intro.css
import mountainImg from '../../assets/img/mountain.png'; // Ajuste o caminho da imagem conforme necessário
import arrowDownImg from '../../assets/img/arrow-down.svg';
// import '../../assets/scss/styles.scss';


const Intro: React.FC = () => {
  return (
    <div id="intro" className="intro-section relative">
      <div className="intro-section-text">
        <h1 className="text-5xl font-bold mb-4">
          Descubra um universo inexplorado.
        </h1>
        <p className="text-xl">
          Desbrave o fascinante mundo da programação e abra as portas para um futuro inovador e repleto de possibilidades.
        </p>
      </div>
      <div className="absolute left-0 flex justify-center bottom-0">
        <img src={mountainImg} className="mountain" alt="Mountain" />
      </div>
      {/* <div className="absolute left-0 flex justify-center bottom-0 z-10 w-full pb-8">
        <button className="font-semibold flex flex-col justify-center items-center space-y-2">
          <img src={arrowDownImg} alt="Scroll down" />
          <span>Scroll down</span>
        </button>
      </div> */}
    </div>
  );
};

export default Intro;
