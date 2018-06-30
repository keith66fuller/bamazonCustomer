const mysql = require('mysql2');
const Table = require('cli-table-redemption');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ou812',
  database: 'bamazoncustomer'
});

connection.query(
  'SELECT * FROM `products`',
  function (err, results, fields) {
    
    var table = new Table({
      head: fields.map(row => {
        return row.name
      })
    })

    results.forEach(row => {
      table.push(
        fields.map(field => {
          return row[field.name]
        })
      )
    })

    console.log(table.toString())
  }
);