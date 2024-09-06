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



  return (
    <div>
      <HeaderTwo/>
      <Intro />
      <Timeline />
      <Ticket  />
    </div>
  );
};

export default Home;
