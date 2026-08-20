import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';
import SuccessState from './SuccessState';
import { solicitarCuenta } from '../services/authService';
import { validarCorreo } from '../utils/validation';

const TIPOS_DOCUMENTO = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'cc', label: 'Cédula de ciudadanía' },
  { value: 'ce', label: 'Cédula de extranjería' },
  { value: 'ti', label: 'Tarjeta de identidad' },
  { value: 'pasaporte', label: 'Pasaporte' },
  { value: 'otro', label: 'Otro' },
];

const PERFILES = [
  { value: '', label: 'Selecciona una opción' },
  { value: 'estudiante', label: 'Estudiante de medicina' },
  { value: 'medico-general', label: 'Médico general' },
  { value: 'medico-especialista', label: 'Médico especialista' },
  { value: 'enfermeria', label: 'Enfermería' },
  { value: 'otro', label: 'Otro profesional de la salud' },
];

const CAMPOS_INICIALES = {
  nombreCompleto: '',
  tipoDocumento: '',
  numeroDocumento: '',
  correo: '',
  telefono: '',
  ciudad: '',
  pais: '',
  perfilProfesional: '',
  perfilOtro: '',
  institucion: '',
  especialidad: '',
  aceptaTerminos: false,
  recibirNovedades: false,
};

function enmascararCorreo(correo) {
  const [local, dominio] = correo.split('@');
  if (!dominio) return correo;
  const visible = local.slice(0, 2);
  return `${visible}${'•'.repeat(Math.max(local.length - 2, 4))}@${dominio}`;
}

