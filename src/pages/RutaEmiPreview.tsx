import { useState } from 'react';
import { Menu, X, ChevronRight, GraduationCap, ClipboardList, BookOpen, BarChart3, Link2, Video, ExternalLink } from 'lucide-react';
import heroPhoto from '../assets/hero-photo-2.avif';
import logoMark from '../assets/logo-ruta-emi-mark.svg';
import valoracionClinicaImg from '../assets/valoracion-clinica.jpg';
import soporteVitalImg from '../assets/soporte-vital.jpg';
import casoImg9 from '../assets/casos-clinicos/caso-9.avif';

const RUTA_EMI_URL = 'https://ruta-emi.igloosuite.com/';

interface PanelAcceso {
  id: string;
  titulo: string;
  descripcion: string;
  indicador?: string;
  cta: string;
  href: string;
  bg: string;
  Icono: typeof GraduationCap;
}

const paneles: PanelAcceso[] = [
  {
    id: 'certificacion',
    titulo: 'Certifíquese en Ruta EMI',
    descripcion: 'Curso de certificación organizado en cuatro módulos.',
    indicador: '4 módulos',
    cta: 'Ver curso',
    href: '#curso',
    bg: 'bg-violet-800',
    Icono: GraduationCap,
  },
  {
    id: 'casos',
    titulo: 'Casos clínicos',
    descripcion: 'Escenarios para aplicar la ruta y reforzar decisiones.',
    indicador: '3 casos',
    cta: 'Explorar casos',
    href: '#casos',
    bg: 'bg-teal-600',
    Icono: ClipboardList,
  },
  {
    id: 'recursos',
    titulo: 'Recursos',
    descripcion: 'Documentos, enlaces y materiales recomendados.',
    cta: 'Ver recursos',
    href: '#recursos',
    bg: 'bg-orange-500',
    Icono: BookOpen,
  },
];

const modulosCurso = [
  { numero: '01', titulo: 'La verdadera cara de la EMI' },
  { numero: '02', titulo: 'Código EMI' },
  { numero: '03', titulo: 'Manejo inicial, diagnóstico y notificación' },
  { numero: '04', titulo: 'Estrategias de prevención' },
];

const casosClinicos = [
  { titulo: 'Lactante con fiebre y signos inespecíficos', imagen: valoracionClinicaImg },
  { titulo: 'Escolar con petequias y deterioro clínico', imagen: casoImg9 },
  { titulo: 'Adolescente con sospecha de meningitis', imagen: soporteVitalImg },
];

const recursos = [
  { tipo: 'PDF y Guías', descripcion: 'Protocolos, guías de manejo y resúmenes clínicos descargables.', Icono: BookOpen },
  { tipo: 'Infografías', descripcion: 'Conceptos complejos sintetizados en formato visual y memorable.', Icono: BarChart3 },
  { tipo: 'Enlaces', descripcion: 'Recursos complementarios, artículos y referencias actualizadas.', Icono: Link2 },
  { tipo: 'Videos formativos', descripcion: 'Procedimientos y razonamiento clínico explicados paso a paso.', Icono: Video },
];

