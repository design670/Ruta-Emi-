# 🚀 Ruta EMI - Quick Start Guide

## 5 Minutos para Empezar

---

## ✅ Paso 1: Copia el Componente

El archivo `ruta-emi-landing.jsx` contiene el componente React completo. Simplemente:

```bash
# Cópialo a tu proyecto
cp ruta-emi-landing.jsx src/pages/index.jsx
```

---

## ✅ Paso 2: Instala Dependencias

```bash
npm install lucide-react
```

Solo eso. Tailwind CSS viene con Create React App moderno.

---

## ✅ Paso 3: Úsalo en tu App

```jsx
// src/App.jsx
import RutaEmiLanding from './ruta-emi-landing';

export default function App() {
  return <RutaEmiLanding />;
}
```

---

## ✅ Paso 4: Ejecuta tu proyecto

```bash
npm run dev
```

**¡Listo!** Tu landing está corriendo.

---

## 🎨 Cambios Más Comunes

### 1️⃣ Cambiar Nombre de la Academia

```jsx
// En el componente, línea ~80 (Logo)
<div className="text-gradient">Ruta</div>
<span className="text-slate-900">EMI</span>

// Cambia a:
<div className="text-gradient">Tu</div>
<span className="text-slate-900">Nombre</span>
```

### 2️⃣ Actualizar Rutas Formativas

```jsx
// Línea ~30, encuentra:
const rutas = [
  {
    numero: '01',
    nivel: 'Fundamentals',
    nombre: 'Fisiología y Anatomía',  // ← CAMBIA AQUÍ
    descripcion: 'Tu descripción',    // ← Y AQUÍ
    // ... resto
  },
];
```

### 3️⃣ Actualizar Cursos

```jsx
// Línea ~55
const cursos = [
  {
    categoria: 'Cardiología',         // ← CAMBIA
    titulo: 'Insuficiencia Cardíaca',  // ← CAMBIA
    descripcion: 'Tu descripción',    // ← CAMBIA
    // ...
  },
];
```

### 4️⃣ Actualizar Casos Clínicos

```jsx
// Línea ~85
const casos = [
  {
    especialidad: 'Cardiología',      // ← CAMBIA
    titulo: 'Paciente con disnea',    // ← CAMBIA
    // ...
  },
];
```

### 5️⃣ Cambiar Colores Principales

En `<style>` (línea ~120), busca:

```css
/* Antes */
background: linear-gradient(135deg, #0a2f51 0%, #1e5a8e 100%);

/* Después (ejemplo con verde) */
background: linear-gradient(135deg, #059669 0%, #10b981 100%);
```

---

## 🎯 Casos de Uso Típicos

### Caso 1: Cambiar solo Contenido

**Tiempo**: 10 minutos

1. Abre `ruta-emi-landing.jsx`
2. Busca `const rutas = [` (línea ~30)
3. Reemplaza contenido de texto
4. Busca `const cursos = [` (línea ~55)
5. Reemplaza contenido de cursos
6. Guarda y recarga

### Caso 2: Cambiar Colores Corporativos

**Tiempo**: 15 minutos

1. Abre el archivo
2. Busca la sección de `<style>`
3. Reemplaza hex colors:
   - `#0a2f51` → Tu color primario
   - `#00a86b` → Tu color secundario
   - `#7c3aed` → Tu color terciario
4. Guarda

### Caso 3: Cambiar Tipografía

**Tiempo**: 5 minutos

1. En `<style>`, línea de `@import url`
2. Cambiar `Poppins` y `Sora` por tus fuentes
3. Actualizar las referencias en `font-family`

### Caso 4: Añadir Más Rutas

**Tiempo**: 5 minutos

```jsx
const rutas = [
  // ... rutas existentes ...
  {
    numero: '04',
    nivel: 'Master',
    nombre: 'Mi Nueva Ruta',
    descripcion: 'Descripción',
    cursos: 15,
    duracion: '24 semanas',
    temas: ['Tema 1', 'Tema 2'],
    destacada: false
  }
];
```

El grid automáticamente acomoda las rutas (con `grid md:grid-cols-3`).

### Caso 5: Cambiar URLs de Navegación

```jsx
// En Header, busca los onClick:
<button onClick={() => scrollToSection('cursos')}>
  Cursos
</button>

// Para links externos:
<a href="https://tu-url.com/cursos">
  Cursos
</a>
```

---

## 🔧 Configuración Avanzada

### Tailwind Personalizado (Opcional)

