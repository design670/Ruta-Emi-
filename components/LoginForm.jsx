import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';
import PasswordField from './PasswordField';
import { iniciarSesion } from '../services/authService';

export default function LoginForm() {
  const [campos, setCampos] = useState({ usuario: '', contrasena: '', recordarme: false });
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [backendPendiente, setBackendPendiente] = useState(false);

  const actualizar = (campo) => (e) => {
    const valor = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCampos((prev) => ({ ...prev, [campo]: valor }));
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!campos.usuario.trim()) nuevosErrores.usuario = 'Ingresa tu usuario o correo electrónico.';
    if (!campos.contrasena) nuevosErrores.contrasena = 'Ingresa tu contraseña.';
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      document.getElementById(Object.keys(nuevosErrores)[0])?.focus();
      return;
    }

    setEnviando(true);
    setBackendPendiente(false);
    try {
      const respuesta = await iniciarSesion(campos);
      if (respuesta.backendPendiente) setBackendPendiente(true);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div aria-live="polite" className="sr-only">
        {enviando ? 'Iniciando sesión' : ''}
      </div>

      <FormField
        id="usuario"
        label="Usuario o correo electrónico"
        required
        value={campos.usuario}
        onChange={actualizar('usuario')}
        error={errores.usuario}
        autoComplete="username"
      />

      <PasswordField
        id="contrasena"
        label="Contraseña"
        required
        value={campos.contrasena}
        onChange={actualizar('contrasena')}
        error={errores.contrasena}
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)] cursor-pointer">
          <input
            type="checkbox"
            checked={campos.recordarme}
            onChange={actualizar('recordarme')}
            className="auth-focus w-5 h-5"
            style={{ accentColor: 'var(--navy)' }}
          />
          Recordarme
        </label>
        <Link
          to="/recuperar-acceso"
          className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--teal)] underline"
        >
          Olvidé mi contraseña
        </Link>
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="auth-focus w-full min-h-[44px] rounded-lg font-semibold text-white transition-opacity disabled:opacity-60"
        style={{ background: 'var(--navy)' }}
      >
        {enviando ? 'Iniciando sesión…' : 'Iniciar sesión'}
      </button>

      {backendPendiente && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 text-sm rounded-lg px-4 py-3 border"
          style={{ background: 'var(--light-blue)', color: 'var(--navy)', borderColor: 'var(--border)' }}
        >
          El inicio de sesión todavía no está conectado a un servicio de autenticación real. Cuando el
          backend esté disponible, este formulario iniciará sesión automáticamente.
        </div>
      )}

      <p className="text-center text-sm mt-5 text-[var(--text-secondary)]">
        ¿Todavía no tienes acceso?{' '}
        <Link to="/registro" className="font-semibold text-[var(--navy)] hover:text-[var(--teal)] underline">
          Solicita tu cuenta
        </Link>
      </p>
    </form>
  );
}
