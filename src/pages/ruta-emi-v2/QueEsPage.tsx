import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL } from './content';
import heroConoce from '../../assets/que-es/hero-conoce.jpg';
import objetivo1 from '../../assets/que-es/objetivo-1.jpg';
import objetivo2 from '../../assets/que-es/objetivo-2.jpg';
import objetivo3 from '../../assets/que-es/objetivo-3.jpg';
import objetivo4 from '../../assets/que-es/objetivo-4.jpg';

const acentos = ['bg-emerald-600', 'bg-[#2BBCEA]', 'bg-violet-700', 'bg-orange-500'];
const acentosHover = ['hover:bg-emerald-600', 'hover:bg-[#2BBCEA]', 'hover:bg-violet-700', 'hover:bg-orange-500'];

const cardClassName =
  'group flex flex-col h-full bg-white rounded-[1.75rem] border border-slate-200 hover:border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

const objetivos = [
  {
    titulo: 'Reconocer el impacto de la EMI',
    descripcion:
      'Reconocer el impacto de la EMI en niños y adolescentes, identificando su carga, manifestaciones, complicaciones, secuelas y vigilancia epidemiológica.',
    imagen: objetivo1,
  },
  {
    titulo: 'Sospecha y reconocimiento temprano',
    descripcion:
      'Fortalecer la sospecha y el reconocimiento temprano de la EMI, estableciendo signos de alarma y aplicando acciones durante la primera hora de atención.',
    imagen: objetivo2,
  },
  {
    titulo: 'Secuelas y seguimiento integral',
    descripcion:
      'Identificar las principales secuelas de la EMI en la población pediátrica y orientar al niño, al adolescente y a su familia hacia un seguimiento integral.',
    imagen: objetivo3,
  },
  {
    titulo: 'Prevención: vacunación y quimioprofilaxis',
    descripcion:
      'Determinar y promover las estrategias de prevención de la EMI, con énfasis en vacunación y quimioprofilaxis, como herramientas para reducir el riesgo de la enfermedad y sus desenlaces.',
    imagen: objetivo4,
  },
];

export default function QueEsPage() {
  const objetivosScrollRef = useRef<HTMLDivElement>(null);

  const desplazarObjetivos = (direccion: 'izquierda' | 'derecha') => {
    const contenedor = objetivosScrollRef.current;
    if (!contenedor) return;
    const distancia = contenedor.clientWidth * 0.8;
    contenedor.scrollBy({ left: direccion === 'derecha' ? distancia : -distancia, behavior: 'smooth' });
  };

  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroConoce} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-[30%_center]" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-2xl mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">¿Qué es la Ruta EMI?</h1>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D2967] leading-[1.15] mb-6">
            La enfermedad meningocócica invasiva (EMI) representa una de las emergencias infecciosas más desafiantes
            en pediatría por su rápida progresión, su potencial para generar desenlaces graves y la posibilidad de
            dejar secuelas que pueden acompañar al niño o adolescente durante toda su vida.
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            En este escenario, cada minuto cuenta: reconocer tempranamente los signos de alarma, sospechar la
            enfermedad y actuar de manera oportuna, puede marcar una diferencia significativa en el pronóstico.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Este curso virtual ofrece una mirada integral y práctica de la EMI en la población pediátrica, abordando
            el reto desde cuatro momentos fundamentales: reconocer la enfermedad, actuar a tiempo, acompañar más allá
            de la fase aguda y prevenir.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A lo largo de los módulos, los participantes fortalecerán sus herramientas para identificar oportunamente
            al paciente pediátrico con sospecha de EMI, tomar decisiones claves durante la primera hora de atención,
            reconocer y orientar el manejo de sus posibles secuelas, y aplicar estrategias de prevención como la
            vacunación y la quimioprofilaxis. Porque frente a la EMI, la oportunidad de actuar puede cambiar una
            historia y la prevención puede evitarla.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto mt-24 md:mt-32">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2967] leading-[1.1]">Objetivo</h2>
            <div className="hidden sm:flex gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => desplazarObjetivos('izquierda')}
                aria-label="Ver objetivo anterior"
                className="w-11 h-11 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => desplazarObjetivos('derecha')}
                aria-label="Ver siguiente objetivo"
                className="w-11 h-11 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div
            ref={objetivosScrollRef}
            className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 mb-10"
          >
            {objetivos.map((objetivo, idx) => (
              <div
                key={objetivo.titulo}
                className={`${cardClassName} ${acentosHover[idx % acentosHover.length]} snap-start flex-shrink-0 w-[78%] sm:w-[46%] lg:w-[30.5%]`}
              >
                <div className="relative h-44 flex-shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={objetivo.imagen}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 px-1.5 pb-1 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug mb-1.5">
                    {objetivo.titulo}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed mb-4">
                    {objetivo.descripcion}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 w-fit pl-4 pr-1.5 py-1.5 rounded-full text-white font-semibold text-sm transition-colors duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm ${acentos[idx % acentos.length]}`}
                  >
                    Conocer más
                    <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={12} className="text-white" />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto flex justify-center">
          <a
            href={RUTA_EMI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-7 py-3.5 bg-[#0D2967] text-white rounded-full font-bold"
          >
            Conozca cómo aplicar la ruta
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ChevronRight size={15} />
            </span>
          </a>
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
