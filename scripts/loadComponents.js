document.addEventListener("DOMContentLoaded", function () {
  // Determine relative root path from body attribute or fallback
  const body = document.body;
  let rootPath = body.getAttribute("data-root");

  if (!rootPath) {
    const path = window.location.pathname;
    const depth = (path.match(/\/pages\//g) || []).length;
    if (depth > 0) {
      const pageSegments = path.split("/pages/")[1].split("/");
      rootPath = "../".repeat(pageSegments.length);
    } else {
      rootPath = "./";
    }
  }

  if (rootPath && !rootPath.endsWith("/")) {
    rootPath += "/";
  }

  const HEADER_HTML = `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center gap-2" href="${rootPath}index.html">
          <img src="${rootPath}images/icons/dado_blanco_fondo_negro.webp" width="40" height="40" alt="Rolling and Falling Logo" class="rounded" />
          <span class="fw-bold text-warning fs-4">Rolling & Falling</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavBar" aria-controls="headerNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="headerNavBar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            <li class="nav-item"><a class="nav-link" href="${rootPath}index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/characters/display_groups.html">Aventureros</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/places/display_places.html">Lugares</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/lore/display_lore.html">Lore</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/schedules.html">Horarios</a></li>
            <li class="nav-item"><a class="nav-link text-warning fw-bold" href="${rootPath}countdown.html">⏱️ Próxima Sesión</a></li>
          </ul>

          <button class="btn btn-outline-gold btn-sm d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#searchModal">
            <span>🔍</span> Buscar en Wiki...
          </button>
        </div>
      </div>
    </nav>`;

  const SIDEBAR_HTML = `
    <div class="card wiki-sidebar shadow">
      <div class="card-header d-flex align-items-center justify-content-between">
        <span class="fw-bold">NAVEGACIÓN</span>
        <span class="rpg-badge rpg-badge-gold">D&D 5E</span>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <a href="${rootPath}index.html" class="d-flex align-items-center gap-2">
            <span>🏠</span> <strong>Inicio</strong>
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}countdown.html" class="text-warning fw-bold d-flex align-items-center gap-2">
            <span>⏱️</span> Próxima Sesión
          </a>
        </li>

        <li class="list-group-item text-uppercase small text-muted font-monospace mt-2">Entidades de Campaña</li>

        <li class="list-group-item">
          <a href="${rootPath}pages/characters/display_groups.html" class="d-flex align-items-center gap-2">
            <span>🛡️</span> Grupos & Facciones
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/places/display_places.html" class="d-flex align-items-center gap-2">
            <span>🗺️</span> Lugares de Terranova
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/items/display_items.html" class="d-flex align-items-center gap-2">
            <span>💎</span> Objetos Mágicos
          </a>
        </li>

        <li class="list-group-item text-uppercase small text-muted font-monospace mt-2">Lore & Historia</li>

        <li class="list-group-item">
          <a href="${rootPath}pages/lore/display_lore.html" class="d-flex align-items-center gap-2">
            <span>📜</span> Hub de Lore
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/terranova.html" class="d-flex align-items-center gap-2">
            <span>🌍</span> Terranova
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/events/display_events.html" class="d-flex align-items-center gap-2">
            <span>📅</span> Línea del Tiempo
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/schedules.html" class="d-flex align-items-center gap-2">
            <span>🗓️</span> Horarios
          </a>
        </li>
      </ul>
    </div>`;

  const FOOTER_HTML = `
    <footer class="mt-5 py-4 border-top border-secondary bg-black text-center text-muted">
      <div class="container">
        <p class="mb-1 text-light fw-bold">Rolling and Falling RPG Campaign Wiki</p>
        <p class="small mb-3">"In the heart of chaos, we find our story."</p>
        <div class="d-flex justify-content-center gap-3 mb-3">
          <a href="${rootPath}index.html" class="text-secondary small">Inicio</a>
          <a href="${rootPath}pages/lore/display_lore.html" class="text-secondary small">Lore</a>
          <a href="${rootPath}pages/characters/display_groups.html" class="text-secondary small">Grupos</a>
          <a href="${rootPath}pages/places/display_places.html" class="text-secondary small">Lugares</a>
          <a href="${rootPath}countdown.html" class="text-secondary small">Contador</a>
        </div>
        <p class="small text-muted mb-0">&copy; ${new Date().getFullYear()} Rolling and Falling. D&D 5e Homebrew Wiki.</p>
      </div>
    </footer>`;

  const SEARCH_MODAL_HTML = `
    <div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-secondary">
            <h5 class="modal-title text-warning" id="searchModalLabel">🔍 Buscar en la Wiki</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <input type="text" id="wikiSearchInput" class="form-control form-control-lg search-input mb-3" placeholder="Escribe para buscar personajes, lugares, objetos, lore..." autofocus>
            <div id="wikiSearchResults" class="list-group">
              <!-- Dynamically populated search results -->
            </div>
          </div>
        </div>
      </div>
    </div>`;

  function injectComponent(id, htmlContent) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = htmlContent;
    }
  }

  injectComponent("header1", HEADER_HTML);
  injectComponent("footer1", FOOTER_HTML);
  injectComponent("sidebar-container", SIDEBAR_HTML);

  if (!document.getElementById("searchModal")) {
    document.body.insertAdjacentHTML("beforeend", SEARCH_MODAL_HTML);
  }

  // Search entries list
  let searchEntries = [
    { title: "Terranova Lore Completo", category: "Lore", url: `${rootPath}pages/lore/terranova.html`, desc: "Historia completa, reinos y geografía de Terranova." },
    { title: "Lore Hub", category: "Lore", url: `${rootPath}pages/lore/display_lore.html`, desc: "Compendio central de mitos, leyendas e historia del mundo." },
    { title: "Contador de Próxima Sesión", category: "Juego", url: `${rootPath}countdown.html`, desc: "Reloj regresivo en tiempo real para la próxima partida." },
    { title: "Horarios de Partidas", category: "Juego", url: `${rootPath}pages/schedules.html`, desc: "Calendario de sesiones activas y disponibilidad del grupo." },
    { title: "Catálogo de Grupos & Facciones", category: "Grupos", url: `${rootPath}pages/characters/display_groups.html`, desc: "Lista de compañías de aventureros y facciones." },
    { title: "Catálogo de Lugares & Regiones", category: "Lugares", url: `${rootPath}pages/places/display_places.html`, desc: "Catálogo de ciudades, mazmorras y regiones." },
    { title: "Catálogo de Objetos Mágicos", category: "Objetos", url: `${rootPath}pages/lore/items/display_items.html`, desc: "Artefactos, reliquias y equipamiento místico." },
    { title: "Línea del Tiempo & Eventos", category: "Eventos", url: `${rootPath}pages/lore/events/display_events.html`, desc: "Cronología de grandes acontecimientos históricos." }
  ];

  // Fetch content manifest asynchronously to enrich search index with Markdown articles
  fetch(`${rootPath}data/content-manifest.json`)
    .then(res => res.json())
    .then(data => {
      if (data && data.entries) {
        data.entries.forEach(entry => {
          searchEntries.push({
            title: entry.title,
            category: entry.category,
            url: `${rootPath}pages/view.html?id=${entry.id}`,
            desc: entry.description || entry.subtitle || ""
          });
        });
      }
    })
    .catch(err => console.warn("Search manifest load warning:", err));

  const searchInput = document.getElementById("wikiSearchInput");
  const searchResults = document.getElementById("wikiSearchResults");

  function renderSearchResults(query) {
    if (!searchResults) return;
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">Escribe un término arriba para buscar artículos de la wiki...</div>`;
      return;
    }

    const matches = searchEntries.filter(entry =>
      entry.title.toLowerCase().includes(cleanQuery) ||
      entry.category.toLowerCase().includes(cleanQuery) ||
      entry.desc.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">No se encontraron resultados coincidentes.</div>`;
      return;
    }

    searchResults.innerHTML = matches.map(entry => `
      <a href="${entry.url}" class="list-group-item list-group-item-action bg-dark text-light border-secondary">
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h6 class="mb-1 text-warning">${entry.title}</h6>
          <span class="rpg-badge rpg-badge-gold">${entry.category}</span>
        </div>
        <p class="mb-1 small text-secondary">${entry.desc}</p>
      </a>
    `).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  }

  const searchModalEl = document.getElementById("searchModal");
  if (searchModalEl) {
    searchModalEl.addEventListener("shown.bs.modal", () => {
      if (searchInput) {
        searchInput.focus();
        renderSearchResults(searchInput.value);
      }
    });
  }
});
