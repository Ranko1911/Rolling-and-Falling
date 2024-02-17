const fs = require('fs');
const path = require('path');

function includeHeader(filePath) {
    const headerPath = path.join(__dirname, '..', 'header.html');
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, headerContent + '\n' + fileContent);
}

function main() {
    const pagesDir = path.join(__dirname, '..', 'pages');
    fs.readdirSync(pagesDir).forEach(filename => {
        const filePath = path.join(pagesDir, filename);
        if (filename.endsWith('.html')) {
            includeHeader(filePath);
            console.log(`Header included in ${filename}`);
        }
    });
}

main();