class Person{
    takeNap():void{
        console.log("I am sleeping 8 hr per day");
        
    }
}

class Student extends Person{
    takeNap(): void {
        console.log(' I am sleeping 10 hr per day');
        
    }
}

class Developer extends Person{
    takeNap(): void {
        console.log(" I am sleeping 6 hr per day");
        
    }
}

function getNap(param: Person){
    param.takeNap();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getNap(person1)
getNap(person2)
getNap(person3)

class Shape{
    getArea():number{
        return 0 ;
    }
}

class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super()
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
        
    }
}

class Ractangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.width * this.height;
    }

}
function getAreaShape(param:Shape){
    console.log(param.getArea());
    
}
getAreaShape(new Circle(10))
getAreaShape(new Ractangle(10,2))