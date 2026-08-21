// Tipos compartidos entre el landing y el flujo de autenticación de Ruta EMI.

export type Vista = 'landing' | 'casos' | 'rutas';

export interface ModuloBase {
  id: string;
  badge: string;
  titulo: string;
  descripcion: string;
}

export interface ColorSchemeRuta {
  bg: string;
  badge: string;
  tag: string;
  text: string;
  textMuted: string;
}

export interface ModuloRuta extends ModuloBase {
  destacada?: boolean;
  esCatalogo?: false;
  cursos: number;
  duracion: string;
  temas: string[];
  colorScheme?: ColorSchemeRuta;
}

export interface ModuloCatalogo extends ModuloBase {
  esCatalogo: true;
}

export type Modulo = ModuloRuta | ModuloCatalogo;

export interface CasoClinico {
  id: string;
  especialidad: string;
  titulo: string;
  paciente: string;
  motivoConsulta: string;
  antecedentes: string;
  url: string;
  imagen: string;
}

export interface CasoListado {
  numero: number;
  titulo: string;
  paciente: string;
  url: string;
  casoRef?: string;
}

export type RecursoIcono = 'doc' | 'chart' | 'link' | 'video' | 'calculator' | 'checklist';

export interface Recurso {
  tipo: string;
  descripcion: string;
  icono: RecursoIcono;
}

export interface PasoMetodologia {
  numero: string;
  titulo: string;
  descripcion: string;
  accent: string;
  textClass: string;
}

// ---- Formularios de autenticación ----

export interface RegistroFormData {
  nombreCompleto: string;
  tipoDocumento: string;
  numeroDocumento: string;
  correo: string;
  telefono: string;
  ciudad: string;
  pais: string;
  perfilProfesional: string;
  perfilOtro: string;
  institucion: string;
  especialidad: string;
  aceptaTerminos: boolean;
  recibirNovedades: boolean;
}

export type RegistroFormErrors = Partial<Record<keyof RegistroFormData, string>>;

export interface LoginFormData {
  usuario: string;
  contrasena: string;
  recordarme: boolean;
}

export type LoginFormErrors = Partial<Record<keyof LoginFormData, string>>;

export interface SelectOption {
  value: string;
  label: string;
}
