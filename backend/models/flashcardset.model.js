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
    }
});

module.exports = mongoose.model('FlashcardSet', FlashcardSet);