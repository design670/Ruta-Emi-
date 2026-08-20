import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import FormField from './FormField';
import { recuperarAcceso } from '../services/authService';
import { validarCorreo } from '../utils/validation';

export default function RecoveryForm() {
  const [correo, setCorreo] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enviando) return;

    if (!correo.trim()) {
      setError('Ingresa tu correo electrónico.');
      document.getElementById('correo')?.focus();
      return;
    }
    if (!validarCorreo(correo)) {
      setError('Ingresa un correo electrónico válido.');
      document.getElementById('correo')?.focus();
      return;
    }

    setError('');
    setEnviando(true);
    try {
      await recuperarAcceso(correo);
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <div role="status" aria-live="polite">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'var(--green)' }}
        >
          <Check size={28} className="text-white" strokeWidth={3} />
        </div>
        <p className="text-base leading-relaxed text-[var(--text-secondary)] mb-8">
          Si encontramos una cuenta asociada, recibirás las instrucciones en tu correo.
        </p>
        <Link
          to="/iniciar-sesion"
          className="auth-focus inline-flex min-h-[44px] px-6 items-center justify-center rounded-lg font-semibold text-white bg-[var(--navy)] hover:opacity-90 transition-opacity"
        >
          Volver a iniciar sesión
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField
        id="correo"
        label="Correo electrónico"
        type="email"
        required
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        error={error}
        autoComplete="email"
      />

      <button
        type="submit"
        disabled={enviando}
        className="auth-focus w-full min-h-[44px] rounded-lg font-semibold text-white transition-opacity disabled:opacity-60"
        style={{ background: 'var(--navy)' }}
      >
        {enviando ? 'Enviando…' : 'Enviar instrucciones'}
      </button>

      <p className="text-center text-sm mt-5 text-[var(--text-secondary)]">
        <Link to="/iniciar-sesion" className="font-semibold text-[var(--navy)] hover:text-[var(--teal)] underline">
          Volver a iniciar sesión
        </Link>
      </p>
    </form>
  );
}
