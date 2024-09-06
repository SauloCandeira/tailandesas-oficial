import './Home.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Home.css
import Timeline from '../../components/Timeline/Timeline'; // Ajuste o caminho conforme necessário
import Ticket from '../../components/Ticket/Ticket'; // Ajuste o caminho conforme necessário
import HeaderTwo from '../../components/Headers/header-two/HeaderTwo';
import Intro from '../../components/Intro/Intro';

// Suponha que você tenha imagens importadas ou URLs para as imagens
import eBookImg from '../../assets/img/e-book.png';
import videoImg from '../../assets/img/video.png';
import packageImg from '../../assets/img/package.png';
import { Product } from '../../Interfaces/InterfaceProduct';

const Home = () => {

  const products: Product[] = [
    {
      id: 1,
      name: 'E-book', // Adicione a propriedade name
      price: 49.99, // Ajuste o tipo para number
      description: 'Aprenda com nosso e-book detalhado, cobrindo todos os aspectos essenciais.',
      image: eBookImg, // Adicione a propriedade image
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20E-book',
    },
    {
      id: 2,
      name: 'Videoaula', // Adicione a propriedade name
      price: 79.99, // Ajuste o tipo para number
      description: 'Assista nossa videoaula e pratique com exemplos práticos.',
      image: videoImg, // Adicione a propriedade image
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Videoaula',
    },
    {
      id: 3,
      name: 'Pacote Completo', // Adicione a propriedade name
      price: 119.99, // Ajuste o tipo para number
      description: 'Obtenha o e-book e as videoaulas juntos com um preço especial.',
      image: packageImg, // Adicione a propriedade image
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Completo',
    },
  ];

  return (
    <div>
      <HeaderTwo/>
      <Intro />
      <Timeline />
      <Ticket products={products} />
    </div>
  );
};

export default Home;
