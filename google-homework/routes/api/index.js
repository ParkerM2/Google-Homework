const path = require("path");
const router = require("express").Router();
const bRoutes = require("./books");
const gRoutes = require("./google");

router.use("/books", bRoutes);
router.use("/google", gRoutes);
// for other routes, render html
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;