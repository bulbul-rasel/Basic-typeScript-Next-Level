type CrushType ={
    name: string,
    age?: number, //optional type
    profession:string,
    address:string
}

const crush1: CrushType= {
    name : "Moina Pakhi",
    age: 18,
    profession: "Developer",
    address: "India"
}
const crush2: CrushType = {
    name : "Kokila Pakhi",
    // age: 22,
    profession: "web Developer",
    address: "Pakisthan"
}

type OperationType = (x:number, y:number) => number;

const calculation = ( number1: number, number2: number, operation:OperationType)=>{
    return operation(number1,number2);
}
calculation(10,20, (x,y)=>x+y);
calculation(10,20, (x,y)=>x-y);
calculation(10,20, (x,y)=>x*y);