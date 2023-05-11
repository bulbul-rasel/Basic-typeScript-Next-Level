// const express = require('express')
// const mongoose = require('mongoose');

import mongoose from 'mongoose';
import app from './app';


const port:number = 5000



// database connection
main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  
  console.log("database connection established");
    
  }catch(err){
    console.log(`Failed to connect with Database`);
    
  }
    
}
main()

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
