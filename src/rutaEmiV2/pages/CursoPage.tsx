import { ChevronRight } from 'lucide-react';
import LayoutV2 from '../components/LayoutV2';
import { CURSO_CERTIFICACION_URL, modulosCurso } from '../data';

export default function CursoPage() {
  return (
    <LayoutV2>
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Curso de certificación en Ruta EMI
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mb-10">
            Este curso acompaña el uso de la Ruta EMI a través de contenidos breves, orientados a la práctica y
            organizados en 4 módulos. Su propósito es facilitar la comprensión de la ruta, fortalecer la toma de
            decisiones iniciales y promover una respuesta oportuna ante escenarios compatibles con Enfermedad
            Meningocócica Invasiva.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#0D2967] mb-2">Audiencia</h2>
              <p className="text-slate-600 leading-relaxed">
                Profesionales de salud que atienden población pediátrica o participan en procesos de detección,
                referencia, atención y seguimiento.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#0D2967] mb-2">Duración sugerida</h2>
              <p className="text-slate-600 leading-relaxed">
                4 módulos autogestionados, con evaluación final y certificado de participación o aprobación.
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-16">
            {modulosCurso.map((modulo) => (
              <article key={modulo.slug} className="card-hover-v2 rounded-2xl border border-slate-200 p-7 md:p-8">
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-bold text-[#2BBCEA] flex-shrink-0">{modulo.numero}</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{modulo.titulo}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{modulo.descripcion}</p>
                    <p className="text-sm font-semibold text-[#0D2967]">
                      Llamado a la acción: <span className="font-normal text-slate-600">{modulo.llamado}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <a
              href={CURSO_CERTIFICACION_URL}
              className="btn-primary-v2 px-8 py-4 bg-[#0D2967] text-white rounded-full font-semibold text-lg inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D2967]"
            >
              Iniciar certificación
              <ChevronRight size={18} />
            </a>
            <p className="text-xs text-slate-400 mt-4">
              El enlace de certificación está pendiente de confirmación por parte del cliente.
            </p>
          </div>
        </div>
      </section>
    </LayoutV2>
  );
}
