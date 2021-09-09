const sqlite3 = require('sqlite3').verbose();
//open datebase in sqlite3
let db = new sqlite3.Database('db.sqlite3',(err)=> {
  if(err){
    return console.error(err.message);

}
   console.log('Connected to BASE_DIR SQlite datebase.');
});
//close the datebase connection
db.get("select ccreated_at from posts_post", (error, rows) =>{
  rowsforEach=>(row => console.log(row.created_at));
});
db.close((err)=>{
  if (err){
    return console.error(err.message);
}
console.log('Close the datebase connection.');
});
