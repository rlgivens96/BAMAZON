var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

function productDB() {
    connection.connect(function (err) {
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err
            else console.table(res, "/n");
        })
    })
}
productDB();

function productId() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter the Item ID of the product you would like to buy. \n",
            validate: function (value) {
                if (!isNaN(value) && value < 11) {
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            name: "quant",
            message: "How many would you like to buy? /n",
            validate: function (value) {
                if (!isNaN(value)) {
                    return true:
                }
                return false;
            }
        }
    ]).then(function (answer) {
        var userId = answer.id;
        console.log("Chosen item id: ", userId);

        var userQuant = answer.quant;
        console.log("Chosen quantity from stock: ", userQuant, "\n");

        connection.query("SELECT * FROM products WHERE ?", [{ item_id: answer.id }], function (err, res) {
            if (err) throw err;


            console.table(res);
            var current_quantity = res[0].stock_quantity;
            console.log("Current quantity in stock: ", current_quantity);
            var price = res[0].price;
            var remaining_quantity = current_quantity - answer.quant;
            console.log("Remaining quantity in stock: ", remaining_quantity);

            if (current_quantity > answer.quant) {

                console.log("Amount Remaining: " + remaining_quantity);
                console.log("Total Cost: " + (answer.quant * price) + "\n");

                connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?",
                    [
                        remaining_quantity, answer.id
                    ],


                    function (err, res) {
                        console.table(res);
                    });

                connection.query("SELECT * FROM products", function (err, res) {

                    console.log("This is the updated inventory of product items: ");
                    console.log("------------------------------- \n");
                    console.table(res);
                });

            } else {
                console.log("Not enough please try again!");
            }

            connection.end();

        });
    })
}