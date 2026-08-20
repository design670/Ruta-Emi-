import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function SuccessState({ title, message, email, showLoginLink = true }) {
  return (
    <div role="status" aria-live="polite">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'var(--green)' }}
      >
        <Check size={28} className="text-white" strokeWidth={3} />
      </div>

      <h2
        className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-3"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {title}
      </h2>

      <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-2">{message}</p>

      {email && <p className="text-sm font-semibold text-[var(--navy)] mb-8">{email}</p>}

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Link
          to="/"
          className="auth-focus min-h-[44px] px-6 flex items-center justify-center rounded-lg font-semibold text-white bg-[var(--navy)] hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>
        {showLoginLink && (
          <Link
            to="/iniciar-sesion"
            className="auth-focus min-h-[44px] px-6 flex items-center justify-center rounded-lg font-semibold text-[var(--navy)] border border-[var(--border)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors"
          >
            Ir a iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
}
