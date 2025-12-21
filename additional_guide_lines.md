# Documento Técnico de Requisitos  
## Página Web / Wiki para Campaña de Rol

---

## 1. Propósito del Documento

Este documento define los **requisitos funcionales, estructurales y organizativos** para el desarrollo de una página web destinada a una campaña de rol.

Está dirigido a un **desarrollador web**, con el objetivo de dejar claro:
- El alcance del proyecto
- La estructura del sitio
- La organización del contenido
- Los tipos de páginas y sus plantillas

La web funcionará como una **wiki navegable**, extensible y organizada.

---

## 2. Objetivo del Proyecto

Desarrollar una página web que:

- Centralice toda la información de una campaña de rol
- Permita navegar por categorías bien definidas
- Ofrezca páginas individuales con estructura consistente
- Incluya una página especial con un **contador hasta la próxima sesión**
- Sea escalable y mantenible a largo plazo

---

## 3. Arquitectura General del Sitio

### 3.1 Página de Inicio (`/`)

La página de inicio debe actuar como **hub principal** y ofrecer:

- Introducción breve al mundo o campaña
- Acceso visual a las categorías principales
- Enlace visible a la página del contador de la próxima partida

Categorías accesibles desde la home:
- Personajes
- Organizaciones / Grupos
- Lugares
- Objetos
- Historia / Cronología
- Bestiario (opcional)
- Próxima Partida (contador)

---

## 4. Estructura de Carpetas y Páginas

Ejemplo de estructura real del proyecto (framework-agnostic):

```text
/ (root)
│
├── index.html                # Página de inicio
├── countdown.html            # Página contador próxima partida
│
├── personajes/
│   ├── index.html            # Listado de personajes
│   └── [slug-personaje].html # Página individual
│
├── objetos/
│   ├── index.html
│   └── [slug-objeto].html
│
├── lugares/
│   ├── index.html
│   └── [slug-lugar].html
│
├── grupos/
│   ├── index.html
│   └── [slug-grupo].html
│
├── historia/
│   └── index.html
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
└── shared/
    ├── header.html
    ├── footer.html
    └── navigation.html
Nota: Esta estructura puede adaptarse fácilmente a React, Vue, Astro, Next.js, etc.

5. Página de Contador — Próxima Partida
5.1 Ruta
/countdown.html

5.2 Funcionalidad
Contador regresivo hasta una fecha/hora configurable

Mostrar:

Días

Horas

Minutos

Segundos

Texto contextual (ej. “Próxima sesión”)

Posibilidad de actualizar la fecha desde configuración o JS

5.3 Objetivo
Generar expectación

Recordatorio centralizado para jugadores

Punto de acceso rápido desde la home

6. Plantillas Estándar de Contenido
Todas las páginas individuales deben seguir estructuras coherentes para mejorar la legibilidad y mantenimiento.

6.1 Plantilla — Personaje
md
Copiar código
# Nombre del Personaje

## Información General
- **Tipo:** PJ / PNJ
- **Raza:**
- **Clase / Rol:**
- **Alineamiento:**
- **Estado:** Vivo / Muerto / Desconocido

## Descripción
Descripción general del personaje, personalidad y rasgos destacados.

## Apariencia
Descripción física y vestimenta.

## Historia
Historia relevante dentro del mundo o campaña.

## Relaciones
- Personajes relacionados
- Grupos u organizaciones

## Habilidades y Rasgos
Listado descriptivo (no necesariamente mecánico).

## Notas
Información adicional o secretos (si aplica).
6.2 Plantilla — Objeto
md
Copiar código
# Nombre del Objeto

## Información General
- **Tipo:** Común / Mágico / Artefacto
- **Rareza:**
- **Estado:** Activo / Perdido / Destruido

## Descripción
Descripción visual y funcional del objeto.

## Origen
Procedencia, creador o contexto histórico.

## Propiedades
Efectos especiales o características relevantes.

## Historia
Eventos importantes relacionados con el objeto.

## Usuarios Conocidos
Personajes que lo han poseído o usado.
6.3 Plantilla — Lugar
md
Copiar código
# Nombre del Lugar

## Información General
- **Tipo:** Ciudad / Región / Mazmorra / Plano
- **Estado:** Activo / Abandonado / Destruido

## Descripción
Descripción general del entorno y atmósfera.

## Ubicación
Relación con otros lugares del mundo.

## Historia
Eventos importantes ocurridos en el lugar.

## Habitantes
- Personajes relevantes
- Criaturas o facciones

## Lugares de Interés
Zonas destacadas dentro del lugar.
6.4 Plantilla — Grupo / Organización
md
Copiar código
# Nombre del Grupo

## Información General
- **Tipo:** Gremio / Orden / Culto / Facción
- **Alineamiento:**
- **Estado:** Activo / Disuelto

## Descripción
Propósito y visión del grupo.

## Historia
Origen y evolución del grupo.

## Estructura
- Líderes
- Rangos internos

## Miembros Destacados
Personajes importantes dentro del grupo.

## Relaciones
Aliados y enemigos conocidos.
7. Navegación y UX
Requisitos clave:

Menú de navegación persistente

Enlaces cruzados entre entidades relacionadas

URLs semánticas y legibles

Índice interno en páginas largas

Diseño claro y orientado a lectura

8. Escalabilidad
La estructura debe permitir:

Añadir nuevas categorías

Ampliar plantillas sin romper contenido existente

Migración futura a CMS o framework SPA/SSG

9. Conclusión
Este documento define una base sólida para el desarrollo de una wiki de campaña de rol estructurada, clara y extensible, facilitando tanto el desarrollo técnico como la creación de contenido narrativo.

El enfoque prioriza:

Organización

Mantenibilidad

Experiencia de usuario

Inmersión narrativa