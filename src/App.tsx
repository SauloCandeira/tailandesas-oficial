import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import MarketPlace from './pages/MarketPlace/MarketPlace';
import './i18n'; // Importa o arquivo de configuração do i18next


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/tailandesas-oficial/" element={<MarketPlace />} />
        {/* <Route path="/about/" element={<Home />} /> */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
