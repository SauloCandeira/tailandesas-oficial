// FounderCard.tsx

import React from 'react';

import './Catalogue.css'; // Arquivo de estilos


const Catalogue: React.FC = () => {
    return (
      <section className="section__container arrival__container" id="catalogue">
        <h2 className="section__header">NEW ARRIVALS</h2>
        <div className="arrival__grid">
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-1.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Hoodies & Sweatshirts</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-2.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Coats & Parkas</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="arrival__card">
            <div className="arrival__image">
              <img src="assets/arrival-3.jpg" alt="arrival" />
            </div>
            <div className="arrival__content">
              <div>
                <h4>Tees & T-Shirt</h4>
                <a href="#">Explore Now</a>
              </div>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </div>
      </section>

    );
};

export default Catalogue;
