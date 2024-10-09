import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from './pages/MarketPlace/MarketPlace';
import './i18n'; // Importa o arquivo de configuração do i18next
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
// import Home from './pages/Home/Home';

export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard /> }/>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
