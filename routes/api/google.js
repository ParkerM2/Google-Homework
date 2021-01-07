const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// /api/google routes

router.route("/")
    .get(googleController.findAll);
    
module.exports = router;