import { useState } from 'react';
import { ArrowUpRight, Download, Plus } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroInterno, PaginaV4 } from './Layout';
import { recursos } from '../ruta-emi-v3/content';
import imgHero from '../../assets/recursos/hero-recursos.jpg';

interface Archivo {
  nombre: string;
  formato: string;
  /** Sin url el archivo se muestra como pendiente (todavía no hay fichero real que descargar). */
  url?: string;
  /** Los enlaces se abren fuera; el resto se descarga. */
  externo?: boolean;
}

// Placeholder: nombres de ejemplo hasta que se carguen los archivos reales de cada categoría.
const archivosPorTipo: Record<string, Archivo[]> = {
  'PDF y Guías': [
    { nombre: 'Guía rápida de la Ruta EMI', formato: 'PDF' },
    { nombre: 'Protocolo de atención en la primera hora', formato: 'PDF' },
    { nombre: 'Resumen clínico: signos de alarma', formato: 'PDF' },
  ],
  Infografías: [
    { nombre: 'Signos de alarma de la EMI', formato: 'PNG' },
    { nombre: 'Código EMI: acciones clave', formato: 'PDF' },
    { nombre: 'Estrategias de prevención', formato: 'PNG' },
  ],
  Enlaces: [
    { nombre: 'Casos clínicos — Sociedad Colombiana de Pediatría', formato: 'Enlace', url: 'https://scp.com.co/casos-clinicos/', externo: true },
    { nombre: 'Lineamientos de vigilancia epidemiológica', formato: 'Enlace', externo: true },
    { nombre: 'Referencias y artículos recomendados', formato: 'Enlace', externo: true },
  ],
};

const archivosPorDefecto: Archivo[] = [
  { nombre: 'Módulo 1 · La verdadera cara de la EMI', formato: 'Video' },
  { nombre: 'Módulo 2 · Código EMI', formato: 'Video' },
  { nombre: 'Módulo 3 · Manejo inicial, diagnóstico y notificación', formato: 'Video' },
];

export default function RecursosPageV4() {
  const [abierto, setAbierto] = useState<string | null>(null);

  return (
    <PaginaV4>
      <HeroInterno
        titulo={['Recursos', 'recomendados', 'sobre Ruta EMI']}
        texto="Consulte materiales de apoyo para ampliar información, revisar lineamientos, reforzar la toma de decisiones y compartir recursos útiles con equipos de salud."
        imagen={imgHero}
        posicion="8% 100%"
        fondoPlano="#F07A1F"
      />

      <section className="px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-12 gap-8">
          <p data-fade className="v4-etiqueta lg:col-span-2 text-[#0D2967]/70 pt-2">
            Biblioteca
          </p>
          <div data-grupo className="lg:col-span-10">
            {recursos.map((recurso, i) => {
              const estaAbierto = abierto === recurso.tipo;
              const archivos = archivosPorTipo[recurso.tipo] ?? archivosPorDefecto;
              const idPanel = `v4-recurso-${i}`;

              return (
                <div key={recurso.tipo} className="v4-fila">
                  <button
                    type="button"
                    onClick={() => setAbierto(estaAbierto ? null : recurso.tipo)}
                    aria-expanded={estaAbierto}
                    aria-controls={idPanel}
                    className="group w-full text-left grid grid-cols-12 gap-x-4 gap-y-2 items-baseline py-8 md:py-9"
                  >
                    <span
                      className={`col-span-10 md:col-span-4 font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug transition-colors duration-300 group-hover:text-[#1597CF] group-focus-visible:text-[#1597CF] ${
                        estaAbierto ? 'text-[#1597CF]' : ''
                      }`}
                    >
                      {recurso.tipo}
                    </span>
                    <span className="order-last md:order-none col-span-12 md:col-span-7 text-[15px] leading-relaxed text-[#0A1428]/70">
                      {recurso.descripcion}
                    </span>
                    <span className="col-span-2 md:col-span-1 flex justify-end self-center">
                      <Plus
                        size={22}
                        strokeWidth={1.5}
                        className={`transition-[transform,color] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:text-[#1597CF] ${
                          estaAbierto ? 'rotate-45 text-[#1597CF]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={idPanel}
                    className={`grid ${estaAbierto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    style={{ transition: 'grid-template-rows 800ms cubic-bezier(0.65, 0, 0.35, 1)' }}
                    onTransitionEnd={(e) => {
                      if (e.target === e.currentTarget) ScrollTrigger.refresh();
                    }}
                  >
                    <div className="overflow-hidden">
                      <ul
                        className={`pb-9 transition-opacity duration-700 ${
                          estaAbierto ? 'opacity-100 delay-200' : 'opacity-0'
                        }`}
                      >
                        {archivos.map((archivo) => {
                          const Icono = archivo.externo ? ArrowUpRight : Download;
                          const accion = archivo.externo ? 'Abrir' : 'Descargar';
                          const contenido = (
                            <>
                              <span className="flex-1 text-[15px] leading-snug">{archivo.nombre}</span>
                              <span className="v4-etiqueta text-[#0D2967]/55 hidden sm:block w-20">{archivo.formato}</span>
                              <span className="inline-flex items-center gap-2 text-sm">
                                {archivo.url ? accion : 'Próximamente'}
                                <Icono size={15} />
                              </span>
                            </>
                          );
                          const clase =
                            'flex items-center gap-4 md:gap-8 py-4 px-4 md:px-5 rounded-xl transition-colors duration-300';

                          return (
                            <li key={archivo.nombre} className="border-t border-[#0A1428]/10 first:border-t-0">
                              {archivo.url ? (
                                <a
                                  href={archivo.url}
                                  {...(archivo.externo ? { target: '_blank', rel: 'noopener noreferrer' } : { download: true })}
                                  tabIndex={estaAbierto ? 0 : -1}
                                  className={`${clase} hover:bg-[#0A1428] hover:text-white`}
                                >
                                  {contenido}
                                </a>
                              ) : (
                                <span className={`${clase} text-[#0A1428]/45`}>{contenido}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="v4-fila" />
          </div>
        </div>
      </section>
    </PaginaV4>
  );
}
