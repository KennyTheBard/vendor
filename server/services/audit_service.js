const auditsDB = require('../database/audits.js');
const machineDB = require('../database/machines.js');
const productDB = require('../database/products.js');

const payment_service = require('./payment_service.js');

const saveAudit = (audit) => {
    if (!audit.payment_method || !audit.machine_id || !audit.product_id || !audit.paid_sum) {
        throw new Error(`Audit has missing data!`);
    }

    if (audit.payment_method === "card" && !audit.card_details && payment_service.paymentCard(audit.card_details)) {
        return 'Your card has been refused';
    }
    
    if (!machineDB.getById(audit.machine_id)) {
        throw new Error(`Unknown vending machine with id ${audit.machine_id}!`);
    }

    if (!productDB.getById(audit.product_id)) {
        throw new Error(`Unknown product with id ${audit.product_id}!`);
    }

    auditsDB.save(audit)
}

module.exports = {
    saveAudit,
}