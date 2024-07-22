const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes')
const corsMiddleware = require('./middleware/cors.middleware')
const fileUpload = require('express-fileupload');
const fileRouter = require('./routes/file.routes')
//-------------------------------app
const app = express();
app.use(fileUpload({ createParentPath: true }));
app.use(corsMiddleware)
app.use(express.static('staticPath'))
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

//-------------------------------app


const PORT = config.get('serverPort');
const dbUrl = config.get('dbUrl');

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        const MongoDB = await mongoose.connect(dbUrl);

        if (MongoDB) {
            console.log('Connected to MongoDB');
        }

    } catch (error) {
        console.error(`Error starting server: ${error.message}`);
    }
};

start();