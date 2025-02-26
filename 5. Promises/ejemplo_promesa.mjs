
let miPromesa = new Promise((resolve, reject) => {
  const num = Math.random();
  setTimeout(() => {
      if (num < 0.5) {
        resolve('ganaste');
      } else {
        reject('perdiste');
      }
    },
    num * 1000);
});

miPromesa
.then((resultado) => {
  console.log('Yes: ' + resultado);
}).catch((err) => {
  console.error('No: ' + err);
});
