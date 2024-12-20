const express = require('express');
const cors = require('cors');
//const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to MongoDB
//connectDB();

// Init Middleware
app.use(express.json({ extended: false }))
app.use(cors());

// Define Routes here
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

    // Set Static Folder
    //app.use(express.static('client/build'));
    app.get('/', (req, res) => { 
        app.use(express.static(path.resolve(__dirname, "client", "build")));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
            
        });

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()  => console.log(`Server started on port ${PORT}`));
