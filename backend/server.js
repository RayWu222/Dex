
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
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://AD410_User:dbPassword@dex-cluster-o3nrm.mongodb.net/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

var flashcardSet = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    flashcards: Array
});

var FlashcardSet = mongoose.model("FlashcardSet", flashcardSet)

app.use('/', function (req, res) {
    res.send('Home');
    
    var flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
        .then(flashcardSet => {
            res.status(200).json({flashcardSet: 'flashcardSet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flashcardSet failed');
        });
});

app.post('/', function (req, res) {
    var flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
        .then(flashcardSet => {
            res.status(200).json({flashcardSet: 'flashcardSet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flashcardSet failed');
        });
});

app.use('/create', function (req, res) {
    res.send('Create');
});
app.use('/list', function (req, res) {
    res.send('List');
});
app.use('/testAPI', function (req, res) {
    res.send('TestAPI');
});




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
