var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "bamazon"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + db.threadId);
  db.end();
});
