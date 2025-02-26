import fs from 'fs';

function main() {
  let resultado = '';
  fs.readFile('001.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Se detectó un error al leer archivo');
      console.error(err);
      process.exit(1);
    }
    resultado += data;
    fs.readFile('002.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error('Se detectó un error al leer archivo');
        console.error(err);
        process.exit(1);
      }
      resultado += data;
      fs.readFile('003.txt', 'utf-8', (err, data) => {
        if (err) {
          console.error('Se detectó un error al leer archivo');
          console.error(err);
          process.exit(1);
        }
        resultado += data;
        fs.writeFile('004.txt', resultado, (err) => {
          if (err) {
            console.error('Se detectó un error al leer archivo');
            console.error(err);
            process.exit(1);
          }
          console.log('¡Éxito!');
        });
      });
    });
  });
}

main();
