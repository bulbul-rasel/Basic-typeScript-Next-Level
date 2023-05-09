"use strict";
// regular function
function add(num1, num2) {
    return num1 + num2;
}
//arrow function
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4];
const newArray = arr.map((element) => element * element);
const person = {
    name: "Bulbul",
    balance: 133,
    addBalance(money) {
        console.log(`My account balance is ${this.balance + money}`);
    },
};
//default perameter
function plus(num1, num2 = 10) {
    return num1 + num2;
}
add(10, 10);
//spread operator
const myFriend = ['abul', 'kalam', 'azad'];
const myNewFriend = ['Hasan', 'Mahmud', 'khan'];
myFriend.push(...myNewFriend);
console.log(myFriend);
//rest parameter
const greetFriend = (friend1, friend2, friend3) => console.log(`His ${friend1} \n is ${friend2} \n and ${friend3}`);
greetFriend("Kasem", "Hasem", "Kader");
