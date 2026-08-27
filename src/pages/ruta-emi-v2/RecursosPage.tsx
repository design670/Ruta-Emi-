import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, BarChart3, Link2, Video } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { recursos, RUTA_EMI_URL } from './content';
import heroRecursos from '../../assets/recursos/hero-recursos.jpg';

const iconos = [BookOpen, BarChart3, Link2, Video];
const esquemas = [
  'bg-gradient-to-br from-emerald-600 to-emerald-700',
  'bg-gradient-to-br from-teal-600 to-teal-700',
  'bg-gradient-to-br from-violet-700 to-violet-800',
  'bg-gradient-to-br from-orange-500 to-orange-600',
];

export default function RecursosPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroRecursos} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2967] via-[#0D2967]/80 to-[#0D2967]/10" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-2xl md:max-w-3xl mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight md:whitespace-nowrap">
                Recursos recomendados sobre Ruta EMI
              </h1>
              <p className="text-white/70 leading-relaxed">
                Consulte materiales de apoyo para ampliar información, revisar lineamientos, reforzar la toma de
                decisiones y compartir recursos útiles con equipos de salud.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recursos.map((recurso, idx) => {
            const Icono = iconos[idx % iconos.length];
            return (
              <a
                key={recurso.tipo}
                href={RUTA_EMI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-hover rounded-2xl p-7 text-white h-full flex flex-col ${esquemas[idx % esquemas.length]}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 border-2 border-white/30 mb-5">
                  <Icono className="text-white" size={26} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{recurso.tipo}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">{recurso.descripcion}</p>
                <span className="mt-auto inline-flex items-center gap-2.5 w-fit bg-white/20 px-4 py-2.5 rounded-full text-white font-semibold text-sm">
                  Ver Recursos
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={14} className="text-slate-900" />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
