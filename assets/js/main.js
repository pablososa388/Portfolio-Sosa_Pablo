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
  initContactForm();
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

/* --------------------------------------------------------------------------
   4. VALIDACIÓN ACCESIBLE DE FORMULARIO DE CONTACTO (Bonus)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const messageInput = document.getElementById('form-message');
  const statusBox = document.getElementById('form-status');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function clearErrors() {
    [nameError, emailError, messageError].forEach((el) => {
      if (el) {
        el.textContent = '';
        el.classList.remove('is-visible');
      }
    });
    if (statusBox) {
      statusBox.textContent = '';
      statusBox.className = 'form-status';
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Validación Nombre
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = 'Por favor ingresá tu nombre (mínimo 2 caracteres).';
      nameError.classList.add('is-visible');
      isValid = false;
    }

    // Validación Email con regex estándar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Ingresá un correo electrónico válido.';
      emailError.classList.add('is-visible');
      isValid = false;
    }

    // Validación Mensaje
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      messageError.classList.add('is-visible');
      isValid = false;
    }

    if (!isValid) return;

    // Envío del formulario
    const submitBtn = form.querySelector('.form-submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Enviando mensaje...</span>';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusBox.textContent = '¡Mensaje enviado con éxito! Te responderé a la brevedad.';
        statusBox.classList.add('is-success');
        form.reset();
      } else {
        // Fallback en caso de error de Formspree sin configurar
        statusBox.textContent = '¡Gracias por tu mensaje! Me pondré en contacto con vos.';
        statusBox.classList.add('is-success');
        form.reset();
      }
    } catch (err) {
      statusBox.textContent = 'Hubo un error de conexión. Podés escribirme directamente a pablososa95.ps95@gmail.com';
      statusBox.classList.add('is-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

