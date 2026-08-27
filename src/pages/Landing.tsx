import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  BarChart3,
  Link2,
  Video,
  Calculator,
  ClipboardCheck,
} from 'lucide-react';
import heroPhoto from '../assets/hero-photo-2.avif';
import logoRutaEmi from '../assets/logo-ruta-emi.svg';
import logoRutaEmiMark from '../assets/logo-ruta-emi-mark.svg';
import casoImg1 from '../assets/casos-clinicos/caso-1.avif';
import casoImg9 from '../assets/casos-clinicos/caso-9.avif';
import casoImg13 from '../assets/casos-clinicos/caso-13.avif';
import casoImg4 from '../assets/casos-clinicos/caso-4.avif';
import soporteVitalImg from '../assets/soporte-vital.jpg';
import valoracionClinicaImg from '../assets/valoracion-clinica.jpg';
import type { Modulo, ModuloRuta, CasoClinico, CasoListado, Recurso, PasoMetodologia, Vista } from '../types';

const esquemaTealIntenso = { bg: 'bg-teal-600', badge: 'bg-teal-800 text-teal-100', tag: 'bg-teal-800 text-teal-100', text: 'text-white', textMuted: 'text-white/80' };
const esquemaAzulClaro = { bg: 'bg-blue-50 border border-blue-100', badge: 'bg-blue-200 text-blue-800', tag: 'bg-blue-200 text-blue-800', text: 'text-slate-900', textMuted: 'text-slate-600' };
const esquemaVioletaIntenso = { bg: 'bg-violet-800', badge: 'bg-violet-900 text-violet-100', tag: 'bg-violet-900 text-violet-100', text: 'text-white', textMuted: 'text-white/80' };
const esquemaNaranjaIntenso = { bg: 'bg-orange-500', badge: 'bg-orange-700 text-orange-100', tag: 'bg-orange-700 text-orange-100', text: 'text-white', textMuted: 'text-white/80' };
const esquemaRosaClaro = { bg: 'bg-pink-50 border border-pink-100', badge: 'bg-pink-200 text-pink-800', tag: 'bg-pink-200 text-pink-800', text: 'text-slate-900', textMuted: 'text-slate-600' };
const esquemaAzulIntenso = { bg: 'bg-[#0D2967]', badge: 'bg-white/15 text-white', tag: 'bg-white/15 text-white', text: 'text-white', textMuted: 'text-white/80' };
const esquemaTurquesaIntenso = { bg: 'bg-cyan-600', badge: 'bg-cyan-800 text-cyan-100', tag: 'bg-cyan-800 text-cyan-100', text: 'text-white', textMuted: 'text-white/80' };
const esquemaMoradoClaro = { bg: 'bg-violet-50 border border-violet-100', badge: 'bg-violet-200 text-violet-900', tag: 'bg-violet-200 text-violet-900', text: 'text-slate-900', textMuted: 'text-slate-600' };

const modulos: Modulo[] = [
  {
    id: 'urgencias',
    destacada: true,
    badge: 'RUTA DESTACADA',
    titulo: 'Manejo Integral en Urgencias y Soporte Vital Avanzado',
    descripcion: 'Fortalece la estabilización inicial y la toma de decisiones ante situaciones críticas.',
    cursos: 12,
    duracion: '20 semanas',
    temas: ['Estabilización rápida', 'Soporte vital avanzado', 'Toma de decisiones bajo presión'],
  },
  {
    id: 'medicina-interna',
    badge: 'MEDICINA INTERNA',
    titulo: 'Razonamiento Clínico y Diagnóstico Diferencial Metódico',
    descripcion: 'Desarrolla un criterio ordenado para analizar síntomas y orientar diagnósticos diferenciales.',
    cursos: 8,
    duracion: '14 semanas',
    temas: ['Anamnesis dirigida', 'Diagnóstico diferencial', 'Razonamiento clínico'],
  },
  {
    id: 'farmacologia',
    badge: 'FARMACOLOGÍA',
    titulo: 'Prescripción Segura, Antimicrobianos y Farmacoterapia',
    descripcion: 'Refuerza la selección, dosificación y uso seguro de los medicamentos.',
    cursos: 9,
    duracion: '12 semanas',
    temas: ['Antimicrobianos', 'Interacciones farmacológicas', 'Dosificación segura'],
  },
  {
    id: 'catalogo',
    esCatalogo: true,
    badge: 'CATÁLOGO COMPLETO',
    titulo: 'Explorar todas las rutas',
    descripcion: 'Conoce todos los itinerarios disponibles.',
  },
];

