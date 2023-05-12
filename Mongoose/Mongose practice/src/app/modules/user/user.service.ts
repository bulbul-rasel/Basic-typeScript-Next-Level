import { getUsers } from './user.controller';
import { IUser } from './user.intrface';
import User from "./user.model";

export const createUserToDB =async (payload:IUser):Promise<IUser> => {
    const user = await new User(payload
    //     {
    //     id: '660',
    //     role: "student",   
    //     password: 'hdsghf',
    //     name:{
    //         firstName: 'Badal',
    //         middleName: 'Ahammed',
    //         lastName: "Rasel",
    //     },
    //     dateOfBirth: "26th March",
    //     gender: "male",
    //     email: "rasel@gamil.com",
    //     contactNo: '+23456789',
    //     emergencyContactNo: '3234567678',
    //     presentAddress: '123445678',
    //     PermanentAddress: '2435678',
    //  }
     );
     await user.save();

     console.log(user.fullName())
    //  console.log(user);
    return user;
     
}

export const getUsersFromDB=async():Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB=async(payload:string):Promise<IUser| null> => {
    const user = await User.findOne({id: payload},{name:1,contactNo:1});
    return user;
}

export const getAllAdminUsersFromDB=async(payload:string):Promise<IUser| null> => {
    const user = await User.findOne({id: payload},{name:1,contactNo:1});
    return user;
}

