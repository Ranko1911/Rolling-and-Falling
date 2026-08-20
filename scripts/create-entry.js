const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

async function main() {
  console.log('\n🎲 --- GENERADOR DE CONTENIDO PARA ROLLING AND FALLING --- 🎲\n');

  console.log('1. Selecciona la categoría:');
  console.log('  [1] Personaje');
  console.log('  [2] Grupo / Facción');
  console.log('  [3] Objeto / Artefacto');
  console.log('  [4] Lugar / Región');
  console.log('  [5] Evento / Historia');
  console.log('  [6] Diario de Sesión (Bitácora)');
  const catChoice = await askQuestion('Opción [1-6] (default: 1): ');

  const categoryMap = {
    '1': 'characters',
    '2': 'groups',
    '3': 'items',
    '4': 'places',
    '5': 'events',
    '6': 'sessions'
  };
  const category = categoryMap[catChoice.trim()] || 'characters';

  let title = '';
  let sessionNum = '';
  let sessionDate = '';
  let dm = 'Ranko';
  let location = 'Everantha';

  if (category === 'sessions') {
    sessionNum = await askQuestion('\nNúmero de Sesión (ej: 1, 2): ');
    title = await askQuestion(`Título de la Sesión (ej: El Despertar de las Sombras): `);
    if (!title.trim()) title = `Sesión ${sessionNum || 1}`;
    sessionDate = await askQuestion('Fecha de juego (YYYY-MM-DD): ');
    dm = await askQuestion('Dungeon Master (default: Ranko): ') || 'Ranko';
    location = await askQuestion('Lugar de la partida (default: Everantha): ') || 'Everantha';
  } else {
    title = await askQuestion('\nNombre / Título de la entrada: ');
    if (!title.trim()) {
      console.log('❌ El título no puede estar vacío.');
      rl.close();
      return;
    }
  }

  const subtitle = await askQuestion('Subtítulo / Frase descriptiva: ');
  const type = category === 'sessions' ? 'Diario de Sesión' : await askQuestion('Tipo (ej: PJ, PNJ, Gremio, Mazmorra, Artefacto): ');
  const alignment = category === 'sessions' ? '' : await askQuestion('Alineamiento / Tendencia (ej: Caótico Bueno, Legal Neutral): ');
  const status = await askQuestion('Estado (default: Completada / Activo): ') || (category === 'sessions' ? 'Completada' : 'Activo');
  const description = await askQuestion('Resumen breve para tarjetas: ');

  let includeStatblock = false;
  let ca = '', hp = '', speed = '';
  let str = 10, dex = 10, con = 10, int = 10, wis = 10, cha = 10;

  if (category === 'characters' || category === 'groups') {
    const statChoice = await askQuestion('\n¿Añadir Statblock 5e (CA, HP, Atributos)? (s/N): ');
    if (statChoice.toLowerCase().startsWith('s')) {
      includeStatblock = true;
      ca = await askQuestion('Clase de Armadura (CA) (ej: 16): ') || '10';
      hp = await askQuestion('Puntos de Golpe (HP) (ej: 45): ') || '10';
      speed = await askQuestion('Velocidad (ej: 30 ft): ') || '30 ft';
      str = await askQuestion('Fuerza (STR) [default: 10]: ') || '10';
      dex = await askQuestion('Destreza (DEX) [default: 10]: ') || '10';
      con = await askQuestion('Constitución (CON) [default: 10]: ') || '10';
      int = await askQuestion('Inteligencia (INT) [default: 10]: ') || '10';
      wis = await askQuestion('Sabiduría (WIS) [default: 10]: ') || '10';
      cha = await askQuestion('Carisma (CHA) [default: 10]: ') || '10';
    }
  }

  const slug = category === 'sessions' && sessionNum ? `sesion-${sessionNum.trim().padStart(2, '0')}` : slugify(title);
  const relPath = `content/${category}/${slug}.md`;
  const fullPath = path.join(__dirname, '..', relPath);

  const dirPath = path.dirname(fullPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  let markdownContent = '';
  if (category === 'sessions') {
    markdownContent = `---
title: "${title}"
session_number: ${parseInt(sessionNum) || 1}
date: "${sessionDate || new Date().toISOString().split('T')[0]}"
category: "sessions"
type: "Diario de Sesión"
dm: "${dm}"
location: "${location}"
status: "${status}"
image: "images/icons/dado_blanco_fondo_negro.webp"
---

# ${title}

**Fecha de juego:** ${sessionDate || 'Por definir'}  
**Dungeon Master:** ${dm}  
**Lugar:** ${location}  

---

## ⚔️ Resumen de la Partida

${description || 'Escribe aquí el resumen narrativo de lo ocurrido durante la sesión...'}

---

## 💎 Botín y Recompensas

- **Monedas:** 
- **Objetos:** 

---

## 👥 Personajes Participantes

- 
`;
  } else {
    let statblockYaml = '';
    if (includeStatblock) {
      statblockYaml = `ca: ${ca}
hp: ${hp}
speed: "${speed}"
stats:
  str: ${str}
  dex: ${dex}
  con: ${con}
  int: ${int}
  wis: ${wis}
  cha: ${cha}
`;
    }

    markdownContent = `---
title: "${title}"
subtitle: "${subtitle || ''}"
category: "${category}"
type: "${type || ''}"
alignment: "${alignment || ''}"
status: "${status}"
image: "images/icons/dado_blanco_fondo_negro.webp"
${statblockYaml}---

# ${title}

${description || 'Escribe aquí la descripción detallada en Markdown...'}

---

## 📜 Historia y Detalles

Añade los detalles del lore aquí.
`;
  }

  fs.writeFileSync(fullPath, markdownContent, 'utf-8');
  console.log(`\n✅ Archivo Markdown creado con éxito: ${relPath}`);

  // Update data/content-manifest.json
  const manifestPath = path.join(__dirname, '..', 'data', 'content-manifest.json');
  let manifest = { entries: [] };

  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    } catch (e) {
      manifest = { entries: [] };
    }
  }

  const newEntry = {
    id: slug,
    title: title,
    subtitle: subtitle || '',
    category: category,
    type: type || (category === 'sessions' ? 'Diario de Sesión' : ''),
    alignment: alignment || '',
    status: status,
    image: 'images/icons/dado_blanco_fondo_negro.webp',
    src: relPath,
    description: description || ''
  };

  if (category === 'sessions') {
    newEntry.session_number = parseInt(sessionNum) || 1;
    newEntry.date = sessionDate || new Date().toISOString().split('T')[0];
    newEntry.dm = dm;
    newEntry.location = location;
  }

  manifest.entries = manifest.entries.filter(e => e.id !== slug);
  manifest.entries.push(newEntry);

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`✅ Registrado automáticamente en data/content-manifest.json!`);
  console.log(`\n🎉 ¡Listo! Puedes ver tu nueva entrada abriendo: pages/view.html?id=${slug}\n`);

  rl.close();
}

main().catch(err => {
  console.error('Error:', err);
  rl.close();
});
