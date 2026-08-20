# 🎨 Ruta EMI - Design Reference Sheet

## Guía Visual Rápida de Componentes y Estilos

---

## 📐 PALETA DE COLORES

```
┌─────────────────────────────────────────────────────────┐
│  AZUL PROFUNDO          │  VERDE PROGRESO              │
│  #0a2f51                │  #00a86b                     │
│  rgb(10, 47, 81)        │  rgb(0, 168, 107)            │
│  Uso: Headers, Primario │  Uso: Accents, Progreso     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  AZUL MEDIO             │  MORADO                      │
│  #1e5a8e                │  #7c3aed                     │
│  rgb(30, 90, 142)       │  rgb(124, 58, 237)           │
│  Uso: Botones, Links    │  Uso: Educativo, Especial   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  GRIS CLARO             │  BLANCO PURO                 │
│  #f8fafc (slate-50)     │  #ffffff                     │
│  Uso: Fondos, Separadores│ Uso: Fondo Principal        │
└─────────────────────────────────────────────────────────┘
```

### Gradientes Principales

```css
/* Texto Principal (Azul) */
background: linear-gradient(135deg, #0a2f51 0%, #1e5a8e 100%);

/* Texto Secundario (Verde) */
background: linear-gradient(135deg, #00a86b 0%, #16a34a 100%);

/* Botones Primarios */
background: linear-gradient(to right, #0a4f8e 0%, #1e5a8e 100%);

/* Línea de Conexión */
background: linear-gradient(90deg, #0a2f51, #00a86b, transparent);
```

---

## 🔤 TIPOGRAFÍA

### Jerarquía

```
═══════════════════════════════════════════════════════
H1 - POPPINS 700 - 56px (desktop) / 40px (mobile)
Titulares de Página Principal
═══════════════════════════════════════════════════════

═══════════════════════════════════════════════════════
H2 - POPPINS 700 - 44px (desktop) / 32px (mobile)
Títulos de Secciones
═══════════════════════════════════════════════════════

───────────────────────────────────────────────────────
H3 - POPPINS 700 - 24px (desktop) / 20px (mobile)
Subtítulos y Títulos de Tarjetas
───────────────────────────────────────────────────────

Body - SORA 400 - 16px base
Texto corriente y descripciones principales

Small - SORA 400 - 14px
Descripciones secundarias

Label - SORA 600 - 12px uppercase
Categorías, etiquetas y metadata
```

### Pesos Disponibles

| Fuente | Pesos | Uso |
|--------|-------|-----|
| **Poppins** | 400, 500, 600, 700 | Headers |
| **Sora** | 400, 600, 700 | Body, Accents |

---

## 🧩 COMPONENTES PRINCIPALES

### 1. BOTÓN PRIMARIO

```jsx
<button className="btn-primary px-8 py-3.5 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-lg font-semibold">
  Texto del Botón
</button>
```

**Especificaciones**:
- Fondo: Gradiente azul
- Texto: Blanco, semibold
- Padding: px-8 py-3.5
- Border Radius: lg (8px)
- Hover: translateY(-2px) + shadow
- Transition: 0.3s cubic-bezier

---

### 2. BOTÓN SECUNDARIO

```jsx
<button className="px-8 py-3.5 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition">
  Texto del Botón
</button>
```

**Especificaciones**:
- Borde: 2px slate-300
- Texto: slate-700
- Hover: bg-slate-50

---

### 3. TARJETA ESTÁNDAR

```jsx
<div className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
  {/* Contenido */}
</div>
```

**Especificaciones**:
- Fondo: Blanco
- Borde: 1px slate-200
- Padding: p-8 (32px)
- Border Radius: 2xl (16px)
- Hover: translateY(-8px) + shadow-lg
- Transition: 0.3s cubic-bezier(0.23, 1, 0.320, 1)

---

### 4. BADGE/ETIQUETA

```jsx
<span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
  ETIQUETA
</span>
```

**Variantes**:

