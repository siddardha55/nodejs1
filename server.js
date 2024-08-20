// import express module
var express =required('express')


var app=express()
var port=3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>")
})




app.listen(port,()=>{
    console.log('server running')
})
