// LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Importa o CSS para o LanguageSwitcher

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select onChange={handleChange} defaultValue={i18n.language}>
        <option value="en">
          <span className="icon flag-icon-usa"></span> EN
        </option>
        <option value="pt">
          <span className="icon flag-icon-br"></span> PT
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
