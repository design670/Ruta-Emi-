import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RutaEmiLanding from './ruta-emi-landing';
import RegistroPage from './pages/RegistroPage';
import IniciarSesionPage from './pages/IniciarSesionPage';
import RecuperarAccesoPage from './pages/RecuperarAccesoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RutaEmiLanding />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        <Route path="/recuperar-acceso" element={<RecuperarAccesoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
