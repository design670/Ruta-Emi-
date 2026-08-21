# Ruta EMI — Contexto del Proyecto

Academia digital de formación médica. Landing + flujo de autenticación construidos en **React + TypeScript + Vite + Tailwind CSS**, con `react-router-dom` para el ruteo.

## 1. Estructura actual de la landing (`src/pages/Landing.tsx`)

Orden de secciones (una sola página, navegación por scroll a anclas):

1. **Header** (sticky) — logo, nav (Inicio, La Ruta, Cursos, Casos Clínicos, Recursos), acciones (Iniciar sesión / Registrarme).
2. **Hero** (`#inicio`) — banner contenido (NO a todo el ancho): margen lateral, `rounded-3xl`, foto de fondo (equipo médico) espejada horizontalmente (`scale-x-[-1]`), degradado oscuro, H1 en 3 líneas fijas con `<br />`, CTA "Explorar la ruta".
3. **Cómo funciona / Metodología** (`#ruta`) — banner + tarjeta oscura con 3 pasos interactivos (click cambia color activo: teal/violeta/naranja) y cita.
4. **Rutas formativas** (`#rutas-formativas`) — banner oscuro **"Certifícate en la Ruta EMI"** (con estadísticas: 3 rutas / 29 cursos / 12–20 semanas) + 4 tarjetas iguales **sin etiquetas de categoría** (Urgencias con foto, Medicina Interna, Farmacología, Catálogo completo). Abren modal de detalle o navegan al catálogo interno.
5. **Casos clínicos** (`#casos`) — banner + 4 tarjetas con fotos reales y contenido real de la SCP (scp.com.co), **sin etiqueta de especialidad** (solo dato de paciente). CTA "Ver todos los casos clínicos" → vista interna con los 14 casos publicados por la SCP.
6. **"Da el siguiente paso"** (sección final, reemplaza el bloque repetido de casos clínicos) — ver sección 5 de este documento.
7. **Recursos Educativos** (`#recursos`) — carrusel de **scroll horizontal** (6 tarjetas, sin scrollbar visible, flechas de navegación).
8. **CTA Final** — "Comienza a construir tu ruta de aprendizaje", botones Crear cuenta / Ya tengo cuenta.
9. **Footer** — logo grande a la izquierda + columnas de texto (Navegación, Contenido, Legal) a la derecha. **Sin redes sociales.**

**Vistas internas** (mismo archivo, sin ruta propia, controladas por estado `vistaActual`): `'landing' | 'casos' | 'rutas'` — reemplazan el contenido de la landing por una página de listado completo (todos los casos clínicos / catálogo completo de rutas) con botón "Volver al inicio".

## 2. Sistema visual

- **Tipografía:** Poppins (títulos) + Sora (cuerpo), vía Google Fonts.
- **Paleta principal (landing):**
  - CTA / acentos: celeste del logo `#2BBCEA` → `#1CA7D0` (gradiente), reemplazó el naranja original.
  - Oscuros: `slate-900` / `slate-950`.
  - Acentos secundarios: teal-600, violet-800, emerald-600, blue-100 (pastel).
  - Fondo secciones: blanco / `slate-50` / degradados sutiles sky-100↔cyan-50 (antes peach/naranja).
- **Paleta auth** (`AuthLayout.tsx`, vía CSS vars): `--navy #08142B`, `--purple #4B2162`, `--teal #028BA8`, `--light-blue #C2F2FF`, `--peach #FFD0C0`, `--orange #FF773B`, `--green #00C99B`, `--background #FAF9F6`. Sin gradientes ni sombras fuertes.
- **Logo real:** SVG vectorial (`src/assets/logo-ruta-emi.svg`), navy + celeste. En fondos oscuros se invierte con `filter: brightness(0) invert(1)`.
- Tarjetas con `card-hover` (elevación + sombra al pasar el mouse), botones `btn-primary` con microinteracción.

## 3. Componentes y archivos principales

```
src/
├── main.tsx / App.tsx (router: /, /registro, /iniciar-sesion, /recuperar-acceso)
├── index.css, vite-env.d.ts
├── types/index.ts        ← interfaces compartidas (Modulo, CasoClinico, RegistroFormData, etc.)
├── assets/                ← hero-photo-2.avif, logo-ruta-emi.svg, casos-clinicos/*.avif, soporte-vital.jpg
├── pages/
│   ├── Landing.tsx        ← landing completa (todo en un archivo, ~1000+ líneas)
│   ├── RegistroPage.tsx / IniciarSesionPage.tsx / RecuperarAccesoPage.tsx
├── components/
│   ├── AuthLayout.tsx, AuthNavigation.tsx
│   ├── FormField.tsx, PasswordField.tsx
│   ├── RegistrationForm.tsx, LoginForm.tsx, RecoveryForm.tsx, SuccessState.tsx
├── services/authService.ts  ← simulado, sin backend real (TODOs marcados)
└── utils/validation.ts
```

