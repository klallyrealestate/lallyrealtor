const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/public');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/public"));

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahalkarn@gmail.com',
    pass: 'BXGTmwCgfRJungnoE8aGnrma'
  }
});


/* ROUTES */

// Index route
app.get('/', (req, res) => res.render('index.html'));

// About route
app.get('/about', (req, res) => res.render('about-us.html'));

// Contact route
app.get('/contact', (req, res) => res.render('contact.html'));

// Contact form submit
app.post('/contact', (req, res) => {
  // setup email
  let mailOptions = {
    from: req.body.name + "<" + req.body.email + ">",
    to: 'karenlally96@gmail.com',
    subject: 'Contact form request from lallyrealtor.com',
    text: req.body.message
  }

  // send email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(400);
    }
    else {
      // success message?

      // re-render index page
      res.redirect('/');
    }
  });
});

// Start express server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Lallyrealtor.com listening on port ${port}`));