```jsx
// Azul (primario)
<span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
  Cardiología
</span>

// Gris (neutral)
<span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">
  Tema
</span>

// Rojo (complejidad alta)
<span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold">
  High
</span>

// Verde (disponible)
<span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
  Disponible
</span>
```

---

### 5. TARJETA DE RUTA DESTACADA

```jsx
<div className="md:scale-105 bg-gradient-to-br from-blue-50 to-blue-25 border-2 border-blue-400 shadow-xl p-8 rounded-2xl">
  <div className="absolute -top-4 right-6 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-full">
    Recomendada
  </div>
  {/* Contenido */}
</div>
```

**Especificaciones**:
- Scale: 105% (más grande)
- Gradiente: blue-50 → blue-25
- Borde: 2px blue-400
- Badge: Posición absolute -top-4
- Shadow: shadow-xl

---

### 6. GRID RESPONSIVO

```jsx
// 3 columnas en desktop, 1 en móvil
<div className="grid md:grid-cols-3 gap-8">
  {/* Items */}
</div>

// 2 columnas en tablet, 1 en móvil
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
  {/* Items */}
</div>
```

---

### 7. LÍNEA CONECTORA (Desktop Only)

```jsx
<div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-purple-600" />
```

**Especificaciones**:
- Alto: 1px (h-1)
- Posición: absolute, top-24
- Ancho: full (left-0 right-0)
- Gradiente: multi-color

---

## 🎯 ESPACIADO ESTÁNDAR

```
Secciones (vertical):
─────────────────────────────────────────
py-24        = 96px (default)
py-32        = 128px (large)
py-20        = 80px (compact)

Contenedores (horizontal):
─────────────────────────────────────────
px-6         = 24px (default)
max-w-7xl    = 80rem (1280px - max width)

Elementos Internos:
─────────────────────────────────────────
p-8          = 32px (tarjetas)
p-6          = 24px (secciones internas)
gap-8        = 32px (entre items)
gap-4        = 16px (items pequeños)
```

---

## 🎪 SECCIONES COMPLETAS

### Estructura típica de sección

```jsx
<section className="py-24 md:py-32 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Encabezado */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Título Principal
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Descripción o subtítulo
      </p>
    </div>

    {/* Grid de Items */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Items aquí */}
    </div>
  </div>
</section>
```

---

## 🎬 ANIMACIONES

### Transiciones Estándar

```css
/* Hover suave */
transition: all 0.3s ease;

/* Cubic bezier (más elegante) */
transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);

/* Con delay */
animation-delay: 0.1s;
animation-delay: 0.2s;
animation-delay: 0.3s;
```

### Keyframes Principales

```css
/* Fade In al cargar */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Línea de flujo */
@keyframes flowLine {
  0%, 100% { transform: scaleX(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: scaleX(1); }
}
```

---

## ⌨️ CLASES ÚTILES DE TAILWIND

```css
/* Gradientes */
bg-gradient-to-r          /* Izquierda a derecha */
bg-gradient-to-br         /* Arriba-izq a abajo-der */
from-blue-50              /* Color inicial */
to-blue-25                /* Color final */

/* Texto */
text-slate-900            /* Primario (oscuro) */
text-slate-600            /* Secundario (gris) */
text-blue-700             /* Destacado */

/* Bordes */
border border-slate-200   /* Borde suave */
border-2 border-blue-400  /* Borde destacado */
rounded-2xl               /* Border radius 16px */
rounded-lg                /* Border radius 8px */
rounded-full              /* Border radius 9999px */

/* Sombras */
shadow-lg                 /* Sombra grande */
shadow-xl                 /* Sombra extra large */

/* Opacity */
opacity-50                /* 50% opacidad */
opacity-90                /* 90% opacidad */

/* Display */
hidden md:block           /* Oculto en móvil, visible en desktop */
md:grid-cols-3            /* 3 columnas en desktop */
```

---

## 📱 BREAKPOINTS

```
Mobile (default):  < 768px
Tablet (md):       768px - 1024px  
Desktop (lg):      > 1024px
```

