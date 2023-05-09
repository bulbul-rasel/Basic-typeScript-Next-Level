let emni : any;

emni = " Welcome to next development "; //if it number then call as number insted of string
// (emni as number).length;
<string>emni.length;

function kgToGram(pram: string|number):string|number|undefined{
    if(typeof pram === "string"){
        const value = parseFloat(pram)*1000;
        return `The Converted value from string is ${value} Gram`
    }
    if(typeof pram === "number"){
        const value = pram*1000;
        return `The Converted value from KG Number is ${value} gram`
    }
    
}

const resultToNumber=kgToGram(100) as number;
const resultToString=kgToGram("abcd") as string;

type CustomErrorType={
    message: string;
}

try{

}catch(err){
    console.log((err as CustomErrorType).message);
    
}