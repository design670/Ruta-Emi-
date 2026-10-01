import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
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
import RutaEmiV3Landing from './pages/ruta-emi-v3/Landing';
import QueEsPageV3 from './pages/ruta-emi-v3/QueEsPage';
import CursoPageV3 from './pages/ruta-emi-v3/CursoPage';
import CasosClinicosPageV3 from './pages/ruta-emi-v3/CasosClinicosPage';
import CasoDetallePageV3 from './pages/ruta-emi-v3/CasoDetallePage';
import RecursosPageV3 from './pages/ruta-emi-v3/RecursosPage';
import RutaEmiV4Landing from './pages/ruta-emi-v4/Landing';
import CursoPageV4 from './pages/ruta-emi-v4/CursoPage';
import CasosClinicosPageV4 from './pages/ruta-emi-v4/CasosClinicosPage';
import CasoDetallePageV4 from './pages/ruta-emi-v4/CasoDetallePage';
import RecursosPageV4 from './pages/ruta-emi-v4/RecursosPage';

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
        <Route path="/ruta-emi-v3" element={<RutaEmiV3Landing />} />
        <Route path="/ruta-emi-v3/que-es-la-ruta-emi" element={<QueEsPageV3 />} />
        <Route path="/ruta-emi-v3/curso" element={<CursoPageV3 />} />
        <Route path="/ruta-emi-v3/casos-clinicos" element={<CasosClinicosPageV3 />} />
        <Route path="/ruta-emi-v3/casos-clinicos/:slug" element={<CasoDetallePageV3 />} />
        <Route path="/ruta-emi-v3/recursos" element={<RecursosPageV3 />} />
        <Route path="/ruta-emi-v4" element={<RutaEmiV4Landing />} />
        <Route path="/ruta-emi-v4/que-es-la-ruta-emi" element={<Navigate to="/ruta-emi-v4#que-es" replace />} />
        <Route path="/ruta-emi-v4/curso" element={<CursoPageV4 />} />
        <Route path="/ruta-emi-v4/casos-clinicos" element={<CasosClinicosPageV4 />} />
        <Route path="/ruta-emi-v4/casos-clinicos/:slug" element={<CasoDetallePageV4 />} />
        <Route path="/ruta-emi-v4/recursos" element={<RecursosPageV4 />} />
      </Routes>
    </BrowserRouter>
  );
}
