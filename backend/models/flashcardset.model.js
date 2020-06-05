const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var Flashcard = new Schema({
    front: String,
    back: String
});

var FlashcardSet = new Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    flashcards: [Flashcard]
});


module.exports = mongoose.model('FlashcardSet', FlashcardSet);