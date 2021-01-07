const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Parker:manningsigns1@cluster0.b3ah4.mongodb.net/googlebooks?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//** need to go back and look these up and get a refresher **//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// api / view routes
app.use(routes);


// mongodb+srv://Parker:<password>@cluster0.b3ah4.mongodb.net/<dbname>?retryWrites=true&w=majority

// // Connect to the Mongo DB
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Parker:manningsigns1@cluster0.b3ah4.mongodb.net/fitness?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Parker:manningsigns1@cluster0.b3ah4.mongodb.net/googlebooks?retryWrites=true&w=majority");



// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => console.log(`Started on ${PORT}`));