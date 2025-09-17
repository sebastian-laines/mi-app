/*
 * Funcionalidad principal de mi-app
 * - Alterna entre tema claro y oscuro persistiendo la preferencia
 * - Sincroniza el atributo aria-pressed para accesibilidad
 * - Actualiza dinámicamente el año en el pie de página
 */

(function () {
  const THEME_KEY = 'mi-app-theme';
  const toggleButton = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;
  const footerYear = document.getElementById('year');

  // Helper para aplicar tema y mantener consistencia entre clases/atributos
  function applyTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    toggleButton.setAttribute('aria-pressed', String(isDark));
    toggleButton.textContent = isDark ? 'Tema claro' : 'Tema oscuro';
  }

  function detectInitialTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    // Fallback: respeta la preferencia del sistema operativo
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function toggleTheme() {
    const currentTheme = rootElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  // Inicializa el año del pie de página
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  if (!toggleButton) {
    return;
  }

  const initialTheme = detectInitialTheme();
  applyTheme(initialTheme);

  toggleButton.addEventListener('click', toggleTheme);

  // Actualiza la preferencia si cambia a nivel del sistema operativo
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const systemTheme = event.matches ? 'dark' : 'light';
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (!storedTheme) {
      applyTheme(systemTheme);
    }
  });
})();
