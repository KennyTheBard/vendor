const stock = require("../local_database.js");

function colectProduct(payed, selectedProductID){
    stock.extractProduct(selectedProductID);
    console.log("Please colect your product.")
}

function colectChange(paymentMethod, money, price){
    if ((paymentMethod.toUpperCase() === "CASH") && (money > price)) {
        console.log("Change: " + (money - price) + ". Please colect it.")
        return true;
    }
    return false;
}

module.exports = {
    colectProduct,
    colectChange
}