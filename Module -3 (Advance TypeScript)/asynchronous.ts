

//Mocking

const makePromise =(): Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
        const data : string = "Data is fetched"
        if(data){
            resolve(data)
        }else{
            reject(" Failed to fetch")
        }
    })
}

type DataType ={
    data: string;
    }

const makePromiseObject =(): Promise<DataType>=>{
    return new Promise<DataType>((resolve,reject)=>{
        const data : DataType = {data: "Data is fetched"}
        if(data){
            resolve(data)
        }else{
            reject(" Failed to fetch")
        }
    })
}

const getPromiseData = async (): Promise<string>=>{
    const data = await makePromise();
    // console.log(data); // if Void has return type
    
     return data; // if return has return type
}

const getPromiseDataObject = async (): Promise<DataType>=>{
    const data = await makePromiseObject();
    // console.log(data); // if Void has return type
    
     return data; // if return has return type
}
