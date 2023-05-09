//generic interface

interface CrushInterface <T, W>{
    name: string;
    husband:T
    wife?: W
}

const crush1 : CrushInterface<boolean, string>={name: " Bulbul", husband: true, wife: "sokhina"}
const crush2 : CrushInterface<string, null>={name: " Rashi Khanna", husband: "Rasel"}


type GenericTuple<X,Y>=[X,Y];
const bonding : GenericTuple<string,string> = ["Bulbul","Rasel"]

const bondingSalary : GenericTuple<object,string>=[{
    name: "Saniul",
    salary: 1000000000
},'Abul']

type GenericArray<T> = Array<T>

const rollNumbers : GenericArray<number>=[1,2,3];
const rollNumbers2 : GenericArray<string>=['1','2','3'];
const rollNumbers3 : GenericArray<boolean> = [true,false];

type NameRollType ={name: string; roll: number}

interface RollWithNameInterface{
    name: string;
    roll: number;
}

const rollNumberAndName :  GenericArray<RollWithNameInterface>=[
    {
        name: " Mr X",
        roll: 1,
    },
    {
        name: " Mr Y",
        roll: 2,
    },
]