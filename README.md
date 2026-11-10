# Portfolio Web Personal — Pablo Sosa

> Trabajo Final para la cátedra de **Diseño UX-UI (2026)**  
> **Licenciatura en Sistemas de Información** — Facultad de Ciencia y Tecnología (FCyT), UADER (Sede Concepción del Uruguay).  
> **Docente:** Mg. Ernesto Ledesma  
> **Alumno:** Pablo Sosa  

---

## 📌 Enlaces del Proyecto

- **Sitio web desplegado (URL pública con HTTPS):** [https://pablososa388.github.io/Portfolio-Sosa_Pablo/](https://pablososa388.github.io/Portfolio-Sosa_Pablo/)
- **Prototipo y Diseño en Figma:** [Ver archivo en Figma (OpenArt & UI Kit)](https://www.figma.com/design/EhKpbNKNmI9dD0DaENZEdz/OpenArt---Design?node-id=0-1&p=f&t=xrZcFD4WN9RypSKj-0)
- **Repositorio oficial en GitHub:** [https://github.com/pablososa388/Portfolio-Sosa_Pablo](https://github.com/pablososa388/Portfolio-Sosa_Pablo)
- **Caso de Estudio Dedicado:** [Ver Caso de Estudio de Cubri Seguros](case-study.html)
- **Analítico de Materias (Oficial SIU Guaraní):** [Descargar Analítico Académico (PDF)](assets/docs/analitico.pdf)
- **Mobile lighthouse (screen de rendimiento):** [https://github.com/pablososa388/Portfolio-Sosa_Pablo/blob/main/assets/images/mobile_lighthouse.png] (assets/docs/images/mobile_lighthouse.png)

---

## 💡 Concepto Visual y Marca Personal

- **Palabras clave:** *Estructurado · Empático · Tecnológico*
- **Propuesta de valor:** Integración de la base lógica, analítica y de ingeniería de software de la carrera de Sistemas con metodologías ágiles de diseño centrado en el usuario (UX/UI), concibiendo interfaces accesibles, limpias y de alto rendimiento.
- **Paleta de color:** Modos Claro y Oscuro con contraste estricto **WCAG 2.2 nivel AA** (mínimo 4.5:1 en texto normal y 3:1 en texto grande).
- **Tipografía:** 
  - Títulos: *Outfit* (Google Fonts, `font-display: swap`).
  - Textos de lectura: *Inter* (Google Fonts, `font-display: swap`).

---

## 🛠️ Stack Tecnológico

- **Estructura semántica:** HTML5 puro y accesible (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<ol>`, `<footer>`, `<dialog>`, `aria-*`).
- **Estilos:** CSS3 moderno nativo (Custom Properties / Variables CSS, CSS Grid, Flexbox, Mobile-First, sin frameworks pesados ni código spaghetti).
- **Interactividad (JavaScript Vanilla):** 
  - Selector de Modo Claro / Modo Oscuro con detección de `prefers-color-scheme` y persistencia en `localStorage`.
  - Menú hamburguesa accesible en mobile con control de foco y atributos `aria-expanded` y `aria-controls`.
  - Elevación translúcida dinámica del header con *backdrop-filter*.
  - Validación accesible del formulario de contacto.
  - Respeto estricto a la preferencia del usuario de reducción de movimiento (`prefers-reduced-motion`).
- **Despliegue & CI/CD:** GitHub Pages con despliegue automático ante cada push a la rama `main`.

---

## 🧭 Arquitectura de Información (9 Secciones Obligatorias)

1. **Header / Navegación:** Barra sticky translúcida, monograma personal **PS**, navegación por anclas accesibles, toggle de tema y menú móvil.
2. **Hero:** Título con nombre y rol universitario, propuesta de valor, badges de disponibilidad activa y ubicación geográfica (*Colón, Entre Ríos - GMT-3*), y doble CTA (*Ver proyectos* y *Contacto*).
3. **Métricas / Highlights:** Fila de 4 tarjetas cuantitativas reales (2 años de carrera, 3 proyectos destacados, 15+ herramientas aplicadas, 100% accesibilidad).
4. **Skills / Habilidades:** 4 categorías interactivas con chips:
   - *Desarrollo .NET & Backend:* C#, .NET, WinForms, POO, Patrones de Diseño, SQL Server y Bases de Datos.
   - *Diseño UX/UI & Prototipado:* Figma, Design Systems, Wireframing, User Research, Test de Usabilidad, WCAG AA.
   - *Frontend & Estándares Web:* HTML5 semántico, CSS3 moderno, JS vanilla, Mobile-First, SEO.
   - *Herramientas & Entornos:* Git, GitHub, Visual Studio, VS Code, SSMS, DevTools, WAVE.
5. **Proyectos:** Grilla clickeable con 3 proyectos reales:
   - **Cubri Seguros** (TP5 - Caso de estudio de cotización y contratación digital).
   - **Coffea Landing** (TP3/TP4 - Landing page gastronómica en Netlify).
   - **OpenArt** (Prototipo y UI Kit en Figma).
6. **Experiencia y Formación (Timeline):** Línea de tiempo con la Licenciatura en Sistemas en FCyT UADER (desde 2025), formación práctica en Frontend/UX y botón de anexo al Analítico Académico oficial en PDF.
7. **Sobre mí:** Biografía profesional, retrato de autor optimizado y 3 principios de trabajo (*Estructura y Claridad*, *Empatía y Accesibilidad*, *Iteración y Aprendizaje*).
8. **Contacto:** Canales de comunicación directa (Email `mailto:`, LinkedIn, GitHub) y formulario funcional.
9. **Footer:** Navegación repetida, enlaces a redes, copyright 2026 y créditos técnicos.

---

## 🌟 Requerimientos Opcionales y Bonus Implementados

- [x] **Modo Claro / Modo Oscuro:** Selector accesible con icono reactivo y persistencia local (`localStorage`).
- [x] **Página de Caso de Estudio Dedicada (`case-study.html`):** Análisis metodológico exhaustivo de *Cubri Seguros* con navegación cruzada entre proyectos.
- [x] **Página 404 Personalizada (`404.html`):** Pantalla de error con recuperación de navegación, accesibilidad y diseño integrado.
- [x] **Formulario de Contacto Funcional:** Validación accesible en cliente y listo para recepcionar consultas vía Formspree / Netlify.
- [x] **Anexo Oficial de Analítico:** Integración directa del PDF oficial de materias aprobadas emitido por el sistema SIU Guaraní.
- [x] **Accesibilidad WCAG 2.2 Nivel AA:** Enlace *Skip to content*, contraste 4.5:1+, foco visible `:focus-visible`, soporte de teclado total y reducción de movimiento.

---

## 📋 Historial de Commits Incrementales

El repositorio cuenta con un historial granular y descriptivo de commits en la rama `main`:

1. `chore: inicializar repositorio, estructura base de carpetas y config inicial`
2. `feat: maquetar skip-link y header sticky con navegacion accesible, mobile menu y toggle modo oscuro/claro`
3. `feat: maquetar seccion hero con badge de disponibilidad y metricas destacadas`
4. `feat: desarrollar seccion de habilidades categorizadas con soporte para dot net y chips interactivos`
5. `feat: maquetar grilla de proyectos y tarjetas con tags, caso de estudio y links`
6. `feat: ajustar metricas reales e implementar timeline de formacion con anexo de analitico`
7. `feat: anexar pdf oficial del analitico y maquetar seccion sobre mi con principios de diseno`
8. `feat: maquetar seccion de contacto con formulario funcional y footer completo`
9. `feat(ux): implementar pagina detallada de caso de estudio (case-study.html)`
10. `feat: crear pagina 404 personalizada con accesibilidad y recuperacion de navegacion`
11. `docs: documentar readme final con checklist de evaluacion y guia de despliegue`

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

1. En el repositorio de GitHub, dirigirse a la pestaña **Settings**.
2. En el menú izquierdo, seleccionar **Pages**.
3. En la sección **Build and deployment > Source**, elegir **Deploy from a branch**.
4. En **Branch**, seleccionar la rama `main` y el directorio `/ (root)`.
5. Guardar los cambios con **Save**. La plataforma desplegará automáticamente el sitio con certificado SSL (HTTPS).

---

## 📚 Créditos y Referencias

- **Portfolio de Referencia Cátedra:** Mg. Ernesto Ledesma (*ernesto-ledesma-portfolio.vercel.app*).
- **Referencias de Diseño Editorial:** *Ben Roach Design* y *Community UI Kits (Figma)*.
- **Tipografías:** *Outfit* e *Inter* vía Google Fonts.
- **Herramientas de Auditoría:** Google Lighthouse, WAVE Web Accessibility Evaluation Tool, WebAIM Contrast Checker.

---

## 🤖 Declaración de Uso de Inteligencia Artificial

En cumplimiento con los lineamientos de la cátedra sobre el uso ético y transparente de la Inteligencia Artificial:

- **Herramientas utilizadas:** Asistente de IA (Antigravity / Gemini) como soporte de pair programming y estructuración de código HTML/CSS semántico.
- **Alcance:** Generación de esqueletos de accesibilidad (atributos ARIA, contrastes WCAG AA) y asistencia en la modularización de estilos en CSS puro sin dependencias de frameworks.
- **Revisión y Autoría:** Todo el código, contenido personal, métricas, proyectos reales, textos de casos de estudio y decisiones de diseño fueron revisados, adaptados y verificados manualmente por el alumno para reflejar su identidad académica y profesional.
