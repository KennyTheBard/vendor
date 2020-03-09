var request = require('sync-request');

const sendAuditCash = (paymentMethod, machineId, productId, paidSum) => {
    var res = request('POST', 'http://localhost:8080/', {
        json: {
            payment_method: paymentMethod,
            machine_id: machineId,
            product_id: productId,
            paid_sum: paidSum
        },
    });
    return res.statusCode === 201
}

const sendAuditCard = (paymentMethod, machineId, productId, paidSum, cardDetails) => {
    var res = request('POST', 'http://localhost:8080/', {
        json: {
            payment_method: paymentMethod,
            machine_id: machineId,
            product_id: productId,
            paid_sum: paidSum,
            card_details: cardDetails
        },
    });
    return res.statusCode === 201
}

module.exports = {
    sendAuditCard,
    sendAuditCash
}