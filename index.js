// index.js
const randomQuote = require('random-quote');

function getRandomQuote() {
    return randomQuote.getRandomQuote();
}

module.exports = getRandomQuote;
