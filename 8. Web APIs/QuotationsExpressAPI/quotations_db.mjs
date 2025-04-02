import mysql from 'mysql2/promise';

async function connect() {
  return await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'web_database'
  });
}

async function getAll(connection, domainName) {
  const sqlSelect = 'SELECT id, author, excerpt FROM quotations';
  const [rows] = await connection.execute(sqlSelect);
  let result = [];
  for (let row of rows) {
    result.push({
      id: row.id,
      author: row.author,
      prelude: row.excerpt?.split(' ').slice(0, 3).join(' ') + '...',
      url: `${ domainName }/quotations/${ row.id }`
    });
  }
  return result;
}

async function getOne(connection, id) {
  const sqlSelect = 'SELECT id, author, excerpt FROM quotations WHERE id=?';
  const [rows] = await connection.execute(sqlSelect, [id]);
  let row = rows[0];
  if (row) {
    return {
      id: row.id,
      author: row.author,
      excerpt: row.excerpt
    };
  }
  return null;
}

async function post(connection, body) {
  const author = body.author || 'unknown';
  const excerpt = body.excerpt || 'no information';
  const sqlInsert = 'INSERT INTO quotations (author, excerpt) VALUES (?, ?)';
  const [result] = await connection.execute(sqlInsert, [author, excerpt]);
  return result.insertId;
}

async function put(connection, id, body) {
  let sqlUpdate = 'UPDATE quotations SET ';
  const updateValues = [];
  const updateFields = [];
  if (body.author !== undefined) {
    updateFields.push('author=?');
    updateValues.push(body.author);
  }
  if (body.excerpt !== undefined) {
    updateFields.push('excerpt=?');
    updateValues.push(body.excerpt);
  }
  if (updateFields.length === 0) {
    return false;
  }
  sqlUpdate += updateFields.join(', ');
  sqlUpdate += ' WHERE id=?';
  updateValues.push(id);
  const [result] = await connection.execute(sqlUpdate, updateValues);
  return result.affectedRows === 1;
}

async function deleteAll(connection) {
  const sqlDelete = 'DELETE FROM quotations';
  const [result] = await connection.execute(sqlDelete);
  return result.affectedRows;
}

async function deleteOne(connection, id) {
  const sqlDelete = 'DELETE FROM quotations WHERE id=?';
  const [result] = await connection.execute(sqlDelete, [id]);
  return result.affectedRows;
}

export default {
  connect, getOne, getAll, post, put, deleteAll, deleteOne
};
