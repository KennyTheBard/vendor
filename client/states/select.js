const reader = require("../reader.js");

function selectProduct(){
    let productID = "";
    
    console.log("Enter the product ID (only 1 to 6 are available):")
    
    productID = reader.readMyLine()

    return productID;
}

module.exports = {
    selectProduct
}