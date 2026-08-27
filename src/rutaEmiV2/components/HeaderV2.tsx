import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoRutaEmi from '../../assets/logo-ruta-emi.svg';
import { NAV_LINKS, RUTA_EMI_EXTERNAL_URL } from '../data';

export default function HeaderV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHeaderScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const irAInicio = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/ruta-emi-v2') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/ruta-emi-v2');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        headerScroll ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/ruta-emi-v2" className="flex-shrink-0" aria-label="Ir al inicio de Ruta EMI">
          <img src={logoRutaEmi} alt="Ruta EMI" className="h-9 md:h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            if (link.type === 'section') {
              return (
                <button
                  key={link.label}
                  onClick={irAInicio}
                  className="nav-link-v2 text-slate-700 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2BBCEA] rounded-sm"
                >
                  {link.label}
                </button>
              );
            }
            if (link.type === 'external') {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-v2 text-slate-700 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2BBCEA] rounded-sm"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.to!}
                className="nav-link-v2 text-slate-700 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2BBCEA] rounded-sm"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href={RUTA_EMI_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-v2 px-6 py-2.5 bg-[#0D2967] text-white rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:bg-[#0a1f4f] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
          >
            Consultar Ruta EMI
            <ChevronRight size={16} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2BBCEA] rounded-md"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => {
              if (link.type === 'section') {
                return (
                  <button
                    key={link.label}
                    onClick={irAInicio}
                    className="block w-full text-left text-slate-700 text-sm font-medium py-2"
                  >
                    {link.label}
                  </button>
                );
              }
              if (link.type === 'external') {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left text-slate-700 text-sm font-medium py-2"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.to!}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left text-slate-700 text-sm font-medium py-2"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-200">
              <a
                href={RUTA_EMI_EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#0D2967] text-white rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                Consultar Ruta EMI
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