// Catálogo completo de rutas (página interna "Todas las rutas") — estructura reutilizable para agregar más rutas.
const rutasFormativas: ModuloRuta[] = [
  {
    id: 'urgencias',
    destacada: true,
    badge: 'RUTA DESTACADA',
    titulo: 'Manejo Integral en Urgencias y Soporte Vital Avanzado',
    descripcion:
      'Itinerario intensivo enfocado en la estabilización rápida, toma de decisiones bajo presión y abordaje protocolizado del paciente.',
    cursos: 12,
    duracion: '20 semanas',
    temas: ['Estabilización rápida', 'Soporte vital avanzado', 'Toma de decisiones bajo presión'],
    colorScheme: esquemaTealIntenso,
  },
  {
    id: 'medicina-interna',
    badge: 'MEDICINA INTERNA',
    titulo: 'Razonamiento Clínico y Diagnóstico Diferencial Metódico',
    descripcion:
      'Entrenamiento metodológico para construir diagnósticos diferenciales sólidos a partir de la presentación clínica.',
    cursos: 8,
    duracion: '14 semanas',
    temas: ['Anamnesis dirigida', 'Diagnóstico diferencial', 'Razonamiento clínico'],
    colorScheme: esquemaAzulClaro,
  },
  {
    id: 'farmacologia',
    badge: 'FARMACOLOGÍA',
    titulo: 'Prescripción Segura, Antimicrobianos y Farmacoterapia',
    descripcion:
      'Guía práctica para la selección racional de fármacos, dosificación y prevención de eventos adversos.',
    cursos: 9,
    duracion: '12 semanas',
    temas: ['Antimicrobianos', 'Interacciones farmacológicas', 'Dosificación segura'],
    colorScheme: esquemaVioletaIntenso,
  },
  {
    id: 'pediatria',
    badge: 'PEDIATRÍA',
    titulo: 'Abordaje Integral de Urgencias Pediátricas',
    descripcion:
      'Formación práctica para reconocer signos de alarma, priorizar la atención y responder ante las urgencias pediátricas más frecuentes.',
    cursos: 8,
    duracion: '12 semanas',
    temas: ['Evaluación pediátrica', 'Dificultad respiratoria', 'Signos de alarma'],
    colorScheme: esquemaNaranjaIntenso,
  },
  {
    id: 'ginecoobstetricia',
    badge: 'GINECOOBSTETRICIA',
    titulo: 'Atención Inicial de Urgencias Ginecoobstétricas',
    descripcion: 'Ruta enfocada en la identificación temprana y el abordaje inicial de situaciones críticas durante el embarazo.',
    cursos: 7,
    duracion: '10 semanas',
    temas: ['Hemorragia obstétrica', 'Trastornos hipertensivos', 'Evaluación materna'],
    colorScheme: esquemaRosaClaro,
  },
  {
    id: 'cardiologia',
    badge: 'CARDIOLOGÍA',
    titulo: 'Evaluación y Manejo Inicial del Paciente Cardiovascular',
    descripcion: 'Desarrolla criterios para reconocer, evaluar y actuar ante las principales urgencias cardiovasculares.',
    cursos: 8,
    duracion: '12 semanas',
    temas: ['Dolor torácico', 'Electrocardiografía', 'Arritmias'],
    colorScheme: esquemaAzulIntenso,
  },
  {
    id: 'trauma',
    badge: 'TRAUMA',
    titulo: 'Atención Inicial del Paciente Politraumatizado',
    descripcion: 'Aprende a realizar una valoración ordenada y a priorizar intervenciones durante la atención inicial del trauma.',
    cursos: 9,
    duracion: '14 semanas',
    temas: ['Evaluación primaria', 'Manejo inicial del trauma', 'Inmovilización'],
    colorScheme: esquemaTurquesaIntenso,
  },
  {
    id: 'seguridad-paciente',
    badge: 'SEGURIDAD DEL PACIENTE',
    titulo: 'Prácticas Seguras y Calidad en la Atención Clínica',
    descripcion: 'Fortalece la prevención de riesgos, la comunicación clínica y la toma de decisiones orientada a una atención segura.',
    cursos: 6,
    duracion: '8 semanas',
    temas: ['Eventos adversos', 'Comunicación clínica', 'Gestión del riesgo'],
    colorScheme: esquemaMoradoClaro,
  },
];

// Casos clínicos — contenido real tomado de scp.com.co/casos-clinicos/
const casos: CasoClinico[] = [
  {
    id: 'caso-1',
    especialidad: 'Neuropediatría',
    titulo: 'Enfermedad neurodegenerativa en la infancia',
    paciente: '8 años · Masculino',
    motivoConsulta:
      'Deterioro neurológico con trastorno de la marcha desde los 4 años: arrastraba y metía el pie derecho, seguido de caídas frecuentes e inestabilidad.',
    antecedentes:
      'Padres consanguíneos (primos hermanos), desarrollo psicomotor normal hasta los 4 años, parto pretérmino, fractura tibial a los 5 años.',
    url: 'https://scp.com.co/casos-clinicos/caso-1-enfermedad-neurodegenerativa-en-la-infancia/',
    imagen: casoImg1,
  },
  {
    id: 'caso-9',
    especialidad: 'Neuropediatría',
    titulo: 'Paciente con pérdida de la marcha',
    paciente: '6 años · Masculino',
    motivoConsulta: '"Tiene una mancha en la cara y dejó de caminar."',
    antecedentes:
      'Recién nacido a término con APGAR normal, hipotonía leve y mancha en vino oporto facial izquierda. Retraso progresivo del desarrollo motor desde el primer año de vida.',
    url: 'https://scp.com.co/casos-clinicos/caso-9-paciente-con-perdida-de-la-marcha/',
    imagen: casoImg9,
  },
  {
    id: 'caso-13',
    especialidad: 'Nefrología',
    titulo: 'Presentación inusual de una glomerulopatía',
    paciente: '8 años · Masculino',
    motivoConsulta:
      '"Edema palpebral, en manos y piernas, orina oscura y escasa" tras dos semanas de malestar general y cambios conductuales.',
    antecedentes:
      'Hipertensión, edema moderado, eritema malar, inflamación articular y compromiso multiorgánico, orientando hacia lupus eritematoso sistémico.',
    url: 'https://scp.com.co/casos-clinicos/caso-13-presentacion-inusual-de-una-glomerulopatia/',
    imagen: casoImg13,
  },
  {
    id: 'caso-4',
    especialidad: 'Genética',
    titulo: 'La niña tiene una giba en la espalda',
    paciente: '2 años 4 meses · Femenino',
    motivoConsulta:
      '"Se le sale una giba en la espalda", notada desde los 4 meses e interpretada previamente como vicio de postura.',
    antecedentes:
      'Deformidad progresiva de columna toracolumbar, macrocefalia, hipoplasia mediofacial, soplo cardíaco y hernias, sugiriendo enfermedad de depósito lisosomal.',
    url: 'https://scp.com.co/casos-clinicos/caso-4-la-nina-tiene-una-giba-en-la-espalda/',
    imagen: casoImg4,
  },
];

