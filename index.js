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

app.get('/Siyaahi/5a6747d20f302b535c368fac', function(req, res) {
    res.redirect(301, '/brand/Siyaahi');
});

app.get('/Story-Of-India/5afeaf35cd1a4023423f431a', function(req, res) {
    res.redirect(301, '/brand/Story-Of-India');
});

app.get('/Studio-Virtues/5b63022484f87871680c52b4', function(req, res) {
    res.redirect(301, '/brand/Studio-Virtues');
});

app.get('/Brass-Tacks/5b9661834b03cf7a7ac09a78', function(req, res) {
    res.redirect(301, '/brand/Brass-Tacks');
});

app.get('/Pastels-and-Pop/5b9675274b03cf7a7ac09a9f', function(req, res) {
    res.redirect(301, '/brand/Pastels-and-Pop');
});

app.get('/Plantation-House/5b9642db4b03cf7a7ac09a1f', function(req, res) {
    res.redirect(301, '/brand/Plantation-House');
});

app.get('/Purva-Couture/5b67e21484f87871680c5375', function(req, res) {
    res.redirect(301, '/brand/Purva-Couture');
});

app.get('/Suta/5a88690259d5b0626c05b139', function(req, res) {
    res.redirect(301, '/brand/Suta');
});

app.get('/Bunaai/5a682a220f302b535c368fc4', function(req, res) {
    res.redirect(301, '/brand/Bunaai');
});

app.get('/Sivi/5a79d7a659d5b0626c05b016', function(req, res) {
    res.redirect(301, '/brand/Sivi');
});

app.get('/Idam/5a6f3e4a5586af26e395d637', function(req, res) {
    res.redirect(301, '/brand/Idam');
});

app.get('/The-Loom/5a685c0f0f302b535c368fe8', function(req, res) {
    res.redirect(301, '/brand/The-Loom');
});

app.get('/Vraj:bhoomi/5a68bcb30f302b535c369010', function(req, res) {
    res.redirect(301, '/brand/Vraj:bhoomi');
});

app.get('/Kaurwaki/5b8e434e82ae3d0226e8e6b5', function(req, res) {
    res.redirect(301, '/brand/Kaurwaki');
});

app.get('/Aparna-S/5b800dbe1e2d3f7b0bd5d03e', function(req, res) {
    res.redirect(301, '/brand/Aparna-S');
});

app.get('/IMAGES/5b7ab6b01e2d3f7b0bd5cb69', function(req, res) {
    res.redirect(301, '/brand/Images');
});

app.get('/Kapraha/5aa2672b62d6c309b285a54b', function(req, res) {
    res.redirect(301, '/brand/Kapraha');
});

app.get('/OUTHOUSE/5b8fab476dbf4416bcd37920', function(req, res) {
    res.redirect(301, '/brand/Outhouse');
});

app.get('/Enakshi/5b3365deefbb4628dd5017be', function(req, res) {
    res.redirect(301, '/brand/Enakshi');
});

app.get('/RockRush/5a958df062d6c309b285a47f', function(req, res) {
    res.redirect(301, '/brand/RockRush');
});

app.get('/Zoya/5b7d599c1e2d3f7b0bd5cdb8', function(req, res) {
    res.redirect(301, '/brand/Zoya');
});

app.get('/Tistabene/5aae4f4762d6c309b285a5a9', function(req, res) {
    res.redirect(301, '/brand/Tistabene');
});

app.get('/SHILPI/5b8670ab892e687e11fdaaf4', function(req, res) {
    res.redirect(301, '/brand/Shilpi');
});

app.get('/Enoy/5a7029c35586af26e395d6de', function(req, res) {
    res.redirect(301, '/brand/Enoy');
});

app.get('/Collage/5b866469892e687e11fdaadc', function(req, res) {
    res.redirect(301, '/brand/Collage');
});

app.get('/Garo/5b6a8f5684f87871680c53f9', function(req, res) {
    res.redirect(301, '/brand/Garo');
});

app.get('/Coterie/5b96442d4b03cf7a7ac09a21', function(req, res) {
    res.redirect(301, '/brand/Coterie');
});

app.get('/Seasons/5b65930884f87871680c5340', function(req, res) {
    res.redirect(301, '/brand/Seasons');
});

app.get('/KNYA/5a95887a62d6c309b285a472', function(req, res) {
    res.redirect(301, '/brand/Knya');
});

app.get('/Coo-Coo/5af587b9a72cb007936346a4', function(req, res) {
    res.redirect(301, '/brand/Coo-Coo');
});

app.get('/Mesmora/5b3a273fefbb4628dd5018d8', function(req, res) {
    res.redirect(301, '/brand/Mesmora');
});

app.get('/Nallamz/5b90f1faa788de24c3cbe77c', function(req, res) {
    res.redirect(301, '/brand/Nallamz');
});

app.get('/ADYA/5b80047a1e2d3f7b0bd5d028', function(req, res) {
    res.redirect(301, '/brand/Adya');
});

app.get('/Kathputli/5a85859d59d5b0626c05b112', function(req, res) {
    res.redirect(301, '/brand/Kathputli');
});

app.get('/There/5a9593fe62d6c309b285a48b', function(req, res) {
    res.redirect(301, '/brand/There');
});

app.get('/store/5a682a220f302b535c368fc4', function(req, res) {
    res.redirect(301, '/brand/Bunaai');
});

