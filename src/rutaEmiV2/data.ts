// Estructura de datos centralizada para el micrositio de prueba /ruta-emi-v2.
// Cualquier corrección de contenido (curso, casos clínicos, recursos) se hace aquí.

import type { ModuloCurso, CasoClinicoV2, RecursoCategoriaInfo, RecursoItem } from './types';
import casoImg1 from '../assets/casos-clinicos/caso-1.avif';
import casoImg4 from '../assets/casos-clinicos/caso-4.avif';
import casoImg9 from '../assets/casos-clinicos/caso-9.avif';

export const RUTA_EMI_EXTERNAL_URL = 'https://ruta-emi.igloosuite.com/';

// El cliente entregará el enlace definitivo de certificación; se deja como constante editable.
export const CURSO_CERTIFICACION_URL = '#certificacion-pendiente';

export const NAV_LINKS = [
  { label: 'Inicio', to: '/ruta-emi-v2', type: 'section' as const, target: 'inicio' },
  { label: 'Ruta EMI', href: RUTA_EMI_EXTERNAL_URL, type: 'external' as const },
  { label: 'Curso', to: '/ruta-emi-v2/curso', type: 'route' as const },
  { label: 'Casos clínicos', to: '/ruta-emi-v2/casos-clinicos', type: 'route' as const },
  { label: 'Recursos', to: '/ruta-emi-v2/recursos', type: 'route' as const },
];

export const modulosCurso: ModuloCurso[] = [
  {
    slug: 'verdadera-cara-emi',
    numero: '01',
    titulo: 'La verdadera cara de la EMI',
    resumen: 'La carga de la enfermedad aguda y sus secuelas.',
    descripcion:
      'Describe la carga de enfermedad aguda y las secuelas asociadas a la Enfermedad Meningocócica Invasiva.',
    llamado:
      'Reconocer y priorizar la EMI en Colombia, notificar al sistema de vigilancia epidemiológica y ser garantes de esta información.',
  },
  {
    slug: 'codigo-emi',
    numero: '02',
    titulo: 'Código EMI: Sistema de alertas para la atención del paciente con EMI',
    resumen: 'Reconocimiento temprano y acciones clave en la primera hora.',
    descripcion:
      'Se enfoca en los puntos de dolor en la atención inicial del paciente, el reconocimiento temprano, la sospecha diagnóstica y las acciones clave en la primera hora.',
    llamado: 'Actuar a tiempo cambia el pronóstico y los desenlaces del paciente.',
  },
  {
    slug: 'manejo-diagnostico-notificacion',
    numero: '03',
    titulo: 'Manejo inicial, diagnóstico y notificación',
    resumen: 'Secuelas y ruta de seguimiento.',
    descripcion: 'Aborda el reconocimiento de secuelas y la orientación sobre la ruta de seguimiento del paciente.',
    llamado: 'Nuestro compromiso va más allá de la enfermedad aguda.',
  },
  {
    slug: 'llamado-prevencion',
    numero: '04',
    titulo: 'La EMI no espera, un llamado a las estrategias de prevención',
    resumen: 'Vacunación y quimioprofilaxis.',
    descripcion: 'Se centra en la vacunación y la quimioprofilaxis como estrategias de prevención.',
    llamado: 'Prevenir siempre será nuestra mejor intervención.',
  },
];

export const casosClinicosV2: CasoClinicoV2[] = [
  {
    slug: 'caso-1',
    numero: 'Caso 1',
    titulo: 'Lactante con fiebre y signos inespecíficos',
    resumen:
      'Lactante con fiebre, irritabilidad y signos iniciales poco específicos. El caso invita a identificar cuándo la evolución clínica debe activar la sospecha y acelerar la consulta de la ruta.',
    descripcion:
      'Lactante con fiebre, irritabilidad y signos iniciales poco específicos. El caso invita a identificar cuándo la evolución clínica debe activar la sospecha y acelerar la consulta de la ruta.',
    ctaLabel: 'Resolver caso 1',
    imagen: casoImg1,
  },
  {
    slug: 'caso-2',
    numero: 'Caso 2',
    titulo: 'Escolar con petequias y deterioro clínico',
    resumen:
      'Paciente escolar con fiebre, lesiones cutáneas compatibles con alarma y deterioro rápido. El caso refuerza la lectura de signos críticos y los primeros pasos de actuación.',
    descripcion:
      'Paciente escolar con fiebre, lesiones cutáneas compatibles con alarma y deterioro rápido. El caso refuerza la lectura de signos críticos y los primeros pasos de actuación.',
    ctaLabel: 'Resolver caso 2',
    imagen: casoImg4,
  },
  {
    slug: 'caso-3',
    numero: 'Caso 3',
    titulo: 'Adolescente con sospecha de meningitis y decisión de ruta',
    resumen:
      'Adolescente con cefalea intensa, fiebre y compromiso progresivo. El caso permite revisar decisiones de ruta, comunicación del riesgo, referencia y seguimiento.',
    descripcion:
      'Adolescente con cefalea intensa, fiebre y compromiso progresivo. El caso permite revisar decisiones de ruta, comunicación del riesgo, referencia y seguimiento.',
    ctaLabel: 'Resolver caso 3',
    imagen: casoImg9,
  },
];

export const recursosCategorias: RecursoCategoriaInfo[] = [
  { categoria: 'PDF y guías', descripcion: 'Protocolos y guías de manejo relacionados con la Ruta EMI.', icono: 'doc' },
  { categoria: 'Infografías', descripcion: 'Conceptos clave de la Ruta EMI en formato visual.', icono: 'chart' },
  { categoria: 'Enlaces', descripcion: 'Recursos complementarios y referencias sobre EMI.', icono: 'link' },
  { categoria: 'Videos formativos', descripcion: 'Procedimientos y decisiones clínicas explicados paso a paso.', icono: 'video' },
];

// Placeholders — reemplazar por los recursos definitivos que entregue el cliente.
export const recursosItems: RecursoItem[] = [
  {
    categoria: 'PDF y guías',
    titulo: '[Placeholder] Guía de manejo inicial de EMI',
    descripcion: 'Espacio reservado para el documento definitivo que entregará el cliente.',
    tipoArchivo: 'PDF',
    enlace: '#',
    esPlaceholder: true,
  },
  {
    categoria: 'Infografías',
    titulo: '[Placeholder] Infografía Código EMI',
    descripcion: 'Espacio reservado para la infografía definitiva que entregará el cliente.',
    tipoArchivo: 'Imagen',
    enlace: '#',
    esPlaceholder: true,
  },
  {
    categoria: 'Enlaces',
    titulo: '[Placeholder] Lineamientos de vigilancia epidemiológica',
    descripcion: 'Espacio reservado para el enlace definitivo que entregará el cliente.',
    tipoArchivo: 'Enlace externo',
    enlace: '#',
    esPlaceholder: true,
  },
  {
    categoria: 'Videos formativos',
    titulo: '[Placeholder] Video: reconocimiento temprano de EMI',
    descripcion: 'Espacio reservado para el video definitivo que entregará el cliente.',
    tipoArchivo: 'Video',
    enlace: '#',
    esPlaceholder: true,
  },
];
