const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets, account for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//add routes
app.use(routes);

//connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
