import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Intro } from './Intro';
import { PieV3, VentanaRuta, enlacesV3, useVentanaRuta } from './Layout';
import { RUTA_EMI_URL, modulosCurso } from './content';
import logoMark from '../../assets/logo-ruta-emi-mark.svg';
import videoHero from '../../assets/v3/hero.mp4';
import imgReconoce from '../../assets/v3/reconoce.jpg';
import imgPilarReconoce from '../../assets/v3/pilar-reconoce.jpg';
import imgActua from '../../assets/v3/actua.jpg';
import imgPreviene from '../../assets/v3/previene.jpg';
import imgCierre from '../../assets/v3/hero.jpg';
import imgCurso from '../../assets/v3/curso.jpg';
import './v3.css';

gsap.registerPlugin(ScrollTrigger);

const enlacesMenu = enlacesV3;

const pilares = [
  {
    numero: '01',
    nombre: 'Reconoce',
    titulo: ['La sospecha empieza', 'en los detalles.'],
    texto: 'Los primeros signos pueden ser inespecíficos. Reconocerlos a tiempo es el punto de partida de toda la ruta.',
    imagen: imgPilarReconoce,
    posicion: '50% 32%',
  },
  {
    numero: '02',
    nombre: 'Actúa',
    titulo: ['Cada decisión de la', 'primera hora cuenta.'],
    texto: 'Actuar a tiempo cambia el pronóstico y los desenlaces del paciente.',
    imagen: imgActua,
    posicion: '40% 30%',
  },
  {
    numero: '03',
    nombre: 'Previene',
    titulo: ['La mejor intervención', 'llega antes.'],
    texto: 'Vacunación y quimioprofilaxis como estrategias clave para reducir la incidencia de la EMI.',
    imagen: imgPreviene,
    posicion: '50% 30%',
  },
];

const ANCLA_QUE_ES = '#que-es';

const manifiesto =
  'Reconocimiento, respuesta y prevención de la enfermedad meningocócica invasora: una ruta clínica para que cada minuto entre la sospecha y la acción juegue a favor del paciente.';

function Lineas({ lineas, clase = 'v3-l' }: { lineas: string[]; clase?: string }) {
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

/** Imagen + degradado del hero. Se usa igual en la intro y en el hero para que la apertura sea continua. */
function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Con «reducir movimiento» se deja el primer fotograma fijo en lugar de reproducir el video
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return;
    }
    // El autoplay del atributo no siempre arranca (pestaña en segundo plano, política del navegador):
    // se pide la reproducción por código al montar, al tener datos y al volver a la pestaña.
    video.muted = true;
    const reproducir = () => {
      video.play().catch(() => {});
    };
    const alCambiarVisibilidad = () => {
      if (document.visibilityState === 'visible') reproducir();
    };
    reproducir();
    video.addEventListener('loadeddata', reproducir);
    document.addEventListener('visibilitychange', alCambiarVisibilidad);
    return () => {
      video.removeEventListener('loadeddata', reproducir);
      document.removeEventListener('visibilitychange', alCambiarVisibilidad);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={videoHero}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: '50% 35%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/90 via-[#0A1428]/25 to-[#0A1428]/60" />
    </>
  );
}