function PanelAccesoCard({ panel, activo, onActivar, onDesactivar }: {
  panel: PanelAcceso;
  activo: boolean;
  onActivar: () => void;
  onDesactivar: () => void;
}) {
  const { Icono } = panel;

  const manejarClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!activo) {
      e.preventDefault();
      onActivar();
    }
  };

  return (
    <div
      className={`emi-panel relative overflow-hidden rounded-2xl ${panel.bg} ${activo ? 'is-active' : ''}`}
      onMouseEnter={onActivar}
      onMouseLeave={onDesactivar}
    >
      <a
        href={panel.href}
        onClick={manejarClick}
        onFocus={onActivar}
        onBlur={onDesactivar}
        aria-expanded={activo}
        className="block p-5 md:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-2xl"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-3 min-w-0">
            <span className="w-14 h-14 rounded-full flex-shrink-0 bg-white/15 flex items-center justify-center">
              <Icono size={26} className="text-white" />
            </span>
            <span className="font-bold text-white text-sm md:text-base leading-snug">{panel.titulo}</span>
          </span>
          <ChevronRight size={18} className="emi-panel-arrow text-white/70 flex-shrink-0" />
        </div>

        <div className="emi-panel-body">
          <p className="text-white/85 text-sm leading-relaxed mt-4 mb-4">{panel.descripcion}</p>
          <div className="flex items-center justify-between gap-3">
            {panel.indicador && (
              <span className="text-[11px] font-bold uppercase tracking-wide text-white/70">{panel.indicador}</span>
            )}
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              {panel.cta}
              <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function RutaEmiPreview() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [panelActivo, setPanelActivo] = useState<number | null>(null);

  const irASeccion = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuAbierto(false);
  };

  const navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Ruta EMI', id: 'que-es' },
    { label: 'Curso', id: 'curso' },
    { label: 'Casos clínicos', id: 'casos' },
    { label: 'Recursos', id: 'recursos' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-3">
          <button onClick={() => irASeccion('inicio')} className="flex items-center gap-2">
            <img src={logoMark} alt="Ruta EMI" className="h-8 w-auto" />
            <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-wide text-slate-400 border-l border-slate-200 pl-2">
              Micrositio de apoyo clínico
            </span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => irASeccion(item.id)}
                className="nav-link text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Abrir menú">
            {menuAbierto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuAbierto && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => irASeccion(item.id)}
                className="block w-full text-left text-slate-700 text-sm font-medium py-1.5"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Banner principal */}
        <section id="inicio" className="px-6 pt-6 md:pt-8 pb-16 md:pb-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl bg-[#0D2967]">
              {/* Izquierda: presentación */}
              <div className="relative md:w-[42%] bg-[#0D2967] text-white p-8 md:p-10 flex flex-col justify-center min-h-[420px] md:min-h-[520px] overflow-hidden">
                <img
                  src={heroPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2967] via-[#0D2967]/95 to-[#0D2967]/80" />

                <div className="relative">
                  <span className="inline-block mb-5 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[11px] font-bold uppercase tracking-wide">
                    Micrositio de apoyo clínico
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Ruta EMI</h1>
                  <p className="text-lg font-semibold text-[#7DD8F0] mb-4">
                    Reconocer. Decidir. Actuar. Consultar.
                  </p>
                  <p className="text-white/80 leading-relaxed mb-8 max-w-sm">
                    Guía para reconocer, actuar y consultar ante la Enfermedad Meningocócica Invasiva.
                  </p>
                  <a
                    href={RUTA_EMI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-bold text-base shadow-lg"
                  >
                    Consultar la Ruta EMI
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <ExternalLink size={15} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Derecha: accesos interactivos */}
              <div className="md:w-[58%] p-4 md:p-5 flex flex-col md:flex-row gap-3 md:gap-3">
                {paneles.map((panel, idx) => (
                  <PanelAccesoCard
                    key={panel.id}
                    panel={panel}
                    activo={panelActivo === idx}
                    onActivar={() => setPanelActivo(idx)}
                    onDesactivar={() => setPanelActivo((actual) => (actual === idx ? null : actual))}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es la Ruta EMI? */}
        <section id="que-es" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-50 text-[#0D2967] rounded-full text-xs font-bold tracking-wide">
                SOBRE RUTA EMI
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">¿Qué es la Ruta EMI?</h2>
            </div>
            <div className="space-y-5">
              <p className="text-lg text-slate-600 leading-relaxed">
                La Ruta EMI es una herramienta de orientación para el abordaje de la Enfermedad Meningocócica
                Invasiva. Reúne pasos clave para apoyar la sospecha clínica, la toma de decisiones iniciales, la
                atención oportuna, la articulación con el sistema de salud y la consulta de recursos relacionados.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Pensada para facilitar la consulta rápida y la aplicación práctica en escenarios de atención.
              </p>
              <button
                onClick={() => irASeccion('acceso-ruta')}
                className="btn-primary px-6 py-3 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-semibold inline-flex items-center gap-2"
              >
                Conozca cómo aplicar la ruta
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Acceso a la Ruta */}
        <section id="acceso-ruta" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-slate-950 rounded-3xl p-10 md:p-16 text-center md:text-left">
              <div className="md:flex items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="inline-block mb-4 px-4 py-1.5 bg-[#2BBCEA]/20 text-[#7DD8F0] rounded-full text-xs font-bold tracking-wide">
                    RUTA INTERACTIVA
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Consulte la Ruta EMI interactiva
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Acceda a la ruta completa para revisar el flujo de actuación, decisiones y recomendaciones
                    asociadas al abordaje de la Enfermedad Meningocócica Invasiva.
                  </p>
                </div>
                <a
                  href={RUTA_EMI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 md:mt-0 flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1CA7D0] to-[#2BBCEA] text-white rounded-full font-bold text-base"
                >
                  Ver Ruta EMI
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ExternalLink size={15} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Curso */}
        <section id="curso" className="py-20 md:py-28 px-6 bg-slate-50">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-xs font-bold tracking-wide">
                CERTIFICACIÓN
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifíquese en Ruta EMI</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Realice un curso breve de cuatro módulos diseñado para reforzar el uso de la Ruta EMI en la
                práctica clínica. Al finalizar, podrá validar los aprendizajes y obtener su certificación.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {modulosCurso.map((modulo) => (
                <div key={modulo.numero} className="card-hover bg-violet-800 rounded-2xl p-6 h-full flex flex-col">
                  <span className="text-2xl font-bold text-white/70 mb-4">{modulo.numero}</span>
                  <h3 className="text-white font-bold leading-snug mt-auto">{modulo.titulo}</h3>
                </div>
              ))}
            </div>

            <a
              href={RUTA_EMI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 bg-violet-800 text-white rounded-full font-semibold"
            >
              Ver curso y módulos
              <ChevronRight size={18} />
            </a>
          </div>
        </section>

        {/* Casos clínicos */}
        <section id="casos" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold tracking-wide">
                CASOS CLÍNICOS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Casos clínicos para aplicar la Ruta EMI</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {casosClinicos.map((caso) => (
                <div
                  key={caso.titulo}
                  className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-200 h-full flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={caso.imagen} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-700 mb-2">
                      Caso clínico
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{caso.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => irASeccion('casos')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-full font-semibold"
            >
              Explorar casos clínicos
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* Recursos */}
        <section id="recursos" className="py-20 md:py-28 px-6 bg-slate-50">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs font-bold tracking-wide">
                MATERIAL DE APOYO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Recursos recomendados sobre Ruta EMI</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {recursos.map((recurso, idx) => {
                const scheme = [
                  'bg-gradient-to-br from-emerald-600 to-emerald-700',
                  'bg-gradient-to-br from-teal-600 to-teal-700',
                  'bg-gradient-to-br from-violet-700 to-violet-800',
                ][idx % 3];

                return (
                  <div key={recurso.tipo} className={`card-hover rounded-2xl p-7 text-white h-full flex flex-col ${scheme}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 border-2 border-white/30 mb-5">
                      <recurso.Icono className="text-white" size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{recurso.tipo}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{recurso.descripcion}</p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => irASeccion('recursos')}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-full font-semibold"
            >
              Ver recursos recomendados
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-14 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xs">
            <img src={logoMark} alt="Ruta EMI" className="h-10 w-auto mb-3" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-sm text-slate-400 leading-relaxed">
              Micrositio de apoyo para conocer, consultar y aplicar la Ruta EMI.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => irASeccion(item.id)} className="text-slate-400 hover:text-white transition">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
