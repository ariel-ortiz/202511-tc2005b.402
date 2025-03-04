
let miPromesa = new Promise((resolve, reject) => {
  const num = Math.random();
  setTimeout(() => {
      if (num < 0.5) {
        resolve('ganaste');
      } else {
        reject('perdiste');
      }
    },
    1000);
});

function main() {
  console.log('Inicio main');
  setTimeout(() => console.log('Timer 1'), 200);
  setTimeout(() => console.log('Timer 2'), 1500);
  setTimeout(() => console.log('Timer 3'), 100);
  miPromesa
    .then((resultado) => {
      console.log('Yes: ' + resultado);
    })
    .catch((err) => {
      console.error('No: ' + err);
    });
  console.log('Fin main');
}

main();
