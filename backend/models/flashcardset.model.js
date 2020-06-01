const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let FlashcardSet = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    flashcards: {
        type: Array
    }
});

module.exports = mongoose.model('FlashcardSet', FlashcardSet);