const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3000;


//** need to go back and look these up and get a refresher **//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// api / view routes
app.use(routes);

// Connect to the MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongo cluster url" {
    useCreateIndex: true,
    useNewUrlParser: true,
}
);

app.listen(PORT, () => console.log(`Started on ${PORT}`));