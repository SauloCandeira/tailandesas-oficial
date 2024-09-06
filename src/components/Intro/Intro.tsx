import React from 'react';
import './Intro.css'; 
import mountainImg from '../../assets/img/mountain.png'; 
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="intro" className="intro-section relative">
      <div className="intro-section-text">
        <h1 className="text-5xl font-bold mb-4">
          {t('intro.title')}
        </h1>
        <p className="text-xl">
          {t('intro.description')}
        </p>
      </div>
      <div className="absolute left-0 flex justify-center bottom-0">
        <img src={mountainImg} className="mountain" alt="Mountain" />
      </div>
    </div>
  );
};

export default Intro;
