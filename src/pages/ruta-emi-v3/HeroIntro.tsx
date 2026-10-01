import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import heroDoctora from '../../assets/hero-doctora-landing.png';

interface HeroIntroProps {
  /** Se dispara en cuanto la ventana termina de cubrir toda la pantalla (arranca el texto del hero real). */
  onExpanded: () => void;
  /** Se dispara cuando la capa de introducción terminó su fade-out y puede desmontarse. */
  onFinished: () => void;
}

function pathArco(width: number, height: number, radius: number, vw: number, vh: number) {
  const cx = vw / 2;
  const bottomY = vh;
  const left = cx - width / 2;
  const right = cx + width / 2;
  const topY = bottomY - height;
  const r = Math.max(0, Math.min(radius, width / 2));

  if (r < 0.5) {
    return `M ${left},${bottomY} L ${left},${topY} L ${right},${topY} L ${right},${bottomY} Z`;
  }

  return `M ${left},${bottomY} L ${left},${topY + r} A ${r},${r} 0 0 1 ${left + r},${topY} L ${
    right - r
  },${topY} A ${r},${r} 0 0 1 ${right},${topY + r} L ${right},${bottomY} Z`;
}

export function HeroIntro({ onExpanded, onFinished }: HeroIntroProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [oculto, setOculto] = useState(false);
  const [interactivoNulo, setInteractivoNulo] = useState(false);

  useEffect(() => {
    const prefiereMovimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefiereMovimientoReducido) {
      onExpanded();
      onFinished();
      setOculto(true);
      return;
    }

    const html = document.documentElement;
    const overflowPrevio = html.style.overflow;
    html.style.overflow = 'hidden';

    const restaurarScroll = () => {
      html.style.overflow = overflowPrevio;
    };

    let cancelado = false;
    let tl: gsap.core.Timeline | null = null;

    const iniciar = () => {
      if (cancelado || !pathRef.current) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const esMovil = vw < 768;
      const anchoInicial = esMovil ? 130 : 240;
      const altoInicial = esMovil ? 210 : 340;

      const estado = { width: anchoInicial, height: altoInicial, radius: anchoInicial / 2 };
      const path = pathRef.current;
      path.setAttribute('d', pathArco(estado.width, estado.height, estado.radius, vw, vh));

      tl = gsap.timeline();

      tl.to(estado, {
        width: vw,
        height: vh,
        radius: 0,
        duration: 2.3,
        ease: 'power3.out',
        onUpdate: () => {
          path.setAttribute('d', pathArco(estado.width, estado.height, estado.radius, vw, vh));
        },
      })
        .call(() => {
          if (cancelado) return;
          restaurarScroll();
          setInteractivoNulo(true);
          onExpanded();
        })
        .to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power1.out' })
        .call(() => {
          if (cancelado) return;
          setOculto(true);
          onFinished();
        });
    };

    const img = new Image();
    img.src = heroDoctora;
    if (img.complete) {
      iniciar();
    } else {
      img.onload = iniciar;
      img.onerror = iniciar;
    }

    return () => {
      cancelado = true;
      tl?.kill();
      restaurarScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (oculto) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[100] bg-[#0A1428] overflow-hidden ${interactivoNulo ? 'pointer-events-none' : ''}`}
      aria-hidden="true"
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-intro-arco" clipPathUnits="userSpaceOnUse">
            <path ref={pathRef} d="M0,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ clipPath: 'url(#hero-intro-arco)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1428] via-[#0D2967] to-[#EFF1F5]" />
        <img
          src={heroDoctora}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-0 right-0 md:right-[22%] h-[85%] w-auto max-w-none object-contain object-bottom select-none"
        />
      </div>
    </div>
  );
}
