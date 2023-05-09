//  Pick

interface Person{
    name: string;
    email?: string;
    contactNo: string;
}

type Contact = Pick<Person, "contactNo" | "email">

// Omit

type Name = Omit<Person, "email" | "contactNo">

// partial and Require

// To make all the properties be optional
type Optional = Partial<Person>

type RequireProps = Required<Person>

const person: Readonly<Person>={
    name: "Bulbul",
    email: "bul@gmail.com",
    contactNo:'23444556'
}

person.name = "Rasel"

// Record Type

// type myObj={
//     a:string,
//     b:string,
//     c:string,
// }
// using index signature
// type myObj = { 
//     [key:string]:string
// }
// record
// type myObj = Record<string,string>
type myObj = Record<'a'|'b'|'c',string>

const obj: myObj={
    a: "a",
    b: "b",
    c: "c",
    // d: 'd'
}