import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { V2Header, V2Footer, V2PageShell } from './Layout';
import { RUTA_EMI_URL } from './content';
import heroConoce from '../../assets/que-es/hero-conoce.jpg';

export default function QueEsPage() {
  return (
    <V2PageShell>
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div className="relative max-w-[1600px] mx-auto rounded-[2rem] md:rounded-[2.5rem] overflow-hidden px-6 md:px-12 lg:px-16 pt-4 md:pt-6 pb-20 md:pb-28 min-h-[510px]">
          <img src={heroConoce} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2967] via-[#0D2967]/80 to-[#0D2967]/10" />

          <div className="relative z-10">
            <V2Header />

            <div className="max-w-2xl mx-auto md:mx-0 pt-16 md:pt-24 flex flex-col items-start">
              <Link to="/ruta-emi-v2" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white mb-6">
                <ChevronLeft size={16} />
                Volver al inicio
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">¿Qué es la Ruta EMI?</h1>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 leading-relaxed mb-6">
            La enfermedad meningocócica invasiva (EMI) representa una de las emergencias infecciosas más desafiantes
            en pediatría por su rápida progresión, su potencial para generar desenlaces graves y la posibilidad de
            dejar secuelas que pueden acompañar al niño o adolescente durante toda su vida. En este escenario, cada
            minuto cuenta: reconocer tempranamente los signos de alarma, sospechar la enfermedad y actuar de manera
            oportuna, puede marcar una diferencia significativa en el pronóstico.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Este curso virtual ofrece una mirada integral y práctica de la EMI en la población pediátrica, abordando
            el reto desde cuatro momentos fundamentales: reconocer la enfermedad, actuar a tiempo, acompañar más allá
            de la fase aguda y prevenir.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            A lo largo de los módulos, los participantes fortalecerán sus herramientas para identificar oportunamente
            al paciente pediátrico con sospecha de EMI, tomar decisiones claves durante la primera hora de atención,
            reconocer y orientar el manejo de sus posibles secuelas, y aplicar estrategias de prevención como la
            vacunación y la quimioprofilaxis. Porque frente a la EMI, la oportunidad de actuar puede cambiar una
            historia y la prevención puede evitarla.
          </p>

          <h2 className="text-xl font-bold text-[#0D2967] mb-4">Objetivos</h2>
          <ul className="space-y-3 mb-10">
            <li className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-[#0D2967] font-bold flex-shrink-0">•</span>
              Reconocer el impacto de la EMI en niños y adolescentes, identificando su carga, manifestaciones,
              complicaciones, secuelas y vigilancia epidemiológica.
            </li>
            <li className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-[#0D2967] font-bold flex-shrink-0">•</span>
              Fortalecer la sospecha y el reconocimiento temprano de la EMI, estableciendo signos de alarma y
              aplicando acciones durante la primera hora de atención.
            </li>
            <li className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-[#0D2967] font-bold flex-shrink-0">•</span>
              Identificar las principales secuelas de la EMI en la población pediátrica y orientar al niño, al
              adolescente y a su familia hacia un seguimiento integral.
            </li>
            <li className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="text-[#0D2967] font-bold flex-shrink-0">•</span>
              Determinar y promover las estrategias de prevención de la EMI, con énfasis en vacunación y
              quimioprofilaxis, como herramientas para reducir el riesgo de la enfermedad y sus desenlaces.
            </li>
          </ul>
          <a
            href={RUTA_EMI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-7 py-3.5 bg-[#0D2967] text-white rounded-full font-bold"
          >
            Conozca cómo aplicar la ruta
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ChevronRight size={15} />
            </span>
          </a>
        </div>
      </main>

      <V2Footer />
    </V2PageShell>
  );
}
