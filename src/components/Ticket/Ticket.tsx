import './Ticket.css'; // Certifique-se de que seus estilos CSS estejam no arquivo Ticket.css
import { Product } from '../../Interfaces/InterfaceProduct';

interface TicketProps {
  products: Product[];
}

const Ticket: React.FC<TicketProps> = ({ products }) => {
  return (
    <div id="embarque" className="ticket-section">
      <div className="bottom-section-text">
        <h1 className="text-5xl font-bold mb-4">Embarque</h1>
        <p className="text-xl">Embarque nessa aventura com nosso pacote especial!</p>
      </div>
      
      <div className="container">
        <div className="card-content">
          {products.map((product: Product) => (
            <div key={product.id} className="package">
              <img src={product.image} alt={product.name} className="w-32 mx-auto mb-4" />
              <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-2xl font-bold mb-6">{product.price}</p>
              <a href={product.link} className="reserve-button">
                Reserve Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
