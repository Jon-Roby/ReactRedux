const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://127.0.0.1:auth');

// App Setup
app.use(morgan('combined')); // used for debugging
app.use(bodyParser.json({ type: '*/*' })); // anything comes in will be json
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
