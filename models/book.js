const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true },
    subtitle: { type: String },
    authors: { type: [String], require: true },
    link: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    googleId: { type: String, require: true, unique: true },
    
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
