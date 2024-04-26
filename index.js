require('dotenv').config()
// console.log(process.env);

console.log("chai aur code");

const express = require('express');
// import express from "express"

const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send("Hellp world")
});

app.get('/twitter',(req,res) =>{
    res.send("er.Kaustubh");
})


app.listen(process.env.PORT, () =>{
    console.log(`example the file is running on  ${process.env.PORT}`)
});


app.get('/login',(req,res) =>{
    res.send('<h1>Ha ho gya login chal ab aona namm batao</h1>');
});

app.get("/youtube",(req,res) =>{
    res.send("<h4>chai aur code se sikh rahe hai koi problem to ahi hai")
});



