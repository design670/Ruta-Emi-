import { Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, AlertTriangle, Siren, Stethoscope, ShieldCheck } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL, modulosCurso } from './content';
import heroCertifiquese from '../../assets/curso/hero-certifiquese.jpg';

const iconosModulo = [AlertTriangle, Siren, Stethoscope, ShieldCheck];
const esquemasModulo = [
  'bg-gradient-to-br from-teal-600 to-teal-700',
  'bg-gradient-to-br from-emerald-600 to-emerald-700',
  'bg-gradient-to-br from-violet-700 to-violet-800',
  'bg-gradient-to-br from-sky-600 to-sky-700',
];

export default function CursoPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
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

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {modulosCurso.map((modulo, idx) => {
              const Icono = iconosModulo[idx % iconosModulo.length];
              return (
                <div
                  key={modulo.numero}
                  className={`emi2-card group relative rounded-2xl p-6 md:p-7 h-full flex flex-col text-white overflow-hidden ${esquemasModulo[idx % esquemasModulo.length]}`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/25">
                    <Icono size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {modulo.numero}. {modulo.titulo}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{modulo.descripcion}</p>
                  <p className="text-sm text-white/95 leading-relaxed mt-auto pt-4 border-t border-white/15">
                    <span className="font-bold">Llamado a la acción:</span> {modulo.llamado}
                  </p>
                </div>
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
