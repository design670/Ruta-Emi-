import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, BookOpen } from 'lucide-react';
import heroPhoto from '../assets/hero-photo-2.avif';
import logoRutaEmi from '../assets/logo-ruta-emi.svg';
import casoImg1 from '../assets/casos-clinicos/caso-1.avif';
import casoImg9 from '../assets/casos-clinicos/caso-9.avif';
import casoImg13 from '../assets/casos-clinicos/caso-13.avif';
import casoImg4 from '../assets/casos-clinicos/caso-4.avif';
import soporteVitalImg from '../assets/soporte-vital.jpg';
import type { Modulo, ModuloRuta, CasoClinico, CasoListado, Recurso, PasoMetodologia, Vista } from '../types';

const modulos: Modulo[] = [
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
  },
  {
    id: 'catalogo',
    esCatalogo: true,
    badge: 'CATÁLOGO COMPLETO',
    titulo: 'Explorar todas las rutas',
    descripcion: 'Conoce todos los itinerarios disponibles.',
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
];

const pasosMetodologia: PasoMetodologia[] = [
  {
    numero: '01',
    titulo: 'Elige tu ruta',
    descripcion: 'Selecciona el itinerario que mejor responda a tu momento formativo y tus objetivos clínicos.',
    cita: 'Empieza desde tu nivel actual y avanza con una dirección definida.',
  },
  {
    numero: '02',
    titulo: 'Avanza por módulos',
    descripcion: 'Recorre lecciones concisas diseñadas para asimilar conceptos clave sin saturación teórica.',
    cita: 'Cada módulo conecta nuevos conocimientos con lo aprendido anteriormente.',
  },
  {
    numero: '03',
    titulo: 'Aplica lo aprendido',
    descripcion: 'Resuelve casos clínicos interactivos y utiliza herramientas de apoyo en tus decisiones reales.',
    cita: 'Fortalece tu criterio antes de enfrentarte a situaciones clínicas reales.',
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

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [modalModulo, setModalModulo] = useState<Modulo | null>(null);
  const [modalCaso, setModalCaso] = useState<CasoClinico | null>(null);
  const [vistaActual, setVistaActual] = useState<Vista>('landing');

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

  const destacado = modulos[0] as ModuloRuta;
  const rutasFormativas = modulos.filter((m): m is ModuloRuta => !m.esCatalogo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');

        * {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
        }

        .text-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .route-line {
          position: relative;
          overflow: hidden;
        }

        .route-line::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #0f172a, #0d9488, transparent);
          animation: flowLine 3s ease-in-out infinite;
        }

        @keyframes flowLine {
          0%, 100% { transform: scaleX(0); transform-origin: left; opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleX(1); transform-origin: left; }
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
        }

        .btn-primary {
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(43, 188, 234, 0.35);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #2BBCEA;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-item:nth-child(1) { animation-delay: 0.1s; }
        .stagger-item:nth-child(2) { animation-delay: 0.2s; }
        .stagger-item:nth-child(3) { animation-delay: 0.3s; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

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
              className="btn-primary px-6 py-2.5 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-lg font-medium text-sm"
            >
              Registrarme
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
                  className="block w-full py-2.5 text-center bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-lg font-medium text-sm"
                >
                  Registrarme
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {vistaActual === 'landing' && (
        <>
          {/* Hero Section */}
          <section id="inicio" className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={heroPhoto}
                alt="Profesional médico trabajando en laptop"
                className="w-full h-full object-cover scale-x-[-1]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-36 md:pb-32">
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
                    Aprender medicina también necesita una dirección clara
                  </h2>
                </div>
                <div className="space-y-6 md:pt-14">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Ruta EMI organiza el aprendizaje mediante recorridos progresivos, casos clínicos y recursos
                    aplicables para ayudarte a consolidar criterio médico y tomar decisiones con seguridad.
                  </p>
                  <button className="btn-primary px-6 py-3 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-semibold inline-flex items-center gap-2">
                    Conoce la metodología
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Tarjeta oscura de metodología */}
              <div className="bg-slate-950 rounded-3xl p-8 md:p-10">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div className="inline-block px-4 py-1.5 bg-violet-800 text-violet-100 rounded-full text-xs font-bold tracking-wide">
                    METODOLOGÍA EN 3 PASOS
                  </div>
                  <p className="text-sm text-white/50">De la teoría a la práctica clínica</p>
                </div>

                {/* Indicador de progreso */}
                <div className="flex items-center mb-8 px-1">
                  {[0, 1, 2].map((i) => (
                    <React.Fragment key={i}>
                      <div
                        className={`w-3 h-3 rounded-full flex-shrink-0 transition-colors ${
                          i === activeStep ? 'bg-teal-400' : 'bg-white/20'
                        }`}
                      />
                      {i < 2 && <div className="flex-1 h-px bg-white/15 mx-2" />}
                    </React.Fragment>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {pasosMetodologia.map((paso, idx) => {
                    const isActive = idx === activeStep;
                    const activeColor = ['bg-teal-600', 'bg-violet-800', 'bg-orange-500'][idx % 3];

                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`text-left rounded-2xl p-6 transition-all border ${
                          isActive
                            ? `${activeColor} border-transparent shadow-xl`
                            : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className={`text-3xl font-bold ${isActive ? 'text-white' : 'text-slate-600'}`}>
                            {paso.numero}
                          </span>
                          {isActive && (
                            <span className="px-3 py-1 bg-white text-slate-900 rounded-full text-[10px] font-bold uppercase tracking-wide">
                              Paso activo
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{paso.titulo}</h3>
                        <p className={`text-sm leading-relaxed mb-4 ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                          {paso.descripcion}
                        </p>

                        {isActive ? (
                          <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/20">
                            <p className="text-xs italic text-white/80">&quot;{paso.cita}&quot;</p>
                            <span className="w-9 h-9 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                              <ChevronRight size={16} className="text-white" />
                            </span>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500">Haz clic para ver</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Rutas Formativas */}
          <section id="rutas-formativas" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Rutas formativas</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:items-stretch">
                {/* Módulo destacado */}
                <button
                  onClick={() => setModalModulo(destacado)}
                  className="card-hover text-left flex flex-col rounded-2xl overflow-hidden bg-teal-600 min-h-[520px] md:min-h-0"
                >
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold tracking-wide">
                        {destacado.badge}
                      </span>
                      <span className="w-9 h-9 flex-shrink-0 rounded-full bg-white flex items-center justify-center">
                        <ChevronRight size={18} className="text-slate-900" />
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">{destacado.titulo}</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{destacado.descripcion}</p>
                  </div>
                  <div className="relative flex-1 min-h-[220px] bg-teal-800 overflow-hidden">
                    <img
                      src={soporteVitalImg}
                      alt="Soporte vital avanzado"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-800/30" />
                  </div>
                </button>

                {/* Columna derecha: 3 módulos */}
                <div className="flex flex-col gap-6">
                  {modulos.slice(1).map((modulo) => {
                    const isCatalogo = !!modulo.esCatalogo;
                    const isFarmacologia = modulo.id === 'farmacologia';

                    return (
                      <button
                        key={modulo.id}
                        onClick={() => (isCatalogo ? irATodasLasRutas() : setModalModulo(modulo))}
                        className={`card-hover text-left flex-1 rounded-2xl p-6 flex items-start justify-between gap-4 ${
                          isCatalogo ? 'bg-[#2BBCEA]' : isFarmacologia ? 'bg-violet-800' : 'bg-blue-100'
                        }`}
                      >
                        <div className="flex-1">
                          <span
                            className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-3 ${
                              isCatalogo
                                ? 'bg-white text-[#0D2967]'
                                : isFarmacologia
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-white text-blue-800'
                            }`}
                          >
                            {modulo.badge}
                          </span>
                          <h3
                            className={`font-bold mb-1.5 leading-snug ${
                              isCatalogo || isFarmacologia ? 'text-white text-xl' : 'text-slate-900 text-lg'
                            }`}
                          >
                            {modulo.titulo}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed line-clamp-2 ${
                              isCatalogo || isFarmacologia ? 'text-white/80' : 'text-slate-600'
                            }`}
                          >
                            {modulo.descripcion}
                          </p>
                        </div>
                        <span
                          className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center ${
                            isCatalogo || isFarmacologia ? 'bg-white' : 'bg-slate-900'
                          }`}
                        >
                          <ChevronRight
                            size={18}
                            className={isCatalogo ? 'text-[#0D2967]' : isFarmacologia ? 'text-violet-800' : 'text-white'}
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Overlay de módulo */}
          {modalModulo && (
            <div
              className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setModalModulo(null)}
            >
              <div
                className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`p-8 relative ${
                    modalModulo.id === 'farmacologia'
                      ? 'bg-violet-800'
                      : modalModulo.id === 'urgencias'
                      ? 'bg-teal-600'
                      : 'bg-blue-100'
                  }`}
                >
                  <button
                    onClick={() => setModalModulo(null)}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                  >
                    <X size={18} className={modalModulo.id === 'medicina-interna' ? 'text-slate-900' : 'text-white'} />
                  </button>
                  <span
                    className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 ${
                      modalModulo.id === 'medicina-interna' ? 'bg-white text-blue-800' : 'bg-white/20 text-white'
                    }`}
                  >
                    {modalModulo.badge}
                  </span>
                  <h3
                    className={`text-2xl md:text-3xl font-bold leading-snug ${
                      modalModulo.id === 'medicina-interna' ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {modalModulo.titulo}
                  </h3>
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

          {/* Casos Clínicos */}
          <section id="casos" className="py-24 md:py-32 px-6 bg-white">
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
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${scheme.badge}`}
                        >
                          {caso.especialidad}
                        </span>
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
          <section id="recursos" className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Recursos Educativos</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Herramientas complementarias para profundizar y consolidar tu aprendizaje.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {recursos.map((recurso, idx) => {
                  const scheme = [
                    'bg-gradient-to-br from-emerald-600 to-emerald-700',
                    'bg-gradient-to-br from-teal-600 to-teal-700',
                    'bg-gradient-to-br from-violet-700 to-violet-800',
                  ][idx % 3];

                  return (
                    <div key={recurso.tipo} className={`card-hover rounded-2xl p-8 text-white ${scheme}`}>
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 mb-4">
                          {recurso.icono === 'doc' ? (
                            <BookOpen className="text-white" size={32} />
                          ) : recurso.icono === 'chart' ? (
                            <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <polyline points="19 12 12 19 5 12" />
                            </svg>
                          ) : (
                            <svg className="text-white" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 16v-4m0-4h.01" />
                            </svg>
                          )}
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

          {/* CTA Final */}
          <section className="py-24 md:py-32 px-6 bg-gradient-to-r from-sky-100 via-cyan-50 to-sky-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Comienza a construir tu
                <span className="text-gradient"> ruta de aprendizaje</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Crea tu cuenta para acceder a cursos, casos clínicos y recursos especializados. Guarda tu progreso y
                avanza a tu ritmo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/registro"
                  className="btn-primary px-8 py-4 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-lg font-semibold text-lg text-center"
                >
                  Crear mi cuenta
                </Link>
                <Link
                  to="/iniciar-sesion"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition text-lg text-center"
                >
                  Ya tengo una cuenta
                </Link>
              </div>

              <p className="text-sm text-slate-500 mt-8">
                Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
              </p>
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

            <div className="grid sm:grid-cols-2 gap-6">
              {rutasFormativas.map((modulo) => {
                const scheme =
                  modulo.id === 'urgencias'
                    ? {
                        bg: 'bg-teal-600',
                        badge: 'bg-teal-800 text-teal-100',
                        tag: 'bg-teal-800 text-teal-100',
                        text: 'text-white',
                        textMuted: 'text-white/80',
                      }
                    : modulo.id === 'farmacologia'
                    ? {
                        bg: 'bg-violet-800',
                        badge: 'bg-violet-900 text-violet-100',
                        tag: 'bg-violet-900 text-violet-100',
                        text: 'text-white',
                        textMuted: 'text-white/80',
                      }
                    : {
                        bg: 'bg-blue-50 border border-blue-100',
                        badge: 'bg-blue-200 text-blue-800',
                        tag: 'bg-blue-200 text-blue-800',
                        text: 'text-slate-900',
                        textMuted: 'text-slate-600',
                      };

                return (
                  <button
                    key={modulo.id}
                    onClick={() => setModalModulo(modulo)}
                    className={`card-hover text-left rounded-2xl p-8 ${scheme.bg}`}
                  >
                    <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 ${scheme.badge}`}>
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
                    <div className={`flex items-center gap-6 text-sm font-medium ${scheme.textMuted}`}>
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

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src={logoRutaEmi}
                alt="Ruta EMI - Academia Médica"
                className="h-9 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-sm text-slate-400 leading-relaxed">
                Formación médica basada en rutas de aprendizaje progresivo.
              </p>
            </div>

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

            {/* Social */}
            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Conectar</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#2BBCEA] text-slate-300 hover:text-white transition flex items-center justify-center text-sm font-bold">
                  𝕏
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#2BBCEA] text-slate-300 hover:text-white transition flex items-center justify-center">
                  f
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#2BBCEA] text-slate-300 hover:text-white transition flex items-center justify-center text-sm font-bold">
                  in
                </button>
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
