// Properties

interface IUser {
    firstName: string;
    lastName: string;
}

interface Model <TData,TMethods>{
    data: TData;
    methods: TMethods;
}

// methods

interface IMethods{
    fullName():string;
}



type model = Model <IUser,IMethods>

class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName:string, lastName: string){
        this.data = {firstName,  lastName}
        this.methods={
            fullName:()=>`${firstName} ${lastName}`
        }
    }
}

const user1 = new User('Bulbul', 'Rasel');
console.log(user1.methods.fullName())