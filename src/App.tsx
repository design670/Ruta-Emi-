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
import ScrollSuave from './components/ScrollSuave';
import RutaEmiV3Landing from './pages/ruta-emi-v3/Landing';
import CursoPageV3 from './pages/ruta-emi-v3/CursoPage';
import QueEsPageV3 from './pages/ruta-emi-v3/QueEsPage';
import CasosClinicosPageV3 from './pages/ruta-emi-v3/CasosClinicosPage';
import CasoDetallePageV3 from './pages/ruta-emi-v3/CasoDetallePage';
import RecursosPageV3 from './pages/ruta-emi-v3/RecursosPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollSuave />
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
      </Routes>
    </BrowserRouter>
  );
}
