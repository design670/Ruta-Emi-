import React from 'react';
import AuthLayout from '../components/AuthLayout';
import AuthNavigation from '../components/AuthNavigation';
import RegistrationForm from '../components/RegistrationForm';

export default function RegistroPage() {
  return (
    <AuthLayout
      eyebrow="ACCESO A RUTA EMI"
      title="Solicita tu cuenta profesional"
      description="Completa tus datos para solicitar acceso a la plataforma. Cuando tu cuenta sea aprobada, recibirás tu usuario y contraseña en el correo registrado."
    >
      <AuthNavigation />
      <RegistrationForm />
    </AuthLayout>
  );
}
