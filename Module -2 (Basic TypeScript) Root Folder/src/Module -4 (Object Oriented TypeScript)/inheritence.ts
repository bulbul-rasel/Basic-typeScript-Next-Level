// class Parent{
//      constructor(public name:string,public age:number, public address:string){

//      }
//      makeSleep(hours:number):string{
//         return `This ${this.name} will sleep for ${hours}`
//     }
// }

// class Student extends Parent{
//     // // name: string;
//     // // age: number;
//     // // address: string;

//     constructor(public name:string,public age:number, public address:string){
//         // this.name = name;
//         // this.age = age;
//         // this.address = address;
//         super(name,age,address)
//     }

//     // makeSleep(hours:number):string{
//     //     return `This ${this.name} will sleep for ${hours}`
//     // }

// }

// const student1 = new Student("Abul", 23, "Dhaka")

// class Teacher extends Parent{
//     // name: string;
//     // age: number;
//     // address: string;
//     designation: string;
//     constructor(public name:string, public age:number, public address:string,  designation:string){
//         super(name, age, address)
//         this.designation= designation;
//     }
//     // makeSleep(hours:number):string{
//     //     return `This ${this.name} will sleep for ${hours}`
//     // }
//     takeClass(section:number):string{

//         return `This ${this.name} will take class ${section}`
//     }
// }
// const teacher1 = new Teacher("Babul", 43, " Rajshahi", " Assistant Professor")