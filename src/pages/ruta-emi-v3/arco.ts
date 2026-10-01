/**
 * Geometría de la "ventana en arco" usada en la intro y en el cierre.
 * Devuelve un path (en px, relativo a la caja del elemento) para usar en `clip-path: path(...)`.
 *
 * `e` (0 → 1) es el avance de la apertura: en 0 la ventana está en su posición de reposo
 * con remate en semicírculo; en 1 cubre toda la caja y el arco queda plano.
 */
export interface CajaArco {
  /** Ancho y alto de la caja contenedora. */
  ancho: number;
  alto: number;
  /** Ventana en reposo. */
  x0: number;
  y0: number;
  w0: number;
  h0: number;
}

const mezclar = (a: number, b: number, t: number) => a + (b - a) * t;

export function pathArco(caja: CajaArco, e: number, desplazamientoY = 0) {
  const x = mezclar(caja.x0, 0, e);
  const y = mezclar(caja.y0 + desplazamientoY, 0, e);
  const w = mezclar(caja.w0, caja.ancho, e);
  const h = mezclar(caja.h0, caja.alto, e);
  // El radio se mantiene cercano al semicírculo al inicio y se aplana de forma continua.
  const r = Math.max(0, Math.min(w / 2, h) * (1 - Math.pow(e, 1.5)));

  const derecha = x + w;
  const abajo = y + h;

  if (r < 0.5) {
    return `M ${x},${abajo} L ${x},${y} L ${derecha},${y} L ${derecha},${abajo} Z`;
  }

  return `M ${x},${abajo} L ${x},${y + r} A ${r},${r} 0 0 1 ${x + r},${y} L ${derecha - r},${y} A ${r},${r} 0 0 1 ${derecha},${
    y + r
  } L ${derecha},${abajo} Z`;
}

/** Ventana de reposo de la intro, calculada para el viewport actual. */
export function cajaIntro(vw: number, vh: number): CajaArco {
  const esMovil = vw < 768;
  const w0 = esMovil ? vw * 0.52 : Math.min(360, Math.max(240, vw * 0.2));
  const h0 = Math.min(w0 * 1.5, vh * 0.62);
  return {
    ancho: vw,
    alto: vh,
    w0,
    h0,
    x0: (vw - w0) / 2,
    y0: (vh - h0) / 2 + vh * 0.05,
  };
}
