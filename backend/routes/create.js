var express = require('express');
var router = express.Router();


router.route('/').post(function(req, res) {
    let flashcardSet = new FlashcardSet(req.body);
    flashcardSet.save()
        .then(flashcardSet => {
            res.status(200).json({'flashcardSet': 'flashcardSet added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new flashcardSet failed');
        });
});

  module.exports = router;