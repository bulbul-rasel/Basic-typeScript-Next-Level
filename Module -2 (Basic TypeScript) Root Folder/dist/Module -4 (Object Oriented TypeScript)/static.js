"use strict";
class Counter {
    constructor(counter) {
        this.counter = counter;
        // this.counter = counter;
    }
    static increment() {
        // return this.counter++;
        return Counter.counter = Counter.counter + 1;
    }
    static decrement() {
        // return this.counter--;
        return Counter.counter = Counter.counter - 1;
    }
}
// counter: number;
Counter.counter = 0;
const instance1 = new Counter(0);
const instance2 = new Counter(1);
console.log(Counter.increment());
console.log(Counter.increment());
