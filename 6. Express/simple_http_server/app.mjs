import express from 'express';

const app = express();
const port = process.env.PORT;
const ip_address = process.env.C9_HOSTNAME;

app.get('/hola', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo</title>
      </head>
      <body>
        <h1>¡Hola, mundo!</h1>
        <p>
          Esta es la fecha y hora: ${ new Date() }
        </p>
        <p>
          Fin
        </p>
      </body>
    </html>
  `);
});

app.get('/chorrito', (req, res) => {
  res.sendFile('/home/ubuntu/environment/402/6. Express/simple_http_server/chorrito.txt');
});

// Custom 404 page
app.use((req, res) => {
  res.status(404).send(`<h1>404 Not Found: ${ req.originalUrl }</h1>`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo y escuchando: ${ ip_address }:${ port }`);
});
