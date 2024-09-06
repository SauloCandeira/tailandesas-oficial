// HeaderTwo.tsx
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './HeaderTwo.css'; // Arquivo de estilos
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'; // Importa o componente LanguageSwitcher

const HeaderTwo: React.FC = () => {
  const { t } = useTranslation();
  const goTopBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        if (goTopBtnRef.current) {
          goTopBtnRef.current.classList.add('active');
        }
      } else {
        if (goTopBtnRef.current) {
          goTopBtnRef.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-actions">
          <LanguageSwitcher />
          <a href="https://your-login-page-url">
            <button className="btn-login">
              <i className="fas fa-user"></i> {t('login')}
            </button>
          </a>
        </div>

        {/* <button ref={goTopBtnRef} className="go-top" data-go-top>
          <i className="fas fa-arrow-up"></i>
        </button> */}
      </div>
    </header>
  );
};

export default HeaderTwo;
