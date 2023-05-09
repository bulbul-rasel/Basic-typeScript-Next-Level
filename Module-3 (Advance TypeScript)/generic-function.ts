// //generic function

// //Arrow function
// const createArray = <T>(parm: T): T[]=>{
//     return [parm]
// }

// const createArray1 = <T>(parm: T): T[]=>{
//     return [parm]
// }
// const createArray2 = <X,Y>(parm1: X, parm2: Y): [X, Y]=>{
//     return [parm1, parm2]
// }
// const result4 = createArray2("Bangladesh", 12)
// const result5 = createArray2<boolean, Array<string>>(true, ["12"])
// const result = createArray("Bangladesh")
// const result1 = createArray1<boolean>(true)
// const result2 = createArray1<object>({name: 'Bangladesh'})
// type Country= {name: string};

// const result3 = createArray1<Country>({name: 'Bangladesh'})


// //spread operator
// const addInMyCrushMind = <T>(myInfo: T)=>{
//     const crush = " kate winslet"
//     const newData = {...myInfo, crush};
//     return newData;
// }

// const myInfo = {
//     name: "Bulbul Rasel",
//     age: 100,
//     salary: 1000000,
// }
// const result6 = addInMyCrushMind(myInfo)
