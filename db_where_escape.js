var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    adr = 'Mountain 21';
    con.query('SELECT * FROM customers WHERE address = ' + mysql.escape(adr), function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});