import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroInterno, PaginaV3 } from './Layout';
import { casosScp } from './casos';
import imgHero from '../../assets/v3/curso.jpg';

// Color de relleno de cada tarjeta al pasar el cursor (los mismos acentos de los módulos de la v3)
const coloresHover = ['hover:bg-orange-500', 'hover:bg-emerald-600', 'hover:bg-violet-700', 'hover:bg-sky-600'];

export default function CasosClinicosPageV3() {
  return (
    <PaginaV3>
      <HeroInterno
        titulo={['Casos clínicos para', 'aplicar la Ruta EMI']}
        texto="Revise escenarios clínicos breves que permiten poner en práctica la ruta, reconocer puntos de decisión y reforzar el abordaje oportuno ante sospecha de EMI."
        imagen={imgHero}
        posicion="50% 30%"
      />

      <section className="px-2 md:px-6 pt-8 md:pt-10 pb-20 md:pb-28">
        <div className="max-w-[1352px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8">
          {casosScp.map((caso, i) => {
            return (
              <Link
                key={caso.numero}
                to={`/ruta-emi-v3/casos-clinicos/${caso.slug}`}
                className={`group flex flex-col rounded-[1.75rem] p-3 md:p-4 transition-colors duration-500 ${
                  coloresHover[i % coloresHover.length]
                }`}
              >
                {/* Arco superior como en el home (elíptico: la foto es apaisada); al pasar el cursor se endereza */}
                <div data-revela className="v3-foto-arco aspect-[16/10] overflow-hidden">
                  {/* El zoom va en este envoltorio: la animación de entrada deja un transform fijo en la imagen */}
                  <div className="w-full h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
                    <img
                      src={caso.imagen}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ objectPosition: caso.posicion }}
                    />
                  </div>
                </div>
                <div data-fade className="pt-6 px-1 pb-2 flex-1 flex flex-col">
                  <h2 className="font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug mb-3 transition-colors duration-500 group-hover:text-white">
                    {caso.titulo}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#0A1428]/65 mb-6 line-clamp-4 transition-colors duration-500 group-hover:text-white/90">
                    {caso.resumen}
                  </p>
                  <span className="v3-boton v3-boton-grupo mt-auto self-start text-[#0A1428]" style={{ ['--v3-relleno' as string]: '#fff', ['--v3-relleno-texto' as string]: '#0A1428' }}>
                    Resolver caso
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </PaginaV3>
  );
}
