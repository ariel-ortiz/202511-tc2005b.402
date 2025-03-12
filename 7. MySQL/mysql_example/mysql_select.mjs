// File: mysql_select.mjs

// Import module to handle MySQL database operations with promises
import mysql from 'mysql2/promise';

// An async function to perform a SELECT operation on the
// database
async function main() {
  try {
    // Create a connection to the database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'web_database'
    });
    console.log('Conected to the database');
    // The SQL query to execute
    const sqlQuery = 'SELECT DISTINCT author '
      + 'FROM quotations ORDER BY author';
    // Execute the query
    const [rows] = await connection.execute(sqlQuery);
    console.log('Query execution succeded');
    // Loop through the result and log each author
    for (const row of rows) {
        console.log(row.author);
    }
    // Close the database connection
    await connection.end();
  } catch (err) {
    // If an error occurs, re-throw the error
    throw err;
  }
}

main();
