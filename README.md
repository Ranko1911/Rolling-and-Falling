# 🎲 Rolling and Falling — RPG Campaign Wiki & Hub

**Rolling and Falling** es una plataforma web y wiki navegable diseñada para centralizar toda la información de la campaña de rol **D&D 5e Homebrew** ambientada en el continente de **Terranova**.

El proyecto utiliza una **Arquitectura Basada en Datos (Markdown / JSON)** que permite escribir nuevo lore, personajes, objetos, lugares, eventos o resúmenes de sesiones simplemente creando archivos de texto `.md` sin necesidad de tocar código HTML ni compilar la aplicación.

---

## 🌟 Características Principales

- **📝 Arquitectura Basada en Markdown (`content/`):** Todo el contenido de la wiki se escribe en archivos `.md` estandarizados con metadatos en YAML.
- **📜 Diario de Sesiones (Bitácora de Campaña):** Registro cronológico de cada sesión jugada (`pages/sessions.html`), incluyendo resúmenes de combate, botín obtenido y participantes.
- **🖼️ Visor Universal de Contenido (`pages/view.html`):** Plantilla única que renderiza dinámicamente cualquier archivo Markdown generando la **Infobox RPG**, breadcrumbs, títulos y cuerpo formateado.
- **🚀 Generador Interactivo CLI (`npm run create`):** Herramienta por línea de comandos para crear nuevos personajes, lugares, objetos o sesiones de juego respondiendo preguntas rápidas en la terminal.
- **⏱️ Contador de Próxima Sesión (`countdown.html`):** Reloj de cuenta regresiva en tiempo real con selector dinámico de fecha (guardado en `localStorage`), detección de zona horaria y sección de recordatorios.
- **🔍 Búsqueda Global Integrada:** Modal de búsqueda inteligente sincronizado con el catálogo `data/content-manifest.json`.
- **🎨 Sistema de Diseño Fantasía Oscura:** Modo oscuro elegante con paleta oro (`#d4af37`), tipografías *Cinzel* e *Inter*, tarjetas con efecto cristal (glassmorphism) y soporte responsive completo.

---

## 📁 Estructura del Proyecto

```text
Rolling-and-Falling/
├── index.html                 # Hub principal de la wiki
├── countdown.html             # Contador regresivo para la próxima sesión
├── 404.html                   # Página de error 404 personalizada D&D
├── .nojekyll                  # Desactiva el procesado Jekyll en GitHub Pages
├── README.md                  # Documentación técnica del proyecto
├── start_server.bat           # Script de inicio rápido del servidor local (Python)
├── update.sh                  # Script de automatización Git
│
├── data/
│   └── content-manifest.json  # Catálogo centralizado de entradas y rutas Markdown
│
├── content/                   # ✍️ CARPETA DE CONTENIDO (Markdown)
│   ├── sessions/              # Archivos .md de resúmenes de sesiones de juego
│   ├── characters/            # Archivos .md de personajes (PJs y PNJs)
│   ├── groups/                # Archivos .md de facciones y grupos
│   ├── items/                 # Archivos .md de objetos mágicos
│   ├── places/                # Archivos .md de regiones y ciudades
│   └── events/                # Archivos .md de acontecimientos históricos
│
├── docs/                      # 📂 Documentación Técnica y Notas
│   ├── Guide Lines.md         # Documento técnico de requisitos y arquitectura
│   ├── IDEAS.md               # Propuestas y hoja de ruta de futuras funciones
│   └── NOTES.md               # Registro de tareas del desarrollo
│
├── css/                       # 🎨 Hojas de Estilo RPG
│   ├── wiki.css               # Sistema de diseño central, variables y tipografía
│   ├── index.css              # Estilos específicos de la portada y carrusel
│   ├── article.css            # Estilos para artículos y publicaciones de lore
│   ├── display.css            # Estilos de rejillas y catálogos de tarjetas
│   └── timeline.css           # Estilos de la línea de tiempo vertical
│
├── scripts/
│   ├── loadComponents.js      # Inyector dinámico de componentes y modal de búsqueda
│   └── create-entry.js        # Script generador interactivo de archivos .md
│
├── pages/
│   ├── view.html              # 🖥️ VISOR UNIVERSAL DE ARTÍCULOS MARKDOWN
│   ├── sessions.html          # 📜 Diario de sesiones y bitácora de campaña
│   ├── schedules.html         # Calendario de partidas y disponibilidad
│   ├── characters/            # Catálogos visuales de grupos y personajes
│   ├── places/                # Catálogos visuales de lugares
│   ├── lore/                  # Compendio de lore e ítems
│   └── templates/             # Plantillas base en Markdown (template.md, template_session.md)
│
└── images/                    # Mapas, iconos y recursos gráficos
```

---

## ✍️ Cómo Añadir Nuevo Lore o Sesiones de Forma Cómoda

Tienes **2 métodos ultra-rápidos** para añadir contenido a la wiki:

### Método 1: Usando la Terminal (Recomendado)
Ejecuta en tu consola:
```bash
npm run create
```
El asistente interactivo te permitirá elegir la categoría:
- `[1] Personaje`
- `[2] Grupo / Facción`
- `[3] Objeto / Artefacto`
- `[4] Lugar / Región`
- `[5] Evento / Historia`
- `[6] Diario de Sesión (Bitácora)`

Respondes las preguntas rápidas y el comando:
1. Creará el archivo `.md` en la subcarpeta correspondiente de `content/`.
2. Registrará automáticamente el artículo en `data/content-manifest.json`.
3. Lo hará accesible inmediatamente en la búsqueda global y en los catálogos.

### Método 2: Manualmente con Markdown
1. Copia la plantilla correspondiente de `pages/templates/` (`template.md` o `template_session.md`).
2. Guárdala en la carpeta correspondiente dentro de `content/` (ej. `content/sessions/sesion-02.md`).
3. Rellena los metadatos iniciales en YAML.
4. Registra el archivo en `data/content-manifest.json`.

---

## 🛠️ Cómo Ejecutar Localmente

No se requiere compilación Node.js ni servidores complejos. El proyecto es 100% estático y compatible con navegación directa offline (`file://`) o cualquier servidor HTTP estático.

- **Windows:** Haz doble clic en `start_server.bat` para iniciar el servidor local Python en `http://localhost:8000`.
- **Navegador directo:** Abre `index.html` directamente en tu navegador.
