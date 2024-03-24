class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
    <div class="container-fluid p-0">
      <a class="navbar-brand ps-4" href="/index.html">
        <img src="/images/icons/dado_blanco_fondo_negro.webp" width="100" height="100"
          alt="Rolling and Falling Logo" /></a>
      <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#headerNavBar"
        aria-controls="headerNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="headerNavBar">
        <div class="navbar-nav">
          <a id="header-home" class="nav-link" href="/index.html">Home</a>
          <a id="header-items" class="nav-link" href="/pages/items/test_display_item.html">Items</a>
          <a id="header-places" class="nav-link" href="/pages/places/test_display_events.html">Places</a>
          <a id="header-charac" class="nav-link" href="/pages/charac/test_display_characters.html">Characters</a>
          <a id="header-events" class="nav-link" href="/pages/events/test_display_events.html">Events</a>
        </div>
      </div>
    </div>
  </nav>
        `
  }
}

customElements.define("special-header", SpecialHeader);