app.get('/REHANE/5b94dba15d98153f261dc941', function(req, res) {
    res.redirect(301, '/brand/Rehane');
});

app.get('/ALMIRAH/5b7be8dc1e2d3f7b0bd5cce0', function(req, res) {
    res.redirect(301, '/brand/Almirah');
});

app.get('/THREE/5b7bf5521e2d3f7b0bd5ccfc', function(req, res) {
    res.redirect(301, '/brand/Three');
});

app.get('/FATIZ/5b87c2d44be921356ac12a34', function(req, res) {
    res.redirect(301, '/brand/Fatiz');
});

app.get('/ANAVILA/5b7d374a1e2d3f7b0bd5cd6a', function(req, res) {
    res.redirect(301, '/brand/Anavila');
});

app.get('/Chappers/5a6c5dd75586af26e395d4f3', function(req, res) {
    res.redirect(301, '/brand/Chappers');
});

app.get('/Aza/5a7374406387957f23c89c9d', function(req, res) {
    res.redirect(301, '/brand/Aza');
});

app.get('/Gargee/5b7e69f01e2d3f7b0bd5ce71', function(req, res) {
    res.redirect(301, '/brand/Gargee');
});

app.get('/Miraangi/5b9514d95d98153f261dc982', function(req, res) {
    res.redirect(301, '/brand/Miraangi');
});

app.get('/Aamod%20/5b60344684f87871680c51d3', function(req, res) {
    res.redirect(301, '/brand/Aamod');
});

app.get('/Amethyst/5b965e544b03cf7a7ac09a60', function(req, res) {
    res.redirect(301, '/brand/Amethyst');
});

app.get('/Vachi/5b8931374be921356ac12af9', function(req, res) {
    res.redirect(301, '/brand/Vachi');
});

app.get('/Dev-R-Nil/5b88cb434be921356ac12a83', function(req, res) {
    res.redirect(301, '/brand/Dev-R-Nil');
});

app.get('/Tamara/5b89278a4be921356ac12ad9', function(req, res) {
    res.redirect(301, '/brand/Tamara');
});

app.get('/TJORI/5a720cbe6387957f23c89bab', function(req, res) {
    res.redirect(301, '/brand/Tjori');
});

app.get('/Ekru/5b879c444be921356ac12a20', function(req, res) {
    res.redirect(301, '/brand/Ekru');
});

app.get('/BODICE/5b90d659a788de24c3cbe755', function(req, res) {
    res.redirect(301, '/brand/Bodice');
});

app.get('/Tipsyfly/5a96852062d6c309b285a4a1', function(req, res) {
    res.redirect(301, '/brand/Tipsyfly');
});

app.get('/Tipsyfly/5a96852062d6c309b285a4a1', function(req, res) {
    res.redirect(301, '/brand/Tipsyfly');
});

app.get('/Kaveri/5b8533b5892e687e11fdaaa9', function(req, res) {
    res.redirect(301, '/brand/Kaveri');
});

app.get('/Anahita/5b924860cee8a130b8006363', function(req, res) {
    res.redirect(301, '/brand/Anahita');
});

app.get('/Sammohi/5b83d8dd2420ea53269497dc', function(req, res) {
    res.redirect(301, '/brand/Sammohi');
});

app.get('/Sacaru/5b8d08c14be921356ac12b9f', function(req, res) {
    res.redirect(301, '/brand/Sacaru');
});

app.get('/Cord/5a8a8627cb3dd75ad21ee150', function(req, res) {
    res.redirect(301, '/brand/Cord');
});

app.get('/Azga/5a7016f35586af26e395d6b7', function(req, res) {
    res.redirect(301, '/brand/Azga');
});

app.get('/Kalee/5b8fba3e6dbf4416bcd37931', function(req, res) {
    res.redirect(301, '/brand/Kalee');
});

app.get('/Paarisha/5b8e81cebff1440910f934cb', function(req, res) {
    res.redirect(301, '/brand/Paarisha');
});

app.get('/Saree.com/5a9b9f9962d6c309b285a4f0', function(req, res) {
    res.redirect(301, '/brand/Saree.com');
});

app.get('/store/5a6747d20f302b535c368fac', function(req, res) {
    res.redirect(301, '/brand/Siyaahi');
});

app.get('/DHORA/5b8fc13795f2d41ae3901909', function(req, res) {
    res.redirect(301, '/brand/Dhora');
});

app.get('/Rohit-Bal/5b912021cee8a130b80062f6', function(req, res) {
    res.redirect(301, '/brand/Rohit-Bal');
});

app.get('/Melange/5b558076a080936d7bf793fb', function(req, res) {
    res.redirect(301, '/brand/Melange');
});

app.get('/Niiaashi/5a968a5a62d6c309b285a4b2', function(req, res) {
    res.redirect(301, '/brand/Niiaashi');
});

app.get('/Swati-Vijaivargie/5b960532b6cc526db5e06bf4', function(req, res) {
    res.redirect(301, '/brand/Swati-Vijaivargie');
});

app.get('/Baarique/5a6efd715586af26e395d5cd', function(req, res) {
    res.redirect(301, '/brand/Baarique');
});

app.get('/docs/zeepzoop_brand_booster.pdf', function(req, res) {
    res.redirect(301, '/');
});

app.get('*', function(req, res) {
    res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
});

app.listen(global.config.server.PORT, function() {
    console.log('App is running on ' + global.config.server.PORT);
});