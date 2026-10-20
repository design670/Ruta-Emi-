// Shared helpers: timing curves and the drawn camera.
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const prog = (t, a, b) => clamp((t - a) / (b - a));
export const lerp = (a, b, x) => a + (b - a) * x;
export const easeOut = (x) => 1 - Math.pow(1 - x, 3);
export const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
export const easeBack = (x) => { const c = 1.6; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };

// Text that rises and un-blurs in, then optionally out.
export function textIn(el, t, start, dur = 0.7, out = 1e9, outDur = 0.4) {
  const a = easeOut(prog(t, start, start + dur));
  const b = prog(t, out, out + outDur);
  el.style.opacity = a * (1 - b);
  el.style.transform = `translateY(${(1 - a) * 40 - b * 20}px)`;
  el.style.filter = `blur(${(1 - a) * 14 + b * 8}px)`;
}

// Seeded random, so every frame is the same for the same t.
export function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// The camera, drawn in SVG (viewBox 300 × 700). Parts with ids can be moved per frame:
// #body (handle), #yoke (gimbal arm), #head (lens head), #sweep (light streak), #screenglow.
export function cameraSVG(id = 'c') {
  return `
<svg viewBox="0 0 300 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${id}-shell" x1="0" x2="1">
      <stop offset="0" stop-color="#3a3e46"/><stop offset=".45" stop-color="#1c1e23"/><stop offset="1" stop-color="#0b0c0e"/>
    </linearGradient>
    <linearGradient id="${id}-edge" x1="0" x2="1">
      <stop offset="0" stop-color="#6b717c"/><stop offset=".2" stop-color="#2a2d33" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="${id}-glass" cx=".42" cy=".38" r=".7">
      <stop offset="0" stop-color="#4b3bd1"/><stop offset=".35" stop-color="#1b1460"/><stop offset=".7" stop-color="#07061a"/><stop offset="1" stop-color="#000"/>
    </radialGradient>
    <linearGradient id="${id}-screen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ff7a52"/><stop offset=".5" stop-color="#b03ad8"/><stop offset="1" stop-color="#2b2b9e"/>
    </linearGradient>
    <linearGradient id="${id}-sweepg" x1="0" x2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="${id}-clip">
      <rect x="60" y="235" width="180" height="445" rx="62"/>
      <circle cx="150" cy="120" r="96"/>
    </clipPath>
  </defs>
  <g id="${id}-body">
    <rect x="60" y="235" width="180" height="445" rx="62" fill="url(#${id}-shell)"/>
    <rect x="60" y="235" width="180" height="445" rx="62" fill="url(#${id}-edge)"/>
    <rect x="88" y="272" width="124" height="158" rx="16" fill="#030304"/>
    <rect id="${id}-screenglow" x="94" y="278" width="112" height="146" rx="11" fill="url(#${id}-screen)" opacity=".85"/>
    <circle cx="150" cy="520" r="25" fill="#121317" stroke="#2c2f36" stroke-width="3"/>
    <circle cx="150" cy="520" r="11" fill="#ff5a36"/>
    <rect x="132" y="582" width="36" height="9" rx="4.5" fill="#2c2f36"/>
    <text x="150" y="650" text-anchor="middle" font-family="Inter Display, Inter, sans-serif" font-size="18" font-weight="700" letter-spacing="3" fill="#5c616b">4P</text>
  </g>
  <g id="${id}-yoke">
    <rect x="128" y="190" width="44" height="58" rx="10" fill="#15171b"/>
    <path d="M58 120 A92 92 0 0 0 242 120" fill="none" stroke="#202329" stroke-width="22" stroke-linecap="round"/>
  </g>
  <g id="${id}-head">
    <circle cx="150" cy="120" r="86" fill="#1a1c21" stroke="#30343c" stroke-width="3"/>
    <circle cx="150" cy="120" r="66" fill="#08090b"/>
    <circle cx="150" cy="120" r="54" fill="url(#${id}-glass)"/>
    <circle cx="150" cy="120" r="34" fill="none" stroke="#5a4cff" stroke-opacity=".35" stroke-width="2"/>
    <circle cx="150" cy="120" r="16" fill="#020205"/>
    <ellipse cx="130" cy="98" rx="20" ry="11" fill="#fff" opacity=".42" transform="rotate(-30 130 98)"/>
    <circle cx="172" cy="143" r="5" fill="#fff" opacity=".25"/>
  </g>
  <g clip-path="url(#${id}-clip)">
    <rect id="${id}-sweep" x="-200" y="-50" width="120" height="800" fill="url(#${id}-sweepg)" transform="rotate(18 150 350)"/>
  </g>
</svg>`;
}
