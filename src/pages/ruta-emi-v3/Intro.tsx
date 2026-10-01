import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { cajaIntro, pathArco } from './arco';

interface IntroProps {
  /** Imágenes que deben estar cargadas antes de arrancar la secuencia. */
  recursosCriticos: string[];
  /** Se dispara poco antes de que la ventana termine de abrirse: arranca el texto del hero. */
  onReveal: () => void;
  /** La capa terminó y puede desmontarse. */
  onDone: () => void;
}

function precargar(src: string) {
  return new Promise<void>((resolver) => {
    const img = new Image();
    img.onload = () => resolver();
    img.onerror = () => resolver();
    img.src = src;
    if (img.complete) resolver();
  });
}

/** Espera a que el video del hero tenga datos para reproducir (con tope, para no bloquear la intro). */
function esperarVideo() {
  return new Promise<void>((resolver) => {
    const video = document.querySelector<HTMLVideoElement>('.v3-hero-media video');
    if (!video || video.readyState >= 2) {
      resolver();
      return;
    }
    const terminar = () => {
      window.clearTimeout(tope);
      video.removeEventListener('loadeddata', terminar);
      video.removeEventListener('error', terminar);
      resolver();
    };
    const tope = window.setTimeout(terminar, 4000);
    video.addEventListener('loadeddata', terminar);
    video.addEventListener('error', terminar);
  });
}

/**
 * Intro: una capa azul a pantalla completa con una ventana en arco recortada (un «agujero»).
 * La ventana deja ver el hero real que hay debajo —con su video ya en reproducción—, así que hay un
 * solo video y la apertura es continua: cuando el agujero cubre todo el viewport, la capa desaparece.
 */
export function Intro({ recursosCriticos, onReveal, onDone }: IntroProps) {
  const capaRef = useRef<HTMLDivElement>(null);
  const fondoRef = useRef<HTMLDivElement>(null);
  const [oculto, setOculto] = useState(false);

  useLayoutEffect(() => {
    const capa = capaRef.current;
    const fondo = fondoRef.current;
    if (!capa || !fondo) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onReveal();
      onDone();
      setOculto(true);
      return;
    }

    const html = document.documentElement;
    const overflowPrevio = html.style.overflow;
    html.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    const restaurarScroll = () => {
      html.style.overflow = overflowPrevio;
    };

    let cancelado = false;
    // subida: 0 → 1 la ventana entra desde abajo; apertura: 0 → 1 se expande al viewport.
    const estado = { subida: 0, apertura: 0 };

    const dibujar = () => {
      const vw = capa.clientWidth;
      const vh = capa.clientHeight;
      const caja = cajaIntro(vw, vh);
      const fueraDePantalla = (1 - estado.subida) * (vh - caja.y0 + 24);
      const arco = pathArco(caja, estado.apertura, fueraDePantalla);
      // Rectángulo completo menos el arco (regla evenodd): el arco queda transparente.
      fondo.style.clipPath = `path(evenodd, 'M0,0 H${vw} V${vh} H0 Z ${arco}')`;
    };
    dibujar();
    window.addEventListener('resize', dibujar);

    // Contenido del hero que se recoloca mientras la ventana se abre
    const medioHero = document.querySelector<HTMLElement>('.v3-hero-media-inner');

    const ctx = gsap.context(() => {
      gsap.set('.v3-intro-linea-in', { yPercent: 110 });
      gsap.set('.v3-intro-regla', { scaleX: 0 });
      // El video arranca desplazado para que el rostro quede dentro de la ventana y se recoloca de
      // forma continua (sin cortes ni deformación) mientras la ventana se abre.
      if (medioHero) gsap.set(medioHero, { scale: 1.08, yPercent: 12 });

      const tl = gsap.timeline({ paused: true });

      tl.to('.v3-intro-linea-in', { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.09 }, 0)
        .to('.v3-intro-regla', { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0.1)
        .to(estado, { subida: 1, duration: 1.25, ease: 'power3.out', onUpdate: dibujar }, 0.75)
        .to(
          '.v3-intro-linea-in',
          { yPercent: -110, duration: 0.7, ease: 'power3.in', stagger: 0.05 },
          2.15,
        )
        .to('.v3-intro-regla', { scaleX: 0, transformOrigin: 'right center', duration: 0.6, ease: 'power2.in' }, 2.15)
        .to(estado, { apertura: 1, duration: 1.6, ease: 'expo.inOut', onUpdate: dibujar }, 2.25);

      if (medioHero) tl.to(medioHero, { scale: 1, yPercent: 0, duration: 1.6, ease: 'expo.inOut' }, 2.25);

      tl.call(
        () => {
          if (!cancelado) onReveal();
        },
        undefined,
        3.3,
      ).call(() => {
        if (cancelado) return;
        if (medioHero) gsap.set(medioHero, { clearProps: 'transform' });
        restaurarScroll();
        setOculto(true);
        onDone();
      });

      Promise.all([...recursosCriticos.map(precargar), esperarVideo(), document.fonts?.ready]).then(() => {
        if (!cancelado) tl.play();
      });
    }, capa);

    return () => {
      cancelado = true;
      window.removeEventListener('resize', dibujar);
      ctx.revert();
      if (medioHero) gsap.set(medioHero, { clearProps: 'transform' });
      restaurarScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (oculto) return null;

  return (
    <div ref={capaRef} className="fixed inset-x-0 top-0 h-[100svh] z-[100] overflow-hidden" aria-hidden="true">
      <div
        ref={fondoRef}
        className="absolute inset-0 bg-gradient-to-b from-[#113C8A] to-[#155CCB]"
        style={{ clipPath: 'inset(0)' }}
      />

      <div className="absolute inset-x-0 top-[10svh] md:top-[12svh] flex flex-col items-center text-center px-6">
        <span className="v3-linea">
          <span className="v3-intro-linea-in v3-serif block text-white text-3xl md:text-5xl leading-[1.15]">
            Bienvenido a la <strong className="!font-semibold">RUTA EMI</strong>
          </span>
        </span>
        <span className="v3-intro-regla mt-6 block h-px w-24 bg-white/50 origin-left" />
      </div>
    </div>
  );
}
