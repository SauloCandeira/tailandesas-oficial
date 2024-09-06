import React from 'react';
import { useTranslation } from 'react-i18next';
import './Ticket.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Ticket.css
import eBookImg from './../../assets/img/e-book.png';
import videoImg from './../../assets/img/video.png';
import packageImg from './../../assets/img/package.png'; // Certifique-se de ajustar os caminhos das imagens

const Ticket: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Definindo os produtos diretamente dentro do componente
  const products = [
    {
      id: 1,
      name: 'E-book',
      price: t('ticket.eBookPrice'), // Traduzindo o preço
      description: t('ticket.eBookDescription'), // Traduzindo a descrição
      image: eBookImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20E-book',
    },
    {
      id: 2,
      name: 'Videoaula',
      price: t('ticket.videoPrice'), // Traduzindo o preço
      description: t('ticket.videoDescription'), // Traduzindo a descrição
      image: videoImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Videoaula',
    },
    {
      id: 3,
      name: 'Pacote Completo',
      price: t('ticket.completePackagePrice'), // Traduzindo o preço
      description: t('ticket.completePackageDescription'), // Traduzindo a descrição
      image: packageImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Completo',
    },
  ];

  const getCurrencySymbol = () => {
    return i18n.language === 'pt' ? 'R$' : '$'; // Se for português, usa Real, senão, Dólar
  };

  return (
    <div id="embarque" className="ticket-section">
      <div className="bottom-section-text">
        <h1 className="text-5xl font-bold mb-4">{t('ticket.title')}</h1>
        <p className="text-xl">{t('ticket.description')}</p>
      </div>

      <div className="container">
        <div className="card-content">
          {products.map((product) => (
            <div key={product.id} className="package">
              <img src={product.image} alt={product.name} className="w-32 mx-auto mb-4" />
              <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-6">
                {getCurrencySymbol()} {Number(product.price).toFixed(2)}
              </p>
              <a href={product.link} className="reserve-button" target="_blank" rel="noopener noreferrer">
                {t('ticket.reserveNow')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
