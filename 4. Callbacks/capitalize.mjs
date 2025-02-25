import fs from 'fs';

function main() {
  fs.readFile(
    'pablito.txt',
    'utf-8',
    (err, data) => {
      if (err) {
         console.error('Error al leer archivo');
         console.error(err);
         process.exit(1);
      }
      fs.writeFile(
        'PABLITO.txt',
        data.toUpperCase(),
        (err) => {
          if (err) {
            console.error('Error al escribir archivo');
            console.error(err);
            process.exit(1);
          }
          console.log('¡Éxito!');
        }
      );
    }
  );
}

main();
