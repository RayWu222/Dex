var express = require('express');
var router = express.Router();

router.route('/').get(function(req, res) {
    FlashcardSet.find(function(err, flashcardSet) {
        if (err) {
            console.log(err);
        } else {
            res.json(flashcardSet);
        }
    });
});