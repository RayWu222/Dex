const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flashcard = new Schema({
    front: String,
    back: String
});

const flashcardSetSchema = new Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    numFlashcards: String,
    flashcards: Array
});


module.exports = mongoose.model('FlashcardSet', flashcardSetSchema);