const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routers/indexRouter');

// Initialization
const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routers
app.use('/', indexRouter);

// Start Express server
const port = 8080;
app.listen(port, () => console.log('Started server.'));
