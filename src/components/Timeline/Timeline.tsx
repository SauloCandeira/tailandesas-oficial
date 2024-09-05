import React from 'react';
import './Timeline.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Timeline.css
import htmlImg from '../../assets/img/html.png';
import cssImg from '../../assets/img/css.png';
import jsImg from '../../assets/img/js.png';
import githubImg from '../../assets/img/github-3.png';
import '../../assets/scss/styles.scss';

const Timeline = () => {
  return (
    <div id="timeline" className="timeline-section">
      <div className="timeline-text">
        <h1 className="text-5xl font-bold mb-4">Nossa Linha do Tempo</h1>
        <p className="text-xl">Explore os marcos importantes da nossa jornada e descubra como cada etapa contribui para o nosso progresso.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon bg-blue-500">
            <img src={htmlImg} alt="HTML" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">Início com HTML</h2>
            <p>Nossa jornada começa com HTML, o alicerce que molda a estrutura da web. É aqui que tudo começa a tomar forma.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-green-500">
            <img src={cssImg} alt="CSS" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">Evolução com CSS</h2>
            <p>Avançamos para o CSS, onde a estética ganha vida. Cores, fontes e layouts se juntam para criar uma experiência visual rica.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-yellow-500">
            <img src={jsImg} alt="JavaScript" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">Interatividade com JavaScript</h2>
            <p>Com JavaScript, damos vida às páginas. A interatividade e dinâmica são incorporadas, trazendo funcionalidade e responsividade.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-gray-500">
            <img src={githubImg} alt="GitHub" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">Controle de Versão com GitHub</h2>
            <p>Finalmente, com GitHub, armazenamos, colaboramos e gerenciamos nossas criações. O código se torna um projeto colaborativo e bem documentado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
