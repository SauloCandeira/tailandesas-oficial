import './Home.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Home.css
import Timeline from '../../components/Timeline/Timeline'; // Ajuste o caminho conforme necessário
import Ticket from '../../components/Ticket/Ticket'; // Ajuste o caminho conforme necessário
import HeaderTwo from '../../components/Headers/header-two/HeaderTwo';
import Intro from '../../components/Intro/Intro';
import CardFeedback from '../../components/CardFeedback/CardFeedback';


const Home = () => {



  return (
    <div>
      <HeaderTwo/>
      <Intro />
      <Timeline />
      <Ticket  />
      <CardFeedback />
    </div>
  );
};

export default Home;
