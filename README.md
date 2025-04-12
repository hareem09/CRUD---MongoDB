
# Book management App
CRUD operations are the bread and butter of backend systems. This is because they allow you to "Create", "Read", "Update", and "Delete" data through your API.So, in this app CRUD operation have been used + MongoDB is also used in it.


## Features
CRUD stands for

1. C -> Create
2. R-> Read
3. U->Update
4. D->Delete


## Setting up
To set up  app you need to install some packages by running commands in terminal.

1 . Install node.js.

2 . Initialize project by running (npm init -y) in terminal

3 . Install express.js
          
    npm install express
    npm i mongoose

## Installation

Install my-project with 

```bash
  git clone https://github.com/hareem09/CRUD---MongoDB/blob/main/bookdata.js
```

    
## Usage
Start the server
```bash
node index.js
```
The server will be running at port:
```bash
http://localhost:5000
```


## dataSchema
Make a separate file studentDatabase.js then require mongoose.
to connect with mongoDB :
```bash
mongodb.connect('mongodb://localhost:27017/bookdb');

let dataSchema=new mongodb.Schema({
    title:String,
    author:String,
    year:String
})

module.exports = mongodb.model('data',dataSchema);
```
Then make a separate file name index.js and import that in a variable.
## MongoDB CRUD operations 
Here's a quick overview of the  methods used in it:

1. db.collection.find() => to view all students
2. db.collection.findOneAndUpdate( filter, update, options ) => old one, new one , true:new  
3. db.collection.findOneAndDelete( filter, options ) => the name which you want to delete,true:new.

## API Endpoints
1. Get all books
```bash
GET/book
```
2. Add new book 
```bash
GET/addbook
```
Body
```bash
{
    title:'The Alchemist',
     author:'Paulo Coelho',
    year:'1988'
}
```
3. Update Book
```bash
GET/updatebook
```
Body
```bash
{
    title:'The Pilgrimage',
     author:'Paulo Coelho',
     year:'1988'

}
```
5. Delete book
```bash
GET/deletebook
```
