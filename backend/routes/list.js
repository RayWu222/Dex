var express = require('express');
var router = express.Router();
var axios = require('axios');

router.route('/').get(function(req, res) {
    axios.get('/')
    .then(response => {
        this.setState({ flashcardSet: response.data });
    })
    .catch(function (error){
        console.log(error);
    })
});


  module.exports = router;

/*

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    FlashcardSet.findById(id, function(err, flashcardSet) {
        res.json(flashcardSet);
    });
});

router.route('/update/:id').post(function(req, res) {
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


*/