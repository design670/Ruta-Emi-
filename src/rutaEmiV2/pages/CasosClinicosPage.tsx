import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import LayoutV2 from '../components/LayoutV2';
import { casosClinicosV2 } from '../data';

export default function CasosClinicosPage() {
  return (
    <LayoutV2>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 leading-tight">
            Casos clínicos para aplicar la Ruta EMI
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosClinicosV2.map((caso) => (
              <div
                key={caso.slug}
                className="card-hover-v2 flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200"
              >
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img src={caso.imagen} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/90 text-[#0D2967]">
                    {caso.numero}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{caso.titulo}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{caso.descripcion}</p>
                  <Link
                    to={`/ruta-emi-v2/casos-clinicos/${caso.slug}`}
                    className="btn-primary-v2 self-start px-5 py-2.5 bg-[#0D2967] text-white rounded-full font-semibold text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
                  >
                    {caso.ctaLabel}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutV2>
  );
}
