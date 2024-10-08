// HeaderTwo.tsx
import React from 'react';

import './HeaderThree.css'; // Arquivo de estilos
import headerImg from '../../../assets/img/header-2.png';

const HeaderThree: React.FC = () => {

  return (

    <header>
    <div className="section__container header__container">
      <div className="header__content">
        <h1>
          <span>LET'S</span>
          <br />
          EXPLORE
          <br />
          <span>UNIQUE</span>
          <br />
          CLOTHES.
        </h1>
        <p>Live for influential and innovative fashion!</p>
        <div className="header__btns">
          <button className="btn">Shop Now</button>
        </div>
      </div>
      <div className="header__image">
        <img src={headerImg}/>
      </div>
    </div>
  </header>
  );
};

export default HeaderThree;
