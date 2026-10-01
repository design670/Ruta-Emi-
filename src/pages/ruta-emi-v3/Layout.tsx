import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ChevronRight, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RUTA_EMI_URL } from './content';
import logoMark from '../../assets/logo-ruta-emi-mark.svg';
import logoScp from '../../assets/v3/scp-logo.png';
import './v3.css';

gsap.registerPlugin(ScrollTrigger);

export const INICIO_V3 = '/ruta-emi-v3';

export const enlacesV3 = [
  { label: 'Qué es la Ruta EMI', href: '/ruta-emi-v3/que-es-la-ruta-emi' },
  { label: 'Curso', href: '/ruta-emi-v3/curso' },
  { label: 'Casos clínicos', href: '/ruta-emi-v3/casos-clinicos' },
  { label: 'Recursos', href: '/ruta-emi-v3/recursos' },
];

/** Estilo en línea para el botón píldora con relleno navy (sobre fondos claros). */
export const botonNavy = {
  ['--v3-relleno' as string]: '#0A1428',
  ['--v3-relleno-texto' as string]: '#fff',
};

/** Píldora blanca de navegación (escritorio). */
export function NavPildora() {
  return (
    <nav className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-1.5" aria-label="Principal">
      {enlacesV3.slice(1).map((enlace) => (
        <Link
          key={enlace.href}
          to={enlace.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#0D2967] px-4 py-1.5 rounded-full hover:bg-slate-100 transition"
        >
          {enlace.label}
          <ChevronRight size={14} />
        </Link>
      ))}
    </nav>
  );
}

/** Cabecera fija de las páginas internas: siempre visible; transparente sobre el hero, sólida al avanzar. */
export function CabeceraV3({ sobreClaro = false }: { sobreClaro?: boolean }) {
  const cabeceraRef = useRef<HTMLElement>(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alDesplazar = () => {
      const cabecera = cabeceraRef.current;
      if (!cabecera) return;
      cabecera.dataset.solido = String(window.scrollY > window.innerHeight * 0.45);
    };
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  useEffect(() => {
    if (!menuAbierto) return;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuAbierto(false);
    };
    window.addEventListener('keydown', alPulsar);
    return () => {
      html.style.overflow = '';
      window.removeEventListener('keydown', alPulsar);
    };
  }, [menuAbierto]);

  return (
    <>
      <header
        ref={cabeceraRef}
        data-solido="false"
        className={`v3-cabecera fixed top-0 inset-x-0 z-50 data-[solido=true]:bg-white/95 data-[solido=true]:text-[#0A1428] data-[solido=true]:backdrop-blur group ${
          sobreClaro ? 'text-[#0A1428]' : 'text-white'
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-[max(2.5rem,calc((100%_-_1320px)/2))] h-[68px] md:h-[84px]">
          <Link to={INICIO_V3} aria-label="Ruta EMI — inicio" className="flex-shrink-0 flex flex-col leading-none">
            <img
              src={logoMark}
              alt="Ruta EMI"
              className={`h-7 md:h-8 w-auto ${
                sobreClaro ? '' : '[filter:brightness(0)_invert(1)] group-data-[solido=true]:[filter:none]'
              }`}
            />
            <span className="mt-1.5 text-[10px] md:text-[11px] font-medium tracking-[0.02em] whitespace-nowrap">Enfermedad Meningocócica Invasiva</span>
          </Link>

          <NavPildora />

          <button
            type="button"
            onClick={() => setMenuAbierto(true)}
            aria-expanded={menuAbierto}
            aria-controls="v3-menu-interno"
            className="md:hidden flex items-center gap-3 text-[13px] tracking-wide py-2"
          >
            Menú
            <span className="flex flex-col gap-[6px]" aria-hidden="true">
              <span className="block w-7 h-px bg-current" />
              <span className="block w-7 h-px bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Menú móvil a pantalla completa. Va fuera del header: su backdrop-filter recortaría un fixed. */}
      <div
        id="v3-menu-interno"
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        aria-hidden={!menuAbierto}
        className={`fixed inset-0 z-[60] bg-[#0A1428] text-white overflow-y-auto transition-[clip-path,visibility] duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuAbierto ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[68px]">
          <img src={logoMark} alt="" className="h-7 w-auto [filter:brightness(0)_invert(1)]" />
          <button
            type="button"
            onClick={() => setMenuAbierto(false)}
            tabIndex={menuAbierto ? 0 : -1}
            className="flex items-center gap-3 text-[13px] tracking-wide py-2"
          >
            Cerrar
            <span className="relative block w-7 h-7" aria-hidden="true">
              <span className="absolute top-1/2 left-0 w-7 h-px bg-current rotate-45" />
              <span className="absolute top-1/2 left-0 w-7 h-px bg-current -rotate-45" />
            </span>
          </button>
        </div>
        <nav className="px-5 pt-8 pb-12 flex flex-col">
          {enlacesV3.map((enlace, i) => (
            <Link
              key={enlace.href}
              to={enlace.href}
              onClick={() => setMenuAbierto(false)}
              tabIndex={menuAbierto ? 0 : -1}
              className="flex items-baseline gap-5 py-4 border-b border-white/15 overflow-hidden"
            >
              <span
                className={`v3-serif block text-3xl leading-[1.1] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  menuAbierto ? 'translate-y-0' : 'translate-y-[130%]'
                }`}
                style={{ transitionDelay: menuAbierto ? `${350 + i * 70}ms` : '0ms' }}
              >
                {enlace.label}
              </span>
            </Link>
          ))}
          <a
            href={RUTA_EMI_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={menuAbierto ? 0 : -1}
            className="v3-boton mt-10 self-start"
          >
            Consultar la Ruta EMI
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
    </>
  );
}

/** Pie: logos de la Ruta EMI y de la SCP, texto de apoyo y las secciones; en las páginas internas lleva el remate ondulado de la SCP. */
export function PieV3({ pegado = false }: { pegado?: boolean }) {
  return (
    <footer className="relative bg-[#0A1428] text-white">
      {!pegado && (
        <svg
          className="absolute inset-x-0 top-0 w-full -translate-y-[calc(100%-1px)] pointer-events-none"
          style={{ height: 'clamp(40px, 7vw, 132px)' }}
          viewBox="0 0 1886 132"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 C150,68 290,72 420,72 C800,70 1100,50 1300,42 C1450,35 1550,32 1620,32 C1720,32 1820,38 1886,43 L1886,132 L0,132 Z" fill="#0A1428" />
        </svg>
      )}
      <div className="px-5 md:px-10 pt-16 pb-8">
        <div className="max-w-[1320px] mx-auto grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <img src={logoMark} alt="Ruta EMI" className="h-9 w-auto [filter:brightness(0)_invert(1)]" />
            <span className="h-9 w-px bg-white/25" aria-hidden="true" />
            <img src={logoScp} alt="Sociedad Colombiana de Pediatría" className="h-14 w-auto" />
          </div>
          <p className="max-w-sm text-center text-sm leading-relaxed text-white/60">
            Una ruta clínica para sospechar a tiempo, actuar con criterio y prevenir la Enfermedad Meningocócica
            Invasiva en niños y adolescentes.
          </p>
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3" aria-label="Pie">
            {enlacesV3.map((enlace) => (
              <Link key={enlace.href} to={enlace.href} className="text-sm text-white/70 hover:text-[#2BBCEA] transition-colors">
                {enlace.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="max-w-[1320px] mx-auto mt-14 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Ruta EMI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

interface HeroInternoProps {
  titulo: string[];
  texto?: string;
  imagen: string;
  /** object-position de la fotografía. */
  posicion?: string;
  volver?: { label: string; href: string };
  /** Color del remate curvo: debe coincidir con el fondo de la sección que sigue al hero. */
  colorCurva?: string;
  /**
   * Fotografía de estudio sobre fondo de color plano: en lugar del velo navy se usa un velo de este
   * color (el del fondo de la foto) bajo el texto, y el texto va apilado a la izquierda.
   */
  fondoPlano?: string;
}

/** Hero de página interna: misma fotografía a sangre, degradado y tipografía que el home, a menor escala. */
export function HeroInterno({
  titulo,
  texto,
  imagen,
  posicion = '50% 35%',
  volver,
  colorCurva = '#FFFFFF',
  fondoPlano,
}: HeroInternoProps) {
  const claro = Boolean(fondoPlano);
  const destino = volver ?? { label: 'Volver al inicio', href: INICIO_V3 };
  return (
    <section
      className={`v3-hero relative h-[80svh] min-h-[600px] max-h-[780px] overflow-hidden text-white ${
        claro ? '' : 'bg-[#0A1428]'
      }`}
      style={claro ? { backgroundColor: fondoPlano } : undefined}
    >
      <div className="v3-hero-media absolute inset-0 will-change-transform">
        {/* Foto de estudio: en móvil se muestra completa (la persona cabe en el ancho) sobre el color de fondo */}
        <img
          src={imagen}
          alt=""
          className={
            claro
              ? 'absolute inset-x-0 top-0 w-full h-[115vw] md:inset-y-0 md:h-full object-cover [mask-image:linear-gradient(to_bottom,#000_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000_70%,transparent)] md:[mask-image:none] md:[-webkit-mask-image:none] [object-position:50%_50%] md:[object-position:var(--pos-hero)]'
              : 'absolute inset-0 w-full h-full object-cover'
          }
          style={claro ? ({ ['--pos-hero' as string]: posicion } as CSSProperties) : { objectPosition: posicion }}
        />
        {claro ? (
          // Velo del color del fondo bajo el texto blanco: lateral en escritorio y desde abajo en
          // móvil, donde la persona ocupa todo el ancho
          <>
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background: `linear-gradient(to right, color-mix(in srgb, ${fondoPlano} 55%, transparent), color-mix(in srgb, ${fondoPlano} 20%, transparent) 50%, transparent)`,
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background: `linear-gradient(to top, ${fondoPlano} 0%, ${fondoPlano} 28%, color-mix(in srgb, ${fondoPlano} 60%, transparent) 48%, transparent 68%)`,
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/90 via-[#0A1428]/35 to-[#0A1428]/55" />
        )}
      </div>

      {/* Remate curvo: la fotografía baja en arco sobre el fondo de la página */}
      <svg
        className="v3-hero-curva absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 Q50,200 100,0 L100,100 L0,100 Z" fill={colorCurva} />
      </svg>

      <div className="v3-hero-pie absolute inset-x-0 bottom-0 px-5 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          <Link
            to={destino.href}
            className={`v3-hero-fade inline-flex items-center gap-2 text-[13px] transition-colors mb-7 ${
              claro ? 'text-white/85 hover:text-white' : 'text-white/65 hover:text-white'
            }`}
          >
            <ArrowLeft size={14} />
            {destino.label}
          </Link>
          {/* Sobre foto clara el texto va apilado a la izquierda, para no pisar a la persona */}
          <div className={claro ? 'flex flex-col gap-6' : 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'}>
            <h1 className="v3-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] max-w-3xl">
              {titulo.map((linea) => (
                <span key={linea} className="v3-linea">
                  <span className="v3-hero-l">{linea}</span>
                </span>
              ))}
            </h1>
            {texto && (
              <p
                className={`v3-hero-fade text-sm md:text-[15px] leading-relaxed ${
                  claro ? 'max-w-[22rem] text-white' : 'lg:max-w-sm lg:pb-2 text-white/80'
                }`}
              >
                {texto}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Envoltorio de las páginas internas: cabecera, pie y las mismas animaciones de entrada del home
 * (líneas que suben, fundidos, cortinas sobre las imágenes y parallax).
 */
export function PaginaV3({ children, heroClaro = false }: { children: ReactNode; heroClaro?: boolean }) {
  const raizRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const raiz = raizRef.current;
    if (!raiz) return;
    window.scrollTo(0, 0);

    const mm = gsap.matchMedia(raiz);
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap
        .timeline({ delay: 0.15 })
        .fromTo('.v3-hero-media', { scale: 1.12 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0)
        .from('.v3-hero-l', { yPercent: 110, duration: 1.2, ease: 'power4.out', stagger: 0.1 }, 0.15)
        .from('.v3-hero-fade', { autoAlpha: 0, y: 20, duration: 1, ease: 'power3.out', stagger: 0.1 }, 0.4);

      gsap.to('.v3-hero-media', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '.v3-hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      gsap.utils.toArray<HTMLElement>('[data-lineas]').forEach((el) => {
        gsap.from(el.querySelectorAll('.v3-l'), {
          yPercent: 110,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 28,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-grupo]').forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 32,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-revela]').forEach((el) => {
        gsap
          .timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } })
          .fromTo(
            el,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out' },
          )
          .fromTo(el.querySelector('img'), { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
      });
    });

    const alCargar = () => ScrollTrigger.refresh();
    window.addEventListener('load', alCargar);
    return () => {
      window.removeEventListener('load', alCargar);
      mm.revert();
    };
  }, []);

  return (
    <div ref={raizRef} className="v3 min-h-screen flex flex-col overflow-x-clip">
      <CabeceraV3 sobreClaro={heroClaro} />
      <main className="flex-1">{children}</main>
      <PieV3 />
    </div>
  );
}

/** Titular por líneas con máscara (para usar dentro de un elemento con data-lineas). */
export function Lineas({ lineas, clase = 'v3-l' }: { lineas: string[]; clase?: string }) {
  return (
    <>
      {lineas.map((linea) => (
        <span key={linea} className="v3-linea">
          <span className={clase}>{linea}</span>
        </span>
      ))}
    </>
  );
}

/** Estado de la ventana embebida de la Ruta EMI (abrir/cerrar desde cualquier botón de la página). */
export function useVentanaRuta() {
  const [abierta, setAbierta] = useState(false);
  // El embebido sigue montado mientras la ventana se cierra, para que el pliegue no dé un salto
  const [montada, setMontada] = useState(false);

  return {
    abierta,
    montada,
    alternar: () => {
      if (!abierta) setMontada(true);
      setAbierta(!abierta);
    },
    cerrar: () => setAbierta(false),
    desmontar: () => setMontada(false),
  };
}

/** Ventana embebida de la Ruta EMI: se despliega dentro de la página, sin abrir otra pestaña. */
export function VentanaRuta({ control, id }: { control: ReturnType<typeof useVentanaRuta>; id: string }) {
  const { abierta, montada, cerrar, desmontar } = control;

  return (
    <div
      id={id}
      className={`grid ${abierta ? 'grid-rows-[1fr] pt-12 md:pt-16' : 'grid-rows-[0fr]'}`}
      style={{
        transition:
          'grid-template-rows 1200ms cubic-bezier(0.65, 0, 0.35, 1), padding 1200ms cubic-bezier(0.65, 0, 0.35, 1)',
      }}
      onTransitionEnd={(e) => {
        // La altura cambia: hay que recalcular los disparadores de scroll de las secciones siguientes
        if (e.target !== e.currentTarget || e.propertyName !== 'grid-template-rows') return;
        if (!abierta) desmontar();
        ScrollTrigger.refresh();
        // La Ruta embebida ocupa casi toda la pantalla: se lleva la ventana al borde superior
        // para que quepa entera y no quede cortada por abajo.
        if (abierta) {
          const destino = e.currentTarget.querySelector('[data-ventana]');
          if (destino) {
            window.scrollTo({
              top: destino.getBoundingClientRect().top + window.scrollY - 12,
              behavior: 'smooth',
            });
          }
        }
      }}
    >
      <div className="overflow-hidden">
        <div
          data-ventana
          className={`max-w-[1320px] mx-auto mb-10 rounded-2xl overflow-hidden border border-[#0A1428]/10 shadow-xl bg-white transition-[opacity,transform] ease-[cubic-bezier(0.65,0,0.35,1)] ${
            abierta ? 'opacity-100 translate-y-0 duration-[1000ms] delay-200' : 'opacity-0 translate-y-6 duration-[700ms]'
          }`}
        >
          <div className="flex items-center justify-between bg-[#0A1428] text-white pl-5 pr-3 py-3">
            <span className="v3-etiqueta text-white/70">Ruta EMI</span>
            <button type="button" onClick={cerrar} className="v3-boton !py-2 !px-4 text-white">
              Cerrar
              <X size={14} />
            </button>
          </div>
          {montada && (
            <iframe src={RUTA_EMI_URL} title="Ruta EMI" className="w-full h-[calc(100svh-6rem)] min-h-[560px] block" />
          )}
        </div>
      </div>
    </div>
  );
}
