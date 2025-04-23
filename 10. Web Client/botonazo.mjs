const miBoton = document.getElementById('mi-boton');
const contador = document.getElementById('contador');
let cuantos = 0;

function actualizarContador() {
  cuantos++;
  contador.innerText = cuantos;
  if (cuantos % 10 === 0) {
    miBoton.style.display = 'none';
    setTimeout(() => {
      miBoton.style.display = 'block';
    }, 5000);
  }
}

miBoton.addEventListener('click', actualizarContador);
