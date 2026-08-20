import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import heroPhoto from '../hero-photo.avif';
import logoRutaEmi from '../Logo Ruta EmiRecurso 1.svg';

export default function AuthLayout({ eyebrow, title, description, children, showImage = true }) {
  return (
    <div
      className="min-h-dvh bg-[var(--background)]"
      style={{
        '--navy': '#08142B',
        '--purple': '#4B2162',
        '--teal': '#028BA8',
        '--light-blue': '#C2F2FF',
        '--peach': '#FFD0C0',
        '--orange': '#FF773B',
        '--green': '#00C99B',
        '--background': '#FAF9F6',
        '--white': '#FFFFFF',
        '--text-secondary': '#465269',
        '--border': '#DDE2E6',
      }}
    >
      <style>{`
        .auth-focus:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <header className="border-b border-[var(--border)] bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logoRutaEmi} alt="Ruta EMI - Academia Médica" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="auth-focus flex items-center gap-1.5 text-sm font-semibold text-[var(--navy)] hover:text-[var(--teal)] transition-colors"
          >
            <ChevronLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-[1180px] mx-auto px-5 md:px-6 py-10">
        <div className={`grid ${showImage ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          <div className="w-full max-w-[560px] mx-auto lg:mx-0">
            {eyebrow && (
              <span className="inline-block px-3 py-1.5 mb-4 rounded-full text-xs font-bold tracking-wide bg-[var(--light-blue)] text-[var(--navy)]">
                {eyebrow}
              </span>
            )}
            <h1
              className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-3 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {title}
            </h1>
            {description && (
              <p className="text-base leading-relaxed mb-8 text-[var(--text-secondary)]">{description}</p>
            )}
            {children}
          </div>

          {showImage && (
            <div className="hidden lg:block rounded-2xl overflow-hidden self-stretch" style={{ minHeight: 480 }}>
              <img src={heroPhoto} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
