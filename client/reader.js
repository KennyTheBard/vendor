var readlineSync = require('readline-sync');

function readMyLine(question) {
    return readlineSync.question(question);
}

module.exports = {readMyLine}