import fs from 'fs/promises';
// import util from 'util';

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// function readFilePromise(name, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(name, encoding, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// function writeFilePromise(name, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(name, data, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

function main() {
  let resultado = '';
  fs.readFile('001.txt', 'utf-8')
    .then(data => {
      resultado += data;
      return fs.readFile('002.txt', 'utf-8');
    })
    .then(data => {
      resultado += data;
      return fs.readFile('003.txt', 'utf-8');
    })
    .then(data => {
      resultado += data;
      return fs.writeFile('004.txt', resultado);
    })
    .then(() => {
      console.log('¡Éxito!');
    })
    .catch(err => {
      console.error('Se detectó algún error');
      console.log(err);
    });
}

main();
