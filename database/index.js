const mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password123!@#',
  database: 'groceries'
});

dbConnection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Successfully connected to database.');
  }
});

module.exports = dbConnection;