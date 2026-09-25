import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { recursos, RUTA_EMI_URL } from './content';
import heroRecursos from '../../assets/recursos/hero-recursos.jpg';
import cardPdfGuias from '../../assets/recursos/card-pdf-guias.jpg';
import cardInfografias from '../../assets/recursos/card-infografias.jpg';
import cardEnlaces from '../../assets/recursos/card-enlaces.jpg';
import cardVideos from '../../assets/recursos/card-videos.jpg';

const imagenes = [cardPdfGuias, cardInfografias, cardEnlaces, cardVideos];
const acentos = ['bg-emerald-600', 'bg-[#2BBCEA]', 'bg-violet-700', 'bg-orange-500'];
const acentosHover = ['hover:bg-emerald-600', 'hover:bg-[#2BBCEA]', 'hover:bg-violet-700', 'hover:bg-orange-500'];

export default function RecursosPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroRecursos} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-md md:max-w-lg mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Recursos recomendados sobre Ruta EMI
              </h1>
              <p className="text-white font-medium leading-relaxed">
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
            return (
              <a
                key={recurso.tipo}
                href={RUTA_EMI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col h-full bg-white rounded-[1.75rem] border border-slate-200 hover:border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${acentosHover[idx % acentosHover.length]}`}
              >
                <div className="relative h-44 flex-shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={imagenes[idx % imagenes.length]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="pt-4 px-1.5 pb-1 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-1.5">
                    {recurso.tipo}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed mb-4">
                    {recurso.descripcion}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 w-fit pl-4 pr-1.5 py-1.5 rounded-full text-white font-semibold text-sm transition-colors duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm ${acentos[idx % acentos.length]}`}
                  >
                    Ver recursos
                    <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={12} />
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
