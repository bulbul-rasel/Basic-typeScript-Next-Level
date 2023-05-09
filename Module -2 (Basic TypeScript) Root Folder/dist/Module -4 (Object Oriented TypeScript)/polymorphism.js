"use strict";
class Person {
    takeNap() {
        console.log("I am sleeping 8 hr per day");
    }
}
class Student extends Person {
    takeNap() {
        console.log(' I am sleeping 10 hr per day');
    }
}
class Developer extends Person {
    takeNap() {
        console.log(" I am sleeping 6 hr per day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Ractangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaShape(param) {
    console.log(param.getArea());
}
getAreaShape(new Circle(10));
getAreaShape(new Ractangle(10, 2));