export default function RutaEmiV3Landing() {
  const raizRef = useRef<HTMLDivElement>(null);
  const cabeceraRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const heroTlRef = useRef<gsap.core.Timeline | null>(null);
  const menuTlRef = useRef<gsap.core.Timeline | null>(null);
  const ubicacion = useLocation();
  const llegadaConAncla = useRef(window.location.hash === ANCLA_QUE_ES);
  // Si se llega desde otra página con el ancla, se entra directo a la sección, sin la intro
  const [introActiva, setIntroActiva] = useState(() => window.location.hash !== ANCLA_QUE_ES);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const consulta = useVentanaRuta();

  const alRevelar = useCallback(() => {
    heroTlRef.current?.play();
  }, []);

  const alTerminarIntro = useCallback(() => {
    setIntroActiva(false);
    ScrollTrigger.refresh();
  }, []);

  useLayoutEffect(() => {
    const raiz = raizRef.current;
    if (!raiz) return;

    // Las animaciones siguen el reloj real: si el navegador entrega pocos fotogramas (pestaña en
    // segundo plano, equipo lento) la intro no se alarga ni deja el scroll bloqueado de más.
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia(raiz);

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero: textos y navegación entran coordinados con el final de la apertura
      gsap.set('.v3-hero-l', { yPercent: 110 });
      gsap.set('.v3-hero-fade', { autoAlpha: 0, y: 24 });
      gsap.set(cabeceraRef.current, { autoAlpha: 0, y: -20 });

      heroTlRef.current = gsap
        .timeline({ paused: true })
        .to('.v3-hero-l', { yPercent: 0, duration: 1.3, ease: 'power4.out', stagger: 0.12 }, 0)
        .to(cabeceraRef.current, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.25)
        .to('.v3-hero-fade', { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, 0.45);
      // Sin intro (entrada con ancla) nadie dispara la línea de tiempo: se deja el hero ya revelado
      if (window.location.hash === ANCLA_QUE_ES) heroTlRef.current.progress(1);

      gsap.to('.v3-hero-media', {
        yPercent: 14,
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: '.v3-hero', start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.v3-hero-contenido', {
        yPercent: -18,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: '.v3-hero', start: '25% top', end: '85% top', scrub: true },
      });

      // Titulares por líneas
      gsap.utils.toArray<HTMLElement>('[data-lineas]').forEach((el) => {
        gsap.from(el.querySelectorAll('.v3-l'), {
          yPercent: 110,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 86%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-fade]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-grupo]').forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 36,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: 'top 84%' },
        });
      });

      // Manifiesto: las palabras se encienden con el scroll
      gsap.fromTo(
        '.v3-palabra',
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: { trigger: '.v3-manifiesto-texto', start: 'top 78%', end: 'bottom 52%', scrub: 0.4 },
        },
      );

      // Imágenes que se descubren con una cortina + escala interior
      gsap.utils.toArray<HTMLElement>('[data-revela]').forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } });
        tl.fromTo(
          el,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out' },
        ).fromTo(el.querySelector('img'), { scale: 1.3 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -9 },
          {
            yPercent: 9,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });

      // Curso: la imagen pasa de tarjeta redondeada a sangre completa
      gsap.fromTo(
        '.v3-curso-media',
        { clipPath: 'inset(7% 13% 7% 13% round 28px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          scrollTrigger: { trigger: '.v3-curso-media', start: 'top 92%', end: 'top 18%', scrub: 0.5 },
        },
      );

      // Cabecera: siempre visible; cambia de tono fuera del hero
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const cabecera = cabeceraRef.current;
          if (!cabecera) return;
          const y = self.scroll();
          cabecera.dataset.solido = String(y > window.innerHeight * 0.85);
        },
      });

      return () => {
        heroTlRef.current = null;
      };
    });

    // Pilares: escena fijada (solo escritorio y con animaciones activas)
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const textos = gsap.utils.toArray<HTMLElement>('.v3-pilar-texto');
      const imagenes = gsap.utils.toArray<HTMLElement>('.v3-pilar-img');
      if (textos.length < 2) return;

      gsap.set(textos.slice(1), { autoAlpha: 0, y: 48 });
      gsap.set(imagenes.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '.v3-pilares',
          start: 'top top',
          end: () => `+=${window.innerHeight * 2.2}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < textos.length; i += 1) {
        const inicio = i - 1;
        tl.to(textos[i - 1], { autoAlpha: 0, y: -48, duration: 0.35 }, inicio + 0.1)
          .to(imagenes[i], { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, inicio)
          .fromTo(imagenes[i].querySelector('img'), { scale: 1.3 }, { scale: 1, duration: 1 }, inicio)
          .to(imagenes[i - 1].querySelector('img'), { yPercent: -12, duration: 1 }, inicio)
          .to(textos[i], { autoAlpha: 1, y: 0, duration: 0.4 }, inicio + 0.55);
      }
      tl.fromTo('.v3-pilares-progreso', { scaleX: 1 / textos.length }, { scaleX: 1, duration: tl.duration() }, 0);
    });

    // Menú a pantalla completa
    const menu = menuRef.current;
    if (menu) {
      const ctxMenu = gsap.context(() => {
        menuTlRef.current = gsap
          .timeline({ paused: true })
          .set(menu, { visibility: 'visible' })
          .fromTo(
            menu,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.95, ease: 'expo.inOut' },
          )
          .from('.v3-menu-l', { yPercent: 110, duration: 0.9, ease: 'power4.out', stagger: 0.07 }, '-=0.4')
          .from('.v3-menu-fade', { autoAlpha: 0, y: 20, duration: 0.7, ease: 'power3.out', stagger: 0.08 }, '-=0.7')
          .fromTo('.v3-menu-img', { scale: 1.25 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, 0.2);
      }, menu);
      mm.add('all', () => () => ctxMenu.revert());
    }

    const alCargar = () => ScrollTrigger.refresh();
    window.addEventListener('load', alCargar);

    return () => {
      window.removeEventListener('load', alCargar);
      menuTlRef.current = null;
      mm.revert();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  useEffect(() => {
    const tl = menuTlRef.current;
    if (!tl) return;
    const html = document.documentElement;
    if (menuAbierto) {
      html.style.overflow = 'hidden';
      tl.timeScale(1).play();
    } else {
      // La intro gestiona su propio bloqueo de scroll mientras está activa
      if (!introActiva) html.style.overflow = '';
      tl.timeScale(1.5).reverse();
    }
  }, [menuAbierto, introActiva]);

  useEffect(() => {
    if (!menuAbierto) return;
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuAbierto(false);
    };
    window.addEventListener('keydown', alPulsar);
    return () => window.removeEventListener('keydown', alPulsar);
  }, [menuAbierto]);

  useEffect(
    () => () => {
      document.documentElement.style.overflow = '';
    },
    [],
  );

  // Enlaces a "¿Qué es la Ruta EMI?": bajan hasta la sección del home
  useEffect(() => {
    if (ubicacion.hash !== ANCLA_QUE_ES || introActiva) return;
    setMenuAbierto(false);
    // Al llegar desde otra página se salta directo; dentro del home el desplazamiento es suave
    const id = window.setTimeout(() => {
      const suave = !llegadaConAncla.current;
      llegadaConAncla.current = false;
      document.getElementById('que-es')?.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
    }, 60);
    return () => window.clearTimeout(id);
  }, [ubicacion.key, ubicacion.hash, introActiva]);

  return (
    <div ref={raizRef} className="v3 min-h-screen overflow-x-clip">
      {introActiva && (
        <Intro recursosCriticos={[]} onReveal={alRevelar} onDone={alTerminarIntro} />
      )}

      {/* Cabecera */}
      <header
        ref={cabeceraRef}
        data-solido="false"
        className="v3-cabecera fixed top-0 inset-x-0 z-50 text-white data-[solido=true]:bg-white/95 data-[solido=true]:text-[#0A1428] data-[solido=true]:backdrop-blur group"
      >
        <div className="flex items-center justify-between px-5 md:px-[max(2.5rem,calc((100%_-_1320px)/2))] h-[68px] md:h-[84px]">
          <Link to="/ruta-emi-v3" aria-label="Ruta EMI — inicio" className="flex-shrink-0 flex flex-col leading-none">
            <img
              src={logoMark}
              alt="Ruta EMI"
              className="h-7 md:h-8 w-auto [filter:brightness(0)_invert(1)] group-data-[solido=true]:[filter:none]"
            />
            <span className="mt-1.5 text-[10px] md:text-[11px] font-medium tracking-[0.02em] whitespace-nowrap">Enfermedad Meningocócica Invasiva</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-1.5" aria-label="Principal">
            {enlacesMenu.slice(1).map((enlace) => (
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

          <button
            type="button"
            onClick={() => setMenuAbierto(true)}
            aria-expanded={menuAbierto}
            aria-controls="v3-menu"
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

      {/* Menú a pantalla completa */}
      <div
        ref={menuRef}
        id="v3-menu"
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        className="fixed inset-0 z-[60] invisible bg-[#0A1428] text-white overflow-y-auto"
      >
        <div className="flex items-center justify-between px-5 md:px-10 h-[68px] md:h-[84px]">
          <img src={logoMark} alt="" className="h-7 md:h-8 w-auto [filter:brightness(0)_invert(1)]" />
          <button
            type="button"
            onClick={() => setMenuAbierto(false)}
            className="flex items-center gap-3 text-[13px] tracking-wide py-2"
          >
            Cerrar
            <span className="relative block w-7 h-7" aria-hidden="true">
              <span className="absolute top-1/2 left-0 w-7 h-px bg-current rotate-45" />
              <span className="absolute top-1/2 left-0 w-7 h-px bg-current -rotate-45" />
            </span>
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 px-5 md:px-10 pt-8 md:pt-14 pb-12">
          <nav className="lg:col-span-7 flex flex-col">
            {enlacesMenu.map((enlace) => (
              <Link
                key={enlace.href}
                to={enlace.href}
                onClick={() => setMenuAbierto(false)}
                className="group/enlace flex items-baseline gap-5 py-3 md:py-4 border-b border-white/15"
              >
                <span className="v3-linea v3-serif text-3xl md:text-5xl leading-[1.1] transition-transform duration-500 group-hover/enlace:translate-x-4">
                  <span className="v3-menu-l">
                    {enlace.label}
                  </span>
                </span>
              </Link>
            ))}
            <a
              href={RUTA_EMI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-menu-fade v3-boton mt-10 self-start"
            >
              Consultar la Ruta EMI
              <ArrowUpRight size={15} />
            </a>
          </nav>
          <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <div className="v3-marco-arco aspect-[3/4]">
              <img src={imgPreviene} alt="" className="v3-menu-img w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="v3-hero relative h-[100svh] overflow-hidden bg-[#0A1428] text-white">
          <div className="v3-hero-media absolute inset-0 will-change-transform">
            <div className="v3-hero-media-inner absolute inset-0 will-change-transform">
              <HeroMedia />
            </div>
          </div>

          <div className="v3-hero-contenido absolute inset-x-0 bottom-0 px-5 md:px-10 pb-[calc(2rem+40px)] md:pb-[calc(3rem+70px)]">
            <div className="max-w-[1320px] mx-auto">
              <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
                <h1 className="v3-serif text-[2.4rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[1.04]">
                  <span className="v3-linea">
                    <span className="v3-hero-l">
                      <span className="v3-semi text-[#2BBCEA]">Ruta EMI:</span> De la sospecha
                    </span>
                  </span>
                  <span className="v3-linea">
                    <span className="v3-hero-l">a la supervivencia.</span>
                  </span>
                </h1>
                <div className="xl:max-w-[300px] xl:pb-3 flex flex-col items-start gap-5">
                  <p className="v3-hero-fade text-sm md:text-[15px] leading-relaxed text-white/80">
                    Una ruta clínica para reconocer, responder y prevenir la EMI.
                  </p>
                  <Link to={`/ruta-emi-v3${ANCLA_QUE_ES}`} className="v3-hero-fade v3-boton border-white bg-white text-[#0D2967]" style={{ ['--v3-relleno' as string]: '#2BBCEA', ['--v3-relleno-texto' as string]: '#fff' }}>
                    ¿Qué es la Ruta EMI?
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="v3-hero-fade hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <span className="v3-etiqueta text-white/60 [writing-mode:vertical-rl]">Desliza</span>
            <span className="v3-scroll-linea" />
          </div>
        </section>

        {/* Manifiesto */}
        <section className="px-5 md:px-10 pt-16 md:pt-28 pb-16 md:pb-24">
          <div className="max-w-[1320px] mx-auto grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-10 lg:col-start-3">
              <p className="v3-manifiesto-texto v3-serif text-[1.5rem] md:text-[1.875rem] lg:text-[2.5rem] leading-[1.25] max-w-5xl text-[#0A1428]">
                {manifiesto.split(' ').map((palabra, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={i} className="v3-palabra">
                    {palabra}{' '}
                  </span>
                ))}
              </p>
              <div data-fade className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <button
                  type="button"
                  onClick={consulta.alternar}
                  aria-expanded={consulta.abierta}
                  aria-controls="v3-consulta"
                  className="v3-boton self-start text-[#0A1428]"
                  style={{ ['--v3-relleno' as string]: '#0A1428', ['--v3-relleno-texto' as string]: '#fff' }}
                >
                  Consultar la Ruta EMI
                  <ArrowUpRight
                    size={15}
                    className={`transition-transform duration-500 ${consulta.abierta ? 'rotate-90' : ''}`}
                  />
                </button>
                <p className="max-w-sm text-sm leading-relaxed text-[#0A1428]/65">
                  Empiece aquí su recorrido: formación, casos clínicos y recursos reunidos en un solo lugar.
                </p>
              </div>
            </div>
          </div>

          <VentanaRuta control={consulta} id="v3-consulta" />
        </section>

        {/* ¿Qué es la Ruta EMI? — antes página interna; el enlace del hero baja hasta aquí */}
        <section id="que-es" className="bg-[#E7E2D8] px-5 md:px-10 py-14 md:py-16 scroll-mt-6">
          <div className="max-w-[1320px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="lg:-translate-y-8">
                <div data-revela className="aspect-[16/9] lg:aspect-auto lg:h-[min(60vh,500px)] overflow-hidden rounded-2xl">
                  <img
                    src={imgReconoce}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 28%' }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 data-lineas className="v3-serif text-3xl md:text-4xl leading-[1.08] mb-5 md:mb-6">
                <Lineas lineas={['¿Qué es la Ruta EMI?']} />
              </h2>
              <p data-fade className="v3-serif text-lg md:text-xl leading-[1.4] mb-5">
                <span className="v3-semi">La Enfermedad Meningocócica Invasiva (EMI)</span> representa una de las emergencias infecciosas más
                desafiantes en pediatría por su rápida progresión, su potencial para generar desenlaces graves y la
                posibilidad de dejar secuelas que pueden acompañar al niño o adolescente durante toda su vida.
              </p>
              <div data-grupo className="v3-serif space-y-3 text-lg md:text-xl leading-[1.4] mb-7 md:mb-8">
                <p>
                  En este escenario, cada minuto cuenta: reconocer tempranamente los signos de alarma, sospechar la
                  enfermedad y actuar de manera oportuna, puede marcar una diferencia significativa en el pronóstico.
                </p>
              </div>

              <div data-grupo>
                <div>
                  <Link
                    to="/ruta-emi-v3/que-es-la-ruta-emi"
                    className="v3-boton text-[#0A1428]"
                    style={{ ['--v3-relleno' as string]: '#0A1428', ['--v3-relleno-texto' as string]: '#fff' }}
                  >
                    Conoce más
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares — escritorio: escena fijada */}
        <section className="v3-pilares hidden lg:block relative h-screen bg-[#0A1428] text-white overflow-hidden">
          <div className="h-full max-w-[1400px] mx-auto px-10 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-6 relative h-[62vh]">
              {pilares.map((pilar) => (
                <div key={pilar.numero} className="v3-pilar-texto absolute inset-0 flex flex-col justify-center">
                  <p className="v3-etiqueta text-[#2BBCEA] mb-8">
                    {pilar.numero} — {pilar.nombre}
                  </p>
                  <h2 className="v3-serif text-4xl xl:text-5xl leading-[1.08] mb-7">
                    {pilar.titulo.map((linea) => (
                      <span key={linea} className="block">
                        {linea}
                      </span>
                    ))}
                  </h2>
                  <p className="max-w-md text-[15px] leading-relaxed text-white/70">{pilar.texto}</p>
                </div>
              ))}
              <div className="absolute left-0 bottom-0 w-64 h-px bg-white/20">
                <span className="v3-pilares-progreso absolute inset-0 bg-white origin-left" />
              </div>
            </div>
            <div className="col-span-5 col-start-8 relative h-[80vh] v3-marco-arco">
              {pilares.map((pilar) => (
                <div key={pilar.numero} className="v3-pilar-img absolute inset-0 overflow-hidden">
                  <img
                    src={pilar.imagen}
                    alt=""
                    className="w-full h-full object-cover will-change-transform"
                    style={{ objectPosition: pilar.posicion }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares — móvil y tableta: bloques apilados */}
        <section className="lg:hidden bg-[#0A1428] text-white px-5 md:px-10 py-16 space-y-16">
          {pilares.map((pilar) => (
            <article key={pilar.numero}>
              <div data-revela className="v3-marco-arco aspect-[3/4] max-w-md mx-auto">
                <img
                  src={pilar.imagen}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: pilar.posicion }}
                />
              </div>
              <p data-fade className="v3-etiqueta text-[#2BBCEA] mt-9 mb-5">
                {pilar.numero} — {pilar.nombre}
              </p>
              <h2 data-lineas className="v3-serif text-3xl md:text-4xl leading-[1.1] mb-5">
                <Lineas lineas={pilar.titulo} />
              </h2>
              <p data-fade className="max-w-md text-[15px] leading-relaxed text-white/70">
                {pilar.texto}
              </p>
            </article>
          ))}
        </section>

        {/* Curso */}
        <section className="pt-16 md:pt-24">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8 items-end mb-8 md:mb-12">
            <div className="lg:col-span-8">
              <p data-fade className="hidden v3-etiqueta text-[#0D2967]/70 mb-6">
                Curso
              </p>
              <h2 data-lineas className="v3-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
                <Lineas lineas={['Certifíquese en', 'Ruta EMI']} />
              </h2>
            </div>
            <p data-fade className="lg:col-span-4 max-w-sm text-[15px] leading-relaxed text-[#0A1428]/65 lg:pb-3">
              Cuatro módulos con especialistas para llevar la ruta a la práctica clínica, desde la carga de enfermedad
              hasta la prevención.
            </p>
          </div>

          <div className="v3-curso-media relative h-[34vh] md:h-[44vh] min-h-[260px] overflow-hidden">
            <img
              src={imgCurso}
              alt=""
              data-parallax
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover"
              style={{ objectPosition: '50% 34%' }}
            />
          </div>

          <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">
            <h3 data-lineas className="v3-serif text-center text-3xl md:text-4xl leading-[1.08] mb-6 md:mb-8">
              <Lineas lineas={['Conoce a nuestros especialistas']} />
            </h3>
            <div data-grupo>
              {modulosCurso.map((modulo) => (
                <article
                  key={modulo.numero}
                  className="v3-fila v3-fila-hover grid grid-cols-12 gap-4 items-baseline py-7 md:py-9"
                >
                  <span className="col-span-2 md:col-span-1 v3-etiqueta text-[#0D2967]/60">0{modulo.numero}</span>
                  <span className="col-span-10 md:col-span-7 v3-serif text-xl md:text-2xl leading-snug">
                    {modulo.titulo}
                  </span>
                  <span className="col-start-3 col-span-8 md:col-start-auto md:col-span-4 md:text-right text-sm text-[#0A1428]/60">
                    {modulo.docente}
                  </span>
                </article>
              ))}
              <div className="v3-fila pt-10 flex justify-center">
                <Link
                  to="/ruta-emi-v3/curso"
                  className="v3-boton text-[#0A1428]"
                  style={{ ['--v3-relleno' as string]: '#0A1428', ['--v3-relleno-texto' as string]: '#fff' }}
                >
                  Ver curso
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cierre: banner a todo el ancho, pegado al pie, con la parte superior en arco */}
        <section className="v3-cierre relative overflow-hidden bg-[#0A1428] text-white min-h-[540px] md:min-h-[580px] flex items-center">
          <div className="absolute inset-y-0 right-0 w-full md:w-[60%] md:[mask-image:linear-gradient(to_right,transparent,#000_32%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_32%)]">
            <img
              src={imgCierre}
              alt=""
              data-parallax
              className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover"
              style={{ objectPosition: '50% 32%' }}
            />
          </div>
          {/* Velo: parejo en móvil (el texto va sobre la foto) y degradado hacia la izquierda en escritorio */}
          <div className="absolute inset-0 bg-[#0A1428]/60 md:bg-[#0A1428]/0 md:bg-gradient-to-r md:from-[#0A1428]/80 md:via-[#0A1428]/25 md:to-transparent" />

          {/* Remate superior curvo: la sección anterior se hunde en arco sobre el banner (centro más bajo que las esquinas) */}
          <svg
            className="v3-cierre-curva absolute inset-x-0 top-0 w-full z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 L100,0 Q50,200 0,0 Z" fill="#FFFFFF" />
          </svg>

          <div className="relative w-full px-5 md:px-10 pt-24 md:pt-28 pb-14 md:pb-16">
            <div className="max-w-[1320px] mx-auto flex flex-col items-center md:items-start text-center md:text-left">
              <h2 data-lineas className="v3-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] mb-9">
                <Lineas lineas={['Empiece hoy', 'su recorrido.']} />
              </h2>
              <div data-fade className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (!consulta.abierta) consulta.alternar();
                    document.getElementById('v3-consulta')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="v3-boton"
                >
                  Consultar la Ruta EMI
                  <ArrowUpRight size={15} />
                </button>
                <Link to="/ruta-emi-v3/recursos" className="v3-boton">
                  Ver recursos
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PieV3 pegado />
    </div>
  );
}
