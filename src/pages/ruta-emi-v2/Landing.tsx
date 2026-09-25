import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL } from './content';
import heroDoctora from '../../assets/hero-doctora-landing.png';
import cardCurso from '../../assets/card-certifiquese-landing.png';
import cardCasos from '../../assets/card-casos.jpg';
import cardRecursos from '../../assets/card-recursos-landing.png';

const cards = [
  {
    id: 'curso',
    titulo: 'Certifíquese en\nRuta EMI',
    cta: 'Ver curso',
    href: '/ruta-emi-v2/curso',
    imagen: cardCurso,
    bg: 'bg-[#4B2162]',
    fit: 'object-contain' as const,
  },
  {
    id: 'casos',
    titulo: 'Casos\nClínicos',
    cta: 'Explorar casos',
    href: '/ruta-emi-v2/casos-clinicos',
    imagen: cardCasos,
    bg: 'bg-emerald-600',
    fit: 'object-cover' as const,
  },
  {
    id: 'recursos',
    titulo: 'Recursos',
    cta: 'Ver recursos',
    href: '/ruta-emi-v2/recursos',
    imagen: cardRecursos,
    bg: 'bg-[#009DDC]',
    fit: 'object-contain' as const,
  },
];

export default function RutaEmiV2Landing() {
  const [consultaAbierta, setConsultaAbierta] = useState(false);

  return (
    <V2PageShell>
      <main className="flex-1">
        {/* Hero: degradado navy → blanco, foto de fondo centrada/derecha a toda altura */}
        <section id="ruta-emi" className="relative overflow-hidden min-h-[420px] md:min-h-[720px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428] via-[#0D2967] to-[#EFF1F5]" />

          <img
            src={heroDoctora}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-0 md:right-[22%] h-full w-auto max-w-none object-contain object-bottom pointer-events-none select-none"
          />

          <div className="absolute inset-0 z-10 flex flex-col px-4 md:px-6 pt-3 md:pt-4">
            <V2Header />

            <div className="max-w-[1400px] w-full mx-auto flex-1 flex items-center">
              <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
                  <span className="text-[#37D6C4] block">Ruta EMI</span>
                  <span className="text-white">De la sospecha a la supervivencia.</span>
                </h1>
                <Link
                  to="/ruta-emi-v2/que-es-la-ruta-emi"
                  className="btn-primary btn-hero-cta inline-flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/15 text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm md:text-base"
                >
                  ¿Qué es la Ruta EMI?
                  <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                    <ChevronRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bloque blanco: subtítulo + CTA */}
        <section className="bg-[#EFF1F5] px-6">
          <div className="h-[284px] flex flex-col items-center justify-center text-center">
            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-bold text-[#0D2967] leading-snug mb-6">
              Reconocimiento, respuesta y prevención de la enfermedad meningocócica invasora
            </p>
            <button
              type="button"
              onClick={() => setConsultaAbierta((abierta) => !abierta)}
              aria-expanded={consultaAbierta}
              className="btn-primary inline-flex items-center gap-3 bg-[#0D2967] text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm"
            >
              Consultar la Ruta EMI
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight size={15} />
              </span>
            </button>
          </div>

          <div
            className={`grid ${
              consultaAbierta ? 'grid-rows-[1fr] pb-10' : 'grid-rows-[0fr]'
            }`}
            style={{ transition: 'grid-template-rows 700ms cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            <div className="overflow-hidden">
              <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#0D2967]/10 shadow-xl bg-white">
                <div className="flex items-center justify-end bg-[#0D2967] px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setConsultaAbierta(false)}
                    className="inline-flex items-center gap-2 bg-white pl-5 pr-1.5 py-1.5 rounded-full text-[#0D2967] font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    Cerrar
                    <span className="w-7 h-7 rounded-full bg-[#0D2967] text-white flex items-center justify-center">
                      <X size={14} />
                    </span>
                  </button>
                </div>
                {consultaAbierta && (
                  <iframe
                    src={RUTA_EMI_URL}
                    title="Ruta EMI"
                    className="w-full h-[640px] block"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Encabezado de sección + cards */}
        <section className="px-6 pt-[123px] pb-16 md:pb-24">
          <h2 className="max-w-2xl mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2967] leading-[1.1] mb-10 md:mb-12">
            <span className="text-[#2BBCEA]">Reconoce, actúa y previene:</span> empieza aquí tu recorrido por la EMI.
          </h2>

          <div className="max-w-[1100px] mx-auto grid sm:grid-cols-3 gap-5 md:gap-6">
            {cards.map((card) => (
              <Link
                key={card.id}
                to={card.href}
                aria-label={`${card.titulo.replace('\n', ' ')} — ${card.cta}`}
                className={`emi2-banner-card group relative block rounded-[28px] overflow-hidden aspect-[4/5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D2967] ${card.bg}`}
              >
                <img
                  src={card.imagen}
                  alt=""
                  aria-hidden="true"
                  className={`emi2-banner-card-img absolute bottom-0 ${card.fit} object-bottom ${
                    card.fit === 'object-contain'
                      ? 'left-[-17.5%] w-[135%] max-w-none h-[135%]'
                      : 'inset-x-0 w-full h-full'
                  }`}
                />
                <div className="relative z-[3] flex flex-col items-start h-full px-6 pt-10 pb-6">
                  <h3 className="text-white font-bold text-2xl leading-tight whitespace-pre-line max-w-[240px] drop-shadow-sm">
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
        </section>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
