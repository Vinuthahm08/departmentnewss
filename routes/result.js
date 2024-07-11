const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Handle POST request to fetch exam results by USN
router.get('/result', async (req, res) => {
    const { usn } = req.body;

    try {
        // Convert usn to a number (assuming usn is sent as string from form)
        const usnNumber = parseInt(usn);
        console.log('usn number parsed');

        // Find all results matching the provided USN number
        const results = await Result.find({ usn: usnNumber });
        console.log('data found');
        // Render result.ejs with the fetched results
        res.render('result', { results });
       

    } catch (err) {
        console.error('Error fetching results:', err);
        res.status(500).send('Internal Server Error');
    }
});



module.exports=router;