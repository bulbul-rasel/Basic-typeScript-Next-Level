"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 18,
    profession: "Developer",
    address: "India"
};
const crush2 = {
    name: "Kokila Pakhi",
    // age: 22,
    profession: "web Developer",
    address: "Pakisthan"
};
const calculation = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculation(10, 20, (x, y) => x + y);
calculation(10, 20, (x, y) => x - y);
calculation(10, 20, (x, y) => x * y);
