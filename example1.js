const { ok } = require('assert');

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db.sqlite3');
let sql = `SELECT created_at FROM posts_post ORDER BY created_at ASC` ;
let nowtime = 'SELECT CURRENT_TIMESTAMP';
window.onload = function(){
  Notification.requestPermission();
  setInterval(checkTime,1000);
};

function asyncProcess(value)
  return new Promise((nice,bad) =>{

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.created_at);
  });
});
});
const checkTime = function() {
    // const currentTime = new Date();
  if (db.all()==nowtime);   // const hour = currentTime.getHours();
  var greet = new Notification("Hello World")
      greet.addEventListener('click',function(){
        window.open('https://www.youtube.com/watch?v=ufKn_OXBbYI');
      });

};

db.close();
