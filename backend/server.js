
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();

const PORT = 4000;

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var listRouter = require('./routes/list');
var testAPIRouter = require('./routes/testAPI');




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
    front: String,
    back: String
});

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
    
    FlashcardSet.find({}, function(err, flashcardSet) {
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
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

app.route('/:id').get(function(req, res) {
    let id = req.params.id;
    FlashcardSet.findById(id, function(err, flashcardSet) {
        res.json(flashcardSet);
    });
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

//add user to the database
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
    FlashcardSet.find({author:id}, function(err, flashcardSet){
        res.json(flashcardSet);
    })
})
    
    
//search page component, search the database for that value and return flashcardset with that value
app.route('/search/:value').get(function(req, res){
    let value = req.params.value;
    FlashcardSet.find({title: value}, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
});



app.route('/update/:id').post(function(req, res) {
    FlashcardSet.findById(req.params.id, function(err, flashcardSet) {
        if (!flashcardSet)
            res.status(404).send("data is not found (server.js:41)");
        else
            flashcardSet.flashcardSet_title = req.body.flashcardSet_title;
            flashcardSet.flashcardSet_author = req.body.flashcardSet_author;
            flashcardSet.flashcardSet_description = req.body.flashcardSet_description;
            flashcardSet.flashcardSet_category = req.body.flashcardset_category;

            flashcardSet.save().then(flashcardSet => {
                res.json('FlashcardSet updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

});


app.use('/create', function (req, res) {
    res.send('Create');
    var flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
        .then(flashcardSet => {
            res.status(200).json({flashcardSet: 'flashcardSet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flashcardSet failed');
        });
});




app.use('/list', function (req, res) {
    res.send('List');
});
app.use('/testAPI', function (req, res) {
    res.send('TestAPI');W
});




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
