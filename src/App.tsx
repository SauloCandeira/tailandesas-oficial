import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import './i18n'; // Importa o arquivo de configuração do i18next


export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/como-criar-um-website-v2/" element={<Home />} />
        {/* <Route path="/about/" element={<Home />} /> */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
