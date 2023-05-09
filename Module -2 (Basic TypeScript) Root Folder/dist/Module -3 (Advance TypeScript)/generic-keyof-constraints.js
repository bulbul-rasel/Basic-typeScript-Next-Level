"use strict";
// const a: newType = 'age'
// const b: newTypeUsingKeyOf = 'age'
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'john', age: 43 }, "age");
// const a ={
//     name : 'John',age: 43
// }
// a['name']
