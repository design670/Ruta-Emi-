# 🎓 Ruta EMI - Landing Page

## Documentación Completa

---

## 📋 Contenido

1. [Descripción General](#descripción-general)
2. [Características](#características)
3. [Estructura del Componente](#estructura-del-componente)
4. [Guía de Instalación](#guía-de-instalación)
5. [Paleta de Colores](#paleta-de-colores)
6. [Tipografía](#tipografía)
7. [Componentes Principales](#componentes-principales)
8. [Personalización](#personalización)
9. [Guía de Accesibilidad](#guía-de-accesibilidad)
10. [Notas de Diseño](#notas-de-diseño)

---

## Descripción General

**Ruta EMI** es una landing page moderna, profesional y completamente responsive para una academia digital de formación médica. 

La página ha sido diseñada siguiendo estándares de experiencia educativa y credibilidad médica, con énfasis en:

- ✅ Claridad del recorrido de aprendizaje
- ✅ Credibilidad profesional
- ✅ Jerarquía visual clara
- ✅ Conversión hacia el registro
- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad (WCAG AA)
- ✅ Interactividad sutil pero efectiva

---

## Características

### ✨ Características Principales

1. **Header Pegajoso (Sticky)**
   - Navegación suave con transiciones al hacer scroll
   - Menú hamburguesa funcional en móvil
   - Enlaces de navegación con efecto hover elegante
   - Botones de acción destacados

2. **Hero Section de Alto Impacto**
   - Composición asimétrica
   - SVG interactivo (nodos conectados)
   - Jerarquía tipográfica clara
   - CTAs primarios y secundarios
   - Estadísticas destacadas

3. **Sección "Cómo Funciona"**
   - Tres pasos conectados visualmente
   - Línea gradiente conectora (desktop)
   - Reorganización vertical en móvil
   - Animaciones de entrada (stagger)

4. **Rutas Formativas**
   - Tres tarjetas con estados diferenciados
   - Una ruta destacada (recomendada)
   - Información progresiva
   - Tags de temas educativos
   - Hover states elegantes

5. **Cursos Destacados**
   - Grid responsivo (1, 2, 3 columnas)
   - Placeholders visuales con emojis
   - Información estructurada
   - Estados interactivos

6. **Casos Clínicos**
   - Presentación de complejidad diferenciada
   - Síntomas en tags
   - Tiempo estimado
   - Especialidades etiquetadas

7. **Recursos Educativos**
   - Tres tipos: PDFs, Infografías, Enlaces
   - Iconografía lineal coherente
   - Descripción breve y CTA

8. **Bloque CTA Final**
   - Titulación clara del beneficio
   - Dos opciones de acción
   - Aclaración de privacidad

9. **Footer Completo**
   - Navegación secundaria
   - Enlaces legales
   - Redes sociales
   - Información de copyright

### 🎨 Características de Diseño

- **Animaciones Sutiles**: Transiciones CSS, hover states, fade-in en scroll
- **Paleta Coherente**: Azul profundo, verde, morado, amarillo
- **Tipografía Distintiva**: Poppins (headers) + Sora (body)
- **Espaciado Generoso**: Respira el contenido
- **Micro-interacciones**: Botones, enlaces, tarjetas
- **Respeto por Accesibilidad**: Contraste WCAG AA, focus states, prefers-reduced-motion

---

## Estructura del Componente

```
RutaEmiLanding
├── Styles (CSS en <style>)
│   ├── Importación de fuentes (Poppins, Sora)
│   ├── Gradientes y animaciones
│   └── Estados hover y focus
├── Header
│   ├── Logo
│   ├── Navegación Desktop
│   ├── Navegación Mobile (hamburguesa)
│   └── Botones de acción
├── Hero Section
│   ├── Contenido (etiqueta, título, descripción)
│   ├── CTAs (primario y secundario)
│   ├── Estadísticas
│   └── SVG Visual (nodos conectados)
├── Cómo Funciona
│   ├── Título y descripción
│   ├── Tres pasos conectados
│   └── Línea gradiente conectora
├── Rutas Formativas
│   ├── Grid de 3 rutas
│   ├── Ruta destacada (recomendada)
│   └── Tarjetas con información progresiva
├── Cursos Destacados
│   ├── Grid responsivo
│   ├── Tarjetas con visuales
│   └── Botón "Ver todos"
├── Casos Clínicos
│   ├── Tres casos destacados
│   ├── Información clínica
│   └── CTA "Explorar casos"
├── Recursos Educativos
│   ├── Tres tipos de recursos
│   ├── Iconografía lineal
│   └── Descripciones
├── CTA Final
│   ├── Bloque de conversión
│   └── Dos opciones de acción
└── Footer
    ├── Información de marca
    ├── Navegación
    ├── Enlaces legales
    └── Redes sociales
```

---

## Guía de Instalación

### Opción 1: Next.js / Create React App

1. **Copia el componente**
   ```
   cp ruta-emi-landing.jsx src/pages/index.jsx
   ```

2. **Instala dependencias necesarias**
   ```bash
   npm install lucide-react
   ```

3. **Asegúrate de tener Tailwind CSS configurado**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configura `tailwind.config.js`** (si usas colores personalizados):
   ```javascript
   module.exports = {
     content: ["./src/**/*.{jsx,js}"],
     theme: {
       extend: {
         colors: {
           // Los colores ya están definidos en el componente
         }
       }
     }
   }
   ```

5. **Importa y usa el componente**
   ```jsx
   import RutaEmiLanding from './ruta-emi-landing';
   
   export default function App() {
     return <RutaEmiLanding />;
   }
   ```

### Opción 2: Componente Standalone

El archivo es completamente autónomo y puede usarse en cualquier proyecto React:

```jsx
import RutaEmiLanding from './ruta-emi-landing';

// En tu App.jsx
function App() {
  return <RutaEmiLanding />;
}

export default App;
```

---

## Paleta de Colores

### Colores Primarios

| Color | Uso | Hex | Tailwind |
|-------|-----|-----|----------|
| **Azul Profundo** | Headers, botones primarios, confianza | #0a2f51 | blue-950 |
| **Azul Medio** | Accents, fondos suaves | #1e5a8e | blue-700 |
| **Verde** | Progreso, avance, bienestar | #00a86b | green-500 |
| **Morado** | Contenido educativo, especialización | #7c3aed | purple-600 |
| **Amarillo** | Pequeños acentos, atención | Customizado | yellow-400 |

### Fondos

- **Blanco Puro**: #ffffff
- **Gris Muy Claro**: #f8fafc (slate-50)
- **Azul Suave**: Gradientes con opacidad 10-20%

### Gradientes Principales

```css
/* Gradiente Texto Primario */
background: linear-gradient(135deg, #0a2f51 0%, #1e5a8e 100%);

/* Gradiente Botón Primario */
background: linear-gradient(to right, #0a4f8e 0%, #1e5a8e 100%);

/* Gradiente Línea de Conexión */
background: linear-gradient(90deg, #0a2f51, #00a86b, transparent);
```

---

## Tipografía

### Tipografías Utilizadas

| Fuente | Uso | Pesos |
|--------|-----|-------|
| **Poppins** | Titulares (h1, h2, h3) | 700 (bold) |
| **Sora** | Cuerpo, descripciones, navegación | 400, 500, 600 |

### Jerarquía Tipográfica

```
H1 (Héroes):    56px (desktop), 40px (móvil) - Font: Poppins 700
H2 (Títulos):   44px (desktop), 32px (móvil) - Font: Poppins 700
H3 (Subtítulos):24px (desktop), 20px (móvil) - Font: Poppins 700
Body:           16px base - Font: Sora 400
Labels:         12-14px - Font: Sora 600
```

### Importación en Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## Componentes Principales

### 1. Header / Navegación

**Estado Base**: Fondo gradiente sutil
**Estado Scroll**: Fondo blanco con sombra

```jsx
<header className="sticky top-0 z-50 transition-all duration-300">
  {/* Contenido del header */}
</header>
```

**Elementos**:
- Logo (gradiente de texto)
- Navegación desktop (con efecto underline animado)
- Navegación mobile (menú hamburguesa)
- Botones de acción (Iniciar sesión, Registrarme)

### 2. Hero Section

**Contenido**:
- Etiqueta badge
- Título con palabra destacada en gradiente
- Descripción clara
- Dos CTAs (primario y secundario)
- Estadísticas (25+ cursos, 1000+ profesionales, 500+ casos)

**Visual**:
- SVG con nodos conectados (3 círculos con gradientes, líneas de conexión)
- Fondos gradiente suave detrás

### 3. Cómo Funciona (Three Steps)

**Layout**:
- Desktop: 3 columnas con línea conectora
- Móvil: Stack vertical, línea desaparece

**Componentes**:
- Número en círculo (16px height)
- Título del paso
- Descripción
- Línea gradiente (desktop only)

### 4. Rutas Formativas (Cards Grid)

**Estados**:
- Normal: Fondo blanco, borde gris
- Destacada: Fondo azul suave, borde azul, badge "Recomendada", scale 105%

**Información por Tarjeta**:
- Número (01, 02, 03)
- Nivel (Fundamentals, Advanced, Specialization)
- Nombre de ruta
- Descripción
- Cantidad de cursos
- Duración
- Temas (tags)
- CTA

### 5. Cursos Destacados (3 Cards)

**Estructura**:
- Visual placeholder (h-48, gradiente + emoji)
- Badge de categoría
- Nivel de dificultad
- Título
- Descripción
- Grid: Módulos + Duración
- CTA "Ver contenido"

### 6. Casos Clínicos

**Información por Caso**:
- Especialidad (badge azul)
- Título
- Síntomas (tags gris)
- Resumen clínico
- Complejidad (badge rojo o amarillo)
- Tiempo estimado
- CTA "Analizar"

### 7. Recursos Educativos (3 Cards)

**Elementos**:
- Ícono lineal (BookOpen, Chart, Link)
- Tipo de recurso
- Descripción
- CTA "Consultar"

### 8. CTA Final (Sign Up Block)

**Contenido**:
- Título con gradiente
- Descripción
- Dos botones (primario y secundario)
- Texto de privacidad pequeño

### 9. Footer

**Columnas**:
1. Brand (logo + descripción)
2. Navegación
3. Contenido
4. Legal
5. Social

---

## Personalización

### 🔄 Cambiar Contenido

#### Rutas Formativas
```jsx
const rutas = [
  {
    numero: '01',
    nivel: 'Fundamentals',
    nombre: 'Tu nombre de ruta',
    descripcion: 'Tu descripción',
    cursos: 8,
    duracion: '12 semanas',
    temas: ['Tema 1', 'Tema 2', 'Tema 3'],
    destacada: true // True para ruta recomendada
  },
  // Más rutas...
];
```

#### Cursos
```jsx
const cursos = [
  {
    categoria: 'Tu especialidad',
    titulo: 'Título del curso',
    descripcion: 'Descripción breve',
    modulos: 6,
    duracion: '4 semanas',
    nivel: 'Intermediate'
  },
  // Más cursos...
];
```

#### Casos Clínicos
```jsx
const casos = [
  {
    especialidad: 'Especialidad',
    titulo: 'Título del caso',
    sintomas: ['Síntoma 1', 'Síntoma 2'],
    resumen: 'Resumen del caso',
    complejidad: 'Moderate', // o 'High'
    tiempo: '20 min'
  },
  // Más casos...
];
```

### 🎨 Cambiar Colores

En el archivo `SKILL.md`, busca la sección de estilos:

```javascript
// Gradiente primario
background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);

// Actualiza en las secciones:
// - text-gradient
// - accent-gradient
// - Botones
// - Badges
```

### 🔤 Cambiar Tipografía

En el `<style>` del componente:

```css
@import url('https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@400;500;600;700&display=swap');

* {
  font-family: 'TU_FUENTE', sans-serif;
}
```

### 📱 Breakpoints Responsive

El componente usa breakpoints de Tailwind:

- **Mobile**: < 768px (md)
- **Tablet**: 768px - 1024px (md - lg)
- **Desktop**: > 1024px (lg+)

Modifica con: `hidden md:block` o `md:grid-cols-3`

### 🔗 Actualizar Enlaces

Los enlaces de navegación usan `scrollToSection(id)`:

```jsx
<button onClick={() => scrollToSection('cursos')}>Cursos</button>
```

Para links externos:

```jsx
<a href="https://tu-url.com">Tu enlace</a>
```

---

## Guía de Accesibilidad

### ✅ Estándares Implementados

1. **Contraste de Color**: WCAG AA (ratio 4.5:1 para texto)
2. **HTML Semántico**: `<header>`, `<nav>`, `<section>`, `<footer>`
3. **Focus States**: Todos los elementos interactivos tienen focus visible
4. **Alt Text**: Imágenes y SVGs tienen descripciones (emojis como fallback)
5. **Prefers Reduced Motion**: Respeta `@media (prefers-reduced-motion: reduce)`
6. **Tamaños de Texto**: Mínimo 16px en dispositivos móviles
7. **Interactividad**: Todos los controles funcionan con teclado

### 🔑 Navegación por Teclado

- **Tab**: Navega entre elementos focusables
- **Enter**: Activa botones y enlaces
- **Esc**: Cierra el menú móvil

### 📋 Auditoría Recomendada

```bash
# Con Lighthouse (Chrome DevTools)
1. Abre DevTools (F12)
2. Ve a "Lighthouse"
3. Elige "Accessibility"
4. Ejecuta auditoría
5. Objetivo: Score > 90
```

---

## Notas de Diseño

### ✨ Decisiones Estéticas

1. **Azul Profundo como Primario**
   - Transmite confianza y profesionalismo
   - Asociado con medicina y ciencia
   - Contrasta bien con fondos claros

2. **Verde como Secundario**
   - Representa progreso y aprendizaje
   - Bienestar y avance
   - Complementa el azul

3. **Tipografía Contemporánea**
   - Poppins para titulares (calidez + profesionalismo)
   - Sora para body (legibilidad + modernidad)
   - Sin recurrir a Inter genérico

4. **Composición Asimétrica**
   - Hero con grid 2 columnas (no simétrico)
   - Rutas con escala diferenciada
   - Crear dinamismo visual

5. **Microinteracciones Sutiles**
   - Hover states sin exceso
   - Transiciones de 0.3s
   - Animaciones de entrada progresivas

6. **Espaciado Generoso**
   - py-24 / py-32 entre secciones
   - px-6 en contenedor
   - Respira el contenido

### 🚫 Qué NO Incluir

- ❌ Fotografías médicas genéricas
- ❌ Cruces roja/blanca clichés
- ❌ Ilustraciones caricaturescas
- ❌ Exceso de naranja
- ❌ Degradados excesivos
- ❌ Apariencia infantil
- ❌ Plantilla corporativa fría

### ✅ Qué SÍ Mantener

- ✅ Profesionalismo médico
- ✅ Claridad educativa
- ✅ Modernidad tecnológica
- ✅ Accesibilidad completa
- ✅ Respuesta responsiva
- ✅ Interactividad refinada
- ✅ Identidad única

---

## Optimización y Performance

### 📊 Recomendaciones

1. **Imágenes**: Reemplaza los placeholders con imágenes reales en WebP
2. **Lazy Loading**: Usa `loading="lazy"` en imágenes
3. **Fuentes**: Google Fonts ya está optimizado con `display=swap`
4. **CSS**: El componente usa Tailwind JIT (just-in-time)
5. **SVG**: Los SVGs son inline (sin peticiones externas)

### 🔍 Verificación en Lighthouse

- Performance: > 85
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## Soporte y Mantenimiento

### 🐛 Troubleshooting

| Problema | Solución |
|----------|----------|
| Fuentes no cargan | Verifica CDN de Google Fonts |
| Menú móvil no funciona | Revisa `setIsMenuOpen` state |
| Colores no aparecen | Asegúrate que Tailwind procesa el archivo |
| Scroll suave no funciona | Requiere navegador moderno (IE11+ no soporta) |

### 📝 Changelog

- **v1.0** (2024): Versión inicial completa con todas las secciones

---

## Contacto y Preguntas

Para preguntas sobre implementación o personalización, revisa:
- Documentación de React
- Documentación de Tailwind CSS
- Documentación de Lucide Icons

---

**Última actualización**: 2024
**Versión**: 1.0
**Licencia**: Personalizado para Ruta EMI
