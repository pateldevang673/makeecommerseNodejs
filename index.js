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
// // Connect to DB
// mongoose.Promise = global.Promise;
// mongoose.connect(config.db.MONGO_CONNECT_URL);


app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, "./assets")));
//app.use(express.static(__dirname + '/assets'));

// Use json formatter middleware
app.use(bodyParser.json());
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

app.get('/our_story', function(req, res) {
    res.redirect(301, '/zeepzoop_story');
});

app.get('/team', function(req, res) {
    res.redirect(301, '/zeepzoop_team');
});

app.get('/ceo', function(req, res) {
    res.redirect(301, '/bhavyamodi_founderceo');
});

app.get('/brand_reg', function(req, res) {
    res.redirect(301, '/register_your_brand');
});

// app.get('/collection/5b97a34bad670834810a2c73', function(req, res) {
//     res.redirect(301, '/collection/wedding-special');
// });

// app.get('/collection/5b98ef6cc745cd5c18b700c5', function(req, res) {
//     res.redirect(301, '/collection/mens-choice');
// });

// app.get('/collection/5b990da562282263f3416da5', function(req, res) {
//     res.redirect(301, '/collection/festive-vibes-ahmedabad');
// });

// app.get('/collection/5b97a1b3ad670834810a2c69', function(req, res) {
//     res.redirect(301, '/collection/designer-saree');
// });

// app.get('/collection/5b98f063c745cd5c18b700ce', function(req, res) {
//     res.redirect(301, '/collection/minimal-homes');
// });

// app.get('/collection/5b98f4cbc745cd5c18b700dc', function(req, res) {
//     res.redirect(301, '/collection/designer-saree-ahmedabad');
// });

// app.get('/collection/5b98f337c745cd5c18b700d6', function(req, res) {
//     res.redirect(301, '/collection/casually-classy-ahmedabad');
// });

// app.get('/collection/5b97976d676fab31885d6b7f', function(req, res) {
//     res.redirect(301, '/collection/casually-classy');
// });

// app.get('/collection/5b98f5a7c745cd5c18b700e8', function(req, res) {
//     res.redirect(301, '/collection/mens-choice-ahmedabad');
// });

// app.get('/collection/5b98eab9c745cd5c18b700bc', function(req, res) {
//     res.redirect(301, '/collection/festive-vibes');
// });

// app.get('/collection/5b98f530c745cd5c18b700e2', function(req, res) {
//     res.redirect(301, '/collection/wedding-special-ahmedabad');
// });

// app.get('/collection/5b98f660c745cd5c18b700ee', function(req, res) {
//     res.redirect(301, '/collection/minimal-homes-ahmedabad');
// });

app.get('*', function(req, res) {
    res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
});

app.listen(global.config.server.PORT, function() {
    console.log('App is running on ' + global.config.server.PORT);
});