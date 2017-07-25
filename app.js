//include frameworks
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors"); //allow request made from different domain name
const passport = require("passport");
const mongoose = require("mongoose");

//include local files
const users = require('./routes/users');
const config = require('./config/database');

//connect mongodb with mongoose
mongoose.connect(config.database, {useMongoClient: true});
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', (err)=>{
    console.log('Database error:' + err);
});

//init express
const app = express();

//port number
const port = 3000;

//cors middleware
app.use(cors()); //currently allow request made from any domains

//set static folder (angular stuffs)
app.use(express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(bodyparser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//define routes
app.use("/users", users);

app.get("/", (req, res) => {
    res.send("Invalid Endpoint!");
});

//start app on port
app.listen(port, () => {
    console.log("Server starts on port " + port);
});