
const express = require('express');
const router = express.Router();

router.post('/Generate', async (req, res) => {  // Changed from GET to POST
    console.log("Received FormData:");
    console.log(req.body);  // Will log the request body
    res.status(200).json({ message: "Request received for generation!" });
});

module.exports = router;