export default function RegistrationForm() {
  const [campos, setCampos] = useState(CAMPOS_INICIALES);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const actualizar = (campo) => (e) => {
    const valor = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCampos((prev) => ({ ...prev, [campo]: valor }));
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!campos.nombreCompleto.trim()) nuevosErrores.nombreCompleto = 'Ingresa tu nombre completo.';
    if (!campos.tipoDocumento) nuevosErrores.tipoDocumento = 'Selecciona el tipo de documento.';
    if (!campos.numeroDocumento.trim()) nuevosErrores.numeroDocumento = 'Ingresa tu número de documento.';
    if (!campos.correo.trim()) {
      nuevosErrores.correo = 'Ingresa tu correo electrónico.';
    } else if (!validarCorreo(campos.correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.';
    }
    if (!campos.telefono.trim()) nuevosErrores.telefono = 'Ingresa tu teléfono o WhatsApp.';
    if (!campos.ciudad.trim()) nuevosErrores.ciudad = 'Ingresa tu ciudad.';
    if (!campos.pais.trim()) nuevosErrores.pais = 'Ingresa tu país.';
    if (!campos.perfilProfesional) nuevosErrores.perfilProfesional = 'Selecciona tu perfil profesional.';
    if (campos.perfilProfesional === 'otro' && !campos.perfilOtro.trim()) {
      nuevosErrores.perfilOtro = 'Especifica tu perfil profesional.';
    }
    if (!campos.institucion.trim()) nuevosErrores.institucion = 'Ingresa tu institución o lugar de trabajo.';
    if (!campos.especialidad.trim()) nuevosErrores.especialidad = 'Ingresa tu especialidad o área de interés.';
    if (!campos.aceptaTerminos) {
      nuevosErrores.aceptaTerminos = 'Debes aceptar los términos de servicio y la política de privacidad.';
    }
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      const primerCampoId = Object.keys(nuevosErrores)[0];
      document.getElementById(primerCampoId)?.focus();
      return;
    }

    setEnviando(true);
    try {
      await solicitarCuenta(campos);
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <SuccessState
        title="Recibimos tu solicitud"
        message="Revisaremos la información y enviaremos tu usuario y contraseña al correo registrado. Revisa también las carpetas de correo no deseado o promociones."
        email={enmascararCorreo(campos.correo)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div aria-live="polite" className="sr-only">
        {enviando
          ? 'Enviando solicitud'
          : Object.keys(errores).length > 0
          ? `Hay ${Object.keys(errores).length} campos con errores. Revisa el formulario.`
          : ''}
      </div>

      <FormField
        id="nombreCompleto"
        label="Nombre completo"
        required
        value={campos.nombreCompleto}
        onChange={actualizar('nombreCompleto')}
        error={errores.nombreCompleto}
        autoComplete="name"
      />

      <div className="grid sm:grid-cols-2 gap-x-4">
        <FormField
          id="tipoDocumento"
          label="Tipo de documento"
          as="select"
          options={TIPOS_DOCUMENTO}
          required
          value={campos.tipoDocumento}
          onChange={actualizar('tipoDocumento')}
          error={errores.tipoDocumento}
        />
        <FormField
          id="numeroDocumento"
          label="Número de documento"
          required
          value={campos.numeroDocumento}
          onChange={actualizar('numeroDocumento')}
          error={errores.numeroDocumento}
        />
      </div>

      <FormField
        id="correo"
        label="Correo electrónico"
        type="email"
        required
        value={campos.correo}
        onChange={actualizar('correo')}
        error={errores.correo}
        autoComplete="email"
      />

      <FormField
        id="telefono"
        label="Teléfono o WhatsApp"
        type="tel"
        required
        value={campos.telefono}
        onChange={actualizar('telefono')}
        error={errores.telefono}
        autoComplete="tel"
      />

      <div className="grid sm:grid-cols-2 gap-x-4">
        <FormField
          id="ciudad"
          label="Ciudad"
          required
          value={campos.ciudad}
          onChange={actualizar('ciudad')}
          error={errores.ciudad}
          autoComplete="address-level2"
        />
        <FormField
          id="pais"
          label="País"
          required
          value={campos.pais}
          onChange={actualizar('pais')}
          error={errores.pais}
          autoComplete="country-name"
        />
      </div>

      <FormField
        id="perfilProfesional"
        label="Perfil profesional"
        as="select"
        options={PERFILES}
        required
        value={campos.perfilProfesional}
        onChange={actualizar('perfilProfesional')}
        error={errores.perfilProfesional}
      />

      {campos.perfilProfesional === 'otro' && (
        <FormField
          id="perfilOtro"
          label="Especifica tu perfil profesional"
          required
          value={campos.perfilOtro}
          onChange={actualizar('perfilOtro')}
          error={errores.perfilOtro}
        />
      )}

      <FormField
        id="institucion"
        label="Institución o lugar de trabajo"
        required
        value={campos.institucion}
        onChange={actualizar('institucion')}
        error={errores.institucion}
        autoComplete="organization"
      />

      <FormField
        id="especialidad"
        label="Especialidad o área de interés"
        required
        value={campos.especialidad}
        onChange={actualizar('especialidad')}
        error={errores.especialidad}
      />

      <div className="space-y-3 mb-6 mt-2">
        <label className="flex items-start gap-3 text-sm text-[var(--text-secondary)] cursor-pointer">
          <input
            type="checkbox"
            checked={campos.aceptaTerminos}
            onChange={actualizar('aceptaTerminos')}
            aria-describedby={errores.aceptaTerminos ? 'aceptaTerminos-error' : undefined}
            aria-invalid={!!errores.aceptaTerminos}
            className="auth-focus mt-0.5 w-5 h-5 flex-shrink-0"
            style={{ accentColor: 'var(--navy)' }}
          />
          <span>
            He leído y acepto los términos de servicio y la política de privacidad.{' '}
            <span aria-hidden="true" className="text-[var(--orange)]">
              *
            </span>
          </span>
        </label>
        {errores.aceptaTerminos && (
          <p id="aceptaTerminos-error" role="alert" className="text-sm ml-8" style={{ color: '#B91C1C' }}>
            ⚠ {errores.aceptaTerminos}
          </p>
        )}

        <label className="flex items-start gap-3 text-sm text-[var(--text-secondary)] cursor-pointer">
          <input
            type="checkbox"
            checked={campos.recibirNovedades}
            onChange={actualizar('recibirNovedades')}
            className="auth-focus mt-0.5 w-5 h-5 flex-shrink-0"
            style={{ accentColor: 'var(--navy)' }}
          />
          <span>Quiero recibir novedades sobre cursos, casos clínicos y recursos educativos.</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="auth-focus w-full min-h-[44px] rounded-lg font-semibold text-white transition-opacity disabled:opacity-60"
        style={{ background: 'var(--navy)' }}
      >
        {enviando ? 'Enviando solicitud…' : 'Solicitar mi cuenta'}
      </button>

      <p className="text-center text-sm mt-5 text-[var(--text-secondary)]">
        ¿Ya recibiste tus credenciales?{' '}
        <Link to="/iniciar-sesion" className="font-semibold text-[var(--navy)] hover:text-[var(--teal)] underline">
          Inicia sesión
        </Link>
      </p>
    </form>
  );
}
