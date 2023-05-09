"use strict";
//generic function
//Arrow function
const createArray = (parm) => {
    return [parm];
};
const createArray1 = (parm) => {
    return [parm];
};
const createArray2 = (parm1, parm2) => {
    return [parm1, parm2];
};
const result4 = createArray2("Bangladesh", 12);
const result5 = createArray2(true, ["12"]);
const result = createArray("Bangladesh");
const result1 = createArray1(true);
const result2 = createArray1({ name: 'Bangladesh' });
const result3 = createArray1({ name: 'Bangladesh' });
//spread operator
const addInMyCrushMind = (myInfo) => {
    const crush = " kate winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Bulbul Rasel",
    age: 100,
    salary: 1000000,
};
const result6 = addInMyCrushMind(myInfo);
