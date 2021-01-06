const db = require("../models");

// routes for the books 

module.exports = {
    findAll: function (req, res) {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        db.Book.find(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        db.Book.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => console.log(err))
    },
    update: function (req, res) {
        db.Book.findOneAndUpdate({id: req.params.id} , req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => console.log(err))
    },
    remove: function (req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => console.log(err))
    },
}