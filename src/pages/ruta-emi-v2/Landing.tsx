import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL } from './content';
import cardCurso from '../../assets/card-curso.jpg';
import cardCasos from '../../assets/card-casos.jpg';
import cardRecursos from '../../assets/card-recursos.jpg';

const cards = [
  {
    id: 'curso',
    titulo: 'Certifíquese en\nRuta EMI',
    cta: 'Ver curso',
    href: '/ruta-emi-v2/curso',
    imagen: cardCurso,
    bg: 'bg-teal-600',
  },
  {
    id: 'casos',
    titulo: 'Casos\nClínicos',
    cta: 'Explorar casos',
    href: '/ruta-emi-v2/casos-clinicos',
    imagen: cardCasos,
    bg: 'bg-emerald-600',
  },
  {
    id: 'recursos',
    titulo: 'Recursos',
    cta: 'Ver recursos',
    href: '/ruta-emi-v2/recursos',
    imagen: cardRecursos,
    bg: 'bg-violet-800',
  },
];

export default function RutaEmiV2Landing() {
  return (
    <V2PageShell>
      <main className="flex-1">
        {/* Bloque azul marino: header, presentación y cards en flujo normal (sin superposición) */}
        <section className="px-4 md:px-6 pt-3 md:pt-4">
          <div className="max-w-[1600px] mx-auto">
            <div className="relative flow-root bg-[#0D2967] rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-10 lg:px-14 pt-3 md:pt-4 pb-6 sm:pb-0">
              <V2Header />

              <div id="ruta-emi" className="max-w-3xl mx-auto text-center pt-3 md:pt-5 pb-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] mb-3 text-white">
                  Ruta EMI: de la sospecha a la supervivencia
                </h1>
                <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-5">
                  Reconocimiento, respuesta y prevención de la enfermedad meningocócica invasora
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to="/ruta-emi-v2/que-es-la-ruta-emi"
                    className="btn-primary btn-hero-cta inline-flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm md:text-base"
                  >
                    ¿Qué es la Ruta EMI?
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                      <ChevronRight size={16} />
                    </span>
                  </Link>
                  <a
                    href={RUTA_EMI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-hero-cta inline-flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm md:text-base"
                  >
                    Consultar la Ruta EMI
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                      <ChevronRight size={16} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Cards: pieza gráfica única (color + persona integrada), 330×360px exactas desde 1200px */}
              {/* Superpuestas sobre el borde azul desde el breakpoint sm (640px); en móvil se apilan sin superposición */}
              <div className="relative z-10 pt-6 md:pt-7 mb-0 sm:-mb-[180px] flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-[330px_330px_330px] gap-5 min-[1200px]:gap-6 w-full max-w-[1038px] justify-center">
                  {cards.map((card) => (
                    <Link
                      key={card.id}
                      to={card.href}
                      aria-label={`${card.titulo.replace('\n', ' ')} — ${card.cta}`}
                      className={`emi2-banner-card group relative block rounded-[28px] overflow-hidden w-full min-[1200px]:w-[330px] h-[360px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white mx-auto min-[1200px]:mx-0 ${card.bg}`}
                    >
                      <img
                        src={card.imagen}
                        alt=""
                        aria-hidden="true"
                        className="emi2-banner-card-img absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="relative z-[3] flex flex-col items-start h-full px-6 py-6">
                        <h3 className="text-white font-bold text-2xl leading-tight whitespace-pre-line max-w-[210px] drop-shadow-sm">
                          {card.titulo}
                        </h3>
                        <div className="mt-auto w-full relative h-11">
                          <span className="absolute top-1/2 left-0 -translate-y-1/2 transition-[left,transform] duration-300 ease-out group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 inline-flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-full text-[#0D2967] font-semibold text-sm whitespace-nowrap">
                            {card.cta}
                            <span className="emi2-banner-card-arrow w-7 h-7 rounded-full bg-[#0D2967] flex items-center justify-center flex-shrink-0">
                              <ChevronRight size={14} className="text-white" />
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Espacio reservado para la mitad inferior de las cards superpuestas + respiro antes del footer */}
        <div className="h-10 sm:h-[300px]" />
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
