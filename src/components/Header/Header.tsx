import React from 'react';
import './Header.css'; // Arquivo de estilos

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">IHK</a>
        <ul className="nav">
          <li><a href="#intro">Home</a></li>
          <li><a href="#roteiro">Roteiro</a></li>
          <li><a href="#embarque">Embarque</a></li>
          <li><a className="login-button" href="#login">Login</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