// Listado completo de casos publicados en scp.com.co/casos-clinicos/
const todosLosCasosSCP: CasoListado[] = [
  { numero: 14, titulo: 'Cuando discretos cambios neurológicos representan una grave enfermedad', paciente: '6 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-14-cuando-discretos-cambios-neurologicos-representan-una-grave-enfermedad/' },
  { numero: 13, titulo: 'Presentación inusual de una glomerulopatía', paciente: '8 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-13-presentacion-inusual-de-una-glomerulopatia/', casoRef: 'caso-13' },
  { numero: 12, titulo: 'Coincidencia o consecuencia: talla baja y enfermedades raras', paciente: '5 años 1 mes · Femenino', url: 'https://scp.com.co/casos-clinicos/caso-12-coincidencia-o-consecuencia-talla-baja-y-enfermedades-raras/' },
  { numero: 11, titulo: '"El niño tiene alergia"', paciente: '9 meses 12 días · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-11-shua/' },
  { numero: 10, titulo: 'Fallo de medro en recién nacidos y lactantes', paciente: '2 meses 10 días · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-10-lal-d/' },
  { numero: 9, titulo: 'Paciente con pérdida de la marcha', paciente: '6 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-9-paciente-con-perdida-de-la-marcha/', casoRef: 'caso-9' },
  { numero: 8, titulo: '"Al niño le cuesta subir escaleras"', paciente: '4 años 4 meses · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-8-al-nino-le-cuesta-subir-escaleras/' },
  { numero: 7, titulo: 'Trastorno de la mineralización ósea en pediatría', paciente: '9 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-7-trastorno-de-la-mineralizacion-osea-en-pediatria/' },
  { numero: 6, titulo: '"El niño no crece"', paciente: '7 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-6-el-nino-no-crece/' },
  { numero: 5, titulo: '"El niño tiene dificultad en el aprendizaje y recientemente tuvo una convulsión"', paciente: '13 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-5-el-nino-tiene-dificultad-en-el-aprendizaje-y-recientemente-tuvo-una-convulsion/' },
  { numero: 4, titulo: 'La niña tiene una giba en la espalda', paciente: '2 años 4 meses · Femenino', url: 'https://scp.com.co/casos-clinicos/caso-4-la-nina-tiene-una-giba-en-la-espalda/', casoRef: 'caso-4' },
  { numero: 3, titulo: 'Transcripción caso enfermedades neuromusculares', paciente: '4 meses · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-3-transcripcion-caso-enfermedades-neuromusculares/' },
  { numero: 2, titulo: 'Microangiopatía trombótica en pediatría', paciente: '9 meses · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-2-microangiopatia-trombotica-en-pediatria/' },
  { numero: 1, titulo: 'Enfermedad neurodegenerativa en la infancia', paciente: '8 años · Masculino', url: 'https://scp.com.co/casos-clinicos/caso-1-enfermedad-neurodegenerativa-en-la-infancia/', casoRef: 'caso-1' },
];

const recursos: Recurso[] = [
  { tipo: 'PDF y Guías', descripcion: 'Protocolos, guías de manejo y resúmenes clínicos descargables.', icono: 'doc' },
  { tipo: 'Infografías', descripcion: 'Conceptos complejos sintetizados en formato visual y memorable.', icono: 'chart' },
  { tipo: 'Enlaces', descripcion: 'Recursos complementarios, artículos y referencias actualizadas.', icono: 'link' },
  { tipo: 'Videos formativos', descripcion: 'Procedimientos y razonamiento clínico explicados paso a paso.', icono: 'video' },
  { tipo: 'Calculadoras clínicas', descripcion: 'Herramientas interactivas para dosis, escalas y puntajes de riesgo.', icono: 'calculator' },
  { tipo: 'Checklists y protocolos', descripcion: 'Listas de verificación rápidas para la práctica diaria.', icono: 'checklist' },
];

