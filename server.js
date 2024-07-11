// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const port = 5001;

const app = express();

//middlware
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect to MongoDB
const mongourl='mongodb://localhost:27017/exam';

//connect to mongodb using mongoose
mongoose.connect(mongourl)
.then(() => console.log("Connected to MongoDB"));

//example route



var db = mongoose.connection;
db.on('error', () => console.log("error in connecting to database"));
db.once('open', () => console.log("connected to database"));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/result');
app.use('/result', indexRoutes);


// Start the server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});