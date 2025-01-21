const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors
const MailGenRoutes = require('./src/Router/MailGenRouters');

dotenv.config();  // Load environment variables before anything else

const app = express();

app.use(cors());  
app.use(express.json());  

app.use('/gen', MailGenRoutes); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
