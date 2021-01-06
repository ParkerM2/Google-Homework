const axios = require('axios');
const db = require("../models");

// methods for google api

// findAll searches google books api and returns the entries we haven't saved
// and makes sure the returned books contain title author link description and image

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", {
            params
        }).then(
            results => 
                results.data.items.filter(
                    results =>
                        results.volumeInfo.title &&
                        results.volumeInfo.infoLink &&
                        results.volumeInfo.authors &&
                        results.volumeInfo.description &&
                        results.volumeInfo.imageLinks &&
                        results.volumeInfo.imageLinks.thumbnail
                )
        ).then(
            apiBooks => db.Book.find().then(dbBooks =>
                apiBooks.filter(apiBook => 
                    dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.googleId)
                )
            )
        )
            .then(books => res.json(books))
            .catch(err => console.log(err))
    }
}
