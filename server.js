const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8080;
const mongoUrl = ("mongodb://localhost:27017/exam");
const dbName = 'exam';  // Replace with your actual database name

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve files from the public directory
app.use(express.static('public'));

// Connect to MongoDB
MongoClient.connect(mongoUrl, (err, client) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('exam');

    // Handle submit button click
    app.post('/submit', (req, res) => {
      const usn = req.body.usn;

      // Find data in MongoDB
      collection.find({ usn: usn }).toArray((err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.json(data);
        }
      });
    });

    // Start the express web server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
});
