import { ArrowUpRight, Award, Calendar, Clock, Monitor, Users } from 'lucide-react';
import { HeroInterno, PaginaV4, VentanaRuta, botonNavy, useVentanaRuta } from './Layout';
import { modulosCurso } from '../ruta-emi-v3/content';
import imgHero from '../../assets/curso/hero-certifiquese.jpg';
import imgPilarReconoce from '../../assets/v4/pilar-reconoce.jpg';
import imgActua from '../../assets/v4/actua.jpg';
import imgCasos from '../../assets/v4/casos.jpg';
import imgPreviene from '../../assets/v4/previene.jpg';

// Una fotografía por módulo, en el mismo orden que modulosCurso.
// Provisional: reutiliza las imágenes del home hasta tener una propia para cada módulo.
const fotosModulo = [
  { imagen: imgPilarReconoce, posicion: '50% 35%' },
  { imagen: imgActua, posicion: '50% 20%' },
  { imagen: imgCasos, posicion: '50% 40%' },
  { imagen: imgPreviene, posicion: '50% 25%' },
];

// Color de la fila al pasar el cursor, el mismo de los casos clínicos
const coloresHover = ['hover:bg-orange-500', 'hover:bg-emerald-600', 'hover:bg-violet-700', 'hover:bg-sky-600'];

const ficha = [
  { icono: Users, etiqueta: 'Dirigido a', valor: 'Pediatras, residentes y otros profesionales de la salud.' },
  { icono: Calendar, etiqueta: 'Duración', valor: 'Un mes' },
  { icono: Clock, etiqueta: 'Intensidad horaria', valor: '20 horas' },
  { icono: Monitor, etiqueta: 'Modalidad', valor: 'Curso 100% virtual – Asincrónico' },
  { icono: Award, etiqueta: 'Certificación', valor: 'Online SCP' },
];

export default function CursoPageV4() {
  const ventana = useVentanaRuta();

  return (
    <PaginaV4>
      <HeroInterno
        titulo={['Certifíquese en', 'Ruta EMI']}
        texto="Este curso acompaña el uso de la Ruta EMI a través de contenidos breves, orientados a la práctica y organizados en 4 módulos."
        imagen={imgHero}
        posicion="0% 100%"
        fondoPlano="#0F4DB8"
        colorCurva="#0D2967"
      />

      <section className="bg-[#0D2967] text-white px-5 md:px-10 pt-6 md:pt-8 pb-10 md:pb-12">
        <dl data-grupo className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.7fr_0.9fr_1fr_1.35fr_1fr] gap-x-8 gap-y-8">
          {ficha.map((dato) => {
            const Icono = dato.icono;
            return (
              <div
                key={dato.etiqueta}
                className="flex items-start gap-3.5 lg:pl-6 lg:border-l lg:border-white/20 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icono className="text-[#37D6C4]" size={18} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <dt className="text-[13px] text-white/55 mb-1">{dato.etiqueta}</dt>
                  <dd className="text-[17px] md:text-lg lg:text-[19px] font-semibold leading-snug text-white">{dato.valor}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </section>

      <section className="px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-12 gap-8">
          <p data-fade className="lg:col-span-10 lg:col-start-3 v4-serif text-2xl md:text-[1.75rem] lg:text-[2rem] leading-[1.3] max-w-4xl">
            Nuestro propósito es facilitarte la comprensión de la ruta, fortalecer la toma de decisiones iniciales y
            promover una respuesta oportuna ante escenarios compatibles con Enfermedad Meningocócica Invasiva.
          </p>
        </div>

        <div className="max-w-[1320px] mx-auto mt-16 md:mt-24">
          <div data-grupo>
            {modulosCurso.map((modulo, i) => {
              const foto = fotosModulo[i % fotosModulo.length];
              return (
                <article
                  key={modulo.numero}
                  className={`v4-fila v4-fila-hover group grid grid-cols-12 gap-x-6 md:gap-x-8 gap-y-5 items-center py-5 md:py-5 pr-0 md:pr-5 rounded-2xl transition-colors duration-500 ${coloresHover[i % coloresHover.length]}`}
                >
                  <div className="col-span-12 md:col-span-3 aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden">
                    <img
                      src={foto.imagen}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                      style={{ objectPosition: foto.posicion }}
                    />
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-[13px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#0D2967] mb-3 transition-colors duration-500 group-hover:text-white">Módulo 0{modulo.numero}</p>
                    <h3 className="font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug transition-colors duration-500 group-hover:text-white">{modulo.titulo}</h3>
                    <p className="mt-3 text-sm text-[#0A1428]/55 transition-colors duration-500 group-hover:text-white/80">{modulo.docente}</p>
                  </div>
                  <p className="col-span-12 md:col-span-5 text-[15px] leading-relaxed text-[#0A1428]/70 transition-colors duration-500 group-hover:text-white/90">
                    {modulo.descripcion}
                  </p>
                </article>
              );
            })}
            <div className="v4-fila pt-10 flex justify-center">
              <button
                type="button"
                onClick={ventana.alternar}
                aria-expanded={ventana.abierta}
                aria-controls="v4-certificacion"
                className="v4-boton"
                style={botonNavy}
              >
                Iniciar certificación
                <ArrowUpRight
                  size={15}
                  className={`transition-transform duration-500 ${ventana.abierta ? 'rotate-90' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>

        <VentanaRuta control={ventana} id="v4-certificacion" />
      </section>
    </PaginaV4>
  );
}
