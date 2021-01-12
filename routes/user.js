const express = require('express');
const router = express.Router();

router.use('/profile', (req, res) => {
    res.render('user/profile', {
        title: 'User Profile', 
        user: {
            username: 'Aftab',
            age: 24,
        }
    });
})

module.exports = router;