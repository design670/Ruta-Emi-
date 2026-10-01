import { ArrowRight } from 'lucide-react';
import { HeroInterno, PaginaV3, botonNavy } from './Layout';
import imgHero from '../../assets/v3/queeshero.jpg';
import imgObjetivo1 from '../../assets/que-es/objetivo-1.jpg';
import imgObjetivo2 from '../../assets/que-es/objetivo-2.jpg';
import imgObjetivo3 from '../../assets/que-es/objetivo-3.jpg';
import imgObjetivo4 from '../../assets/que-es/objetivo-4.jpg';

const objetivos = [
  {
    titulo: 'Reconocer el impacto de la EMI',
    descripcion:
      'Reconocer el impacto de la EMI en niños y adolescentes, identificando su carga, manifestaciones, complicaciones, secuelas y vigilancia epidemiológica.',
    imagen: imgObjetivo1,
  },
  {
    titulo: 'Sospecha y reconocimiento temprano',
    descripcion:
      'Fortalecer la sospecha y el reconocimiento temprano de la EMI, estableciendo signos de alarma y aplicando acciones durante la primera hora de atención.',
    imagen: imgObjetivo2,
  },
  {
    titulo: 'Secuelas y seguimiento integral',
    descripcion:
      'Identificar las principales secuelas de la EMI en la población pediátrica y orientar al niño, al adolescente y a su familia hacia un seguimiento integral.',
    imagen: imgObjetivo3,
  },
  {
    titulo: 'Prevención: vacunación y quimioprofilaxis',
    descripcion:
      'Determinar y promover las estrategias de prevención de la EMI, con énfasis en vacunación y quimioprofilaxis, como herramientas para reducir el riesgo de la enfermedad y sus desenlaces.',
    imagen: imgObjetivo4,
  },
];

export default function QueEsPageV3() {
  return (
    <PaginaV3>
      <HeroInterno
        titulo={['¿Qué es la', 'Ruta EMI?']}
        texto="Una guía práctica para sospechar, reconocer y actuar a tiempo frente a la Enfermedad Meningocócica Invasiva."
        imagen={imgHero}
        posicion="0% 50%"
      />

      <section className="px-5 md:px-10 pt-16 md:pt-24 pb-6">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-10 lg:col-start-3">
            <p data-fade className="v3-serif text-2xl md:text-[1.75rem] lg:text-[2rem] leading-[1.3] max-w-5xl mb-8">
              <span className="v3-semi">La Enfermedad Meningocócica Invasiva (EMI)</span> representa una de las emergencias infecciosas más
              desafiantes en pediatría por su rápida progresión, su potencial para generar desenlaces graves y la
              posibilidad de dejar secuelas que pueden acompañar al niño o adolescente durante toda su vida.
            </p>
            <div data-grupo className="space-y-4 max-w-5xl text-[15px] md:text-base leading-relaxed text-[#0A1428]/70">
              <p>
                En este escenario, cada minuto cuenta: reconocer tempranamente los signos de alarma, sospechar la
                enfermedad y actuar de manera oportuna, puede marcar una diferencia significativa en el pronóstico.
              </p>
              <p>
                Este curso virtual ofrece una mirada integral y práctica de la EMI en la población pediátrica,
                abordando el reto desde cuatro momentos fundamentales: reconocer la enfermedad, actuar a tiempo,
                acompañar más allá de la fase aguda y prevenir.
              </p>
              <p>
                A lo largo de los módulos, los participantes fortalecerán sus herramientas para identificar
                oportunamente al paciente pediátrico con sospecha de EMI, tomar decisiones claves durante la primera
                hora de atención, reconocer y orientar el manejo de sus posibles secuelas, y aplicar estrategias de
                prevención como la vacunación y la quimioprofilaxis. Porque frente a la EMI, la oportunidad de actuar
                puede cambiar una historia y la prevención puede evitarla.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-[1320px] mx-auto">
          <h2 data-fade className="v3-serif text-3xl md:text-4xl leading-[1.08] mb-6 md:mb-8">
            Cuatro objetivos
          </h2>
          <div data-grupo>
            {objetivos.map((objetivo, i) => (
              <article
                key={objetivo.titulo}
                className="v3-fila v3-fila-hover group grid grid-cols-12 gap-x-6 md:gap-x-8 gap-y-5 items-center py-8 md:py-9"
              >
                <div className="col-span-12 md:col-span-3 aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={objetivo.imagen}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-[13px] md:text-sm font-bold uppercase tracking-[0.2em] text-[#0D2967] mb-3">
                    Objetivo 0{i + 1}
                  </p>
                  <h3 className="font-semibold tracking-[-0.02em] text-xl md:text-2xl leading-snug">
                    {objetivo.titulo}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-5 text-[15px] leading-relaxed text-[#0A1428]/70">
                  {objetivo.descripcion}
                </p>
              </article>
            ))}
            <div className="v3-fila pt-10 flex justify-center">
              <button type="button" className="v3-boton" style={botonNavy}>
                Ver el curso
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </PaginaV3>
  );
}
