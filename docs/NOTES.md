# Rolling-and-Falling — RPG Campaign Wiki

Wiki oficial y compendio interactivo para la campaña de rol **D&D 5e Homebrew** ambientada en el mundo de *Terranova*.

## Estado del Proyecto

- [x] Crear un archivo `README.md` con la información completa del proyecto.
- [x] Estandarización de plantillas de artículos (`template_character.html`, etc.).
- [x] Error 404 personalizado interactivo ("Nat 1 en Navegación").
- [x] Contador regresivo interactivo para la próxima sesión (`countdown.html`) con configuración de fecha y zona horaria.
- [x] Sistema de navegación dinámico con barra de búsqueda global (`scripts/loadComponents.js`).
- [x] Sistema de diseño CSS RPG en modo oscuro con tipografía Cinzel + Inter.
- [x] Arquitectura de Contenido basada en Markdown / JSON (Concepto 1) e inyector universal `pages/view.html`.
- [x] Asistente CLI interactivo `npm run create` para generar artículos en Markdown.
- [x] **Diario de Sesiones / Bitácora (`pages/sessions.html` y `content/sessions/`)**.

## Ideas Futuras & Hoja de Ruta

Consulta la lista de propuestas y futuras mejoras en **[`docs/IDEAS.md`](file:///d:/repo-vault/Proyectos/Rol/Rolling-and-Falling/docs/IDEAS.md)**:
- 🗺️ Mapa Interactivo de Terranova (Leaflet.js)
- ⚔️ Statblocks 5e / Atributos Mecánicos
- 🎵 Reproductor de Música & Ambiente RPG

---

## Secciones Principales

- **Diario de Sesiones:** `pages/sessions.html`
- **Facciones & Aventureros:** `pages/characters/display_groups.html`
- **Lugares de Terranova:** `pages/places/display_places.html`
- **Lore & Compendio:** `pages/lore/display_lore.html` y `pages/lore/terranova.html`
- **Línea de Tiempo:** `pages/lore/events/display_events.html`
- **Reliquias & Objetos:** `pages/lore/items/display_items.html`
- **Horarios:** `pages/schedules.html`
- **Contador Próxima Sesión:** `countdown.html`
