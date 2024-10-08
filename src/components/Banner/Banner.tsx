// FounderCard.tsx

import React from 'react';

import './Banner.css'; // Arquivo de estilos

import bannerImg1 from './../../assets/img/flamengo.png';
import bannerImg2 from './../../assets/img/saopaulo.png';
import bannerImg3 from './../../assets/img/corinthians.png';
import bannerImg4 from './../../assets/img/banner-4.png';
import bannerImg5 from './../../assets/img/banner-5.png';
import bannerImg6 from './../../assets/img/banner-6.png';
import bannerImg7 from './../../assets/img/banner-7.png';
import bannerImg8 from './../../assets/img/banner-8.png';

const Banner: React.FC = () => {
    return (
        <section className="banner">
        <div className="banner__container">
          <img src={bannerImg1} alt="banner" />
          <img src={bannerImg2} alt="banner" />
          <img src={bannerImg3} alt="banner" />
          <img src={bannerImg4} alt="banner" />
          <img src={bannerImg5} alt="banner" />
          <img src={bannerImg6} alt="banner" />
          <img src={bannerImg7} alt="banner" />
          <img src={bannerImg8} alt="banner" />

        </div>
      </section>

    );
};

export default Banner;
