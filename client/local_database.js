const stock = []

function addProduct(name, id, quantity, price) {
    stock.push({
        id: id,
        name: name,
        quantity: quantity,
        price: price,
    })
}

function extractProduct(id) {
    var result = stock.find(myStock => {
        return myStock.id === id;
     })

    if(result != undefined && result.quantity > 0){
          result.quantity -= 1;
          return true;
    }
    return false;
}

function getPrice(id) {
    var result = stock.find(myStock => {
        return myStock.id === id;
     })

    if(result != undefined && result.quantity > 0){
          return result.price;
    }
    return undefined;
}

function getById(id){
    var result = stock.find(myStock => {
        return myStock.id === id;
     })
    
    return result;
}

function available(id){
    var result = stock.find(myStock => {
        return myStock.id === id;
     })
    
    return (result != undefined && result.quantity > 0);
}

module.exports = {
    addProduct,
    extractProduct,
    available,
    getPrice,
    getById
}