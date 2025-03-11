import express from 'express';

const app = express();
const port = process.env.PORT ?? 8080;
const ip_address = process.env.C9_HOSTNAME ?? 'localhost';

function calculaPow2(n) {
  const resultado = [];
  let i = 1;
  while (i <= n) {
    resultado.push(i);
    i *= 2;
  }
  return resultado;
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/hola');
});

app.get('/hola/:nombre?', (req, res) => {
  const nombre = req.params.nombre ?? 'Mundo';
  res.render('hola', { nombre });
});

app.get('/pow2/:n', (req, res) => {
  const n = parseInt(req.params.n) || 0;
  const resultado = calculaPow2(n);
  const enanos = [
    'Dwalin',
    'Balin',
    'Kili',
    'Fili',
    'Dori',
    'Nori',
    'Ori',
    'Oin',
    'Gloin',
    'Bifur',
    'Bofur',
    'Bombur',
    'Thorin',
    'Gimli'
  ];
  res.render('pow2', { resultadoPow2: resultado, enanos });
});

// Página de recurso no encontrado (estatus 404)
app.use((req, res) => {
  const url = req.originalUrl;
  res.status(404).render('not_found', { url });
});

app.listen(port, () => {
  console.log('Servidor escuchando en: '
    + `http://${ ip_address }:${ port }`);
});
