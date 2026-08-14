document.addEventListener("DOMContentLoaded", function () {
  // Determine relative root path from body attribute or fallback
  const body = document.body;
  let rootPath = body.getAttribute("data-root");

  if (!rootPath) {
    // Auto-calculate relative path based on directory depth
    const path = window.location.pathname;
    const depth = (path.match(/\/pages\//g) || []).length;
    if (depth > 0) {
      const pageSegments = path.split("/pages/")[1].split("/");
      rootPath = "../".repeat(pageSegments.length);
    } else {
      rootPath = "./";
    }
  }

  // Ensure rootPath ends with a slash if not empty
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
            <li class="nav-item"><a class="nav-link" href="${rootPath}index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/characters/display_groups.html">Adventurers</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/places/display_places.html">Places</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/lore/display_lore.html">Lore</a></li>
            <li class="nav-item"><a class="nav-link" href="${rootPath}pages/schedules.html">Schedules</a></li>
            <li class="nav-item"><a class="nav-link text-warning fw-bold" href="${rootPath}countdown.html">⏱️ Next Session</a></li>
          </ul>

          <button class="btn btn-outline-gold btn-sm d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#searchModal">
            <span>🔍</span> Search Wiki...
          </button>
        </div>
      </div>
    </nav>`;

  const SIDEBAR_HTML = `
    <div class="card wiki-sidebar shadow">
      <div class="card-header d-flex align-items-center justify-content-between">
        <span class="fw-bold">NAVIGATION</span>
        <span class="rpg-badge rpg-badge-gold">D&D 5E</span>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <a href="${rootPath}index.html" class="d-flex align-items-center gap-2">
            <span>🏠</span> <strong>Home</strong>
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}countdown.html" class="text-warning fw-bold d-flex align-items-center gap-2">
            <span>⏱️</span> Next Session Countdown
          </a>
        </li>

        <li class="list-group-item text-uppercase small text-muted font-monospace mt-2">Campaign Entities</li>

        <li class="list-group-item">
          <a href="${rootPath}pages/characters/display_groups.html" class="d-flex align-items-center gap-2">
            <span>🛡️</span> Groups & Factions
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/places/display_places.html" class="d-flex align-items-center gap-2">
            <span>🗺️</span> Places of Terranova
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/items/display_items.html" class="d-flex align-items-center gap-2">
            <span>💎</span> Magical Items
          </a>
        </li>

        <li class="list-group-item text-uppercase small text-muted font-monospace mt-2">Lore & World</li>

        <li class="list-group-item">
          <a href="${rootPath}pages/lore/display_lore.html" class="d-flex align-items-center gap-2">
            <span>📜</span> Lore Hub
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/terranova.html" class="d-flex align-items-center gap-2">
            <span>🌍</span> Terranova Campaign
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/lore/events/display_events.html" class="d-flex align-items-center gap-2">
            <span>📅</span> Timeline & Events
          </a>
        </li>
        <li class="list-group-item">
          <a href="${rootPath}pages/schedules.html" class="d-flex align-items-center gap-2">
            <span>🗓️</span> Game Schedules
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
          <a href="${rootPath}index.html" class="text-secondary small">Home</a>
          <a href="${rootPath}pages/lore/display_lore.html" class="text-secondary small">Lore</a>
          <a href="${rootPath}pages/characters/display_groups.html" class="text-secondary small">Groups</a>
          <a href="${rootPath}pages/places/display_places.html" class="text-secondary small">Places</a>
          <a href="${rootPath}countdown.html" class="text-secondary small">Countdown</a>
        </div>
        <p class="small text-muted mb-0">&copy; ${new Date().getFullYear()} Rolling and Falling. Created for Homebrew D&D 5e.</p>
      </div>
    </footer>`;

  const SEARCH_MODAL_HTML = `
    <div class="modal fade search-modal" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-secondary">
            <h5 class="modal-title text-warning" id="searchModalLabel">🔍 Search Wiki</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" id="wikiSearchInput" class="form-control form-control-lg search-input mb-3" placeholder="Type to search characters, places, items, lore..." autofocus>
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

  // Inject Header, Footer, Sidebar
  injectComponent("header1", HEADER_HTML);
  injectComponent("footer1", FOOTER_HTML);
  injectComponent("sidebar-container", SIDEBAR_HTML);

  // Inject Search Modal if not present
  if (!document.getElementById("searchModal")) {
    document.body.insertAdjacentHTML("beforeend", SEARCH_MODAL_HTML);
  }

  // Wiki Search Index
  const wikiEntries = [
    { title: "Terranova Campaign Overview", category: "Lore", url: `${rootPath}pages/lore/terranova.html`, desc: "Full history, kingdoms, and geography of Terranova." },
    { title: "Lore Hub", category: "Lore", url: `${rootPath}pages/lore/display_lore.html`, desc: "Central repository of history, myths, and world lore." },
    { title: "Next Session Countdown", category: "Game", url: `${rootPath}countdown.html`, desc: "Live countdown timer to the next tabletop game." },
    { title: "Game Schedules", category: "Game", url: `${rootPath}pages/schedules.html`, desc: "Session calendar and availability tracker." },
    { title: "Adventurer Groups & Factions", category: "Groups", url: `${rootPath}pages/characters/display_groups.html`, desc: "Roster of player parties and major factions." },
    { title: "Odin's Hand", category: "Groups", url: `${rootPath}pages/characters/groups/OdinHand.html`, desc: "Aventureros - Odin's Hand faction details." },
    { title: "Arcane Academy", category: "Groups", url: `${rootPath}pages/characters/groups/ArcaneAcademy.html`, desc: "Mage guild and magical scholarly institution." },
    { title: "Anchieta House", category: "Groups", url: `${rootPath}pages/characters/groups/AnchietaHouse.html`, desc: "Noble house and political group." },
    { title: "City Guard", category: "Groups", url: `${rootPath}pages/characters/groups/Guard.html`, desc: "Local enforcement and military guard." },
    { title: "House Reinhart", category: "Groups", url: `${rootPath}pages/characters/groups/Reinhart.html`, desc: "Noble lineage and political faction." },
    { title: "Sun Seed Order", category: "Groups", url: `${rootPath}pages/characters/groups/SunSeed.html`, desc: "Religious and paladin order." },
    { title: "Staff & Key Figures", category: "Groups", url: `${rootPath}pages/characters/groups/Staff.html`, desc: "Key NPCs and administrative personnel." },
    { title: "Places of Terranova", category: "Places", url: `${rootPath}pages/places/display_places.html`, desc: "Catalog of cities, regions, and dungeons." },
    { title: "Magical Items Index", category: "Items", url: `${rootPath}pages/lore/items/display_items.html`, desc: "Artifacts, magical gear, and weapons." },
    { title: "Fragmento de Sangre", category: "Items", url: `${rootPath}pages/lore/items/FragmentoDeSangre.html`, desc: "Rare magical relic crystal." },
    { title: "Guantelete Plateado", category: "Items", url: `${rootPath}pages/lore/items/GuanteletePlateado.html`, desc: "Silver gauntlet artifact." },
    { title: "Timeline & Events", category: "Events", url: `${rootPath}pages/lore/events/display_events.html`, desc: "Chronological timeline of historical events." }
  ];

  // Quick Search Logic
  const searchInput = document.getElementById("wikiSearchInput");
  const searchResults = document.getElementById("wikiSearchResults");

  function renderSearchResults(query) {
    if (!searchResults) return;
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">Type a search term above to find wiki articles...</div>`;
      return;
    }

    const matches = wikiEntries.filter(entry =>
      entry.title.toLowerCase().includes(cleanQuery) ||
      entry.category.toLowerCase().includes(cleanQuery) ||
      entry.desc.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="p-3 text-muted text-center">No matching entries found.</div>`;
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
