import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick'; // Importa o Slider do react-slick
import './CardFeedback.css'; // Arquivo de estilos
import eBookImg from './../../assets/img/e-book.png'; // Atualize o caminho conforme necessário
import videoImg from './../../assets/img/video.png'; // Atualize o caminho conforme necessário
import packageImg from './../../assets/img/package.png'; // Atualize o caminho conforme necessário

// Define o tipo das props esperadas para o componente
interface FeedbackProps {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const CardFeedback: React.FC = () => {
  const { t } = useTranslation();

  // Definindo os feedbacks diretamente dentro do componente
  const feedbacks: FeedbackProps[] = [
    {
      id: 1,
      name: 'E-book',
      description: t('feedback.eBookPrice'), // Traduza o preço ou descrição
      image: eBookImg,
      link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20E-book',
    },
    {
        id: 2,
        name: 'Video',
        description: t('feedback.videoPrice'), // Traduza o preço ou descrição
        image: videoImg,
        link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Video',
      },
      {
        id: 3,
        name: 'Package',
        description: t('feedback.packagePrice'), // Traduza o preço ou descrição
        image: packageImg,
        link: 'https://wa.me/5561981374279?text=Gostaria%20de%20reservar%20o%20pacote%20Package',
      }
    // Adicione mais feedbacks conforme necessário
  ];

  // const getCurrencySymbol = () => {
  //   return i18n.language === 'pt' ? 'R$' : '$'; // Se for português, usa Real, senão, Dólar
  // };

  // Configurações do slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tempo entre as transições dos slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="feedback" className="feedback-section">
      <div className="bottom-section-text">
        <h1 className="text-5xl font-bold mb-4">{t('feedback.title')}</h1>
        <p className="text-xl mb-6">{t('feedback.description')}</p>
      </div>

      <div className="container">
        <Slider {...settings} className="carousel">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="package">
              <img src={feedback.image} alt={feedback.name} className="w-32 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{feedback.name}</h2>
              <p className="text-md mb-4">{feedback.description}</p>
              <a href={feedback.link} className="reserve-button" target="_blank" rel="noopener noreferrer">
                {t('feedback.visitWebsite')}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardFeedback;
