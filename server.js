const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');



dotenv.config({path: './config/config.env'});

connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//app.get('/', (req, res) => res.send('Hello'));

const transactions = require('./routes/transactions');

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));