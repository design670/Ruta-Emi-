// Tipos exclusivos de la versión de prueba /ruta-emi-v2.
// Independientes de src/types/index.ts para no afectar la versión actual.

export interface ModuloCurso {
  slug: string;
  numero: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  llamado: string;
}

export interface CasoClinicoV2 {
  slug: 'caso-1' | 'caso-2' | 'caso-3';
  numero: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  ctaLabel: string;
}

export type RecursoCategoria = 'PDF y guías' | 'Infografías' | 'Enlaces' | 'Videos formativos';

export interface RecursoCategoriaInfo {
  categoria: RecursoCategoria;
  descripcion: string;
  icono: 'doc' | 'chart' | 'link' | 'video';
}

export interface RecursoItem {
  categoria: RecursoCategoria;
  titulo: string;
  descripcion: string;
  tipoArchivo: string;
  enlace: string;
  esPlaceholder: boolean;
}