Si necesitas colores personalizados en todo el proyecto:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a2f51',
        'brand-light': '#1e5a8e',
        'brand-success': '#00a86b',
      }
    }
  }
}
```

Luego úsalos en cualquier componente:

```jsx
<div className="bg-brand-dark text-white">
  Contenido
</div>
```

### Animaciones Personalizadas

En `<style>`, busca `@keyframes` y añade:

```css
@keyframes miAnimacion {
  from { opacity: 0; }
  to { opacity: 1; }
}

.mi-elemento {
  animation: miAnimacion 0.5s ease-out;
}
```

---

## 📱 Testing Responsivo

### En Chrome DevTools:

1. Presiona `F12`
2. Presiona `Ctrl+Shift+M` (o Cmd+Shift+M en Mac)
3. Selecciona dispositivos:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

El landing se adapta automáticamente.

---

## 🧪 Verificar que Todo Funciona

### Checklist:

- [ ] El header se pone pegajoso al scroll
- [ ] El menú hamburguesa abre/cierra en móvil
- [ ] Los botones de navegación desplazan suavemente
- [ ] Las tarjetas de rutas tienen hover state
- [ ] Los emojis en cursos aparecen correctamente
- [ ] El footer es visible
- [ ] No hay errores en consola (`F12` → Console)

---

## 🐛 Errores Comunes

### Error: "lucide-react is not defined"

**Solución**:
```bash
npm install lucide-react
```

### Error: "Fuentes no cargan"

**Solución**: Verifica que `@import url` en `<style>` es correcto. Si usas HTTP, cambia a HTTPS:

```css
@import url('https://fonts.googleapis.com/css2?...');
```

### Error: "Tailwind no aplica estilos"

**Solución**: En `tailwind.config.js`, asegúrate que:

```javascript
content: ["./src/**/*.{jsx,js}"],
```

### Menú móvil no funciona

**Solución**: Verifica que `setIsMenuOpen` está importado desde `useState`:

```jsx
import { useState } from 'react';
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

---

## 📚 Estructura de Archivos Recomendada

```
tu-proyecto/
├── src/
│   ├── pages/
│   │   └── index.jsx          # ← Copia ruta-emi-landing.jsx aquí
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── App.jsx
│   └── index.css
├── public/
├── tailwind.config.js
└── package.json
```

**O más simple** (para inicio rápido):

```
tu-proyecto/
├── src/
│   ├── ruta-emi-landing.jsx   # ← El componente
│   ├── App.jsx                # → Importa el componente
│   └── index.css
└── package.json
```

---

## 🚀 Desplegar en Producción

### Con Vercel (Recomendado)

```bash
# 1. Conecta tu repo
git add .
git commit -m "Add Ruta EMI landing"
git push

# 2. Crea proyecto en vercel.com
# 3. Conecta tu repositorio
# 4. Deploy automático
```

### Con Netlify

```bash
# 1. Construye
npm run build

# 2. Copia output a Netlify
# O conecta tu repo directamente en netlify.com
```

### Variables de Entorno (si las necesitas)

```bash
# .env.local
REACT_APP_API_URL=https://api.tudominio.com
REACT_APP_REGISTRATION_URL=https://app.tudominio.com/register
```

Úsalas en el componente:

```jsx
const handleRegister = () => {
  window.location.href = process.env.REACT_APP_REGISTRATION_URL;
};
```

---

## 📞 Soporte Rápido

| Problema | Referencia |
|----------|-----------|
| Cambiar colores | Línea ~80-120 (CSS) |
| Cambiar contenido | Línea ~30-100 (const arrays) |
| Cambiar tipografía | Línea ~60 (@import) |
| Menú móvil | Línea ~165-200 (state management) |
| Agregar secciones | Copia estructura de sección existente |

---

## ✨ Próximos Pasos Sugeridos

1. **Personaliza contenido** (5 min)
   - Rutas
   - Cursos
   - Casos clínicos

2. **Cambia colores** (5 min)
   - Primario
   - Secundario
   - Acentos

3. **Integra API** (variable según complejidad)
   - Conexión a backend
   - Formularios funcionales
   - Autenticación

4. **Optimiza imágenes** (10 min)
   - Reemplaza placeholders
   - Usa WebP
   - Lazy loading

5. **Deploy** (5 min)
   - Vercel / Netlify
   - Domain name
   - SSL certificate

---

## 🎓 Recursos Útiles

- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev
- **Lucide Icons**: https://lucide.dev
- **Google Fonts**: https://fonts.google.com

---

**¡Listo! Tienes una landing profesional en 5 minutos. 🚀**

Cualquier pregunta, revisa la documentación completa en `RUTA-EMI-DOCUMENTACION.md`.
