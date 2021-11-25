const express = require('express'); 
const session = require('express-session'); 

//creating app
const app = express(); 

app.use(session({secret: 'some secret code'}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//send the index.html when receiving HTTP GET /
app.use(express.static('public')); 
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }); 
});

//handling static HTML and EJS templates
app.use(express.static('public')); 
app.set('view engine', 'ejs'); 
app.get('/', (req, res) => {
    res.render('index'); //no need for ejs extension 
});

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000; 
const server = app.listen(port, () => {
    console.log(`Cart app listening at http://localhost:${port}`); 
});

//route for contacts
app.get('/contacts', (req, res) => { 
    res.render('contacts');
});

//route for sign in
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/catalogue', (req, res) => {
    res.render('catalogue');
});
app.get('/article', (req, res) => {
    res.render('article/:id');
});
app.get('/client', (req, res) => {
    res.render('client');
});

//pass requests to the router middleware
const router = require('./routes/apis'); 
app.use(router);