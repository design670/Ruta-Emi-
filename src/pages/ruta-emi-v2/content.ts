// Contenido compartido de la versión de prueba Ruta EMI v2 (/ruta-emi-v2/*)
import imgLactante from '../../assets/casos-clinicos/lactante-fiebre.jpg';
import imgEscolar from '../../assets/casos-clinicos/escolar-petequias.jpg';
import imgAdolescente from '../../assets/casos-clinicos/adolescente-meningitis.jpg';

export const RUTA_EMI_URL = 'https://ruta-emi.igloosuite.com/';

export const navItems = [
  { label: 'Ruta EMI', href: '/ruta-emi-v2#ruta-emi' },
  { label: 'Curso', href: '/ruta-emi-v2/curso' },
  { label: 'Casos clínicos', href: '/ruta-emi-v2/casos-clinicos' },
  { label: 'Recursos', href: '/ruta-emi-v2/recursos' },
];

export const modulosCurso = [
  {
    numero: '1',
    titulo: 'La verdadera cara de la EMI',
    descripcion: 'Describir la carga de enfermedad aguda y secuelas.',
    llamado:
      'Reconocer y priorizar la EMI en Colombia, notificar al sistema de vigilancia epidemiológica y ser garantes de esta información.',
  },
  {
    numero: '2',
    titulo: 'Código EMI: Sistema de alertas para la atención del paciente con EMI',
    descripcion:
      'Foco en los puntos de dolor en la atención inicial del paciente, reconocimiento temprano, sospecha diagnóstica, acciones clave en la primera hora.',
    llamado: 'Actuar a tiempo cambia el pronóstico y los desenlaces del paciente.',
  },
  {
    numero: '3',
    titulo: 'Manejo inicial, diagnóstico y notificación',
    descripcion: 'Reconocimiento de secuelas y orientación sobre la ruta de seguimiento.',
    llamado: 'Nuestro compromiso va más allá de la enfermedad aguda.',
  },
  {
    numero: '4',
    titulo: 'La EMI no espera, un llamado a las estrategias de prevención',
    descripcion: 'Enfoque sobre vacunación y quimioprofilaxis.',
    llamado: 'Prevenir siempre será nuestra mejor intervención.',
  },
];

export interface CasoClinicoV2 {
  slug: string;
  numero: number;
  titulo: string;
  resumen: string;
  /** Imagen propia del caso; si no está presente se usa la imagen genérica de casos clínicos. */
  imagen?: string;
  /** Si está presente, la card enlaza a esta URL en vez de a la página de detalle interna. */
  fuenteUrl?: string;
}

