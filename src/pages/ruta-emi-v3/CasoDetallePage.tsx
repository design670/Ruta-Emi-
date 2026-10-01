import { Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HeroInterno, PaginaV3, botonNavy } from './Layout';
import { casosScp } from './casos';
import { contenidoCasos, type Bloque } from './casos-contenido';

function BloqueCaso({ bloque }: { bloque: Bloque }) {
  switch (bloque.t) {
    case 'titulo':
      return (
        <h2 className="font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug text-[#0A1428] mt-10 first:mt-0 mb-3">
          {bloque.texto}
        </h2>
      );
    case 'p':
      return (
        <p
          className="text-[15px] md:text-base leading-relaxed text-[#0A1428]/75 mb-4"
          dangerouslySetInnerHTML={{ __html: bloque.html }}
        />
      );
    case 'figura':
      return (
        <figure className="mt-10 mb-3">
          <img
            src={bloque.src}
            alt=""
            loading="lazy"
            className="w-full h-auto rounded-2xl border border-[#0A1428]/10 bg-white"
          />
        </figure>
      );
    case 'pie':
      return (
        <p
          className="text-sm leading-relaxed text-[#0A1428]/60 mb-6"
          dangerouslySetInnerHTML={{ __html: bloque.html }}
        />
      );
    case 'tablaTitulo':
      return (
        <h3 className="font-semibold tracking-[-0.01em] text-base md:text-lg leading-snug text-[#0A1428] mt-10 mb-3">
          {bloque.texto}
        </h3>
      );
    case 'tabla':
      return (
        <div className="v3-tabla rounded-2xl border border-[#0A1428]/10 overflow-x-auto bg-white">
          <div dangerouslySetInnerHTML={{ __html: bloque.html }} />
        </div>
      );
    case 'ul':
    case 'ol': {
      const Lista = bloque.t;
      return (
        <Lista
          className={`${
            bloque.t === 'ul' ? 'list-disc' : 'list-decimal'
          } pl-6 mb-4 space-y-1.5 text-[15px] leading-relaxed text-[#0A1428]/75`}
        >
          {bloque.items.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </Lista>
      );
    }
    default:
      return null;
  }
}

export default function CasoDetallePageV3() {
  const { slug } = useParams<{ slug: string }>();
  const caso = casosScp.find((c) => c.slug === slug);
  const contenido = slug ? contenidoCasos[slug] : undefined;

  if (!caso || !contenido) {
    return <Navigate to="/ruta-emi-v3/casos-clinicos" replace />;
  }

  return (
    <PaginaV3>
      <HeroInterno
        titulo={[caso.titulo]}
        imagen={caso.imagen}
        posicion={caso.posicionHero}
        volver={{ label: 'Volver a casos clínicos', href: '/ruta-emi-v3/casos-clinicos' }}
      />

      <section className="px-5 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="min-w-0 break-words lg:col-span-8 lg:col-start-3">
            {/* Ficha del paciente, como en la página de la SCP: edad y sexo a la izquierda, el resto a la derecha */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 pb-10 mb-10 border-b border-[#0A1428]/10">
              {[
                contenido.ficha.filter((f) => f.etiqueta === 'Edad' || f.etiqueta === 'Sexo'),
                contenido.ficha.filter((f) => f.etiqueta !== 'Edad' && f.etiqueta !== 'Sexo'),
              ].map((columna) => (
                <div key={columna.map((f) => f.etiqueta).join('|')} className="space-y-3">
                  {columna.map((dato) => (
                    <p key={dato.etiqueta} className="text-base md:text-lg leading-snug text-[#0A1428]/80">
                      <strong className="font-semibold text-[#0A1428]">{dato.etiqueta}:</strong> {dato.valor}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {contenido.bloques.map((bloque, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <BloqueCaso key={i} bloque={bloque} />
            ))}

            <div className="mt-16 pt-10 border-t border-[#0A1428]/10">
              <h2 className="font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug mb-3">Test del caso</h2>
              <p className="text-[15px] leading-relaxed text-[#0A1428]/70 max-w-2xl mb-8">
                Estas son las preguntas del caso. Para responderlas y recibir retroalimentación, el test se diligencia
                en la página de la SCP, donde se registran los datos y se envían las respuestas.
              </p>

              <ol className="space-y-8 mb-10">
                {contenido.preguntas.map((p) => (
                  <li key={p.pregunta}>
                    <p className="font-semibold leading-snug text-[#0A1428] mb-3">{p.pregunta}</p>
                    <ul className="space-y-2 text-[15px] leading-relaxed text-[#0A1428]/70">
                      {p.opciones.map((opcion) => (
                        <li key={opcion} className="pl-4 border-l-2 border-[#0A1428]/10">
                          {opcion}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <a href={caso.url} target="_blank" rel="noopener noreferrer" className="v3-boton" style={botonNavy}>
                Responder el test en la SCP
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>
      </section>
    </PaginaV3>
  );
}
