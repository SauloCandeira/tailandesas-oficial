import React from 'react';
import './Ticket.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Ticket.css

const Ticket = ({ products }) => {
  return (
    <section id="embarque" className="ticket-section">
      <div className="bottom-section-text">
        <h1 className="text-5xl font-bold mb-4">Embarque</h1>
        <p className="text-xl">Embarque nessa aventura com nosso pacote especial!</p>
      </div>
      
      <div className="container">
        <div className="card-content">
          {products.map((product) => (
            <div key={product.id} className="package">
              <img src={product.image} alt={product.title} className="w-32 mx-auto mb-4" />
              <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-6">{product.price}</p>
              <a href={product.link} className="reserve-button">
                Reserve Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticket;
