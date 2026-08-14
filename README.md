# 🎲 Rolling and Falling — RPG Campaign Wiki & Hub

**Rolling and Falling** es una plataforma web y wiki navegable diseñada para centralizar toda la información de la campaña de rol **D&D 5e Homebrew** ambientada en el continente de **Terranova**.

El proyecto permite a jugadores y al Dungeon Master consultar la historia del mundo, facciones de aventureros, catálogo de lugares, objetos mágicos, cronología de eventos, horarios habituales de juego y un **contador regresivo en tiempo real** hacia la próxima sesión.

---

## 🌟 Características Principales

- **🧭 Hub Principal (`index.html`):** Vista panorámica del mundo, carrusel de novedades, tarjetas de categorías y acceso rápido a la búsqueda.
- **⏱️ Contador de Próxima Sesión (`countdown.html`):** Reloj de cuenta regresiva en tiempo real con selector dinámico de fecha (guardado en `localStorage`), detección de zona horaria y sección de recordatorios para los jugadores.
- **🔍 Búsqueda Global Integrada:** Modal de búsqueda inteligente accesible desde la barra superior en cualquier página para encontrar personajes, lugares u objetos al instante.
- **🛡️ Facciones & Personajes (`pages/characters/`):** Fichas detalladas con Infoboxes RPG estilo wiki (Anchieta's House, Mano de Odín, Arcane Academy, Guardia de Everantha, etc.).
- **🗺️ Lugares de Terranova (`pages/places/`):** Catálogo de reinos, ciudades, mazmorras y regiones salvajes.
- **📜 Lore & Línea de Tiempo (`pages/lore/`):** Historia completa del panteón de Monarcas, los Reinos Santos y una línea de tiempo vertical animada.
- **💎 Reliquias & Objetos (`pages/lore/items/`):** Fichas de objetos mágicos con propiedades y niveles de rareza.
- **🗓️ Horarios de Partidas (`pages/schedules.html`):** Calendario de campañas activas y tabla de disponibilidad semanal.
- **🎨 Sistema de Diseño Fantasía Oscura:** Modo oscuro elegante con paleta oro/oro viejo (`#d4af37`), tipografías *Cinzel* e *Inter*, tarjetas con efecto cristal (glassmorphism) y soporte responsive completo.

---

## 📁 Estructura del Proyecto

```text
Rolling-and-Falling/
├── index.html                 # Hub principal de la wiki
├── countdown.html             # Contador regresivo para la próxima sesión
├── 404.html                   # Página de error 404 personalizada D&D
├── README.md                  # Documentación técnica del proyecto
├── start_server.bat           # Script de inicio rápido del servidor local (Python)
├── update.sh                  # Script de automatización Git
│
├── docs/
│   ├── Guide Lines.md         # Documento técnico de requisitos y arquitectura
│   └── NOTES.md               # Registro de tareas del desarrollo
│
├── css/
│   ├── wiki.css               # Sistema de diseño central, variables y tipografía
│   ├── index.css              # Estilos específicos de la portada y carrusel
│   ├── article.css            # Estilos para artículos y publicaciones de lore
│   ├── display.css            # Estilos de rejillas y catálogos de tarjetas
│   ├── timeline.css           # Estilos de la línea de tiempo vertical
│   └── object.css             # Estilos de fichas de objetos
│
├── scripts/
│   └── loadComponents.js      # Inyector dinámico de componentes (Navbar, Sidebar, Footer, Search Modal)
│
├── pages/
│   ├── schedules.html         # Calendario de partidas y disponibilidad
│   ├── characters/
│   │   ├── display_groups.html # Catálogo de grupos y facciones
│   │   └── groups/            # Artículos individuales de facciones
│   ├── places/
│   │   └── display_places.html # Catálogo de lugares de Terranova
│   ├── lore/
│   │   ├── display_lore.html  # Hub principal de Lore
│   │   ├── terranova.html     # Compendio completo de Terranova
│   │   ├── events/            # Cronología de eventos históricos
│   │   └── items/             # Catálogo y fichas de reliquias mágicas
│   └── templates/             # Plantillas de referencia para nuevos artículos
│
└── images/                    # Mapas, iconos y recursos gráficos
```

---

## 🛠️ Cómo Ejecutar Localmente

No se requiere ningún paso de compilación ni servidor Node.js. El proyecto es 100% estático y compatible con navegación directa offline (`file://`) o cualquier servidor HTTP estático.

### Opción 1: Ejecutar el script `start_server.bat` (Windows)
Haz doble clic en `start_server.bat` para iniciar un servidor local Python en `http://localhost:8000`.

### Opción 2: Abrir directamente en el navegador
Haz doble clic en `index.html` para abrir la wiki en tu navegador web preferido.

---

## 📝 Cómo Añadir Nuevos Artículos

Para mantener la coherencia visual, utiliza las plantillas disponibles en `pages/templates/`:

1. Duplica la plantilla correspondiente (ej. `template_character.html`).
2. Guarda el nuevo archivo HTML en la carpeta adecuada (`pages/characters/groups/`, `pages/lore/items/`, etc.).
3. Asegúrate de incluir el atributo `data-root` en la etiqueta `<body>` indicando la ruta relativa a la raíz (ej. `data-root="../../"`).
4. El script `scripts/loadComponents.js` se encargará automáticamente de inyectar la navegación, menú lateral y pie de página.

---

## ✒️ Licencia & Créditos

Desarrollado para la campaña de rol **Rolling and Falling**.
Creado y mantenido por **Ranko** (Dungeon Master).
