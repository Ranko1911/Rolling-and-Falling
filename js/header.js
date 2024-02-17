const fs = require('fs');
const path = require('path');

function includeHeader(filePath) {
    const headerPath = path.join(__dirname, '..', 'header.html');
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, headerContent + '\n' + fileContent);
}

function main() {
    const pagesDir = path.join(__dirname, '..', '*.html');
    const files = fs.readdirSync(path.join(__dirname, '..'));

    files.forEach(filename => {
        if (filename.endsWith('.html')) {
            includeHeader(filename);
            console.log(`Header included in ${filename}`);
        }
    });
}

main();