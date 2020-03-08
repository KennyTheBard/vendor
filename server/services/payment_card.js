const failChancePercent = 3

const paymentAccepted = (details) => {
    return Math.floor(Math.random() * 100) < 3 ? false : true;
}

module.export = paymentAccepted