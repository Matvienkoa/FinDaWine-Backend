const express = require('express');
const path = require('path');

//Sécurity
const helmet = require('helmet');
const hpp = require("hpp");
const rateLimit = require("./middleware/limiter");

//Database
const db = require('./config/config');
//Test connexion DB
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err))

const app = express();

// === Configuration Headers, CORS ===
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use(helmet());
app.use(hpp());
app.use("/api/auth", rateLimit.authLimiter);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/appli-beer/auth', require('./routes/auth'));
app.use('/api/appli-beer/beers', require('./routes/beers'));

module.exports = app;