const failChancePercent = 3

const paymentCard = (details) => {
    return Math.floor(Math.random() * 100) < 3 ? false : true;
}

module.exports = {
    paymentCard
}