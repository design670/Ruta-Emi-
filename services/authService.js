// ============================================================
// PUNTOS DE INTEGRACIÓN PENDIENTES CON BACKEND
// Ninguna de estas funciones llama a un servicio real todavía.
// Sustituye el cuerpo de cada función por la llamada real cuando
// exista el backend correspondiente. No se ha inventado ninguna
// URL de endpoint.
// ============================================================

/**
 * TODO(backend): conectar a un endpoint real de solicitud de cuenta.
 * Debe persistir la solicitud y disparar el envío de credenciales
 * por correo una vez aprobada — no debe crear la sesión de inmediato.
 */
export async function solicitarCuenta(datos) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

/**
 * TODO(backend): conectar a un endpoint real de autenticación.
 * Debe validar usuario/contraseña y manejar la sesión (tokens/cookies).
 * Hoy siempre responde "backendPendiente" porque no existe servicio real.
 */
export async function iniciarSesion(credenciales) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: false, backendPendiente: true };
}

/**
 * TODO(backend): conectar a un endpoint real de recuperación de acceso.
 * Debe responder siempre con el mismo mensaje genérico exista o no la
 * cuenta, para no filtrar qué correos están registrados.
 */
export async function recuperarAcceso(correo) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}
