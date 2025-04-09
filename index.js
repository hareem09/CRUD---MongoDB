//requiring the module express
const express=require('express')
const app=express()
const dataModel = require('./bookdata') 

//initialing port
const port=5000


app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})

//adding new book 
app.get('/addbook',async(req,res)=>{
    let newData= await dataModel.create({
        // title:'The Alchemist',
        // author:'Paulo Coelho',
        // year:'1988'
        title:'The Lastling',
        author:'Philip Gross',
        year:'2003'
    }) 
    res.send(newData);
})
//viewing all data
app.get('/book',async(req,res)=>{
    let readData=await dataModel.find()
    res.send(readData)
})
//updating the data
app.get('/updatebook',async(req,res)=>{
    let updatedData= await dataModel.findOneAndUpdate({title:"The Alchemist"},{title:"The Pilgrimage"},{new:true})
   res.send(updatedData);
})
//deleting data
app.get('/deletebook',async(req,res)=>{
  let deleteData=await dataModel.findOneAndDelete({title:'The Pilgrimage'})
   res.send(deleteData)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  