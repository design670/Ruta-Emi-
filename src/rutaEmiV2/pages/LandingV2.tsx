import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, BarChart3, Link2, Video } from 'lucide-react';
import LayoutV2 from '../components/LayoutV2';
import valoracionClinicaImg from '../../assets/valoracion-clinica.jpg';
import { RUTA_EMI_EXTERNAL_URL, modulosCurso, casosClinicosV2, recursosCategorias } from '../data';

const iconoPorTipo = { doc: BookOpen, chart: BarChart3, link: Link2, video: Video } as const;

export default function LandingV2() {
  const irAAccesoRuta = () => {
    document.getElementById('acceso-ruta-emi')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <LayoutV2>
      {/* SECCIÓN 1 — HERO PRINCIPAL */}
      <section id="inicio" className="px-6 pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img
                src={valoracionClinicaImg}
                alt="Profesional de la salud realizando la valoración clínica de un paciente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
            </div>

            <div className="relative px-8 py-14 md:px-14 md:py-20 lg:py-24">
              <div className="fade-in-v2 max-w-2xl space-y-7">
                <div>
                  <div className="inline-block mb-4 px-4 py-2 bg-slate-950/70 border border-white/10 text-white rounded-full text-xs font-semibold tracking-wide">
                    RUTA EMI
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                    Guía para reconocer, actuar y consultar ante la Enfermedad Meningocócica Invasiva.
                  </h1>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                    Un micrositio para conocer la ruta, reforzar decisiones clínicas, revisar casos aplicados y
                    acceder a recursos recomendados sobre EMI.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={RUTA_EMI_EXTERNAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-v2 pl-8 pr-2 py-2 bg-white text-slate-900 rounded-full font-semibold flex items-center gap-4 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white"
                  >
                    Consultar la Ruta EMI
                    <span className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center">
                      <ChevronRight size={18} />
                    </span>
                  </a>
                  <Link
                    to="/ruta-emi-v2/curso"
                    className="btn-primary-v2 px-6 py-2.5 border border-white/40 text-white rounded-full font-semibold inline-flex items-center gap-2 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white"
                  >
                    Certificarme en Ruta EMI
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — ¿QUÉ ES LA RUTA EMI? */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[#C2F2FF] text-[#0D2967] rounded-full text-xs font-bold tracking-wide">
              SOBRE RUTA EMI
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              ¿Qué es la Ruta EMI?
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              La Ruta EMI es una herramienta de orientación para el abordaje de la Enfermedad Meningocócica Invasiva.
              Reúne pasos clave para apoyar la sospecha clínica, la toma de decisiones iniciales, la atención
              oportuna, la articulación con el sistema de salud y la consulta de recursos relacionados.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Pensada para facilitar la consulta rápida y la aplicación práctica en escenarios de atención.
            </p>
            <button
              onClick={irAAccesoRuta}
              className="btn-primary-v2 px-6 py-3 bg-[#0D2967] text-white rounded-full font-semibold inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
            >
              Conozca cómo aplicar la ruta
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — ACCESO A LA RUTA EMI INTERACTIVA */}
      <section id="acceso-ruta-emi" className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#0D2967] to-[#0a2470] scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Consulte la Ruta EMI interactiva
          </h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Acceda a la ruta completa para revisar el flujo de actuación, decisiones y recomendaciones asociadas al
            abordaje de la Enfermedad Meningocócica Invasiva.
          </p>
          <a
            href={RUTA_EMI_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-v2 pl-8 pr-2 py-2 bg-[#2BBCEA] text-[#0D2967] rounded-full font-bold text-lg inline-flex items-center gap-4 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D2967] focus-visible:ring-white"
          >
            Ver Ruta EMI
            <span className="w-11 h-11 rounded-full bg-[#0D2967] text-white flex items-center justify-center">
              <ChevronRight size={20} />
            </span>
          </a>
        </div>
      </section>

      {/* SECCIÓN 4 — CURSO DE CERTIFICACIÓN */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-[#C2F2FF] text-[#0D2967] rounded-full text-xs font-bold tracking-wide">
                CURSO DE CERTIFICACIÓN
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Certifíquese en Ruta EMI
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Realice un curso breve de 4 módulos diseñado para reforzar el uso de la Ruta EMI en la práctica
                clínica. Al finalizar, podrá validar los aprendizajes y obtener su certificación.
              </p>
            </div>
            <Link
              to="/ruta-emi-v2/curso"
              className="btn-primary-v2 flex-shrink-0 px-6 py-3.5 bg-[#0D2967] text-white rounded-full font-semibold flex items-center gap-3 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
            >
              Ver curso y módulos
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {modulosCurso.map((modulo) => (
              <div
                key={modulo.slug}
                className="card-hover-v2 relative overflow-hidden rounded-2xl bg-slate-950 p-6 h-[220px] flex flex-col"
              >
                <span className="text-lg font-bold text-[#2BBCEA]">{modulo.numero}</span>
                <div className="mt-auto">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{modulo.titulo}</h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{modulo.resumen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — CASOS CLÍNICOS */}
      <section className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Casos clínicos para aplicar la Ruta EMI
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Revise escenarios clínicos breves que permiten poner en práctica la ruta, reconocer puntos de
                decisión y reforzar el abordaje oportuno ante sospecha de EMI.
              </p>
            </div>
            <Link
              to="/ruta-emi-v2/casos-clinicos"
              className="btn-primary-v2 flex-shrink-0 px-6 py-3.5 bg-[#0D2967] text-white rounded-full font-semibold flex items-center gap-3 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
            >
              Explorar casos clínicos
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosClinicosV2.map((caso) => (
              <Link
                key={caso.slug}
                to={`/ruta-emi-v2/casos-clinicos/${caso.slug}`}
                className="card-hover-v2 text-left group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 flex flex-col h-full"
              >
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img src={caso.imagen} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/90 text-[#0D2967]">
                    {caso.numero}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-2">{caso.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2 flex-1">{caso.resumen}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-[#0D2967]">{caso.ctaLabel}</span>
                    <span className="w-8 h-8 flex-shrink-0 rounded-full bg-[#2BBCEA] flex items-center justify-center">
                      <ChevronRight size={14} className="text-[#0D2967]" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — RECURSOS RECOMENDADOS */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Recursos recomendados sobre Ruta EMI
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Consulte materiales de apoyo para ampliar información, revisar lineamientos, reforzar la toma de
                decisiones y compartir recursos útiles con equipos de salud.
              </p>
            </div>
            <Link
              to="/ruta-emi-v2/recursos"
              className="btn-primary-v2 flex-shrink-0 px-6 py-3.5 bg-[#0D2967] text-white rounded-full font-semibold flex items-center gap-3 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
            >
              Ver recursos recomendados
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>

          <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar-v2 -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
            {recursosCategorias.map((recurso) => {
              const Icono = iconoPorTipo[recurso.icono];
              return (
                <div
                  key={recurso.categoria}
                  className="card-hover-v2 snap-start flex-shrink-0 w-[240px] sm:w-auto rounded-2xl p-7 bg-[#0D2967] text-white"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 border-2 border-white/20 mb-5">
                    <Icono className="text-white" size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{recurso.categoria}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{recurso.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayoutV2>
  );
}
