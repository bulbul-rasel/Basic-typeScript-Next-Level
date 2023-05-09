// type Alphanumeric = string | number;

// function add(param1 : Alphanumeric, param2 : Alphanumeric): Alphanumeric{
//     if(typeof param1 === 'number' && typeof param2 =='number'){
//         return param1 + param2;
//     }else{
//         return param1.toString() + param2.toString();
//     }
// }
// add('1','5')
// add(1,4)

// //guird

// type NormalUserType ={
//     name: string;
// }

// type AdminUserType = {
//     name: string;
//     role: "Admin"
// }

// function getUser(user:NormalUserType | AdminUserType){
//     if('role' in user){
//         return`Im an Admin and my Role is ${user.role}`
//     }else{
//         return `Im a normal User`
//     }
// } 

// const normalUser1 : NormalUserType = {name:"Mr X"}
// const adminUser1 : AdminUserType = {name:"Mr X", role:"Admin"}

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// // instanceof guard 

// class Animal {
//     constructor(public name: string, public species: string){

//     }
//     makeSound(){
//         console.log('I am Making Sound');
        
//     }
// }

// class Dog extends Animal {
//     constructor(public name: string, public species: string){
//         super(name, species);
//     }
//     makeBark(){
//         console.log(' I am berking');
        
//     }
// }

// class Cat extends Animal {
//     constructor(public name: string, public species: string){
//         super(name, species);
//     }
//     makeMew(){
//         console.log(' Iam making Meww');
//     }
// }

// // function getAnimal(animal: Animal){
// //     if(animal instanceof Dog){
// //         animal.makeBark()
// //     }
// //     else if(animal instanceof Cat){
// //         animal.makeMew()
// //     }else{
// //         animal.makeSound()
// //     }
// // }

// function isDog(animal: Animal): animal is Dog{
//     return animal instanceof Dog
// }

// function isCat(animal: Animal): animal is Cat{
//     return animal instanceof Cat
// }

// function getAnimal(animal: Animal){
//     if(isDog(animal) ){
//         animal.makeBark()
//     }
//     else if(isCat(animal)){
//         animal.makeMew()
//     }else{
//         animal.makeSound()
//     }
// }

// const animal1 = new Dog("German Shephard", "Gheuu")
// const animal2 = new Cat("Dilli Billi", "Meoow")

// getAnimal(animal1)