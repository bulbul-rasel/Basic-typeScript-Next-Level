type PersonType ={
    name:string;
    age: number;
    address:string;
}

type newTypeUsingKeyOf = keyof PersonType

// const a: newType = 'age'
// const b: newTypeUsingKeyOf = 'age'

function getProperty<X, Y extends keyof X>(obj: X, key: Y){
    obj[key]
}

const property = getProperty({name:'john', age: 43}, "age")
// const a ={
//     name : 'John',age: 43
// }
// a['name']