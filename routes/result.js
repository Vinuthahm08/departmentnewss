const express = require('express');
const router = express.Router();
const Result = require('../models/Result');


router.post('/', async (req, res) => {
  //const { usn } = req.body;

  try {
      // Find all results matching the provided USN
      const results = await Result.find({});

      // Render result.ejs with the fetched results
      res.render('result', { results });

  } catch (err) {
      console.error('Error fetching results:', err);
      res.status(500).send('Internal Server Error');
  }
});




module.exports = router;