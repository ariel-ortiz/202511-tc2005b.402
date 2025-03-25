import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.PORT ?? 8080;
const ipAddress = process.env.C9_HOSTNAME ?? 'localhost';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/db', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'web_database'
    });
    
    const [rows] = await connection.execute('SELECT * FROM quotations');
    res.render('db', { rows });
    
  } catch (err) {
    res.status(500).send('Error al acceder la base datos');
    
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

// Página de recurso no encontrado (estatus 404)
app.use((req, res) => {
  const url = req.originalUrl;
  res.status(404).render('not_found', { url });
});

app.listen(port, () => {
  console.log(`Servidor esperando en: http://${ ipAddress }:${ port }`);
});
