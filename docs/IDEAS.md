# 💡 Ideas y Mejoras Futuras — Rolling and Falling

Propuestas de funciones y mejoras visuales/interactivas para llevar la wiki de campaña al siguiente nivel de inmersión.

---

## 📜 1. Diario de Sesiones / Bitácora de Partida (`content/sessions/`)
- **Concepto:** Registro cronológico de lo ocurrido en cada partida jugada para mantener viva la memoria de la campaña.
- **Funcionalidad:** Artículos Markdown por sesión (`sesion-01.md`, `sesion-02.md`) con resumen de acontecimientos, decisiones de los jugadores, enemigos derrotados y botín obtenido.
- **Archivos creados:**
  - `content/sessions/` (Carpeta de archivos `.md` de cada sesión)
  - `pages/sessions.html` (Vista de índice y catálogo de partidas jugadas)
  - Integración en `npm run create` (Opción `[6] Diario de Sesión`)

- [x] Implementar estructura de Diario de Sesiones

---

## 🗺️ 2. Mapa Interactivo de Terranova (Leaflet.js)
- **Concepto:** Integrar un visor de mapa interactivo navegable (zoom, arrastre y marcadores con Leaflet.js).
- **Funcionalidad:** Los jugadores podrán hacer clic en los marcadores/pines de ciudades, fortalezas o mazmorras sobre el mapa para abrir directamente la ficha del lugar (`pages/view.html?id=...`).
- **Archivos a crear/modificar:**
  - `pages/map.html` (Visor interactivo)
  - `scripts/map-viewer.js` (Lógica de marcadores y coordenadas)
  - `data/map-markers.json` (Lista de puntos de interés y coordenadas en el mapa)

- [ ] Implementar visor de mapa interactivo

---

## ⚔️ 3. Fichas de Datos Rápida (Statblocks 5e / Atributos)
- **Concepto:** Añadir bloques de estadísticas mecánicas de D&D 5e a las fichas de personajes, criaturas y NPCs en la wiki.
- **Funcionalidad:** Renderizar tarjetas estilo D&D 5e con Clase de Armadura (CA), Puntos de Golpe (HP), Velocidad, Atributos principales (Fuerza, Destreza, etc.) y habilidades clave leyendo metadatos YAML.
- **Campos a incorporar en YAML:**
  ```yaml
  ca: 18
  hp: 54
  speed: "30 ft"
  stats:
    str: 16
    dex: 12
    con: 14
    int: 10
    wis: 13
    cha: 15
  ```

- [ ] Incorporar renderizado de Statblocks 5e en `pages/view.html`

---

## 🎵 4. Reproductor de Música y Ambiente RPG
- **Concepto:** Un widget discreto de audio para ambientar la lectura del lore y las sesiones de juego.
- **Funcionalidad:** Selector de ambiente (Taberna en Everantha, Exploración Salvaje, Mazmorra Oscura, Combate Táctico) con control de volumen independiente y botón de silencio rápido.
- **Archivos a modificar:**
  - `scripts/audio-player.js` (Reproductor flotante)
  - `css/wiki.css` (Estilos del reproductor estético RPG)

- [ ] Implementar widget de audio ambiental
