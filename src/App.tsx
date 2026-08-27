import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegistroPage from './pages/RegistroPage';
import IniciarSesionPage from './pages/IniciarSesionPage';
import RecuperarAccesoPage from './pages/RecuperarAccesoPage';
import RutaEmiPreview from './pages/RutaEmiPreview';
import RutaEmiV2Landing from './pages/ruta-emi-v2/Landing';
import QueEsPage from './pages/ruta-emi-v2/QueEsPage';
import CursoPage from './pages/ruta-emi-v2/CursoPage';
import CasosClinicosPage from './pages/ruta-emi-v2/CasosClinicosPage';
import CasoDetallePage from './pages/ruta-emi-v2/CasoDetallePage';
import RecursosPage from './pages/ruta-emi-v2/RecursosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        <Route path="/recuperar-acceso" element={<RecuperarAccesoPage />} />
        <Route path="/ruta-emi-preview" element={<RutaEmiPreview />} />
        <Route path="/ruta-emi-v2" element={<RutaEmiV2Landing />} />
        <Route path="/ruta-emi-v2/que-es-la-ruta-emi" element={<QueEsPage />} />
        <Route path="/ruta-emi-v2/curso" element={<CursoPage />} />
        <Route path="/ruta-emi-v2/casos-clinicos" element={<CasosClinicosPage />} />
        <Route path="/ruta-emi-v2/casos-clinicos/:slug" element={<CasoDetallePage />} />
        <Route path="/ruta-emi-v2/recursos" element={<RecursosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