const pasosMetodologia: PasoMetodologia[] = [
  {
    numero: '01',
    titulo: 'Elige tu curso',
    descripcion: 'Selecciona la formación que mejor responde a tus objetivos profesionales.',
    accent: 'bg-violet-800',
    textClass: 'text-white',
  },
  {
    numero: '02',
    titulo: 'Revisa el contenido',
    descripcion: 'Conoce los módulos, recursos y actividades que componen el curso.',
    accent: 'bg-[#0D2967]',
    textClass: 'text-white',
  },
  {
    numero: '03',
    titulo: 'Avanza paso a paso',
    descripcion: 'Completa cada módulo siguiendo el orden establecido.',
    accent: 'bg-[#2BBCEA]',
    textClass: 'text-[#0D2967]',
  },
  {
    numero: '04',
    titulo: 'Pon a prueba lo aprendido',
    descripcion: 'Realiza las actividades y evaluaciones correspondientes.',
    accent: 'bg-orange-500',
    textClass: 'text-white',
  },
  {
    numero: '05',
    titulo: 'Completa tu formación',
    descripcion: 'Finaliza el recorrido y obtén tu certificado.',
    accent: 'bg-teal-600',
    textClass: 'text-white',
  },
];

const esquemaCaso = [
  { badge: 'bg-teal-100 text-teal-800', overlay: 'from-teal-700 to-teal-500', accent: 'bg-teal-600', accentText: 'text-teal-700' },
  { badge: 'bg-emerald-100 text-emerald-800', overlay: 'from-emerald-700 to-emerald-500', accent: 'bg-emerald-600', accentText: 'text-emerald-700' },
  { badge: 'bg-orange-100 text-orange-800', overlay: 'from-orange-700 to-orange-500', accent: 'bg-orange-500', accentText: 'text-orange-600' },
  { badge: 'bg-violet-100 text-violet-800', overlay: 'from-violet-800 to-violet-600', accent: 'bg-violet-800', accentText: 'text-violet-800' },
];

const patronDiagonal = {
  backgroundImage:
    'repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 14px)',
};

interface PasoCardInteractivaProps {
  paso: PasoMetodologia;
  idx: number;
  isActive: boolean;
  onActivate: (idx: number) => void;
  cardRef: (el: HTMLDivElement | null) => void;
}

