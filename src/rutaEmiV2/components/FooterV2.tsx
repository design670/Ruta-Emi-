import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import logoRutaEmi from '../../assets/logo-ruta-emi.svg';
import { NAV_LINKS, RUTA_EMI_EXTERNAL_URL } from '../data';

export default function FooterV2() {
  const navigate = useNavigate();
  const location = useLocation();

  const irAInicio = () => {
    if (location.pathname === '/ruta-emi-v2') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/ruta-emi-v2');
    }
  };

  return (
    <footer className="bg-[#0D2967] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12">
          <div className="max-w-xs">
            <img
              src={logoRutaEmi}
              alt="Ruta EMI"
              className="h-14 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Guía para reconocer, actuar y consultar ante la Enfermedad Meningocócica Invasiva.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Navegación</h3>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.map((link) => {
                  if (link.type === 'section') {
                    return (
                      <li key={link.label}>
                        <button onClick={irAInicio} className="text-white/60 hover:text-white transition">
                          {link.label}
                        </button>
                      </li>
                    );
                  }
                  if (link.type === 'external') {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.label}>
                      <Link to={link.to!} className="text-white/60 hover:text-white transition">
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Ruta EMI</h3>
              <a
                href={RUTA_EMI_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#2BBCEA] hover:text-white transition font-medium"
              >
                Consultar Ruta EMI
                <ChevronRight size={14} />
              </a>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2026 Ruta EMI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
