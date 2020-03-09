const reader = require("../reader.js");
const call = require("../audit/call.js");

function selectPaymentMethod(){
    let method = "notSelected";
    //Print A for payment with cash and B for payment with card
    console.log("Press A for payment with cash and B for payment with card ")
    
    method = reader.readMyLine();

    if (method.toUpperCase() === "A") {
        method = "cash";
    } else if (method.toUpperCase() === "B") {
        method = "card"
    } else {
        method = "notSelected";
    }

    return method;
}

function pay(paymentMethod, machineId, productId, price) {
    if (paymentMethod.toUpperCase() === "CASH") {
        console.log("Please insert the money (write a number):");

        let money = 0;
        do {
            console.log(`Current sold: ${money}. Please enter more money!`);
            money += parseInt(reader.readMyLine());
        } while ( money < price);

        let ok = call.sendAuditCash(paymentMethod, machineId, productId, price);

        return {
            ok: ok,
            paid: money
        }
    } else if (paymentMethod.toUpperCase() === "CARD") {
        let ok = call.sendAuditCard(paymentMethod, machineId, productId, price, collectCardDetails());

        return {
            ok: ok
        }
    }
}

const collectCardDetails = () => {
    return "mockCardDetails";
}

module.exports = {
    selectPaymentMethod,
    pay
}