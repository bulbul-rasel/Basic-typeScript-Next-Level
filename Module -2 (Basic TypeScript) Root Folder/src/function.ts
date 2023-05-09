// regular function
function add(num1: number, num2: number): number{
    return num1+ num2;
}

//arrow function
const addArrow = (num1: number, num2: number): number=> num1+ num2;

const arr = [ 1,2 ,3,4]

const newArray = arr.map((element:number)=>element* element)

const person :{
    name : string,
    balance : number,
    addBalance (money: number): void
}={
    name : "Bulbul",
    balance: 133,
    addBalance(money:number) {
        console.log(`My account balance is ${this.balance + money}`);
    },
}

//default perameter
function plus(num1: number, num2: number= 10): number{
    return num1+ num2;
}
add(10, 10)

//spread operator
const myFriend  =['abul', 'kalam', 'azad']
const myNewFriend  =['Hasan', 'Mahmud', 'khan']

myFriend.push(...myNewFriend)
console.log(myFriend);


//rest parameter
const greetFriend = (
    friend1 : string,
    friend2 : string,
    friend3 : string
): void => console.log(`His ${friend1} \n is ${friend2} \n and ${friend3}`);

greetFriend("Kasem", "Hasem", "Kader")

