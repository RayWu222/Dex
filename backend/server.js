
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://AD410_User:dbPassword@dex-cluster-o3nrm.mongodb.net/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


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
    flashcards: Array
});

var FlashcardSet = mongoose.model("FlashcardSet", flashcardSet)

app.get('/', function (req, res) {
    res.send('Homepage');
})

app.get('/list', function (req, res) {
        FlashcardSet.find({}, function(err, flashcardSet) {
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
        }
    });
})

app.get('/edit/:id', function (req, res) {
    FlashcardSet.find({_id: req.query.value }, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
})

// app.get('/list').get(function(req, res) {
//     FlashcardSet.find({}, function(err, flashcardSet) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(flashcardSet);
//         }
//     });
// });


app.route('/subject/:value').get(function(req, res){
    let value = req.params.value;
    FlashcardSet.find({flashcardSet_category: value}, function(err, flashcardSet) {       
        res.json(flashcardSet);
    });
});





app.use('/create', function (req, res) {
    res.send('Create');
    var flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
});



// //search page component, search the database for that value and return flashcardset with that value
// app.route('/search/:value').get(function(req, res){
//     let value = req.params.value;
//     FlashcardSet.find({flashcardSet_title: value}, function(err, flashcardSet) {       
//         res.json(flashcardSet);
//     });
// });


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
