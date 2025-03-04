import fs from 'fs/promises';

async function main() {
  try {
    let resultado = '';
    const nombresArchivos = ['001.txt', '002.txt', '003.txt', '001.txt'];
    for (const nombre of nombresArchivos) {
      resultado += await fs.readFile(nombre, 'utf-8');
    }
    await fs.writeFile('004.txt', resultado);
    console.log('¡Éxito!');
  } catch (err) {
    console.error('Se detectó algún error');
    console.log(err);
  }
}

main();