### Responsive Patterns

```jsx
// Ocultar en móvil
<div className="hidden md:block">Desktop only</div>

// Mostrar solo en móvil
<div className="md:hidden">Mobile only</div>

// Cambiar layout
<div className="grid md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col móvil, 2 tablet, 3 desktop */}
</div>

// Cambiar padding
<div className="px-6 md:px-12 lg:px-20">
  {/* Aumenta padding en screens mayores */}
</div>
```

---

## 🎨 USOS DE COLOR POR SECCIÓN

| Sección | Color Primario | Color Secundario | Uso |
|---------|---|---|---|
| **Header** | Azul profundo | Gris | Navegación, CTA |
| **Hero** | Azul gradiente | Verde | Título, botones |
| **Cómo Funciona** | Azul | Verde | Badges, líneas |
| **Rutas** | Azul (normal), Azul claro (destacada) | Gris | Cards, badges |
| **Cursos** | Gradientes (3 diferentes) | Azul | Category badges |
| **Casos** | Rojo (high), Amarillo (moderate) | Azul | Complejidad |
| **CTA** | Azul primario | Gris | Buttons |
| **Footer** | Gris oscuro | Azul | Links, accent |

---

## 🔤 ESTADOS DE INTERACTIVIDAD

### Botones

```css
/* Default */
btn-primary: gradient azul + white text + shadow suave

/* Hover */
Transform: translateY(-2px)
Shadow: 0 12px 24px rgba(10, 47, 81, 0.25)

/* Active */
Transform: translateY(0)
Cambio de sombra
```

### Tarjetas (card-hover)

```css
/* Default */
Border: 1px slate-200
Shadow: suave

/* Hover */
Transform: translateY(-8px)
Box-shadow: 0 20px 40px rgba(10, 47, 81, 0.12)
```

### Enlaces de Navegación (nav-link)

```css
/* Default */
Color: slate-700

/* Hover */
Color: más oscuro
Underline: 2px green (animado de derecha a izquierda)
```

---

## 📐 TAMAÑOS COMUNES

```
Logo:              56px (height)
Header:            64px (height)
Hero:              600px+ (min-height con vista)
Icon Grande:       32px
Icon Mediano:      24px
Icon Pequeño:      16px
Gap entre items:   32px (gap-8)
Max width page:    1280px (max-w-7xl)
Section padding:   96-128px (py-24 md:py-32)
```

---

## ✅ CHECKLIST DE ESTILO

```
[ ] Colores: Azul, Verde, Morado (no más de 3-4 principales)
[ ] Tipografía: Poppins (headers) + Sora (body)
[ ] Espaciado: Generoso, respira el contenido
[ ] Respuesta: Mobile-first, funciona en todos los tamaños
[ ] Sombras: Sutiles, nunca pesadas
[ ] Redondes: 2xl en tarjetas, lg en botones
[ ] Hover: Definido, elegante, no extremo
[ ] Contraste: WCAG AA (4.5:1 para texto)
[ ] Animaciones: Transiciones smooth, respetan prefers-reduced-motion
[ ] Estado activo: Diferenciado pero coherente
```

---

## 🚀 COPYPASTE TEMPLATES

### Tarjeta Nueva (Copiar-Pegar)

```jsx
<div className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
  <div className="mb-4">
    <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
      CATEGORÍA
    </span>
  </div>
  <h3 className="text-xl font-bold text-slate-900 mb-3">Título</h3>
  <p className="text-slate-600 text-sm mb-6">Descripción breve aquí.</p>
  <button className="text-blue-700 font-semibold text-sm hover:text-blue-900">
    Explorar →
  </button>
</div>
```

### Sección Nueva (Copiar-Pegar)

```jsx
<section className="py-24 md:py-32 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Título de Sección
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Descripción breve de la sección.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Items aquí */}
    </div>
  </div>
</section>
```

---

**Última actualización**: 2024
**Versión**: 1.0
