
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://AD410_User:dbPassword@dex-cluster-o3nrm.mongodb.net/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



//define User Schema
var userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    userToken: String,
    userImage: String,
    
}
//,{collection: 'users'}
);


var flashcard = new mongoose.Schema({
    text: String
});

//var flashcardSet = mongoose.model('FlashcardSet', flashcardSetSchema)
var flashcardSet = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    numFlashcards: String,
    flashcards: [flashcard]
});

var FlashcardSet = mongoose.model("FlashcardSet", flashcardSet)
//compiler user model 
var Users = mongoose.model("User", userSchema)


app.route('/').get(function(req, res) {
    
});


//getUserInfo by using there google id(token)
app.route('/getUser/:googleid').get(function(req,res){
    let token = req.params.googleid;
    Users.findOne({userToken:token}, function(req,userSchema){
        res.json(userSchema)
    })
})

//find the user profile
app.route('/user/:username').get(function(req,res){

    const user = req.params.username
    Users.findOne({userName:user}, function(err, userSchema){
        if(err){
            console.log(err);

        }else{
            console.log(localStorage.getItem("UserName"))
            res.json(userSchema)
            
        }
    });
});

//add user to the database, need to implement count so it won't keep adding the same person 
app.use('/addUser', function(req,res){
    console.log("test")
    var user = new Users(req.body);
    user.save()
    .then(user => {
        
        res.status(200).json({user: 'User added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new User failed');
    });
});
    

//get flashcardsets with user id
app.route('/userList/:userid').get(function(req,res){
    let id = req.params.userid;
    FlashcardSet.find({userId:id}, function(err, flashcardSet){
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
        }
    });
});

//delete flashcardset
app.route('/deleteSet/:id').get(function(req, res) {
    let id = req.params.id;
    FlashcardSet.findByIdAndRemove(id, function(err) {
        if(!err){
            console.log("Success");
        }else{
            console.log("Failed to delete")
        }
        
    });
});
    

app.route('/list').get(function(req, res) {
    FlashcardSet.find({}, function(err, flashcardSet) {
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
        }
    });
});
    
    
//search page component, search the database for that value and return flashcardset with that value
app.route('/search/:value').get(function(req, res){
    let value = req.params.value;
    FlashcardSet.find({title: value}, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
});

app.route('/subject/:value').get(function(req, res){
    let value = req.params.value;
    FlashcardSet.find({category: value}, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
});

app.get('/edit/:id', function (req, res) {
    FlashcardSet.find({_id: req.query.value }, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
})




app.use('/create', function (req, res) {
    res.send('Create');
    var flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
});



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
