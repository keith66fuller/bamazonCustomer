var stringify = require('json-stringify-safe');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const Table = require('cli-table-redemption');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ou812',
  database: 'bamazoncustomer'
});

function doEcommerce() {
  connection.query('SELECT * FROM `products`', (err, results, fields) => {

  // Convert query result into format for table module
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

  // Display the product table
  console.log(table.toString())

  // Ask questions of the customer.
  inquirer.prompt([{
      type: 'input',
      name: 'purchase_id',
      message: "If you want to buy a product, enter it's id.",
      validate: value => {
        return results.some(e => e.id == value) ? true : 'Please enter a valid id'
      }
    }, ])
    .then(answers => {
      const { purchase_id } = answers;
      var {
        id,
        product_name: name,
        department_name: dept,
        price,
        stock_quantity: q
      } = results.find(e => e.id == purchase_id)
      
      inquirer.prompt([{
          type: 'input',
          name: 'quantity',
          message: `How many ${name} would you like?`,
          validate: value => {
            return (
              value <= results.find((e, i) => {
                return e.id == purchase_id
              }).stock_quantity
            ) ? true : `Sorry, we don't have that many ${name} in stock!  Try again with ${q} or less.`
          }
        }, ])
        .then(answers => {
          const { quantity } = answers;
          console.log(`So you would like ${quantity}.`)
          const newQuantity = q - quantity;
          let queryString;
          if (newQuantity) {
            queryString = `UPDATE \`products\` SET \`stock_quantity\`=\'${newQuantity}\' WHERE \`id\`=\'${purchase_id}\'`;
          } else {
            queryString = `DELETE FROM \`products\` WHERE \`id\` = \'${purchase_id}\'`
          };
          connection.query(queryString, (err, results, fields) => {
            if (err) {
              throw err
            } else {
                console.log(`Great, that will be $${Number.parseFloat(price*quantity).toFixed(2)}!`)
                doEcommerce()
              }
            })
        })
    });
  })
};

doEcommerce()