function PasoCardInteractiva({ paso, idx, isActive, onActivate, cardRef }: PasoCardInteractivaProps) {
  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`${paso.numero}. ${paso.titulo}`}
      onClick={() => onActivate(idx)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onActivate(idx);
        }
      }}
      className={`relative overflow-hidden rounded-2xl border cursor-pointer select-none h-[280px] md:h-[300px] w-full max-w-[200px] mx-auto transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        isActive
          ? '-translate-y-2 scale-[1.02] shadow-2xl border-transparent'
          : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <div className="absolute inset-0 bg-slate-900" />
      <div
        className={`absolute inset-0 ${paso.accent} origin-bottom transition-transform duration-[600ms] ease-out motion-reduce:transition-none ${
          isActive ? 'scale-y-100' : 'scale-y-0'
        }`}
      />
      <div
        className={`relative z-10 h-full flex flex-col p-5 transition-colors duration-500 motion-reduce:transition-none ${
          isActive ? paso.textClass : 'text-white/60'
        }`}
      >
        <span className="text-lg font-bold opacity-90">{paso.numero}</span>
        <div className="mt-auto">
          <h3 className="text-sm font-bold mb-1.5 leading-snug">{paso.titulo}</h3>
          <p className={`text-xs leading-relaxed transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70'}`}>
            {paso.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [modalModulo, setModalModulo] = useState<Modulo | null>(null);
  const [modalCaso, setModalCaso] = useState<CasoClinico | null>(null);
  const [vistaActual, setVistaActual] = useState<Vista>('landing');
  const [activeStep, setActiveStep] = useState(0);
  const pasoCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const recursosScrollRef = useRef<HTMLDivElement>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  const cerrarModalModulo = () => setModalModulo(null);
  const modalScheme = modalModulo && !modalModulo.esCatalogo ? modalModulo.colorScheme ?? esquemaAzulClaro : esquemaAzulClaro;

  const activarPaso = (idx: number) => {
    setActiveStep(idx);
    const card = pasoCardRefs.current[idx];
    if (card && window.innerWidth < 768) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const desplazarRecursos = (direccion: 'izquierda' | 'derecha') => {
    const contenedor = recursosScrollRef.current;
    if (!contenedor) return;
    const distancia = contenedor.clientWidth * 0.8;
    contenedor.scrollBy({ left: direccion === 'derecha' ? distancia : -distancia, behavior: 'smooth' });
  };

  const irATodosLosCasos = () => {
    setVistaActual('casos');
    window.scrollTo({ top: 0 });
  };

  const irATodasLasRutas = () => {
    setModalModulo(null);
    setVistaActual('rutas');
    window.scrollTo({ top: 0 });
  };

  const volverAlInicio = () => {
    setVistaActual('landing');
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    document.body.style.overflow = modalModulo || modalCaso ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalModulo, modalCaso]);

  useEffect(() => {
    if (!modalModulo) {
      modalTriggerRef.current?.focus();
      modalTriggerRef.current = null;
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalModulo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalModulo]);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans">

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          headerScroll ? 'bg-white shadow-lg' : 'bg-gradient-to-br from-slate-50 to-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logoRutaEmi} alt="Ruta EMI - Academia Médica" className="h-9 md:h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="nav-link text-slate-700 text-sm font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('ruta')} className="nav-link text-slate-700 text-sm font-medium">
              La Ruta
            </button>
            <button
              onClick={() => scrollToSection('rutas-formativas')}
              className="nav-link text-slate-700 text-sm font-medium"
            >
              Cursos
            </button>
            <button onClick={() => scrollToSection('casos')} className="nav-link text-slate-700 text-sm font-medium">
              Casos Clínicos
            </button>
            <button onClick={() => scrollToSection('recursos')} className="nav-link text-slate-700 text-sm font-medium">
              Recursos
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/iniciar-sesion" className="text-slate-700 text-sm font-medium hover:text-slate-900 transition">
              Iniciar sesión
            </Link>
            <Link
              to="/registro"
              className="btn-primary px-6 py-2.5 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-medium text-sm inline-flex items-center gap-2"
            >
              Registrarme
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-slate-700 text-sm font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('ruta')}
                className="block w-full text-left text-slate-700 text-sm font-medium py-2"
              >
                La Ruta
              </button>
              <button
                onClick={() => scrollToSection('rutas-formativas')}
                className="block w-full text-left text-slate-700 text-sm font-medium py-2"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection('casos')}
                className="block w-full text-left text-slate-700 text-sm font-medium py-2"
              >
                Casos Clínicos
              </button>
              <button
                onClick={() => scrollToSection('recursos')}
                className="block w-full text-left text-slate-700 text-sm font-medium py-2"
              >
                Recursos
              </button>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link to="/iniciar-sesion" className="block w-full py-2.5 text-center text-slate-700 text-sm font-medium">
                  Iniciar sesión
                </Link>
                <Link
                  to="/registro"
                  className="w-full py-2.5 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-medium text-sm inline-flex items-center justify-center gap-2"
                >
                  Registrarme
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {vistaActual === 'landing' && (
        <>
          {/* Hero Section */}
          <section id="inicio" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img
                    src={heroPhoto}
                    alt="Profesional médico trabajando en laptop"
                    className="w-full h-full object-cover scale-x-[-1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
                </div>

                <div className="relative px-8 py-16 md:px-14 md:py-24">
                  <div className="fade-in max-w-2xl space-y-8">
                    <div>
                      <div className="inline-block mb-4 px-4 py-2 bg-slate-950/70 border border-white/10 text-white rounded-full text-xs font-semibold tracking-wide">
                        ACADEMIA DE FORMACIÓN MÉDICA
                      </div>
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Una ruta clara para
                        <br />
                        llevar tu conocimiento
                        <br />
                        a la práctica
                      </h1>
                      <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                        Cursos, casos clínicos y recursos organizados para ayudarte a avanzar con claridad.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <button className="btn-primary pl-8 pr-2 py-2 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-4 hover:shadow-xl">
                        Explorar la ruta
                        <span className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center">
                          <ChevronRight size={18} />
                        </span>
                      </button>
                      <span className="text-sm text-white/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Ruta 100% interactivo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cómo funciona / Metodología */}
          <section id="ruta" className="py-24 md:py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-xs font-bold tracking-wide">
                    SOBRE RUTA EMI
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    Tu formación médica, guiada paso a paso
                  </h2>
                </div>
                <div className="space-y-6 md:pt-14">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Ruta EMI organiza tu proceso de formación en cinco pasos claros para que sepas qué hacer, cómo
                    avanzar y cuándo completar cada etapa.
                  </p>
                  <button
                    onClick={() => {
                      setActiveStep(0);
                      document.getElementById('ruta-pasos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="btn-primary px-6 py-3 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-semibold inline-flex items-center gap-2"
                  >
                    Conoce los 5 pasos
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Tarjeta oscura: guía de 5 pasos */}
              <div id="ruta-pasos" className="bg-slate-950 rounded-3xl p-8 md:p-10 scroll-mt-24">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div className="inline-block px-4 py-1.5 bg-violet-800 text-violet-100 rounded-full text-xs font-bold tracking-wide">
                    TU RUTA EN 5 PASOS
                  </div>
                  <p className="text-sm text-white/50">Una guía clara para avanzar de principio a fin</p>
                </div>

                {/* Línea de recorrido: indicadores interactivos sincronizados con las cards */}
                <div className="relative mb-6 px-2">
                  <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-px bg-white/15" />
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 h-px transition-all duration-500 motion-reduce:transition-none ${pasosMetodologia[activeStep].accent}`}
                    style={{ width: `calc((100% - 1rem) * ${activeStep / (pasosMetodologia.length - 1)})` }}
                  />
                  <div className="relative grid grid-cols-5 gap-4">
                    {pasosMetodologia.map((paso, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Ir al paso ${paso.numero}`}
                        aria-current={idx === activeStep}
                        onClick={() => activarPaso(idx)}
                        className="flex items-center justify-center py-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <span
                          className={`w-3 h-3 rounded-full ring-4 ring-slate-950 transition-colors duration-500 motion-reduce:transition-none ${
                            idx === activeStep ? paso.accent : 'bg-white/25'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cards: fila única en escritorio, scroll-snap en móvil */}
                <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0">
                  {pasosMetodologia.map((paso, idx) => (
                    <div key={idx} className="snap-start flex-shrink-0 w-[72%] sm:w-[45%] md:w-full">
                      <PasoCardInteractiva
                        paso={paso}
                        idx={idx}
                        isActive={idx === activeStep}
                        onActivate={activarPaso}
                        cardRef={(el) => (pasoCardRefs.current[idx] = el)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Rutas Formativas */}
          <section id="rutas-formativas" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              {/* Banner con la info general */}
              <div className="bg-violet-950 rounded-3xl p-8 md:p-12 mb-12">
                <div className="inline-block mb-4 px-4 py-1.5 bg-teal-800 text-teal-100 rounded-full text-xs font-bold tracking-wide">
                  ITINERARIOS DE ESPECIALIZACIÓN
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifícate en la Ruta EMI</h2>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
                  Tres itinerarios especializados con cursos, casos clínicos y recursos aplicados. Elegí el que
                  mejor responda a tu momento formativo y avanzá a tu ritmo.
                </p>
                <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-white">3</div>
                    <p className="text-sm text-white/60">Rutas disponibles</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">29</div>
                    <p className="text-sm text-white/60">Cursos en total</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">12–20</div>
                    <p className="text-sm text-white/60">Semanas por ruta</p>
                  </div>
                </div>
              </div>

              {/* 4 tarjetas iguales: las 3 rutas son solo vista previa (imagen + ficha editorial), "Explorar todas las rutas" es la única clicable */}
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
                {modulos.map((modulo) => {
                  const isCatalogo = !!modulo.esCatalogo;
                  const isFarmacologia = modulo.id === 'farmacologia';
                  const isMedicinaInterna = modulo.id === 'medicina-interna';
                  const isUrgencias = modulo.id === 'urgencias';

                  if (isCatalogo) {
                    return (
                      <button
                        key={modulo.id}
                        onClick={irATodasLasRutas}
                        aria-label="Explorar todas las rutas"
                        className="ruta-preview-card relative text-left flex flex-col justify-between overflow-hidden rounded-2xl p-6 h-[360px] cursor-pointer bg-[#2BBCEA] flex-shrink-0 w-[78%] sm:w-auto snap-start"
                      >
                        <div className="relative flex items-start justify-end">
                          <span className="ruta-preview-arrow w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center bg-white">
                            <ChevronRight size={18} className="text-[#0D2967]" />
                          </span>
                        </div>
                        <div className="ruta-preview-content relative">
                          <h3 className="font-bold mb-2 leading-snug text-xl text-white">{modulo.titulo}</h3>
                          <p className="text-sm leading-relaxed line-clamp-3 text-white/80">{modulo.descripcion}</p>
                        </div>
                      </button>
                    );
                  }

                  const imagenSrc = isUrgencias ? soporteVitalImg : isMedicinaInterna ? valoracionClinicaImg : casoImg13;
                  const imagenAlt = isUrgencias
                    ? 'Soporte vital avanzado'
                    : isMedicinaInterna
                    ? 'Valoración clínica'
                    : 'Farmacoterapia y prescripción segura';

                  const fillClase = isFarmacologia ? 'bg-violet-800' : isMedicinaInterna ? 'bg-blue-100' : 'bg-teal-600';
                  const categoriaClase = isFarmacologia
                    ? 'text-violet-700'
                    : isMedicinaInterna
                    ? 'text-blue-600'
                    : 'text-teal-600';
                  const categoriaHoverClase = isMedicinaInterna ? '' : 'group-hover:text-white';
                  const tituloHoverClase = isMedicinaInterna ? '' : 'group-hover:text-white';
                  const descHoverClase = isMedicinaInterna ? 'group-hover:text-slate-700' : 'group-hover:text-white/85';

                  return (
                    <div
                      key={modulo.id}
                      className="ruta-card group flex flex-col overflow-hidden rounded-2xl h-[360px] cursor-default flex-shrink-0 w-[78%] sm:w-auto snap-start"
                    >
                      <div className="relative h-[48%] overflow-hidden rounded-t-2xl">
                        <img src={imagenSrc} alt={imagenAlt} className="ruta-card-img absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div className="relative h-[52%] overflow-hidden rounded-b-2xl bg-white">
                        <div className={`ruta-card-fill absolute inset-0 ${fillClase}`} />
                        <div className="relative h-full flex flex-col justify-center px-6 py-5">
                          <span
                            className={`text-xs font-bold uppercase tracking-wide mb-2 transition-colors duration-[450ms] ${categoriaClase} ${categoriaHoverClase}`}
                          >
                            {modulo.badge}
                          </span>
                          <h3
                            className={`text-lg font-bold leading-snug mb-1.5 text-[#0D2967] transition-colors duration-[450ms] ${tituloHoverClase}`}
                          >
                            {modulo.titulo}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed line-clamp-3 text-slate-500 transition-colors duration-[450ms] ${descHoverClase}`}
                          >
                            {modulo.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Casos Clínicos */}
          <section id="casos" className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Casos clínicos</h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    Aprende a decidir en escenarios reales. Casos clínicos interactivos inspirados en la práctica
                    clínica de la Sociedad Colombiana de Pediatría (SCP) y urgencias hospitalarias.
                  </p>
                </div>
                <button
                  onClick={irATodosLosCasos}
                  className="btn-primary flex-shrink-0 px-6 py-3.5 bg-slate-950 text-white rounded-full font-semibold flex items-center gap-3 hover:shadow-xl"
                >
                  Ver todos los casos clínicos
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <ChevronRight size={16} />
                  </span>
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {casos.map((caso, idx) => {
                  const scheme = esquemaCaso[idx % esquemaCaso.length];

                  return (
                    <button
                      key={caso.id}
                      onClick={() => setModalCaso(caso)}
                      className="card-hover text-left group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={caso.imagen}
                          alt={caso.titulo}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${scheme.overlay} opacity-40`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-slate-950/60 text-white">
                          {caso.paciente}
                        </span>
                      </div>

                      <div className="p-5">
                        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                          {caso.titulo}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2">
                          {caso.motivoConsulta}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold ${scheme.accentText}`}>Analizar caso</span>
                          <span className={`w-8 h-8 flex-shrink-0 rounded-full ${scheme.accent} flex items-center justify-center`}>
                            <ChevronRight size={14} className="text-white" />
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-400">
                Casos clínicos publicados por la{' '}
                <a
                  href="https://scp.com.co/casos-clinicos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-600"
                >
                  Sociedad Colombiana de Pediatría (SCP)
                </a>
                .
              </p>
            </div>
          </section>

          {/* Overlay de caso clínico */}
          {modalCaso && (
            <div
              className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setModalCaso(null)}
            >
              <div
                className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={modalCaso.imagen}
                    alt={modalCaso.titulo}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
                  <button
                    onClick={() => setModalCaso(null)}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wide bg-white/15 text-white">
                        {modalCaso.especialidad}
                      </span>
                      <span className="text-xs text-white/60">{modalCaso.paciente}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{modalCaso.titulo}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Motivo de consulta</p>
                  <p className="text-slate-700 leading-relaxed mb-6">{modalCaso.motivoConsulta}</p>

                  <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                    Antecedentes y presentación
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-8">{modalCaso.antecedentes}</p>

                  <a
                    href={modalCaso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Ver caso completo en scp.com.co
                    <ChevronRight size={16} />
                  </a>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    Contenido clínico original de la Sociedad Colombiana de Pediatría.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Recursos */}
          <section id="recursos" className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Recursos Educativos</h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    Herramientas complementarias para profundizar y consolidar tu aprendizaje.
                  </p>
                </div>
                <div className="hidden sm:flex gap-3 flex-shrink-0">
                  <button
                    onClick={() => desplazarRecursos('izquierda')}
                    aria-label="Ver recursos anteriores"
                    className="w-11 h-11 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition flex items-center justify-center"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => desplazarRecursos('derecha')}
                    aria-label="Ver más recursos"
                    className="w-11 h-11 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div
                ref={recursosScrollRef}
                className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-4 pb-8 -mx-6 px-6 -mt-4"
              >
                {recursos.map((recurso, idx) => {
                  const scheme = [
                    'bg-gradient-to-br from-emerald-600 to-emerald-700',
                    'bg-gradient-to-br from-teal-600 to-teal-700',
                    'bg-gradient-to-br from-violet-700 to-violet-800',
                  ][idx % 3];

                  const Icono =
                    recurso.icono === 'doc'
                      ? BookOpen
                      : recurso.icono === 'chart'
                      ? BarChart3
                      : recurso.icono === 'link'
                      ? Link2
                      : recurso.icono === 'video'
                      ? Video
                      : recurso.icono === 'calculator'
                      ? Calculator
                      : ClipboardCheck;

                  return (
                    <div
                      key={recurso.tipo}
                      className={`card-hover snap-start flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl p-8 text-white ${scheme}`}
                    >
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 mb-4">
                          <Icono className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{recurso.tipo}</h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6">{recurso.descripcion}</p>
                      <button className="text-white font-semibold text-sm hover:text-white/80 flex items-center gap-1">
                        Consultar <ChevronRight size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </>
      )}

      {vistaActual === 'casos' && (
        <section className="py-16 md:py-24 px-6 min-h-screen bg-white">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={volverAlInicio}
              className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              <ChevronRight size={16} className="rotate-180" />
              Volver al inicio
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Todos los casos clínicos</h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-2">
              Biblioteca completa de casos clínicos interactivos publicados por la{' '}
              <a
                href="https://scp.com.co/casos-clinicos/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-slate-900"
              >
                Sociedad Colombiana de Pediatría (SCP)
              </a>
              .
            </p>
            <p className="text-sm text-slate-400 mb-12">
              Los casos marcados con vista rápida se pueden analizar dentro de Ruta EMI; el resto abre el caso
              original en scp.com.co.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {todosLosCasosSCP.map((item, idx) => {
                const scheme = esquemaCaso[idx % esquemaCaso.length];
                const casoDetalle = item.casoRef ? casos.find((c) => c.id === item.casoRef) ?? null : null;

                const contenido = (
                  <>
                    <div className="relative h-32 overflow-hidden">
                      {casoDetalle ? (
                        <>
                          <img
                            src={casoDetalle.imagen}
                            alt={item.titulo}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${scheme.overlay} opacity-40`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br ${scheme.overlay}`} />
                          <div className="absolute inset-0 opacity-20" style={patronDiagonal} />
                        </>
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/90 text-slate-900">
                        Caso #{item.numero}
                      </span>
                      {casoDetalle && (
                        <span
                          className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${scheme.badge}`}
                        >
                          Vista rápida
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">{item.titulo}</h3>
                      <p className="text-slate-500 text-xs font-medium mb-5">{item.paciente}</p>

                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${scheme.accentText}`}>
                          {casoDetalle ? 'Analizar caso' : 'Ver en scp.com.co'}
                        </span>
                        <span className={`w-8 h-8 flex-shrink-0 rounded-full ${scheme.accent} flex items-center justify-center`}>
                          <ChevronRight size={14} className="text-white" />
                        </span>
                      </div>
                    </div>
                  </>
                );

                const cardClass =
                  'card-hover text-left group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300';

                return casoDetalle ? (
                  <button key={item.numero} onClick={() => setModalCaso(casoDetalle)} className={cardClass}>
                    {contenido}
                  </button>
                ) : (
                  <a key={item.numero} href={item.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                    {contenido}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {vistaActual === 'rutas' && (
        <section className="py-16 md:py-24 px-6 min-h-screen bg-white">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={volverAlInicio}
              className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
            >
              <ChevronRight size={16} className="rotate-180" />
              Volver al inicio
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Catálogo completo de rutas</h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-12">
              Todos los itinerarios formativos disponibles en Ruta EMI, con su duración, cantidad de cursos y temas
              cubiertos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {rutasFormativas.map((modulo) => {
                const scheme = modulo.colorScheme ?? esquemaAzulClaro;

                return (
                  <button
                    key={modulo.id}
                    onClick={(e) => {
                      modalTriggerRef.current = e.currentTarget;
                      setModalModulo(modulo);
                    }}
                    className={`card-hover h-full flex flex-col text-left rounded-2xl p-8 ${scheme.bg}`}
                  >
                    <span className={`inline-block self-start px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 ${scheme.badge}`}>
                      {modulo.badge}
                    </span>
                    <h3 className={`text-2xl font-bold mb-3 leading-snug ${scheme.text}`}>{modulo.titulo}</h3>
                    <p className={`text-sm leading-relaxed mb-6 ${scheme.textMuted}`}>{modulo.descripcion}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {modulo.temas.map((tema, i) => (
                        <span key={i} className={`px-3 py-1.5 text-xs rounded-lg font-medium ${scheme.tag}`}>
                          {tema}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center gap-6 text-sm font-medium mt-auto ${scheme.textMuted}`}>
                      <span>{modulo.cursos} cursos</span>
                      <span>{modulo.duracion}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Overlay de módulo: solo se abre desde la página interna de todas las rutas */}
      {modalModulo && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={cerrarModalModulo}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-8 relative ${modalScheme.bg}`}>
              <button
                onClick={cerrarModalModulo}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
              >
                <X size={18} className={modalScheme.text === 'text-white' ? 'text-white' : 'text-slate-900'} />
              </button>
              <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 ${modalScheme.badge}`}>
                {modalModulo.badge}
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold leading-snug ${modalScheme.text}`}>{modalModulo.titulo}</h3>
            </div>

            <div className="p-8">
              <p className="text-slate-600 leading-relaxed mb-6">{modalModulo.descripcion}</p>

              {!modalModulo.esCatalogo && (
                <>
                  <div className="flex gap-8 py-6 border-t border-slate-200 mb-6">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Cursos</p>
                      <p className="text-2xl font-bold text-slate-900">{modalModulo.cursos}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Duración</p>
                      <p className="text-2xl font-bold text-slate-900">{modalModulo.duracion}</p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">Temas</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {modalModulo.temas.map((tema, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">
                        {tema}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3.5 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-lg font-semibold">
                    Consultar ruta completa
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <img
                src={logoRutaEmiMark}
                alt="Ruta EMI"
                className="h-12 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-sm text-slate-400 leading-relaxed">
                Micrositio de apoyo para conocer, consultar y aplicar la Ruta EMI.
              </p>
            </div>

            {/* Textos */}
            <div className="flex flex-wrap gap-x-16 gap-y-10">
              {/* Navigation */}
              <div>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Navegación</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('inicio')} className="text-slate-400 hover:text-white transition">
                      Inicio
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('ruta')} className="text-slate-400 hover:text-white transition">
                      La Ruta
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('rutas-formativas')}
                      className="text-slate-400 hover:text-white transition"
                    >
                      Cursos
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contenido */}
              <div>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contenido</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => scrollToSection('casos')} className="text-slate-400 hover:text-white transition">
                      Casos Clínicos
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('recursos')} className="text-slate-400 hover:text-white transition">
                      Recursos
                    </button>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white transition">
                      Términos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-400 hover:text-white transition">
                      Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>© 2024 Ruta EMI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
