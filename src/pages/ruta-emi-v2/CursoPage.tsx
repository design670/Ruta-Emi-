import { Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Users, Calendar, Clock, Monitor, Award } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL, modulosCurso } from './content';
import heroCertifiquese from '../../assets/curso/hero-certifiquese.jpg';
// Placeholders temporales (4 fotos distintas) hasta que se suban las reales en "Modulos Curso/".
import imgModulo1 from '../../assets/curso/card-modulo1.jpg';
import imgModulo2 from '../../assets/casos-clinicos/adolescente-meningitis.jpg';
import imgModulo3 from '../../assets/casos-clinicos/escolar-petequias.jpg';
import imgModulo4 from '../../assets/soporte-vital.jpg';

const infoCards = [
  { icono: Users, etiqueta: 'Dirigido a', valor: 'Pediatras, residentes y otros profesionales de la salud.', span: true },
  { icono: Calendar, etiqueta: 'Duración', valor: 'Un mes' },
  { icono: Clock, etiqueta: 'Intensidad horaria', valor: '20 horas' },
  { icono: Monitor, etiqueta: 'Modalidad', valor: 'Curso 100% virtual – Asincrónico' },
  { icono: Award, etiqueta: 'Certificación', valor: 'Online SCP' },
];

const esquemasModulo = [
  { imagen: imgModulo1, acento: 'bg-teal-600', hover: 'hover:bg-teal-600' },
  { imagen: imgModulo2, acento: 'bg-emerald-600', hover: 'hover:bg-emerald-600' },
  { imagen: imgModulo3, acento: 'bg-violet-700', hover: 'hover:bg-violet-700' },
  { imagen: imgModulo4, acento: 'bg-sky-600', hover: 'hover:bg-sky-600' },
];

export default function CursoPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-t-[2rem] md:rounded-t-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-10 md:pb-14">
          <img src={heroCertifiquese} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2967] via-[#0D2967]/80 to-[#0D2967]/10" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-2xl mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Certifíquese en Ruta EMI</h1>
              <p className="text-white/70 leading-relaxed">
                Este curso acompaña el uso de la Ruta EMI a través de contenidos breves, orientados a la práctica y
                organizados en 4 módulos. Su propósito es facilitar la comprensión de la ruta, fortalecer la toma de
                decisiones iniciales y promover una respuesta oportuna ante escenarios compatibles con Enfermedad
                Meningocócica Invasiva.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto bg-[#0D2967] rounded-b-[2rem] md:rounded-b-[2.5rem] px-6 md:px-12 lg:px-16 py-8 md:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
            {infoCards.map((card) => {
              const Icono = card.icono;
              return (
                <div
                  key={card.etiqueta}
                  className="flex items-start gap-3 lg:pr-6 lg:border-r lg:border-white lg:last:border-r-0 lg:last:pr-0"
                >
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icono className="text-[#37D6C4]" size={18} strokeWidth={1.75} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-white/50 text-[11px] mb-0.5">{card.etiqueta}</span>
                    <span className="text-white font-bold text-sm leading-snug">{card.valor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {modulosCurso.map((modulo, idx) => {
              const esquema = esquemasModulo[idx % esquemasModulo.length];
              return (
                <a
                  key={modulo.numero}
                  href={RUTA_EMI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col h-full bg-white rounded-[1.75rem] border border-slate-200 hover:border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${esquema.hover}`}
                >
                  <div className="relative h-44 flex-shrink-0 rounded-2xl overflow-hidden">
                    <img
                      src={esquema.imagen}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4 px-1.5 pb-1 flex flex-col flex-1">
                    <span
                      className={`inline-block w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 text-white transition-colors duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm ${esquema.acento}`}
                    >
                      Módulo {modulo.numero}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug mb-1.5">
                      {modulo.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                      {modulo.descripcion}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a
              href={RUTA_EMI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-7 py-3.5 bg-[#0D2967] text-white rounded-full font-bold"
            >
              Iniciar certificación
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ExternalLink size={15} />
              </span>
            </a>
          </div>
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
