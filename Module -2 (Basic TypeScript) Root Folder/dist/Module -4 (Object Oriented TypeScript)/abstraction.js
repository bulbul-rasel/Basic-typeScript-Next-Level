"use strict";
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('I am starting Engine');
    }
    stopEngine() {
        console.log('I am stopping Engine');
    }
    move() {
        console.log('I am Moving');
    }
    test() {
        console.log('I am for testing purpose');
    }
}
const vahicle1 = new Vehicle('car', 'toyota', 2143);
//  abstract 
// abstract class Vehicle  {
//     constructor(public name :string, public brand :string,public model :number){
//     }
//     abstract startEngine(): void 
//     abstract stopEngine(): void 
//     move(): void {
//         console.log('I am Moving');
//     }
// }
// class Car extends Vehicle {
//     startEngine(): void {
//     console.log('I am starting Engine');
//     }
//     stopEngine(): void {
//         console.log('I am stopping engine');
//     }
// }
const car1 = new Vehicle('Car', 'Houndai', 9875);
