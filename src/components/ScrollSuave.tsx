import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll suave en todo el proyecto (rueda del ratón y trackpad), sincronizado con ScrollTrigger.
 * Se pausa cuando algo bloquea el scroll de la página (intro, menú a pantalla completa) y se desactiva
 * con «reducir movimiento». En pantallas táctiles se mantiene el scroll nativo.
 */
export default function ScrollSuave() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
    const html = document.documentElement;

    const alActualizar = () => ScrollTrigger.update();
    lenis.on('scroll', alActualizar);

    const tick = (tiempo: number) => lenis.raf(tiempo * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // El resto de la app bloquea el scroll con html.style.overflow = 'hidden'
    const sincronizarBloqueo = () => {
      if (html.style.overflow === 'hidden') lenis.stop();
      else lenis.start();
    };
    sincronizarBloqueo();
    const observador = new MutationObserver(sincronizarBloqueo);
    observador.observe(html, { attributes: true, attributeFilter: ['style'] });

    return () => {
      observador.disconnect();
      gsap.ticker.remove(tick);
      lenis.off('scroll', alActualizar);
      lenis.destroy();
    };
  }, []);

  return null;
}
