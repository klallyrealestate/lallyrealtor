const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');

// configure AWS SDK
AWS.config.loadFromPath('config.json');

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
  SES: new AWS.SES({
    apiVersion: '2010-12-01',
  }),
});


exports.index = (req, res) => {
  res.render('index');
};

exports.about = (req, res) => {
  res.render('about');
};

exports.contact = (req, res) => {
  res.render('contact');
};

exports.sendMessage = (req, res) => {
  const {
    name,
    number,
    email,
    message,
  } = req.body;

  transporter.sendMail({
    from: 'rahalkarn@gmail.com',
    to: 'karnrahal@live.com',
    subject: `Contact form message - ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\n\n${message}`,
  }, () => {
    res.render('contact');
  });
};
