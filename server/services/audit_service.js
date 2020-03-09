const auditsDB = require('../database/audits.js');
const machineDB = require('../database/machines.js');
const productDB = require('../database/products.js');
const payment_service = require('./payment_service.js');

const setUpDatabase = () => {
    machineDB.save({
        id: 1,
        location: "somewhere"
    });

    productDB.save({
        id: 1,
        location: "Avira Prime"
    });
    productDB.save({
        id: 2,
        location: "Antivirus PRO"
    });
    productDB.save({
        id: 3,
        location: "Phantom VPN"
    });
    productDB.save({
        id: 4,
        location: "Password Manager"
    });
    productDB.save({
        id: 5,
        location: "Optimizer"
    });
    productDB.save({
        id: 6,
        location: "System Speedup"
    });
}

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

    console.log(audit);
    auditsDB.save(audit)
}

module.exports = {
    setUpDatabase,
    saveAudit,
}