import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegistroPage from './pages/RegistroPage';
import IniciarSesionPage from './pages/IniciarSesionPage';
import RecuperarAccesoPage from './pages/RecuperarAccesoPage';
import LandingV2 from './rutaEmiV2/pages/LandingV2';
import CursoPage from './rutaEmiV2/pages/CursoPage';
import CasosClinicosPage from './rutaEmiV2/pages/CasosClinicosPage';
import CasoClinicoDetallePage from './rutaEmiV2/pages/CasoClinicoDetallePage';
import RecursosPage from './rutaEmiV2/pages/RecursosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        <Route path="/recuperar-acceso" element={<RecuperarAccesoPage />} />

        {/* Versión de prueba — reestructuración Ruta EMI */}
        <Route path="/ruta-emi-v2" element={<LandingV2 />} />
        <Route path="/ruta-emi-v2/curso" element={<CursoPage />} />
        <Route path="/ruta-emi-v2/casos-clinicos" element={<CasosClinicosPage />} />
        <Route path="/ruta-emi-v2/casos-clinicos/:slug" element={<CasoClinicoDetallePage />} />
        <Route path="/ruta-emi-v2/recursos" element={<RecursosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
