# Portfolio Web Personal — Pablo Sosa

> Trabajo Final para la cátedra de **Diseño UX-UI (2026)**  
> **Licenciatura en Sistemas de Información** — Facultad de Ciencia y Tecnología (FCyT), UADER.  
> **Docente:** Mg. Ernesto Ledesma  
> **Alumno:** Pablo Sosa  

---

## 📌 Enlaces del Proyecto

- **Sitio web desplegado (URL pública):** [https://pablososa388.github.io/portfolio-pablo-sosa/](https://pablososa388.github.io/portfolio-pablo-sosa/) *(o URL configurada en Vercel/Netlify/GitHub Pages)*
- **Prototipo y Design System en Figma:** [Ver archivo en Figma](https://www.figma.com/) *(insertar enlace de tu archivo de Figma aquí)*
- **Repositorio en GitHub:** [https://github.com/pablososa388/portfolio-pablo-sosa](https://github.com/pablososa388/portfolio-pablo-sosa)

---

## 💡 Concepto Visual y Marca Personal

- **Palabras clave:** *Estructurado · Empático · Tecnológico*
- **Propuesta de valor:** Integración del rigor analítico y de ingeniería de la Licenciatura en Sistemas de Información con el diseño de interfaces centradas en el usuario (UX/UI), creando productos digitales accesibles, funcionales y de alto rendimiento.
- **Paleta de color:** Modo claro y modo oscuro con contraste validado WCAG 2.2 nivel AA (mínimo 4.5:1 en texto normal y 3:1 en texto grande).
- **Tipografía:** *Outfit* (títulos con carácter técnico e innovador) e *Inter / Plus Jakarta Sans* (cuerpo de texto con legibilidad óptima y `font-display: swap`).

---

## 🛠️ Stack Tecnológico

- **Estructura:** HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Estilos:** CSS3 moderno nativo (Custom Properties, CSS Grid, Flexbox, Mobile-First, sin dependencias ni preprocesadores pesados).
- **Interactividad (Vanilla JS):** Menú móvil accesible (`aria-expanded`, `aria-controls`), alternador de tema Claro/Oscuro con persistencia en `localStorage`, scroll suave accesible con respeto estricto a `prefers-reduced-motion`, validación de formulario de contacto.
- **Rendimiento y SEO:** Imágenes en formato WebP con dimensiones explícitas y `loading="lazy"`, metadatos completos y etiquetas Open Graph.
- **Deploy:** GitHub Pages / Vercel con CI/CD automatizado en rama `main`.

---

## 📂 Arquitectura del Proyecto

```text
portfolio-pablo-sosa/
├── assets/
│   ├── css/
│   │   └── style.css            # Design System, variables CSS, layout y componentes
│   ├── js/
│   │   └── main.js              # Interacciones, modo oscuro, menú mobile, validaciones
│   └── images/
│       ├── favicon.svg          # Favicon vectorial
│       ├── pablo-sosa.jpg       # Fotografía de perfil optimizada
│       └── ...                  # Mockups y capturas de proyectos
├── index.html                   # One-page con las 9 secciones obligatorias
├── case-study.html              # Caso de estudio UX/UI profundo (bonus opcional)
├── 404.html                     # Página de error 404 personalizada (bonus opcional)
├── .gitignore                   # Archivos ignorados por Git
└── README.md                    # Documentación formal del proyecto
```

---

## 🧭 Estructura de Información (9 Secciones)

1. **Header / Navegación:** Barra sticky, logotipo/monograma con iniciales, navegación con anclas accesibles, selector de tema claro/oscuro y menú hamburguesa en dispositivos móviles.
2. **Hero:** Presentación clara, propuesta de valor, badge de disponibilidad activa, ubicación (Colón, Entre Ríos, Argentina) y botones primario y secundario.
3. **Métricas / Highlights:** Indicadores cuantitativos de formación académica, proyectos e insignias formativas.
4. **Skills / Habilidades:** Categorización en UX Research & Strategy, UI & Prototipado, y Desarrollo Frontend, con tags interactivos.
5. **Proyectos:** Casos de estudio y desarrollos con ficha técnica, tags de herramientas y accesos directos.
6. **Experiencia y Formación:** Timeline cronológico con roles, instituciones y logros detallados.
7. **Sobre mí:** Biografía profesional, valores de diseño y fotografía de autor.
8. **Contacto:** Llamado a la acción claro, enlaces directos a canales de comunicación y formulario funcional.
9. **Footer:** Navegación secundaria repetida, redes sociales, derechos reservados y mención técnica.

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

1. Subir los cambios a la rama `main` en GitHub.
2. En GitHub, ingresar a la pestaña **Settings** (Configuración) del repositorio.
3. En la barra lateral izquierda, hacer clic en **Pages**.
4. En **Build and deployment > Source**, seleccionar **Deploy from a branch**.
5. En **Branch**, seleccionar la rama `main` y la carpeta `/ (root)`.
6. Hacer clic en **Save**. En un par de minutos, GitHub Pages publicará el enlace en vivo con HTTPS.

---

## 📚 Créditos y Referencias

- **Inspiración y Benchmark:**
  - Portfolio de referencia de la cátedra: *Ernesto Ledesma Portfolio*
  - Estructura editorial y minimalismo: *Ben Roach Design*
  - Sistema de componentes y jerarquías: *Community Portfolio UI Kit (Figma)*
- **Tipografías e Iconografía:** Google Fonts (*Outfit* e *Inter*), Lucide Icons / SVG optimizados.
- **Herramientas de Accesibilidad y Testing:** Lighthouse, WAVE Web Accessibility Evaluation Tool, WebAIM Contrast Checker.

---

## 🤖 Declaración de Uso de Inteligencia Artificial

En cumplimiento con las sugerencias de la cátedra de Diseño UX-UI sobre el uso ético y transparente de la Inteligencia Artificial:

- **Herramientas utilizadas:** Asistente de IA (Antigravity / Gemini) como soporte de pair programming y estructuración inicial de código HTML/CSS semántico.
- **Alcance:** Generación de estructuras base de accesibilidad (atributos ARIA, cálculo de contrastes WCAG AA) y sugerencias de modularización en CSS puro.
- **Revisión y autoría:** Todo el código, contenido personal, métricas, proyectos, textos descriptivos y decisiones de diseño fueron revisados, adaptados, validados y ajustados manualmente por el alumno para reflejar su perfil e identidad personal.
