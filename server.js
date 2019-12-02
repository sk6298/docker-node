const express=require('express')
const routerStudents=require('./routes/students')
const bodyParser=require('body-parser')
const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
app.use('/students',routerStudents)

app.listen(8001,()=>{
    console.log('starting port at 8001')
})