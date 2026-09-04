import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink, PlayCircle, GraduationCap, Users, Calendar, Clock, Monitor, Award } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL, modulosCurso } from './content';
import heroCertifiquese from '../../assets/curso/hero-certifiquese.jpg';
// Placeholders temporales (4 fotos distintas) hasta que se suban las reales en "Modulos Curso/".
import imgModulo1 from '../../assets/card-curso.jpg';
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
  { imagen: imgModulo1, badge: 'bg-teal-50 text-teal-700', avatar: 'bg-teal-100 text-teal-700', boton: 'border-teal-600 text-teal-700 group-hover:bg-teal-600 group-hover:text-white' },
  { imagen: imgModulo2, badge: 'bg-emerald-50 text-emerald-700', avatar: 'bg-emerald-100 text-emerald-700', boton: 'border-emerald-600 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white' },
  { imagen: imgModulo3, badge: 'bg-violet-50 text-violet-700', avatar: 'bg-violet-100 text-violet-700', boton: 'border-violet-600 text-violet-700 group-hover:bg-violet-600 group-hover:text-white' },
  { imagen: imgModulo4, badge: 'bg-sky-50 text-sky-700', avatar: 'bg-sky-100 text-sky-700', boton: 'border-sky-600 text-sky-700 group-hover:bg-sky-600 group-hover:text-white' },
];

export default function CursoPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-10 md:pb-14">
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

            <div className="w-full max-w-4xl mx-auto md:mx-0 mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {infoCards.map((card) => {
                const Icono = card.icono;
                return (
                  <div
                    key={card.etiqueta}
                    className={`rounded-[18px] border border-slate-200 bg-white shadow-sm p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                      card.span ? 'sm:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    <Icono className="text-[#0D2967] mb-2" size={20} strokeWidth={1.75} />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mb-1">
                      {card.etiqueta}
                    </span>
                    <span className="text-slate-900 font-bold text-sm leading-snug">{card.valor}</span>
                  </div>
                );
              })}
            </div>
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
                  className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-[190px] flex-shrink-0 overflow-hidden">
                    <img
                      src={esquema.imagen}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`inline-block w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-3 ${esquema.badge}`}
                    >
                      Módulo {modulo.numero}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mb-1.5">{modulo.titulo}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{modulo.descripcion}</p>

                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${esquema.avatar}`}>
                          <GraduationCap size={14} />
                        </span>
                        <span className="text-xs font-semibold text-slate-600 truncate">{modulo.docente}</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                          <PlayCircle size={14} />
                          Curso virtual
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors duration-200 ${esquema.boton}`}
                        >
                          Ver módulo
                          <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
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
