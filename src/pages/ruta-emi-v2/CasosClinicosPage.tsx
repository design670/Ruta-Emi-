import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { casosClinicos } from './content';
import cardCasos from '../../assets/card-casos.jpg';
import heroCasoClinico from '../../assets/casos-clinicos/hero-caso-clinico.jpg';

const cardClassName =
  'emi2-card group relative block rounded-2xl overflow-hidden border border-slate-200 bg-white hover:bg-[#0D2967] hover:border-[#0D2967] transition-colors duration-300 h-full flex flex-col';

export default function CasosClinicosPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroCasoClinico} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2967] via-[#0D2967]/80 to-[#0D2967]/10" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-2xl md:max-w-3xl mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight md:whitespace-nowrap">
                Casos clínicos para aplicar la Ruta EMI
              </h1>
              <p className="text-white/70 leading-relaxed">
                Revise escenarios clínicos breves que permiten poner en práctica la ruta, reconocer puntos de
                decisión y reforzar el abordaje oportuno ante sospecha de EMI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {casosClinicos
            .filter((caso) => !caso.fuenteUrl)
            .map((caso) => {
            const cardBody = (
              <>
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={caso.imagen ?? cardCasos}
                    alt=""
                    aria-hidden="true"
                    className="emi2-card-img absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-700 group-hover:text-white/60 transition-colors duration-300 mb-2">
                    Caso clínico {caso.numero}
                  </span>
                  <h3 className="text-lg font-bold text-[#0D2967] group-hover:text-white transition-colors duration-300 leading-snug mb-2">
                    {caso.titulo}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed mb-4">
                    {caso.resumen}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2.5 w-fit bg-[#0D2967] group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-colors duration-300 px-4 py-2.5 rounded-full text-white font-semibold text-sm">
                    Resolver caso
                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} className="text-slate-900" />
                    </span>
                  </span>
                </div>
              </>
            );

            return caso.fuenteUrl ? (
              <a key={caso.slug} href={caso.fuenteUrl} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                {cardBody}
              </a>
            ) : (
              <Link key={caso.slug} to={`/ruta-emi-v2/casos-clinicos/${caso.slug}`} className={cardClassName}>
                {cardBody}
              </Link>
            );
          })}
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
