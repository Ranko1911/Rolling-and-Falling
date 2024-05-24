class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
    <div class="container-fluid p-0">
      <a class="navbar-brand ps-4" href="https://ranko1911.github.io/Rolling-and-Falling/">
        <img src="https://ranko1911.github.io/Rolling-and-Falling/images/icons/dado_blanco_fondo_negro.webp" width="100" height="100"
          alt="Rolling and Falling Logo Java Test" /></a>
      <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavBar"
        aria-controls="headerNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="headerNavBar">
        <div class="navbar-nav">
          <a id="header-home" class="nav-link" href="https://ranko1911.github.io/Rolling-and-Falling/">Home</a>
          <a id="header-items" class="nav-link" href="https://ranko1911.github.io/Rolling-and-Falling/pages/items/test_display_item.html">Items</a>
          <a id="header-places" class="nav-link" href="https://ranko1911.github.io/Rolling-and-Falling/pages/places/test_place.html">Places</a>
          <a id="header-npcs" class="nav-link" href="https://ranko1911.github.io/Rolling-and-Falling/pages/NPCS/test_char.html">NPCs</a>
          <a id="header-events" class="nav-link" href="https://ranko1911.github.io/Rolling-and-Falling/pages/events/test_events.html">Events</a>
        </div>
      </div>
    </div>
  </nav>
        `
  }
}

customElements.define("special-header", SpecialHeader);

// alert(1);