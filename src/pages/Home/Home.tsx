import React from 'react';
import './Home.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Home.css
// import './scss/styles.scss'; // Certifique-se de que seus estilos CSS estejam no arquivo Home.css
// import eBookImg from './img/e-book.png';
// import packageImg from './img/package.png';
// import videoImg from './img/video.png';


import Timeline from '../../components/Timeline/Timeline'; // Ajuste o caminho conforme necessário
import Ticket from '../../components/Ticket/Ticket'; // Ajuste o caminho conforme necessário
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';

const Home = () => {

  const products = [
    {
      id: 1,
      title: 'E-book',
      description: 'Aprenda com nosso e-book detalhado, cobrindo todos os aspectos essenciais.',
      price: 'R$ 49,99',
      // image: eBookImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20E-book',
    },
    {
      id: 2,
      title: 'Videoaula',
      description: 'Assista nossa videoaula e pratique com exemplos práticos.',
      price: 'R$ 79,99',
      // image: videoImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Videoaula',
    },
    {
      id: 3,
      title: 'Pacote Completo',
      description: 'Obtenha o e-book e as videoaulas juntos com um preço especial.',
      price: 'R$ 119,99',
      // image: packageImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Completo',
    },
  ];


  return (
    <div>

      <Header/>
      
      <Intro />


      <Timeline />
 
      <Ticket products={products} />

    </div>
  );
};

export default Home;
