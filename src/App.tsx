import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from './pages/MarketPlace/MarketPlace';
import './i18n'; // Importa o arquivo de configuração do i18next
import Login from './pages/Login/Login';


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/tailandesas-oficial/" element={<MarketPlace />} />
        <Route path="/tailandesas-oficial/login" element={<Login />} />
        {/* <Route path="/about/" element={<Home />} /> */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
