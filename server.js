const express = require('express');

const connectDB= require('./config/db');
const app = express();

// ******** connect mongodb **********

connectDB();

app.use(express.json({extended: false}))


app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Contact Manager API' }) );
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()  => console.log(`Server started on port ${PORT}`));
