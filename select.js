const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db.sqlite3');

let sql = `SELECT created_at FROM posts_post`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.created_at);
  });
});


db.close();
