import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express()

import userRouter from './app/modules/user/user.route'
// use cors\
app.use(cors());

// Parse data
app.use(express.json());    
app.use(express.urlencoded({extended:true}));    

// app.get('/api/v1/user', userRouter)
app.use('/api/v1/user',userRouter)


  
export default app;