export const casosClinicos: CasoClinicoV2[] = [
  {
    slug: 'lactante-fiebre-signos-inespecificos',
    numero: 1,
    titulo: 'Lactante con fiebre y signos inespecíficos',
    resumen:
      'Lactante con fiebre, irritabilidad y signos iniciales poco específicos. El caso invita a identificar cuándo la evolución clínica debe activar la sospecha y acelerar la consulta de la ruta.',
    imagen: imgLactante,
  },
  {
    slug: 'escolar-petequias-deterioro-clinico',
    numero: 2,
    titulo: 'Escolar con petequias y deterioro clínico',
    resumen:
      'Paciente escolar con fiebre, lesiones cutáneas compatibles con alarma y deterioro rápido. El caso refuerza la lectura de signos críticos y los primeros pasos de actuación.',
    imagen: imgEscolar,
  },
  {
    slug: 'adolescente-sospecha-meningitis',
    numero: 3,
    titulo: 'Adolescente con sospecha de meningitis',
    imagen: imgAdolescente,
    resumen:
      'Adolescente con cefalea intensa, fiebre y compromiso progresivo. El caso permite revisar decisiones de ruta, comunicación del riesgo, referencia y seguimiento.',
  },
  {
    slug: 'caso-14-cuando-discretos-cambios-neurologicos-representan-una-grave-enfermedad',
    numero: 4,
    titulo: 'Cambios neurológicos sutiles en un paciente de 6 años',
    resumen:
      'Paciente de 6 años con cambios neurológicos sutiles que plantean el reto de reconocer una enfermedad grave detrás de signos discretos. El caso invita a no subestimar hallazgos leves y sostener la sospecha clínica.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-14-cuando-discretos-cambios-neurologicos-representan-una-grave-enfermedad/',
  },
  {
    slug: 'caso-13-presentacion-inusual-de-una-glomerulopatia',
    numero: 5,
    titulo: 'Presentación renal atípica en edad escolar',
    resumen:
      'Paciente de 8 años con una forma de presentación renal poco habitual. El caso invita a ampliar el diagnóstico diferencial cuando los hallazgos iniciales no encajan con el patrón esperado.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-13-presentacion-inusual-de-una-glomerulopatia/',
  },
  {
    slug: 'caso-12-coincidencia-o-consecuencia-talla-baja-y-enfermedades-raras',
    numero: 6,
    titulo: 'Talla baja asociada a una enfermedad poco frecuente',
    resumen:
      'Paciente de 5 años con talla baja asociada a hallazgos poco frecuentes. El caso refuerza la importancia de correlacionar signos aparentemente aislados para llegar a un diagnóstico integral.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-12-coincidencia-o-consecuencia-talla-baja-y-enfermedades-raras/',
  },
  {
    slug: 'caso-11-shua',
    numero: 7,
    titulo: 'Un cuadro inicialmente confundido con alergia',
    resumen:
      'Lactante inicialmente valorado por un cuadro atribuido a alergia. El caso permite practicar la reevaluación clínica cuando la evolución no corresponde con el diagnóstico inicial.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-11-shua/',
  },
  {
    slug: 'caso-10-lal-d',
    numero: 8,
    titulo: 'Fallo de crecimiento en un recién nacido',
    resumen:
      'Recién nacido con fallo de medro en las primeras semanas de vida. El caso invita a estructurar un abordaje diagnóstico ordenado ante la falta de progreso en el crecimiento.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-10-lal-d/',
  },
  {
    slug: 'caso-9-paciente-con-perdida-de-la-marcha',
    numero: 9,
    titulo: 'Pérdida progresiva de la marcha',
    resumen:
      'Paciente de 6 años con pérdida progresiva de la marcha. El caso refuerza el valor de una anamnesis y un examen neurológico dirigidos ante un síntoma motor de instauración gradual.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-9-paciente-con-perdida-de-la-marcha/',
  },
  {
    slug: 'caso-8-al-nino-le-cuesta-subir-escaleras',
    numero: 10,
    titulo: 'Debilidad muscular progresiva en un preescolar',
    resumen:
      'Paciente de 4 años con dificultad progresiva para subir escaleras. El caso invita a reconocer signos tempranos de debilidad muscular en la consulta pediátrica.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-8-al-nino-le-cuesta-subir-escaleras/',
  },
  {
    slug: 'caso-7-trastorno-de-la-mineralizacion-osea-en-pediatria',
    numero: 11,
    titulo: 'Trastorno óseo metabólico en pediatría',
    resumen:
      'Paciente de 9 años en estudio por un trastorno de la mineralización ósea. El caso permite practicar la integración de hallazgos clínicos y metabólicos en el diagnóstico.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-7-trastorno-de-la-mineralizacion-osea-en-pediatria/',
  },
  {
    slug: 'caso-6-el-nino-no-crece',
    numero: 12,
    titulo: 'Falta de crecimiento adecuado en un escolar',
    resumen:
      'Paciente de 7 años remitido por falta de crecimiento adecuado. El caso refuerza el enfoque escalonado para el estudio de la talla baja en pediatría.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-6-el-nino-no-crece/',
  },
  {
    slug: 'caso-5-el-nino-tiene-dificultad-en-el-aprendizaje-y-recientemente-tuvo-una-convulsion',
    numero: 13,
    titulo: 'Dificultad de aprendizaje y un episodio convulsivo',
    resumen:
      'Adolescente de 13 años con dificultad de aprendizaje y un episodio convulsivo reciente. El caso invita a relacionar antecedentes del neurodesarrollo con un evento agudo nuevo.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-5-el-nino-tiene-dificultad-en-el-aprendizaje-y-recientemente-tuvo-una-convulsion/',
  },
  {
    slug: 'caso-4-la-nina-tiene-una-giba-en-la-espalda',
    numero: 14,
    titulo: 'Deformidad progresiva de la columna en la primera infancia',
    resumen:
      'Paciente de 2 años con una deformidad progresiva de la columna. El caso refuerza la importancia del examen físico dirigido ante hallazgos posturales en la infancia temprana.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-4-la-nina-tiene-una-giba-en-la-espalda/',
  },
  {
    slug: 'caso-3-transcripcion-caso-enfermedades-neuromusculares',
    numero: 15,
    titulo: 'Sospecha de enfermedad neuromuscular en un lactante',
    resumen:
      'Lactante de 4 meses en estudio por sospecha de enfermedad neuromuscular. El caso permite practicar el reconocimiento temprano de signos de hipotonía en el lactante.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-3-transcripcion-caso-enfermedades-neuromusculares/',
  },
  {
    slug: 'caso-2-microangiopatia-trombotica-en-pediatria',
    numero: 16,
    titulo: 'Hallazgos de una microangiopatía trombótica',
    resumen:
      'Lactante de 9 meses con hallazgos compatibles con una microangiopatía trombótica. El caso refuerza la lectura de signos de alarma hematológicos en pediatría.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-2-microangiopatia-trombotica-en-pediatria/',
  },
  {
    slug: 'caso-1-enfermedad-neurodegenerativa-en-la-infancia',
    numero: 17,
    titulo: 'Deterioro progresivo por una enfermedad neurodegenerativa',
    resumen:
      'Paciente de 8 años en estudio por una enfermedad neurodegenerativa. El caso invita a sostener la sospecha clínica ante un deterioro progresivo de funciones ya adquiridas.',
    fuenteUrl: 'https://scp.com.co/casos-clinicos/caso-1-enfermedad-neurodegenerativa-en-la-infancia/',
  },
];

export const recursos = [
  { tipo: 'PDF y Guías', descripcion: 'Protocolos, guías de manejo y resúmenes clínicos descargables.' },
  { tipo: 'Infografías', descripcion: 'Conceptos complejos sintetizados en formato visual y memorable.' },
  { tipo: 'Enlaces', descripcion: 'Recursos complementarios, artículos y referencias actualizadas.' },
  { tipo: 'Videos formativos', descripcion: 'Procedimientos y razonamiento clínico explicados paso a paso.' },
];
