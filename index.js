const express = require('express')

const app = express()
const MongoClient = require ('mongodb')

let db;
const port = 3000;
const uri = "mongodb+srv://JJJuanyB:awesome2004@cluster0.nkbfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, {useUnifiedTopology:true}, function(err,client){
    console.log("Connected to MongoDB successfully");
    db - client.db("mongodb-lecture");
})

app.listen(port, function(req,res){
    console.log("listening at port: " + port)
})

app.get('/home', function(req,res){
    res.sendFile(__dirame + "/index.html");

})

app.post('/home', function(req,res){
    db.collection('blogs').insertOne({
        title:"titleValue",
        content: "contentValue"

    }, function(err,result){
        if(err) throw error;
        res.send("blog added successfully");
    })

})
app.get('/getBlogs',function (req,res){
    db.collection('blogs').find({}).toArray(function(error,document){
        if (error) throw error;
        for(let counter = 0; counter < documents.length;counter++){
            res.write("Title: " + documents[counter].title + "Content:" + documents[counter].content +"ObjectID: " + documents[counter]._id );
           
        }
        res.end();
    
    })

})
app.post('/cutsomBlog', function (req,res){
    db.collection('blogs').insertOne({
        title: req.body.title,
        content: req.body.content
    },
    function(err,result){
        if(err) throw err;
        res.send ('Blog added successfully');


        })
})