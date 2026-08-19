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

  const title = await askQuestion('1. Nombre / Título de la entrada: ');
  if (!title.trim()) {
    console.log('❌ El título no puede estar vacío.');
    rl.close();
    return;
  }

  console.log('\n2. Selecciona la categoría:');
  console.log('  [1] Personaje');
  console.log('  [2] Grupo / Facción');
  console.log('  [3] Objeto / Artefacto');
  console.log('  [4] Lugar / Región');
  console.log('  [5] Evento / Historia');
  const catChoice = await askQuestion('Opción [1-5] (default: 1): ');

  const categoryMap = {
    '1': 'characters',
    '2': 'groups',
    '3': 'items',
    '4': 'places',
    '5': 'events'
  };
  const category = categoryMap[catChoice.trim()] || 'characters';

  const subtitle = await askQuestion('\n3. Subtítulo / Frase descriptiva: ');
  const type = await askQuestion('4. Tipo (ej: PJ, PNJ, Gremio, Mazmorra, Artefacto): ');
  const alignment = await askQuestion('5. Alineamiento / Tendencia (ej: Caótico Bueno, Legal Neutral): ');
  const status = await askQuestion('6. Estado (ej: Vivo, Activo, Destruido, Peligroso): ');
  const description = await askQuestion('7. Resumen breve para tarjetas: ');

  const slug = slugify(title);
  const relPath = `content/${category}/${slug}.md`;
  const fullPath = path.join(__dirname, '..', relPath);

  // Ensure category folder exists
  const dirPath = path.dirname(fullPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create Markdown File Content
  const markdownContent = `---
title: "${title}"
subtitle: "${subtitle || ''}"
category: "${category}"
type: "${type || ''}"
alignment: "${alignment || ''}"
status: "${status || 'Activo'}"
image: "images/icons/dado_blanco_fondo_negro.webp"
---

# ${title}

${description || 'Escribe aquí la descripción detallada en Markdown...'}

---

## 📜 Historia y Detalles

Añade los detalles del lore aquí.
`;

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
    type: type || '',
    alignment: alignment || '',
    status: status || 'Activo',
    image: 'images/icons/dado_blanco_fondo_negro.webp',
    src: relPath,
    description: description || ''
  };

  // Remove existing if matching id
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
