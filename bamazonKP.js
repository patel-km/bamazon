var inquirer = require('inquirer');
var mysql = require('mysql');
require("console.table");

// 1) create a SQL database called "bamazon"
// make a table inside "bamazon" called "products"
// "products" table should have the following columns:
    // item_id
    // product_name
    // department_name
    // price to customer
    // stock quantity in stores

// populate 10 products into this table


// 2) create node app called "bamazonCustomer.js"

    // opening this app will first display all the available items for sale. Include the ids, names, and prices of these items.

    // then, prompt user with 2 messages: 
        // 1) ask user the ID of the product they would like to buy.
        // 2) ask user how many units of the product they would like to buy.

    // check if store can meet user's demand.
        // if not, say "Sorry, we don't have enough in stock to complete your order!" + prevent order from going through.
        // if yes, update the SQL database to reflect the remaining quantity. Say "Order successfully placed! + total cost of user's purchase"

        
var items= [];
var userWants

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "bamazon"
});



// Sequence ---------------------------------------------------------------------

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err);
      return;
    }
   
    console.log('connected');
    startBamazon();
  });





// Functions -------------------------------------------------------------------------------------------------------

// list items available.
function showItems() {
    connection.connect(function (err) {
        connection.query("SELECT id, item, dept, price FROM bamazon.products", function(err, res){
            console.table(res);
        });
    });
}

// prompt user to choose item they wish to purhcase.
function startBamazon() {

    showItems();
    
    inquirer.prompt([
          { type: "input",
            message: "Please enter the ID of the item you would like to purchase.\n\n",
            name: "chooseItem"
          },
          {
            type: "input",
            message: "How many units would you like to purchase?",
            name: "chooseUnits"
          }

    ]).then(function(response) {
        var stockRequest = response.chooseUnits;
        var userPick = response.chooseItem;
        checkStock(userPick, stockRequest);
        
    });
}

function checkStock(userPick, stockRequest) {

    connection.connect(function(err){
        connection.query('SELECT id, item, dept, price FROM bamazon.products WHERE id=?', userPick, function (err, res) {
            if (err) throw (err);
    
            var currentStock = res.stock;
            var id = res.id;
            var price = res.price;
            var total = stockRequest* price;
                            
            console.log("Checking stock, please wait...");

            if(stockRequest > currentStock) {
                console.log("Sorry, we don't have enough in stock to complete your order. Please try again.");
                startBamazon();
            }
            else {
                
                console.log("Order successfully placed! Your total is " + total)
                updateItemStock(userPick, (currentStock - stockRequest));
                startBamazon();
                debug: true;
            }
        });
    });
}

function updateItemStock() {

    var postStock = currentStock - stockRequest;

    connection.connect(function(err){
        connection.query(
            "UPDATE bamazon.products SET ? WHERE ?",
            [
            {
                currentStock: postStock
            },
            {
                id: userPick
            }
            ],
            function(err) {
                if (err) throw (err);

                console.log("Stock updated!");
            }
        );
    })
    
}
