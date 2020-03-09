const select = require('./states/select.js');
const pay = require('./states/pay.js');
const collect = require('./states/collect.js');
const database = require('./local_database.js');
const reader = require("./reader.js");

const machineId = 1;
database.addProduct("Avira Prime", 1, 10, 75);
database.addProduct("Antivirus PRO", 2, 10, 35);
database.addProduct("Phantom VPN", 3, 10, 50);
database.addProduct("Password Manager", 4, 10, 20);
database.addProduct("Optimizer", 5, 10, 10);
database.addProduct("System Speedup", 6, 10, 25);

let choice;
do {
    let selectedProductID;
    do {
        selectedProductID = parseInt(select.selectProduct("Please select another product!"));
    } while (!database.available(selectedProductID));
    console.log(`You selected ${database.getById(selectedProductID).name}`);

    let paymentMethod;
    do {
        paymentMethod = pay.selectPaymentMethod("Please select a payment method!");
    } while ( paymentMethod.toUpperCase() != "CASH" && paymentMethod.toUpperCase() != "CARD");
    
    let price = database.getPrice(selectedProductID);
    console.log(`You have to pay ${price}`);
    
    let result;
    do {
        result = pay.pay(paymentMethod, machineId, selectedProductID, price);
    } while (!result.ok);
    
    collect.colectProduct(selectedProductID);
    
    if (paymentMethod.toUpperCase() == "CASH") {
        collect.colectChange(paymentMethod, result.paid, price);
    }
    
    choice = reader.readMyLine("Press X to close and anything else to continue\n");
} while (choice.toUpperCase() !== "X");
