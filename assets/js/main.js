/**
 * PORTFOLIO WEB PERSONAL - PABLO SOSA
 * JavaScript Vanilla (Accesible y Modular)
 * Cátedra: Diseño UX-UI - FCyT UADER - 2026
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initHeaderScroll();
});

/* --------------------------------------------------------------------------
   1. SELECTOR DE MODO CLARO / OSCURO (Con persistencia y a11y)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const storageKey = 'pablo-portfolio-theme';
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Función para obtener el tema actual
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
      return savedTheme;
    }
    return systemPrefersDark.matches ? 'dark' : 'light';
  }

  // Aplicar tema y actualizar accesibilidad
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    const nextThemeLabel = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    themeToggleBtn.setAttribute('aria-label', nextThemeLabel);
    themeToggleBtn.setAttribute('title', nextThemeLabel);

    // Actualizar meta theme-color para navegadores móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#0B0F19' : '#1D4ED8');
    }
  }

  // Inicializar estado al cargar
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  // Evento clic en el botón de alternancia
  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = root.getAttribute('data-theme') || (systemPrefersDark.matches ? 'dark' : 'light');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  });

  // Escuchar cambios de preferencia en el sistema si el usuario no fijó una opción
  systemPrefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem(storageKey)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* --------------------------------------------------------------------------
   2. MENÚ MOBILE ACCESIBLE (ARIA, foco y teclado)
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('primary-nav');
  if (!menuBtn || !nav) return;

  function toggleMenu(isOpen) {
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    nav.classList.toggle('is-open', isOpen);
    if (isOpen) {
      menuBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
    } else {
      menuBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  }

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Cerrar al hacer clic en un enlace de navegación
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Cerrar al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menuBtn.focus();
    }
  });

  // Cerrar si la pantalla se redimensiona a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menuBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. SOMBRA EN HEADER AL HACER SCROLL
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 15) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
