import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AuthNavigation() {
  const { pathname } = useLocation();
  const isRegistro = pathname === '/registro';

  const base =
    'auth-focus flex-1 min-h-[44px] flex items-center justify-center gap-2 rounded-lg text-sm font-semibold border transition-colors';
  const active = 'bg-[var(--navy)] text-white border-[var(--navy)]';
  const inactive =
    'bg-transparent text-[var(--navy)] border-[var(--border)] hover:border-[var(--teal)] hover:text-[var(--teal)]';

  return (
    <div
      role="tablist"
      aria-label="Navegación de acceso"
      className="flex gap-2 p-1.5 mb-8 rounded-xl border border-[var(--border)] bg-white"
    >
      <Link
        to="/registro"
        role="tab"
        aria-selected={isRegistro}
        className={`${base} ${isRegistro ? active : inactive}`}
      >
        {isRegistro && <span aria-hidden="true">●</span>}
        Solicitar cuenta
      </Link>
      <Link
        to="/iniciar-sesion"
        role="tab"
        aria-selected={!isRegistro}
        className={`${base} ${!isRegistro ? active : inactive}`}
      >
        {!isRegistro && <span aria-hidden="true">●</span>}
        Iniciar sesión
      </Link>
    </div>
  );
}
