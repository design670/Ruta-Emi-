import { useEffect, useState } from 'react';

type Fase = 'mostrando' | 'saliendo';

export function Bienvenida({ onFinish }: { onFinish: () => void }) {
  const [fase, setFase] = useState<Fase>('mostrando');

  useEffect(() => {
    const t1 = setTimeout(() => setFase('saliendo'), 1800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (fase !== 'saliendo') return;
    const t2 = setTimeout(onFinish, 650);
    return () => clearTimeout(t2);
  }, [fase, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0D2967] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-[650ms] ${
        fase === 'saliendo' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-center gap-6 md:gap-14">
        <span
          className={`text-white/50 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase transition-all duration-700 ease-out ${
            fase === 'mostrando' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
          }`}
        >
          Ruta
        </span>
        <h1
          className={`text-white text-3xl md:text-5xl font-bold tracking-tight transition-all duration-700 ease-out delay-150 ${
            fase === 'mostrando' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Bienvenidos
        </h1>
        <span
          className={`text-white/50 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase transition-all duration-700 ease-out ${
            fase === 'mostrando' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
          }`}
        >
          EMI
        </span>
      </div>

      <span
        className={`mt-6 w-px h-8 bg-white/70 transition-opacity duration-300 ${
          fase === 'mostrando' ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
