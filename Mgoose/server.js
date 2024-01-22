const express = require ("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Person  = require("./Model/person");


const app= express();
dotenv.config();
mongoose.connect(process.env.db_URL).then(console.log("db connected"));

const port=process.env.port ||4000;

async function start(){
  await Person.create({
        name:"Khalil",
        age:20,
        favoriteFoods:["3ojja"],
    });
}
start()


app.listen(port,()=>{
    console.log(`server is runnig on ${port}`)
})