import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL } from './content';
import heroConoce from '../../assets/que-es/hero-conoce.jpg';

export default function QueEsPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroConoce} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2967] via-[#0D2967]/80 to-[#0D2967]/10" />

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
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-6">
            La Ruta EMI es una herramienta de orientación para el abordaje de la Enfermedad Meningocócica Invasiva.
            Reúne pasos clave para apoyar la sospecha clínica, la toma de decisiones iniciales, la atención oportuna,
            la articulación con el sistema de salud y la consulta de recursos relacionados.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Pensada para facilitar la consulta rápida y la aplicación práctica en escenarios de atención.
          </p>
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
