const express= require('express');// importqtion d'express
const app =express();//init express
app.listen(3500,function(){
    console.log('server started successfuly');
});
app.get('/tata',function(req,res){
    res.send('hello tata');
});
app.get('/isig',function(req,res){
    res.send('fier et plein de dignité');
});
