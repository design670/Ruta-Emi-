import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoMark from '../../assets/logo-ruta-emi-mark.svg';
import { navItems } from './content';

export function V2Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-2 md:px-0 py-2">
      <Link to="/ruta-emi-v2" className="flex items-center gap-2 flex-shrink-0">
        <img src={logoMark} alt="Ruta EMI" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
      </Link>

      <div className="hidden md:flex items-center gap-7">
        {navItems.map((item) => (
          <Link key={item.href} to={item.href} className="nav-link text-sm font-medium text-white/80 hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden p-2 text-white"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuAbierto && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#0D2967] border border-white/10 rounded-2xl p-4 space-y-1 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMenuAbierto(false)}
              className="block w-full text-left text-white/85 text-sm font-medium py-2 px-2 rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function V2Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-14 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="max-w-xs">
          <img src={logoMark} alt="Ruta EMI" className="h-9 w-auto mb-3" />
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-slate-600 hover:text-[#0D2967] transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-[#0D2967] transition">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-[#0D2967] transition">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto border-t border-slate-200 mt-10 pt-6">
        <p className="text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} Ruta EMI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export function V2PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-white flex flex-col">{children}</div>;
}
