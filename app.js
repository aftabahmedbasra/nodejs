const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = new express();
const flash = require('connect-flash');
const session = require('express-session');

// Express body parser
app.use(express.urlencoded({ extended: true }));


// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);


// Connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

//Routes of the app
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use('/', require('./routes/index'));

//Server running
const PORT = process.env.PORT || 5003;
app.listen(PORT, console.log(`Server running on  localhost:${PORT}`));