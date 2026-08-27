import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import LayoutV2 from '../components/LayoutV2';
import { casosClinicosV2 } from '../data';

const seccionesPlaceholder = [
  'Presentación del caso',
  'Antecedentes relevantes',
  'Hallazgos al examen físico',
  'Puntos de decisión según la Ruta EMI',
  'Conducta y desenlace',
];

export default function CasoClinicoDetallePage() {
  const { slug } = useParams<{ slug: string }>();
  const caso = casosClinicosV2.find((c) => c.slug === slug);

  if (!caso) {
    return <Navigate to="/ruta-emi-v2/casos-clinicos" replace />;
  }

  return (
    <LayoutV2>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/ruta-emi-v2/casos-clinicos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            <ChevronRight size={16} className="rotate-180" />
            Volver a casos clínicos
          </Link>

          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-[#C2F2FF] text-[#0D2967]">
            {caso.numero}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{caso.titulo}</h1>

          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img src={caso.imagen} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <p className="text-lg text-slate-600 leading-relaxed mb-10">{caso.descripcion}</p>

          <div className="space-y-6">
            {seccionesPlaceholder.map((seccion) => (
              <div key={seccion} className="rounded-2xl border border-dashed border-slate-300 p-6">
                <h2 className="text-sm font-bold uppercase tracking-wide text-[#0D2967] mb-2">{seccion}</h2>
                <p className="text-sm text-slate-400">
                  [Contenido clínico pendiente — espacio reservado para el contenido definitivo que entregará el
                  cliente.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutV2>
  );
}