Config raíz: `package.json`, `tsconfig.json` (+ `tsconfig.app.json` / `tsconfig.node.json`), `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `netlify.toml` (build + redirect SPA).

## 4. Cambios aprobados (cronológicos, relevantes)

- Paleta recoloreada de azul/verde original → celeste/navy/violeta/teal actual.
- Logo real (SVG) reemplazó el texto "Ruta EMI".
- Todos los CTA naranjas → celeste del logo.
- Sección "Cursos Destacados" **eliminada** por completo.
- "Rutas Formativas" rediseñada: banner + 4 tarjetas iguales, sin etiquetas de categoría; título cambiado a "Certifícate en la Ruta EMI".
- "Casos clínicos": contenido real de la SCP, fotos reales, sin etiqueta de especialidad, con página interna de catálogo completo (14 casos).
- Hero: foto nueva (`hero-photo-2.avif`), espejada horizontalmente, título en 3 líneas, convertido en banner contenido (no full-width).
- Footer: logo grande a la izquierda, textos a la derecha, sin redes sociales.
- Recursos Educativos: ampliado a 6 tarjetas, con scroll horizontal y flechas.
- Flujo de autenticación completo (`/registro`, `/iniciar-sesion`, `/recuperar-acceso`) con validación accesible, sin backend real.
- Proyecto migrado completamente a **TypeScript estricto** (`strict`, `noUnusedLocals`, `noUnusedParameters` — compila sin errores).

## 5. Textos definitivos — última sección aprobada ("Da el siguiente paso")

Reemplaza el bloque que repetía contenido de casos clínicos (antes "Simulación de juicio clínico"). Estructura de 2 columnas conservada:

- **Bloque izquierdo:** contenedor azul oscuro (`slate-900`) con patrón diagonal muy sutil; composición de **3 tarjetas de cursos escalonadas** conectadas por una línea sutil (sin fotos, sin descripciones largas): Urgencias pediátricas (violeta), Atención médica inicial (naranja), Emergencias en adultos (celeste) — cada una con ícono lineal, nombre, etiqueta "Curso disponible" y flecha.
- **Etiqueta superior:** "DA EL SIGUIENTE PASO"
- **Título:** "Tu próxima ruta comienza aquí"
- **Descripción:** "Elige el curso que necesitas y continúa avanzando en tu formación médica."
- **Botón:** "Explorar cursos" → hace scroll a `#rutas-formativas`.
- En móvil: texto y botón primero, composición visual después.

## 6. Trabajo pendiente

- **Commit y push**: todo lo construido en esta sesión está solo en el entorno local; nunca se hizo `git add/commit/push`.
- Imagen real para la tarjeta "Urgencias" en el catálogo si se desea reemplazar el placeholder de patrón diagonal en algunos lugares residuales.
- `QUICK-START.md` sigue desactualizado (menciona el viejo `ruta-emi-landing.jsx` suelto, ya no existe).
- Backend real pendiente para: registro (`solicitarCuenta`), login (`iniciarSesion` siempre responde "backend pendiente"), recuperación (`recuperarAcceso`) — todo en `src/services/authService.ts`, con TODOs explícitos.
- No se han verificado todas las resoluciones responsive tras los últimos cambios de landing (sí se verificó el flujo de auth en 6 breakpoints).
- Revisar si Netlify ya está desplegando correctamente tras agregar `netlify.toml` (pendiente de confirmación del usuario).

## 7. Instrucciones para continuar

- Dev: `npm run dev` (puerto 5173). Build: `npm run build`. Typecheck: `npx tsc -b --noEmit`.
- Todo el contenido de la landing vive en **un solo archivo** (`Landing.tsx`); las secciones están comentadas (`{/* Nombre */}`) para ubicarlas rápido.
- Los módulos/rutas y casos clínicos son arrays de datos al inicio del componente — para agregar/editar contenido, modificar esos arrays, no el JSX de renderizado.
- Mantener el patrón de paleta ya establecido (celeste/navy/violeta/teal/naranja) al agregar elementos nuevos; evitar reintroducir el naranja como color de CTA principal.
- Antes de dar por terminado cualquier cambio visual, correr `npx tsc -b --noEmit` y verificar en navegador (Browser pane / Claude in Chrome) — no asumir que compila implica que se ve bien.
