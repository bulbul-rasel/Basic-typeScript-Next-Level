import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.intrface";

type UserModel = Model<IUser, {}, IUserMethods>;

//  Creating schema using interface
const userSchema = new Schema<IUser,UserModel , IUserMethods>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name:{

        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"]},
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    PermanentAddress: { type: String, required: true },
    
  });

  userSchema.method('fullName', function fullName() {
    return this.firstName + ' ' + this.lastName;
  });

  const User = model<IUser, UserModel>("User", userSchema);

  

  export default User