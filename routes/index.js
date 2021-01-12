const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('default/home'));
router.post('/login', (req, res) => res.render('default/login'));
router.get('/about', (req, res) => res.render('default/about'));
router.get('/contact', (req, res) => res.render('default/contact'));
router.get('/login', (req, res) => res.render('default/login'));
router.get('/register', (req, res) => res.render('default/register'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;