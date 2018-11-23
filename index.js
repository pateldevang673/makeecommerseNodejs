/**
 * Created by crosp on 5/8/17.
 */
// Root path
global.APP_ROOT_PATH = __dirname + '/app/';
// Set other app paths
require('./config/global-paths');
// Set config variables
global.config = require('./config');

// Create an Express App
const express = require('express');
const app = express();
// Include dependencies
const bodyParser = require('body-parser');
const routes = require(APP_ROUTE_PATH);
const ValidationManager = require(APP_MANAGER_PATH + 'validation');
const authManager = require(APP_MANAGER_PATH + 'auth');
const validationManager = new ValidationManager();
const path = require('path');
const cookieParser = require('cookie-parser');
// // Connect to DB
// mongoose.Promise = global.Promise;
// mongoose.connect(config.db.MONGO_CONNECT_URL);


app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, "./assets")));
//app.use(express.static(__dirname + '/assets'));

// Use json formatter middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(authManager.providePassport().initialize());
// Set Up validation middleware
app.use(validationManager.provideDefaultValidator());
// Setup routes

app.get('/sitemap.xml', function(req, res) {
    res.type('application/xml')
    res.sendFile(__dirname + '/sitemap.xml');
});

app.get('/robots.txt', function(req, res) {
    res.type('text/plain')
    res.sendFile(__dirname + '/robots.txt');
});

app.use('/', routes);

app.get('/zeepzoop_story', function(req, res) {
    res.redirect(301, '/zeepzoop-story');
});

app.get('/zeepzoop_team', function(req, res) {
    res.redirect(301, '/zeepzoop-team');
});

app.get('/bhavyamodi_founderceo', function(req, res) {
    res.redirect(301, '/bhavyamodi-founderceo');
});

app.get('/register_your_brand', function(req, res) {
    res.redirect(301, '/register-your-brand');
});

app.get('/business', function(req, res) {
    res.redirect(301, '/register_your_brand');
});

app.get('*', function(req, res) {
    res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
});

app.listen(global.config.server.PORT, function() {
    console.log('App is running on ' + global.config.server.PORT);
});