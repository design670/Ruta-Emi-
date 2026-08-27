import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL, casosClinicos } from './content';
import cardCasos from '../../assets/card-casos.jpg';

export default function CasoDetallePage() {
  const { slug } = useParams<{ slug: string }>();
  const caso = casosClinicos.find((c) => c.slug === slug && !c.fuenteUrl);

  if (!caso) {
    return <Navigate to="/ruta-emi-v2/casos-clinicos" replace />;
  }

  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1600px] mx-auto bg-[#0D2967] rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-12 md:pb-16">
          <V2Header />

          <div className="max-w-2xl mx-auto md:mx-0 pt-8 md:pt-10 flex flex-col items-start">
            <Link
              to="/ruta-emi-v2/casos-clinicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6"
            >
              <ChevronLeft size={16} />
              Volver a casos clínicos
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{caso.titulo}</h1>
            <p className="text-white/70 leading-relaxed">{caso.resumen}</p>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-slate-200 mb-8">
            <img src={caso.imagen ?? cardCasos} alt="" aria-hidden="true" className="w-full h-56 object-cover" />
          </div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Este caso forma parte de los escenarios prácticos de la Ruta EMI para reforzar la sospecha clínica, la
            toma de decisiones iniciales y la articulación oportuna con el sistema de salud. El desarrollo completo
            del caso, con sus puntos de decisión, se encuentra disponible en la Ruta EMI interactiva.
          </p>
          <a
            href={RUTA_EMI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-7 py-3.5 bg-emerald-600 text-white rounded-full font-bold"
          >
            Resolver caso en la Ruta EMI
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ExternalLink size={15} />
            </span>
          </a>
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
