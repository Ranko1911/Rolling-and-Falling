document.addEventListener("DOMContentLoaded", function () {
  // Determine root path from body attribute or default to relative root
  const body = document.body;
  const rootPath = body.getAttribute("data-root") || "./";

  // HARDCODED COMPONENTS FOR OFFLINE COMPATIBILITY (Avoids CORS on file://)

  const HEADER_HTML = `
    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div class="container-fluid p-0">
        <a class="navbar-brand ps-4" href="https://ranko1911.github.io/Rolling-and-Falling/">
          <img src="https://ranko1911.github.io/Rolling-and-Falling/images/icons/dado_blanco_fondo_negro.webp" width="100" height="100" alt="Rolling and Falling Logo HTML" />
        </a>
        <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavBar" aria-controls="headerNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <p class="text-white" style="font-size: 24px;" align="center">Everything is a placeholder at the moment
        </p>
      </div>
    </nav>`;

  const SIDEBAR_HTML = `
<div class="card wiki-sidebar">
    <div class="card-header bg-warning text-black">
        <strong>Navigation</strong>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-dark text-white">
            <a href="${rootPath}index.html" class="text-white text-decoration-none">Home</a>
        </li>
        <!-- Next Session -->
        <li class="list-group-item bg-black">
            <a href="${rootPath}countdown.html" class="text-warning text-decoration-none small"><strong>Next Session (Timer)</strong></a>
        </li>

        <!-- Personajes -->
        <li class="list-group-item bg-dark text-white">
            <strong>Characters</strong>
        </li>
        <li class="list-group-item bg-black">
            <ul class="list-unstyled ps-3 mb-0">
                <li><a href="${rootPath}pages/characters/display_groups.html" class="text-light text-decoration-none small">Groups</a></li>
                <li><a href="#" class="text-secondary text-decoration-none small">NPCs (WIP)</a></li>
            </ul>
        </li>

        <!-- Objetos -->
        <li class="list-group-item bg-dark text-white">
            <strong>Objects</strong>
        </li>
        <li class="list-group-item bg-black">
            <ul class="list-unstyled ps-3 mb-0">
                <li><a href="${rootPath}pages/lore/items/display_items.html" class="text-light text-decoration-none small">All Objects</a></li>
            </ul>
        </li>

        <!-- Lugares -->
        <li class="list-group-item bg-dark text-white">
            <strong>Places</strong>
        </li>
        <li class="list-group-item bg-black">
            <ul class="list-unstyled ps-3 mb-0">
                <li><a href="${rootPath}pages/places/display_places.html" class="text-light text-decoration-none small">All Places</a></li>
            </ul>
        </li>

        <!-- Lore -->
        <li class="list-group-item bg-dark text-white">
            <strong>Lore</strong>
        </li>
        <li class="list-group-item bg-black">
            <ul class="list-unstyled ps-3 mb-0">
                <li><a href="${rootPath}pages/lore/display_lore.html" class="text-light text-decoration-none small">Lore Hub</a></li>
                <li><a href="${rootPath}pages/lore/terranova.html" class="text-secondary text-decoration-none small">Terranova</a></li>
                <li><a href="${rootPath}pages/lore/events/display_events.html" class="text-light text-decoration-none small">Events</a></li>
            </ul>
        </li>

        <!-- Horarios -->
        <li class="list-group-item bg-dark text-white">
            <strong>Game</strong>
        </li>
        <li class="list-group-item bg-black">
            <ul class="list-unstyled ps-3 mb-0">
                <li><a href="${rootPath}pages/schedules.html" class="text-light text-decoration-none small">Schedules</a></li>
            </ul>
        </li>
    </ul>
</div>`;

  const FOOTER_HTML = `
    <footer class="bg-black text-white text-center py-4">
      <div class="foot-container">
        <div class="row">
          <div class="col-md-6 mb-3 mb-md-0">
            <p class="mb-0">
              &copy; 2024 Rolling And Falling. All Rights Reserved.
            </p>
          </div>
          <div class="col-md-6">
            <a href="https://www.facebook.com" class="text-white me-3"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.twitter.com" class="text-white me-3"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com" class="text-white me-3"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/ancor-gonz%C3%A1lez-carballo-01665927a/" class="text-white"><i class="fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </div>
    </footer>`;

  function injectComponent(id, htmlContent) {
    const element = document.getElementById(id);
    if (!element) return;
    element.innerHTML = htmlContent;
  }

  // Inject Components
  injectComponent("header1", HEADER_HTML);
  injectComponent("footer1", FOOTER_HTML);
  injectComponent("sidebar-container", SIDEBAR_HTML);
});
