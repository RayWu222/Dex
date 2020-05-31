
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


var FlashcardSet = require('./models/flashcardset.model');

app.use(cors());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});


mongoose.connect('mongodb+srv://AD410_User:dbPassword@dex-cluster-o3nrm.mongodb.net/test', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.use('/', function (req, res) {
    res.send('Hello bitch! - /');
});
app.use('/create', function (req, res) {
    res.send('Hello bitch! - /create');
});
app.use('/list', function (req, res) {
    res.send('Hello bitch! - /list');
});
app.use('/testAPI', jsonParser, function (req, res) {
    res.send('Hello bitch! - /testAPI');
});




app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
