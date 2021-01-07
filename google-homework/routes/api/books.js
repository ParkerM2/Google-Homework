const router = require("express").Router();
const bookController = require("../../controllers/booksController");

// api/books routes
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

// api/books/id route
router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove)

module.exports = router;
