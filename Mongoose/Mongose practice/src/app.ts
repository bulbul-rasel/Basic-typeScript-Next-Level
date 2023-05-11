import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';

// use cors\
const app: Application = express()
app.use(cors());

// Parse data
app.use(express.json());    
app.use(express.urlencoded({extended:true}));    

app.get('/', (req:Request, res:Response, next: NextFunction) => {
    // INSERTING A TEST DATA HERE
    
    /*
    Step 1: Interface
    Step 2: Schema
    Step 3: Model
    Step 4:Database Query
    */
    
    // res.send('Hello World!')
    // next();

    // INTERFACE
     interface IUser{
        id: string;
        role: "student";   
        password: string;
        name:{
            firstName: string;
            middleName: string;
            lastName: string;
        }
        dateOfBirth?: string;
        gender: "male"|"female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        PermanentAddress: string;
     }
     //  Creating schema using interface
     const userSchema = new Schema<IUser>({
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
  });


  
export default app;