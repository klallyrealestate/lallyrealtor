const express = require('express');
const index = require('../controllers/index');

const router = express.Router();

/**
 * GET /
 * Home page.
 */
router.get('/', index.index);

/**
 * GET /about
 * About page.
 */
router.get('/about', index.about);

/**
 * GET /contact
 * Contact page
 */
router.get('/contact', index.contact);

/**
 * POST /contact
 * Send contact message.
 */
router.post('/contact', index.sendMessage);

module.exports = router;
