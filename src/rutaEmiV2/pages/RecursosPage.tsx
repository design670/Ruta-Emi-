import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import LayoutV2 from '../components/LayoutV2';
import { recursosCategorias, recursosItems } from '../data';
import type { RecursoCategoria } from '../types';

type Filtro = 'Todos' | RecursoCategoria;

export default function RecursosPage() {
  const [filtro, setFiltro] = useState<Filtro>('Todos');

  const recursosFiltrados =
    filtro === 'Todos' ? recursosItems : recursosItems.filter((r) => r.categoria === filtro);

  return (
    <LayoutV2>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Recursos recomendados
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">
            Encuentre documentos, enlaces y materiales de apoyo relacionados con la Ruta EMI. Use los filtros o
            categorías para ubicar rápidamente el recurso que necesita.
          </p>

          <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filtrar recursos por categoría">
            {(['Todos', ...recursosCategorias.map((c) => c.categoria)] as Filtro[]).map((opcion) => (
              <button
                key={opcion}
                onClick={() => setFiltro(opcion)}
                aria-pressed={filtro === opcion}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967] ${
                  filtro === opcion
                    ? 'bg-[#0D2967] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursosFiltrados.map((recurso) => (
              <div
                key={recurso.titulo}
                className="card-hover-v2 flex flex-col h-full rounded-2xl border border-slate-200 p-6"
              >
                <span className="inline-block self-start mb-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-[#C2F2FF] text-[#0D2967]">
                  {recurso.categoria}
                </span>
                <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug">{recurso.titulo}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{recurso.descripcion}</p>
                <p className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                  {recurso.tipoArchivo}
                </p>
                <a
                  href={recurso.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-v2 self-start px-5 py-2.5 bg-[#0D2967] text-white rounded-full font-semibold text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
                >
                  Ver
                  <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutV2>
  );
}
