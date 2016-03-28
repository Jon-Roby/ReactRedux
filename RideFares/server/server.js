// import path from 'path'
// import Express from 'express'
// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counterApp from './reducers'
// import App from './containers/App'
//
// var path = require('path');
// var Express = require('express');
// var React = require('react');
// var createStore = require('redux'); ***
// var Provider = require('react-redux');
// var app = require('./reducers'); ***
// var App = require('./containers/App');
//
// const app = Express()
// const port = 3000
//
// // This is fired every time the server side receives a request
// app.use(handleRender)
//
// // We are going to fill these out in the sections to follow
// function handleRender(req, res) { /* ... */ }
// function renderFullPage(html, initialState) { /* ... */ }
//
// app.listen(port)












// 'use strict';
//
// const express = require('express');
// const serveStatic = require('serve-static');
// const path = require('path');
//
// const template = `
// <html>
//     <head></head>
//     <body>
//         <div id="app-root"></div>
//         <script type="text/javascript" src="/js/main.js"></script>
//     </body>
// </html>
// `;
//
// const app = express();
//
// app.use(serveStatic(path.resolve(__dirname + '/../dist')));
//
// app.get('*', (req, res) => {
//     res.set('text/html');
//     res.send(template);
// });
//
// app.listen(8080, () => {
//     console.log('server listening on port 8080');
// });

// const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// // const morgan = require('morgan');
// const app = express();
// // const router = require('./router');
// // const mongoose = require('mongoose');
//
// // DB Setup
// // mongoose.connect('mongodb://127.0.0.1:auth');
//
// // App Setup
// // app.use(morgan('combined'));
// app.use(bodyParser.json({ type: '*/*' })); // anything comes in will be json
// // router(app);
//
// // Server Setup
// const port = process.env.PORT || 3000;
// const server = http.createServer(app);
// server.listen(port);
// console.log('Server listening on: ', port);
