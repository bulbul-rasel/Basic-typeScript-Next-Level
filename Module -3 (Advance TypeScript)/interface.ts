type User = {
    name: string;
    age: number;
}

type extendUser = User &{
    role : string;
}


interface IUser {
    name: string;
    age: number;
}

interface IExtendUser extends IUser{
    role: string;
}

const user : extendUser ={
    name: " Ami Manus ",
    age:32,
    role: "Manus"
}

const userWithTypeAlias: User ={
    name: 'Type Alias',
    age: 100
}

const userWithInterface:IUser ={
    name: 'Interface',
    age: 200
}

type addNumberType =(num1: number, num2: number)=>number;

const addNumbers : addNumberType=(num1, num2) => num1+num2;