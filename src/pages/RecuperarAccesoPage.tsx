import AuthLayout from '../components/AuthLayout';
import RecoveryForm from '../components/RecoveryForm';

export default function RecuperarAccesoPage() {
  return (
    <AuthLayout
      title="Recupera tu acceso"
      description="Ingresa el correo asociado a tu cuenta y te enviaremos las instrucciones para recuperar el acceso."
      showImage={false}
    >
      <RecoveryForm />
    </AuthLayout>
  );
}
