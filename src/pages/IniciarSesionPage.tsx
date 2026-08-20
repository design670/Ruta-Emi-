import AuthLayout from '../components/AuthLayout';
import AuthNavigation from '../components/AuthNavigation';
import LoginForm from '../components/LoginForm';

export default function IniciarSesionPage() {
  return (
    <AuthLayout
      eyebrow="BIENVENIDO DE NUEVO"
      title="Inicia sesión en Ruta EMI"
      description="Ingresa con el usuario y la contraseña que recibiste en tu correo."
    >
      <AuthNavigation />
      <LoginForm />
    </AuthLayout>
  );
}
