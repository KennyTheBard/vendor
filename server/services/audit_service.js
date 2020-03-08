const auditsDB = require('../database/audits.js');
const machineDB = require('../database/machine.js');
const productDB = require('../database/product.js');

const saveAudit = (audit) => {
    if (!audit.payment_method || !audit.paid_sum || !audit.machine_id || !audit.product_id) {
        throw new Error(`Audit has missing data!`);
    }
    
    if (!machineDB.getById(audit.machine_id)) {
        throw new Error(`Unknown vending machine with id ${audit.machine_id}!`);
    }

    if (!productDB.getById(audit.product_id)) {
        throw new Error(`Unknown product with id ${audit.product_id}!`);
    }

    auditsDB.save(audit)
}

module.export = {
    saveAudit
}