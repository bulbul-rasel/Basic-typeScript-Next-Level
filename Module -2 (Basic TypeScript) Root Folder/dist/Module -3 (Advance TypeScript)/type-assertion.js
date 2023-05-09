"use strict";
let emni;
emni = " Welcome to next development "; //if it number then call as number insted of string
// (emni as number).length;
emni.length;
function kgToGram(pram) {
    if (typeof pram === "string") {
        const value = parseFloat(pram) * 1000;
        return `The Converted value from string is ${value} Gram`;
    }
    if (typeof pram === "number") {
        const value = pram * 1000;
        return `The Converted value from KG Number is ${value} gram`;
    }
}
const resultToNumber = kgToGram(100);
const resultToString = kgToGram("abcd");
try {
}
catch (err) {
    console.log(err.message);
}
