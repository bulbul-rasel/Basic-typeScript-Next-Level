class Counter {
    // counter: number;
    static counter: number= 0;

    constructor( public counter: number) {
        // this.counter = counter;
    }
    static increment ():number{
        // return this.counter++;
        return Counter.counter = Counter.counter + 1;
    }
    static decrement ():number{
        // return this.counter--;
        return Counter.counter = Counter.counter - 1;

    }
}

const instance1 = new Counter(0)
const instance2 = new Counter(1)

console.log(Counter.increment());
console.log(Counter.increment());

