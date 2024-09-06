import React from 'react';
import { useTranslation } from 'react-i18next';
import './Timeline.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Timeline.css
import htmlImg from '../../assets/img/html.png';
import cssImg from '../../assets/img/css.png';
import jsImg from '../../assets/img/js.png';
import githubImg from '../../assets/img/github-3.png';

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div id="timeline" className="timeline-section">
      <div className="timeline-text">
        <h1 className="text-5xl font-bold mb-4">{t('timeline.title')}</h1>
        <p className="text-xl">{t('timeline.description')}</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon bg-blue-500">
            <img src={htmlImg} alt="HTML" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">{t('timeline.html.title')}</h2>
            <p>{t('timeline.html.description')}</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-green-500">
            <img src={cssImg} alt="CSS" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">{t('timeline.css.title')}</h2>
            <p>{t('timeline.css.description')}</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-yellow-500">
            <img src={jsImg} alt="JavaScript" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">{t('timeline.js.title')}</h2>
            <p>{t('timeline.js.description')}</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon bg-gray-500">
            <img src={githubImg} alt="GitHub" />
          </div>
          <div className="timeline-content">
            <h2 className="text-xl font-semibold mb-2">{t('timeline.github.title')}</h2>
            <p>{t('timeline.github.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
