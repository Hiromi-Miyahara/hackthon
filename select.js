
window.onload = function(){
  Notification.requestPermission();
  setInterval(checkTime,1000);
};
// Notification.requestPermission(function(result) {
// //   if (result === 'denied') {
// //     alert('リクエスト結果：通知許可されませんでした');
// //   } else if (result === 'default') {
// //     alert('リクエスト結果：通知可能か不明です');
// //   } else if (result === 'granted') {
// //     alert('リクエスト結果：通知許可されました！！');
// //   }
// // })
// // const currentTime = new Date();
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('db.sqlite3');


let sql = `SELECT created_at FROM posts_post ORDER BY created_at ASC` ;
let nowtime = 'SELECT CURRENT_TIMESTAMP';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.created_at);
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
