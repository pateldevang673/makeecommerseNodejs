/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var moment = require('moment');
var Rating = require('rating');
var url = require('url');
var _ = require('lodash');

const URLStore = global.config.variable.apiPath;
var urlArray = [];

class SdetailHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    requestAsync(req, url, type) {
        return new Promise(function(resolve, reject) {
            var URLStore = url;
            var optionsStore = {
                url: URLStore,
                method: 'GET',
                headers: {
                    'Authorization': "maximumvsminimumsecurity",
                    'Content-Type': "application/json"
                }
            };
            request(optionsStore, type, function(error, response, body) {
                return resolve([type, JSON.parse(body)['data']]);
            });
        });
    }

    objectify(array) {
        return array.reduce(function(p, c) {
            console.log("objectify")
            console.log(p)
            console.log(c)
            p[c['fieldname']] = c;
            return p;
        }, {});
    }

    getSingleStore(req, res) {

        if (req.params.url == "Latha-Puttanna") {
            res.redirect(301, '/brand/latha-puttanna');
        }
        if (req.params.url == "Kalki-by-K") {
            res.redirect(301, '/brand/kalki-by-k');
        }
        if (req.params.url == "Asopalav") {
            res.redirect(301, '/brand/asopalav');
        }
        if (req.params.url == "Scarters") {
            res.redirect(301, '/brand/scarters');
        }
        if (req.params.url == "Sko") {
            res.redirect(301, '/brand/sko');
        }
        if (req.params.url == "Nakhrewaali") {
            res.redirect(301, '/brand/nakhrewaali');
        }
        if (req.params.url == "The-Linen-Way") {
            res.redirect(301, '/brand/the-linen-way');
        }
        if (req.params.url == "Hyperbole-Accessories") {
            res.redirect(301, '/brand/hyperbole-accessories');
        }
        if (req.params.url == "Fancy-Pastels") {
            res.redirect(301, '/brand/fancy-pastels');
        }
        if (req.params.url == "Mati-India") {
            res.redirect(301, '/brand/mati-india');
        }
        if (req.params.url == "Studio-Scarlet") {
            res.redirect(301, '/brand/studio-scarlet');
        }
        if (req.params.url == "Mesmora") {
            res.redirect(301, '/brand/mesmora');
        }
        if (req.params.url == "Madison") {
            res.redirect(301, '/brand/madison');
        }
        if (req.params.url == "Mahitha-Prasad") {
            res.redirect(301, '/brand/mahitha-prasad');
        }
        if (req.params.url == "Arsheen-Sabherwal") {
            res.redirect(301, '/brand/arsheen-sabherwal');
        }
        if (req.params.url == "Vedangi-Agarwal-Couture") {
            res.redirect(301, '/brand/vedangi-agarwal-couture');
        }
        if (req.params.url == "Design-Temple") {
            res.redirect(301, '/brand/design-temple');
        }
        if (req.params.url == "Satya-Paul") {
            res.redirect(301, '/brand/satya-paul');
        }
        if (req.params.url == "R-Clothing-by-Reepal-Rao") {
            res.redirect(301, '/brand/r-clothing-by-reepal-rao');
        }
        if (req.params.url == "Aamod") {
            res.redirect(301, '/brand/aamod');
        }
        if (req.params.url == "Praan:t-A-label-by-Monika-Chordia") {
            res.redirect(301, '/brand/praan:t-a-label-by-monika-chordia');
        }
        if (req.params.url == "Jharonka") {
            res.redirect(301, '/brand/jharonka');
        }
        if (req.params.url == "Aprere") {
            res.redirect(301, '/brand/aprere');
        }
        if (req.params.url == "Aditi-Somani-Studio") {
            res.redirect(301, '/brand/aditi-somani-studio');
        }
        if (req.params.url == "Aatarah") {
            res.redirect(301, '/brand/aatarah');
        }
        if (req.params.url == "Fizzygoblet") {
            res.redirect(301, '/brand/fizzygoblet');
        }
        if (req.params.url == "Dolly-J") {
            res.redirect(301, '/brand/dolly-j');
        }
        if (req.params.url == "Clove-the-store") {
            res.redirect(301, '/brand/clove-the-store');
        }
        if (req.params.url == "Bandhej") {
            res.redirect(301, '/brand/bandhej');
        }
        if (req.params.url == "Elan-The-Fashion-Store") {
            res.redirect(301, '/brand/elan-the-fashion-store');
        }
        if (req.params.url == "Pahenava-by-Purvi") {
            res.redirect(301, '/brand/pahenava-by-purvi');
        }
        if (req.params.url == "Be-Womaniya") {
            res.redirect(301, '/brand/be-womaniya');
        }
        if (req.params.url == "Shobhan-The-Multi-Designer-Store") {
            res.redirect(301, '/brand/shobhan-the-multi-designer-store');
        }
        if (req.params.url == "Puwin-Couture") {
            res.redirect(301, '/brand/puwin-couture');
        }
        if (req.params.url == "Occasions") {
            res.redirect(301, '/brand/occasions');
        }
        if (req.params.url == "Chirag-Shah-Studio") {
            res.redirect(301, '/brand/chirag-shah-studio');
        }
        if (req.params.url == "Neeta-Lulla") {
            res.redirect(301, '/brand/neeta-lulla');
        }
        if (req.params.url == "Shades-of-India") {
            res.redirect(301, '/brand/shades-of-india');
        }
        if (req.params.url == "Krasaa-by-Vikram-Phandis") {
            res.redirect(301, '/brand/krasaa-by-vikram-phandis');
        }
        if (req.params.url == "Tarun-Tahiliani") {
            res.redirect(301, '/brand/tarun-tahiliani');
        }
        if (req.params.url == "Almirah") {
            res.redirect(301, '/brand/almirah');
        }
        if (req.params.url == "Jade-by-Monica-Karishma") {
            res.redirect(301, '/brand/jade-by-monica-karishma');
        }
        if (req.params.url == "Raghavendra-Rathore") {
            res.redirect(301, '/brand/raghavendra-rathore');
        }
        if (req.params.url == "VAISHALI-S.") {
            res.redirect(301, '/brand/vaishali-s.');
        }
        if (req.params.url == "Anavila") {
            res.redirect(301, '/brand/anavila');
        }
        if (req.params.url == "O.M.O-On-My-Own") {
            res.redirect(301, '/brand/o.m.o-on-my-own');
        }
        if (req.params.url == "Archana-Kochhar") {
            res.redirect(301, '/brand/archana-kochhar');
        }
        if (req.params.url == "Zoya") {
            res.redirect(301, '/brand/zoya');
        }
        if (req.params.url == "Payal-Singhal") {
            res.redirect(301, '/brand/payal-singhal');
        }
        if (req.params.url == "Jade-by-Monica-Karishma-Mumbai") {
            res.redirect(301, '/brand/jade-by-monica-karishma-mumbai');
        }
        if (req.params.url == "Payal-Khandwala") {
            res.redirect(301, '/brand/payal-khandwala');
        }
        if (req.params.url == "Options") {
            res.redirect(301, '/brand/options');
        }
        if (req.params.url == "Kunal-Rawal") {
            res.redirect(301, '/brand/kunal-rawal');
        }
        if (req.params.url == "Pawan-Pranav") {
            res.redirect(301, '/brand/pawan-pranav');
        }
        if (req.params.url == "Sammohi") {
            res.redirect(301, '/brand/sammohi');
        }
        if (req.params.url == "Siddhesh-Chauhan") {
            res.redirect(301, '/brand/siddhesh-chauhan');
        }
        if (req.params.url == "Sva") {
            res.redirect(301, '/brand/sva');
        }
        if (req.params.url == "Nappa-Dori") {
            res.redirect(301, '/brand/nappa-dori');
        }
        if (req.params.url == "Chola-The-Label") {
            res.redirect(301, '/brand/chola-the-label');
        }
        if (req.params.url == "Rajesh-Pratap-Singh") {
            res.redirect(301, '/brand/rajesh-pratap-singh');
        }
        if (req.params.url == "Nandita-Thirani") {
            res.redirect(301, '/brand/nandita-thirani');
        }
        if (req.params.url == "Vasansi-Jaipur") {
            res.redirect(301, '/brand/vasansi-jaipur');
        }
        if (req.params.url == "Seasons") {
            res.redirect(301, '/brand/seasons');
        }
        if (req.params.url == "Sublimme-Culture") {
            res.redirect(301, '/brand/sublimme-culture');
        }
        if (req.params.url == "Foram's-Fashion-Story") {
            res.redirect(301, "/brand/foram's-fashion-story");
        }
        if (req.params.url == "5X-by-Ajit-Kumar") {
            res.redirect(301, "/brand/5X-by-ajit-kumar");
        }
        if (req.params.url == "Tulsi-Studio") {
            res.redirect(301, "/brand/tulsi-studio");
        }
        if (req.params.url == "Bombay-Shirt-Company") {
            res.redirect(301, "/brand/bombay-shirt-company");
        }
        if (req.params.url == "Studio-Virtues") {
            res.redirect(301, "/brand/studio-virtues");
        }
        if (req.params.url == "Camama") {
            res.redirect(301, "/brand/camama");
        }
        if (req.params.url == "Aurus-Jewels") {
            res.redirect(301, "/brand/aurus-jewels");
        }
        if (req.params.url == "Images") {
            res.redirect(301, "/brand/images");
        }
        if (req.params.url == "Three") {
            res.redirect(301, "/brand/three");
        }
        if (req.params.url == "Latha-Puttanna") {
            res.redirect(301, "/brand/latha-puttanna");
        }
        if (req.params.url == "Shantanu-Nikhil") {
            res.redirect(301, "/brand/shantanu-nikhil");
        }
        if (req.params.url == "Gulaal-Creations") {
            res.redirect(301, "/brand/gulaal-creations");
        }
        if (req.params.url == "Nirjara") {
            res.redirect(301, "/brand/nirjara");
        }
        if (req.params.url == "Mortantra") {
            res.redirect(301, "/brand/mortantra");
        }
        if (req.params.url == "Kaveri") {
            res.redirect(301, "/brand/kaveri");
        }
        if (req.params.url == "Abraham-Thakore") {
            res.redirect(301, "/brand/abraham-thakore");
        }
        if (req.params.url == "Bobo-Calcutta") {
            res.redirect(301, "/brand/bobo-calcutta");
        }
        if (req.params.url == "Rishi-Soujit") {
            res.redirect(301, "/brand/rishi-soujit");
        }
        if (req.params.url == "Ruceru-Couture") {
            res.redirect(301, "/brand/ruceru-couture");
        }
        if (req.params.url == "Ekru") {
            res.redirect(301, "/brand/ekru");
        }
        if (req.params.url == "Moha-Atelier") {
            res.redirect(301, "/brand/moha-atelier");
        }
        if (req.params.url == "Studio-AV") {
            res.redirect(301, "/brand/studio-av");
        }
        if (req.params.url == "Onaya") {
            res.redirect(301, "/brand/onaya");
        }
        if (req.params.url == "Papercut") {
            res.redirect(301, "/brand/papercut");
        }
        if (req.params.url == "Dev-R-Nil") {
            res.redirect(301, "/brand/dev-r-nil");
        }
        if (req.params.url == "Ornaete-by-Radhika-Joshi") {
            res.redirect(301, "/brand/ornaete-by-radhika-joshi");
        }
        if (req.params.url == "Yamini-Malani") {
            res.redirect(301, "/brand/yamini-malani");
        }
        if (req.params.url == "Tamara") {
            res.redirect(301, "/brand/tamara");
        }
        if (req.params.url == "Anita-Dongre") {
            res.redirect(301, "/brand/anita-dongre");
        }
        if (req.params.url == "Living-Free") {
            res.redirect(301, "/brand/living-free");
        }
        if (req.params.url == "Rudraksh") {
            res.redirect(301, "/brand/rudraksh");
        }
        if (req.params.url == "Sacaru") {
            res.redirect(301, "/brand/sacaru");
        }
        if (req.params.url == "Ambara") {
            res.redirect(301, "/brand/ambara");
        }
        if (req.params.url == "Anantaya-Decor") {
            res.redirect(301, "/brand/anantaya-decor");
        }
        if (req.params.url == "The-Chalk-Boutique") {
            res.redirect(301, "/brand/the-chalk-boutique");
        }
        if (req.params.url == "Sithara-Kudige") {
            res.redirect(301, "/brand/sithara-kudige");
        }
        if (req.params.url == "Navrathans-Antique-Art") {
            res.redirect(301, "/brand/navrathans-antique-art");
        }
        if (req.params.url == "Navrathan's-Antique-Art") {
            res.redirect(301, "/brand/navrathan's-antique-art");
        }
        if (req.params.url == "Kaurwaki") {
            res.redirect(301, "/brand/kaurwaki");
        }
        if (req.params.url == "Osaa-By-Adarsh") {
            res.redirect(301, "/brand/osaa-by-adarsh");
        }
        if (req.params.url == "Ornaate-by-Amartya-Dutta") {
            res.redirect(301, "/brand/ornaate-by-amartya-dutta");
        }
        if (req.params.url == "Suhani-Pittie") {
            res.redirect(301, "/brand/suhani-pittie");
        }
        if (req.params.url == "Outhouse") {
            res.redirect(301, "/brand/outhouse");
        }
        if (req.params.url == "Needledust") {
            res.redirect(301, "/brand/needledust");
        }
        if (req.params.url == "Anupamaa") {
            res.redirect(301, "/brand/anupamaa");
        }
        if (req.params.url == "Vaishali-Agarwal") {
            res.redirect(301, "/brand/vaishali-agarwal");
        }
        if (req.params.url == "Mairah") {
            res.redirect(301, "/brand/mairah");
        }
        if (req.params.url == "Masaba") {
            res.redirect(301, "/brand/masaba");
        }
        if (req.params.url == "Nallamz") {
            res.redirect(301, "/brand/nallamz");
        }
        if (req.params.url == "House-of-Taamara") {
            res.redirect(301, "/brand/house-of-taamara");
        }
        if (req.params.url == "Nidhi-Bhandari") {
            res.redirect(301, "/brand/nidhi-bhandari");
        }
        if (req.params.url == "Nivedita-Saboo") {
            res.redirect(301, "/brand/nivedita-saboo");
        }
        if (req.params.url == "R'aslila-By-Ruchi") {
            res.redirect(301, "/brand/r'aslila-by-ruchi");
        }
        if (req.params.url == "Manish-Malhotra") {
            res.redirect(301, "/brand/manish-malhotra");
        }
        if (req.params.url == "Anjali-Wadhwani") {
            res.redirect(301, "/brand/anjali-wadhwani");
        }
        if (req.params.url == "Rohit-Bal") {
            res.redirect(301, "/brand/rohit-bal");
        }
        if (req.params.url == "Poonam-Thakre") {
            res.redirect(301, "/brand/poonam-thakre");
        }
        if (req.params.url == "Ranjna") {
            res.redirect(301, "/brand/ranjna");
        }
        if (req.params.url == "Maral-Yazarloo") {
            res.redirect(301, "/brand/maral-yazarloo");
        }
        if (req.params.url == "Enaya-Radhika-More") {
            res.redirect(301, "/brand/enaya-radhika-more");
        }
        if (req.params.url == "Priyanka-Rajiv") {
            res.redirect(301, "/brand/priyanka-rajiv");
        }
        if (req.params.url == "Mrunalini-Rao") {
            res.redirect(301, "/brand/mrunalini-rao");
        }
        if (req.params.url == "Geethika-Kanumilli") {
            res.redirect(301, "/brand/geethika-kanumilli");
        }
        if (req.params.url == "Anahita") {
            res.redirect(301, "/brand/anahita");
        }
        if (req.params.url == "ROHIT-RAHUL") {
            res.redirect(301, "/brand/rohit-rahul");
        }
        if (req.params.url == "Jayanti-Reddy") {
            res.redirect(301, "/brand/jayanti-reddy");
        }
        if (req.params.url == "Archana-Rao") {
            res.redirect(301, "/brand/archana-rao");
        }
        if (req.params.url == "Asmita-Marwa") {
            res.redirect(301, "/brand/asmita-marwa");
        }
        if (req.params.url == "Bhargavi-Kunam") {
            res.redirect(301, "/brand/bhargavi-kunam");
        }
        if (req.params.url == "Shilpa-Reddy") {
            res.redirect(301, "/brand/shilpa-reddy");
        }
        if (req.params.url == "Gaurang-Shah") {
            res.redirect(301, "/brand/gaurang-shah");
        }
        if (req.params.url == "Shravan-Kummar") {
            res.redirect(301, "/brand/shravan-kummar");
        }
        if (req.params.url == "Ganesh-Nallari") {
            res.redirect(301, "/brand/ganesh-nallari");
        }
        if (req.params.url == "Sirisha-Reddy") {
            res.redirect(301, "/brand/sirisha-reddy");
        }
        if (req.params.url == "Mamatha-Tulluri") {
            res.redirect(301, "/brand/mamatha-tulluri");
        }
        if (req.params.url == "Angasutra") {
            res.redirect(301, "/brand/angasutra");
        }
        if (req.params.url == "Varuna-Jithesh") {
            res.redirect(301, "/brand/varuna-jithesh");
        }
        if (req.params.url == "Sashi-Vangapalli") {
            res.redirect(301, "/brand/sashi-vangapalli");
        }
        if (req.params.url == "Anamika-Khanna") {
            res.redirect(301, "/brand/anamika-khanna");
        }
        if (req.params.url == "Vivek-Karunakaran") {
            res.redirect(301, "/brand/vivek-karunakaran");
        }
        if (req.params.url == "Rehane") {
            res.redirect(301, "/brand/rehane");
        }
        if (req.params.url == "Rohit-Kamra-Jaipur") {
            res.redirect(301, "/brand/rohit-kamra-jaipur");
        }
        if (req.params.url == "Rohit-Kamra") {
            res.redirect(301, "/brand/rohit-kamra");
        }
        if (req.params.url == "Bodhitree") {
            res.redirect(301, "/brand/bodhitree");
        }
        if (req.params.url == "Shuchi-VC") {
            res.redirect(301, "/brand/shuchi-vc");
        }
        if (req.params.url == "Ashna-Vaswani") {
            res.redirect(301, "/brand/ashna-vaswani");
        }
        if (req.params.url == "Miraangi") {
            res.redirect(301, "/brand/miraangi");
        }
        if (req.params.url == "Punit-Balana") {
            res.redirect(301, "/brand/punit-balana");
        }
        if (req.params.url == "Gaurav-Katta") {
            res.redirect(301, "/brand/gaurav-katta");
        }
        if (req.params.url == "Swati-Vijaivargie") {
            res.redirect(301, "/brand/swati-vijaivargie");
        }
        if (req.params.url == "Pratap-Sons") {
            res.redirect(301, "/brand/pratap-sons");
        }
        if (req.params.url == "Nangalia-Ruchira") {
            res.redirect(301, "/brand/nangalia-ruchira");
        }
        if (req.params.url == "Aavaran") {
            res.redirect(301, "/brand/aavaran");
        }
        if (req.params.url == "Utsavi-By-Vibha") {
            res.redirect(301, "/brand/utsavi-by-vibha");
        }
        if (req.params.url == "Sidney-Sladen") {
            res.redirect(301, "/brand/sidney-sladen");
        }
        if (req.params.url == "Coterie") {
            res.redirect(301, "/brand/coterie");
        }
        if (req.params.url == "Plantation-House") {
            res.redirect(301, "/brand/plantation-house");
        }
        if (req.params.url == "Archana-Karthick") {
            res.redirect(301, "/brand/archana-karthick");
        }
        if (req.params.url == "Amethyst") {
            res.redirect(301, "/brand/amethyst");
        }
        if (req.params.url == "Sayuri") {
            res.redirect(301, "/brand/sayuri");
        }
        if (req.params.url == "Hangar") {
            res.redirect(301, "/brand/hangar");
        }
        if (req.params.url == "Nikasha") {
            res.redirect(301, "/brand/nikasha");
        }
        if (req.params.url == "Monika-Nidhii") {
            res.redirect(301, "/brand/monika-nidhii");
        }
        if (req.params.url == "Astha-Narang") {
            res.redirect(301, "/brand/astha-narang");
        }
        if (req.params.url == "The-Maroon-Suit") {
            res.redirect(301, "/brand/the-maroon-suit");
        }
        if (req.params.url == "Naina-Jain") {
            res.redirect(301, "/brand/naina-jain");
        }
        if (req.params.url == "Studio-149") {
            res.redirect(301, "/brand/studio-149");
        }
        if (req.params.url == "Payal-and-Zinal") {
            res.redirect(301, "/brand/payal-and-zinal");
        }
        if (req.params.url == "Ritu-Kumar") {
            res.redirect(301, "/brand/ritu-kumar");
        }
        if (req.params.url == "Bombaim") {
            res.redirect(301, "/brand/bombaim");
        }
        if (req.params.url == "Vachi") {
            res.redirect(301, "/brand/vachi");
        }
        if (req.params.url == "This-and-That") {
            res.redirect(301, "/brand/this-and-that");
        }
        if (req.params.url == "Atulya-Jewellery") {
            res.redirect(301, "/brand/atulya-jewellery");
        }
        if (req.params.url == "Kilol") {
            res.redirect(301, "/brand/kilol");
        }
        if (req.params.url == "Nitya-Bajaj") {
            res.redirect(301, "/brand/nitya-bajaj");
        }
        if (req.params.url == "Anisha-Shetty") {
            res.redirect(301, "/brand/anisha-shetty");
        }
        if (req.params.url == "Gaurav-Gupta") {
            res.redirect(301, "/brand/gaurav-gupta");
        }
        if (req.params.url == "Shloka-Sudakar") {
            res.redirect(301, "/brand/shloka-sudakar");
        }
        if (req.params.url == "Kommal-Sood") {
            res.redirect(301, "/brand/kommal-sood");
        }
        if (req.params.url == "Pooja-Shroff") {
            res.redirect(301, "/brand/pooja-shroff");
        }
        if (req.params.url == "Tulsi-Silk") {
            res.redirect(301, "/brand/tulsi-silk");
        }
        if (req.params.url == "The-Purple-Turtles") {
            res.redirect(301, "/brand/the-purple-turtles");
        }
        if (req.params.url == "Indigene") {
            res.redirect(301, "/brand/indigene");
        }
        if (req.params.url == "Suneet-Varma") {
            res.redirect(301, "/brand/suneet-varma");
        }
        if (req.params.url == "Pilgrim") {
            res.redirect(301, "/brand/pilgrim");
        }
        if (req.params.url == "Brass-Tacks") {
            res.redirect(301, "/brand/brass-tacks");
        }
        if (req.params.url == "Pastels-and-Pop") {
            res.redirect(301, "/brand/pastels-and-pop");
        }
        if (req.params.url == "Label-Pratham") {
            res.redirect(301, "/brand/label-pratham");
        }
        if (req.params.url == "AlterEgo") {
            res.redirect(301, "/brand/alterego");
        }
        if (req.params.url == "Aabhlo") {
            res.redirect(301, "/brand/aabhlo");
        }
        if (req.params.url == "Noopur-Balia-Barot") {
            res.redirect(301, "/brand/noopur-balia-barot");
        }
        if (req.params.url == "Iza") {
            res.redirect(301, "/brand/iza");
        }
        if (req.params.url == "Cinnamon") {
            res.redirect(301, "/brand/cinnamon");
        }
        if (req.params.url == "Aesthetics") {
            res.redirect(301, "/brand/aesthetics");
        }
        if (req.params.url == "Timri") {
            res.redirect(301, "/brand/timri");
        }
        if (req.params.url == "Disha-Vadgama") {
            res.redirect(301, "/brand/disha-vadgama");
        }
        if (req.params.url == "Msafiri") {
            res.redirect(301, "/brand/msafiri");
        }
        if (req.params.url == "Intelligent-Idiots") {
            res.redirect(301, "/brand/intelligent-idiots");
        }
        if (req.params.url == "Shilpi") {
            res.redirect(301, "/brand/shilpi");
        }
        if (req.params.url == "Arma-Dio") {
            res.redirect(301, "/brand/arma-dio");
        }
        if (req.params.url == "Priyal-Prakash") {
            res.redirect(301, "/brand/priyal-prakash");
        }
        if (req.params.url == "Studio-Anviksha") {
            res.redirect(301, "/brand/studio-anviksha");
        }
        if (req.params.url == "Nicobar") {
            res.redirect(301, "/brand/nicobar");
        }
        if (req.params.url == "Ekaya") {
            res.redirect(301, "/brand/ekaya");
        }
        if (req.params.url == "White-Noise") {
            res.redirect(301, "/brand/white-noise");
        }
        if (req.params.url == "Versha-Sethi") {
            res.redirect(301, "/brand/versha-sethi");
        }
        if (req.params.url == "Raw-Mango-by-Sanjay-Garg") {
            res.redirect(301, "/brand/raw-mango-by-sanjay-garg");
        }
        if (req.params.url == "JJ-VALAYA") {
            res.redirect(301, "/brand/jj-valaya");
        }
        if (req.params.url == "Manish-Arora") {
            res.redirect(301, "/brand/manish-arora");
        }
        if (req.params.url == "Bodice") {
            res.redirect(301, "/brand/bodice");
        }
        if (req.params.url == "Dhruv-Vaish") {
            res.redirect(301, "/brand/dhruv-vaish");
        }
        if (req.params.url == "Guapa") {
            res.redirect(301, "/brand/guapa");
        }
        if (req.params.url == "Abu-Jani-Sandeep-Khosla") {
            res.redirect(301, "/brand/abu-jani-sandeep-khosla");
        }
        if (req.params.url == "Ashima-Leena") {
            res.redirect(301, "/brand/ashima-leena");
        }
        if (req.params.url == "Dhora") {
            res.redirect(301, "/brand/dhora");
        }
        if (req.params.url == "Kalee") {
            res.redirect(301, "/brand/kalee");
        }
        if (req.params.url == "Ritika-Mirchandani") {
            res.redirect(301, "/brand/ritika-mirchandani");
        }
        if (req.params.url == "Loukiya") {
            res.redirect(301, "/brand/loukiya");
        }
        if (req.params.url == "Soltee") {
            res.redirect(301, "/brand/soltee");
        }
        if (req.params.url == "Paarisha") {
            res.redirect(301, "/brand/paarisha");
        }
        if (req.params.url == "Madsam-Tinzin") {
            res.redirect(301, "/brand/madsam-tinzin");
        }
        if (req.params.url == "Arpita-Mehta") {
            res.redirect(301, "/brand/arpita-mehta");
        }
        if (req.params.url == "Sue-Mue") {
            res.redirect(301, "/brand/sue-mue");
        }
        if (req.params.url == "Ekmit") {
            res.redirect(301, "/brand/ekmit");
        }
        if (req.params.url == "The-Open-Trunk") {
            res.redirect(301, "/brand/the-open-trunk");
        }
        if (req.params.url == "Maal-Gaadi") {
            res.redirect(301, "/brand/maal-gaadi");
        }
        if (req.params.url == "Kalpa-Druma") {
            res.redirect(301, "/brand/kalpa-druma");
        }
        if (req.params.url == "Tifara") {
            res.redirect(301, "/brand/tifara");
        }
        if (req.params.url == "Bandana-Narula") {
            res.redirect(301, "/brand/bandana-narula");
        }
        if (req.params.url == "Studio-9696") {
            res.redirect(301, "/brand/studio-9696");
        }
        if (req.params.url == "Rehana-Basheer") {
            res.redirect(301, "/brand/rehana-basheer");
        }
        if (req.params.url == "Montage-Fashion-House") {
            res.redirect(301, "/brand/montage-fashion-house");
        }
        if (req.params.url == "Fatiz") {
            res.redirect(301, "/brand/fatiz");
        }
        if (req.params.url == "Intish") {
            res.redirect(301, "/brand/intish");
        }
        if (req.params.url == "Sumona-Couture") {
            res.redirect(301, "/brand/sumona-couture");
        }
        if (req.params.url == "Collage") {
            res.redirect(301, "/brand/collage");
        }
        if (req.params.url == "Skirt-and-Co") {
            res.redirect(301, "/brand/skirt-and-co");
        }
        if (req.params.url == "Gleamberry") {
            res.redirect(301, "/brand/gleamberry");
        }
        if (req.params.url == "Purva-Couture") {
            res.redirect(301, "/brand/purva-couture");
        }
        if (req.params.url == "Elan-Design-Studio") {
            res.redirect(301, "/brand/elan-design-studio");
        }
        if (req.params.url == "Akshita-Totlani") {
            res.redirect(301, "/brand/akshita-totlani");
        }
        if (req.params.url == "Niharika-Vivek") {
            res.redirect(301, "/brand/niharika-vivek");
        }
        if (req.params.url == "Vani-Vrtti") {
            res.redirect(301, "/brand/vani-vrtti");
        }
        if (req.params.url == "Nihira-The-Couture-House") {
            res.redirect(301, "/brand/nihira-the-couture-house");
        }
        if (req.params.url == "Aparna-S") {
            res.redirect(301, "/brand/aparna-s");
        }
        if (req.params.url == "Adya") {
            res.redirect(301, "/brand/adya");
        }
        if (req.params.url == "Jaykirti") {
            res.redirect(301, "/brand/jaykirti");
        }
        if (req.params.url == "Ninoshka") {
            res.redirect(301, "/brand/ninoshka");
        }
        if (req.params.url == "Rasa") {
            res.redirect(301, "/brand/rasa");
        }
        if (req.params.url == "Islie") {
            res.redirect(301, "/brand/islie");
        }
        if (req.params.url == "Gulabo-Jaipur") {
            res.redirect(301, "/brand/gulabo-jaipur");
        }
        if (req.params.url == "AM:PM") {
            res.redirect(301, "/brand/am:pm");
        }
        if (req.params.url == "Amaare") {
            res.redirect(301, "/brand/amaare");
        }
        if (req.params.url == "Abhinav-Mishra") {
            res.redirect(301, "/brand/abhinav-mishra");
        }
        if (req.params.url == "Mani-Bhatia") {
            res.redirect(301, "/brand/mani-bhatia");
        }
        if (req.params.url == "Aikeyah") {
            res.redirect(301, "/brand/aikeyah");
        }
        if (req.params.url == "Christina-W-T") {
            res.redirect(301, "/brand/christina-w-t");
        }
        if (req.params.url == "Kamaali-Couture") {
            res.redirect(301, "/brand/kamaali-couture");
        }
        if (req.params.url == "Amit-Aggarwal") {
            res.redirect(301, "/brand/amit-aggarwal");
        }
        if (req.params.url == "Muse") {
            res.redirect(301, "/brand/muse");
        }
        if (req.params.url == "Monisha-Jaising") {
            res.redirect(301, "/brand/monisha-jaising");
        }
        if (req.params.url == "431-88-by-Shweta-Kapur") {
            res.redirect(301, "/brand/431-88-by-shweta-kapur");
        }
        if (req.params.url == "Chappers") {
            res.redirect(301, "/brand/chappers");
        }
        if (req.params.url == "Melange") {
            res.redirect(301, "/brand/melange");
        }
        if (req.params.url == "The-Panache-Raack") {
            res.redirect(301, "/brand/the-panache-raack");
        }
        if (req.params.url == "Enakshi") {
            res.redirect(301, "/brand/enakshi");
        }
        if (req.params.url == "The-Wardrobe-Theorem") {
            res.redirect(301, "/brand/the-wardrobe-theorem");
        }
        if (req.params.url == "Tvak-Designer-Store") {
            res.redirect(301, "/brand/tvak-designer-store");
        }
        if (req.params.url == "Story-Of-India") {
            res.redirect(301, "/brand/story-of-india");
        }
        if (req.params.url == "Deval-The-Multidesigner-Store") {
            res.redirect(301, "/brand/deval-the-multidesigner-store");
        }
        if (req.params.url == "Dipali-Shah") {
            res.redirect(301, "/brand/dipali-shah");
        }
        if (req.params.url == "Queen-of-Hearts") {
            res.redirect(301, "/brand/queen-of-hearts");
        }
        if (req.params.url == "Prathaa") {
            res.redirect(301, "/brand/prathaa");
        }
        if (req.params.url == "Tahweave") {
            res.redirect(301, "/brand/tahweave");
        }
        if (req.params.url == "Coo-Coo") {
            res.redirect(301, "/brand/coo-coo");
        }
        if (req.params.url == "Untung") {
            res.redirect(301, "/brand/untung");
        }
        if (req.params.url == "Tanariri") {
            res.redirect(301, "/brand/tanariri");
        }
        if (req.params.url == "The-Burnt-Soul") {
            res.redirect(301, "/brand/the-burnt-soul");
        }
        if (req.params.url == "Taneira") {
            res.redirect(301, "/brand/taneira");
        }
        if (req.params.url == "Khela") {
            res.redirect(301, "/brand/khela");
        }
        if (req.params.url == "Shirrin-Design-Co.") {
            res.redirect(301, "/brand/shirrin-design-co");
        }
        if (req.params.url == "Andamen") {
            res.redirect(301, "/brand/andamen");
        }
        if (req.params.url == "Benaazir") {
            res.redirect(301, "/brand/benaazir");
        }
        if (req.params.url == "Philocaly") {
            res.redirect(301, "/brand/philocaly");
        }
        if (req.params.url == "The-Lohasmith") {
            res.redirect(301, "/brand/the-lohasmith");
        }
        if (req.params.url == "Zahras") {
            res.redirect(301, "/brand/zahras");
        }
        if (req.params.url == "Gargee") {
            res.redirect(301, "/brand/gargee");
        }
        if (req.params.url == "Pooja-Sethi-Pret-&-Couture") {
            res.redirect(301, "/brand/pooja-sethi-pret-&-couture");
        }
        if (req.params.url == "Charu-Jewels") {
            res.redirect(301, "/brand/charu-jewels");
        }
        if (req.params.url == "Vastra-Designers-By-Palak-&-Samta") {
            res.redirect(301, "/brand/vastra-designers-by-palak-&-samta");
        }
        if (req.params.url == "Aura-Studio") {
            res.redirect(301, "/brand/aura-studio");
        }
        if (req.params.url == "Missa-More") {
            res.redirect(301, "/brand/missa-more");
        }
        if (req.params.url == "Thoppia") {
            res.redirect(301, "/brand/thoppia");
        }
        if (req.params.url == "AYA'S") {
            res.redirect(301, "/brand/aya's");
        }
        if (req.params.url == "Mohawk") {
            res.redirect(301, "/brand/mohawk");
        }
        if (req.params.url == "Neeru's") {
            res.redirect(301, "/brand/neeru's");
        }
        if (req.params.url == "Coloroso") {
            res.redirect(301, "/brand/coloroso");
        }
        if (req.params.url == "Vanshika-Ahuja") {
            res.redirect(301, "/brand/vanshika-ahuja");
        }
        if (req.params.url == "Kassa") {
            res.redirect(301, "/brand/kassa");
        }
        if (req.params.url == "Tistabene") {
            res.redirect(301, "/brand/tistabene");
        }
        if (req.params.url == "Frangipani-Kids") {
            res.redirect(301, "/brand/frangipani-kids");
        }
        if (req.params.url == "Samyakk") {
            res.redirect(301, "/brand/samyakk");
        }
        if (req.params.url == "Anqi") {
            res.redirect(301, "/brand/anqi");
        }
        if (req.params.url == "Anju-Modi") {
            res.redirect(301, "/brand/anju-modi");
        }
        if (req.params.url == "Kapraha") {
            res.redirect(301, "/brand/kapraha");
        }
        if (req.params.url == "No-Nasties") {
            res.redirect(301, "/brand/no-nasties");
        }
        if (req.params.url == "Nalli") {
            res.redirect(301, "/brand/nalli");
        }
        if (req.params.url == "Saree.com") {
            res.redirect(301, "/brand/saree.com");
        }
        if (req.params.url == "Oorjaa") {
            res.redirect(301, "/brand/oorjaa");
        }
        if (req.params.url == "MayaBazaar") {
            res.redirect(301, "/brand/mayabazaar");
        }
        if (req.params.url == "Amoh-by-Jade") {
            res.redirect(301, "/brand/amoh-by-jade");
        }
        if (req.params.url == "Niiaashi") {
            res.redirect(301, "/brand/niiaashi");
        }
        if (req.params.url == "Tipsyfly") {
            res.redirect(301, "/brand/tipsyfly");
        }
        if (req.params.url == "Wood-I-Bow-Tie") {
            res.redirect(301, "/brand/wood-i-bow-tie");
        }
        if (req.params.url == "There") {
            res.redirect(301, "/brand/there");
        }
        if (req.params.url == "RockRush") {
            res.redirect(301, "/brand/rockrush");
        }
        if (req.params.url == "Knya") {
            res.redirect(301, "/brand/knya");
        }
        if (req.params.url == "Label-Ishana") {
            res.redirect(301, "/brand/label-ishana");
        }
        if (req.params.url == "Vaaya") {
            res.redirect(301, "/brand/vaaya");
        }
        if (req.params.url == "Casa-Decor") {
            res.redirect(301, "/brand/casa-decor");
        }
        if (req.params.url == "Parrot-Lily") {
            res.redirect(301, "/brand/parrot-lily");
        }
        if (req.params.url == "Code-Silver") {
            res.redirect(301, "/brand/code-silver");
        }
        if (req.params.url == "Little-Things") {
            res.redirect(301, "/brand/little-things");
        }
        if (req.params.url == "Naomi-Code") {
            res.redirect(301, "/brand/naomi-code");
        }
        if (req.params.url == "Madhurima-Bhattacharjee") {
            res.redirect(301, "/brand/madhurima-bhattacharjee");
        }
        if (req.params.url == "Nimai") {
            res.redirect(301, "/brand/nimai");
        }
        if (req.params.url == "Reubenbright-Clothing") {
            res.redirect(301, "/brand/reubenbright-clothing");
        }
        if (req.params.url == "Jodi") {
            res.redirect(301, "/brand/jodi");
        }
        if (req.params.url == "Pinakin") {
            res.redirect(301, "/brand/pinakin");
        }
        if (req.params.url == "Ritu-jain-singh") {
            res.redirect(301, "/brand/ritu-jain-singh");
        }
        if (req.params.url == "Monk-Story") {
            res.redirect(301, "/brand/monk-story");
        }
        if (req.params.url == "The-Alternate") {
            res.redirect(301, "/brand/the-alternate");
        }
        if (req.params.url == "The-leather-Box") {
            res.redirect(301, "/brand/the-leather-box");
        }
        if (req.params.url == "Runaway-Bicycle") {
            res.redirect(301, "/brand/runaway-bicycle");
        }
        if (req.params.url == "Half-Full") {
            res.redirect(301, "/brand/half-full");
        }
        if (req.params.url == "Red-Sister-Blue") {
            res.redirect(301, "/brand/red-sister-blue");
        }
        if (req.params.url == "Cord") {
            res.redirect(301, "/brand/cord");
        }
        if (req.params.url == "Suta") {
            res.redirect(301, "/brand/suta");
        }
        if (req.params.url == "Anokhi") {
            res.redirect(301, "/brand/anokhi");
        }
        if (req.params.url == "Kathputli") {
            res.redirect(301, "/brand/kathputli");
        }
        if (req.params.url == "The-Wishing-Chair") {
            res.redirect(301, "/brand/the-wishing-chair");
        }
        if (req.params.url == "Rain-Peacock") {
            res.redirect(301, "/brand/rain-peacock");
        }
        if (req.params.url == "The-Summer-House") {
            res.redirect(301, "/brand/the-summer-house");
        }
        if (req.params.url == "Tj-Li") {
            res.redirect(301, "/brand/tj-li");
        }
        if (req.params.url == "Naushad-Ali") {
            res.redirect(301, "/brand/naushad-ali");
        }
        if (req.params.url == "Ray-Ethnic") {
            res.redirect(301, "/brand/ray-ethnic");
        }
        if (req.params.url == "Fourseven") {
            res.redirect(301, "/brand/fourseven");
        }
        if (req.params.url == "Darshi-Shah-Bhavin-Trivedi") {
            res.redirect(301, "/brand/darshi-shah-bhavin-trivedi");
        }
        if (req.params.url == "Sivi") {
            res.redirect(301, "/brand/sivi");
        }
        if (req.params.url == "Nautanky") {
            res.redirect(301, "/brand/nautanky");
        }
        if (req.params.url == "Eshyl") {
            res.redirect(301, "/brand/eshyl");
        }
        if (req.params.url == "Traveler's-Home") {
            res.redirect(301, "/brand/traveler's-home");
        }
        if (req.params.url == "Moh-Studio") {
            res.redirect(301, "/brand/moh-studio");
        }
        if (req.params.url == "Global-Desi") {
            res.redirect(301, "/brand/global-desi");
        }
        if (req.params.url == "K.Kristina") {
            res.redirect(301, "/brand/k.kristina");
        }
        if (req.params.url == "Aza") {
            res.redirect(301, "/brand/aza");
        }
        if (req.params.url == "Jaipur-Gems") {
            res.redirect(301, "/brand/jaipur-gems");
        }
        if (req.params.url == "Poshelit") {
            res.redirect(301, "/brand/poshelit");
        }
        if (req.params.url == "Jaypore") {
            res.redirect(301, "/brand/jaypore");
        }
        if (req.params.url == "Sampada") {
            res.redirect(301, "/brand/sampada");
        }
        if (req.params.url == "Voylite") {
            res.redirect(301, "/brand/voylite");
        }
        if (req.params.url == "Tjori") {
            res.redirect(301, "/brand/tjori");
        }
        if (req.params.url == "Pashtush") {
            res.redirect(301, "/brand/pashtush");
        }
        if (req.params.url == "Seamstress") {
            res.redirect(301, "/brand/seamstress");
        }
        if (req.params.url == "India-Circus") {
            res.redirect(301, "/brand/india-circus");
        }
        if (req.params.url == "Play-Clan") {
            res.redirect(301, "/brand/play-clan");
        }
        if (req.params.url == "Atreyie") {
            res.redirect(301, "/brand/atreyie");
        }
        if (req.params.url == "Claymango") {
            res.redirect(301, "/brand/claymango");
        }
        if (req.params.url == "Melorra") {
            res.redirect(301, "/brand/melorra");
        }
        if (req.params.url == "Symetree") {
            res.redirect(301, "/brand/symetree");
        }
        if (req.params.url == "Enoy") {
            res.redirect(301, "/brand/enoy");
        }
        if (req.params.url == "Kurta-Kampanee") {
            res.redirect(301, "/brand/kurta-kampanee");
        }
        if (req.params.url == "Azga") {
            res.redirect(301, "/brand/azga");
        }
        if (req.params.url == "Nehal-Desai") {
            res.redirect(301, "/brand/nehal-desai");
        }
        if (req.params.url == "N-Square-Studio") {
            res.redirect(301, "/brand/n-square-studio");
        }
        if (req.params.url == "The-Omnia-Design-Company") {
            res.redirect(301, "/brand/the-omnia-design-company");
        }
        if (req.params.url == "Imperial-Knots") {
            res.redirect(301, "/brand/imperial-knots");
        }
        if (req.params.url == "Freedom-Tree") {
            res.redirect(301, "/brand/freedom-tree");
        }
        if (req.params.url == "Safomasi") {
            res.redirect(301, "/brand/safomasi");
        }
        if (req.params.url == "Idam") {
            res.redirect(301, "/brand/idam");
        }
        if (req.params.url == "The-Decor-Kart") {
            res.redirect(301, "/brand/the-decor-kart");
        }
        if (req.params.url == "Zufolo") {
            res.redirect(301, "/brand/zufolo");
        }
        if (req.params.url == "Tulsi-Online") {
            res.redirect(301, "/brand/tulsi-online");
        }
        if (req.params.url == "Indian-Peacock") {
            res.redirect(301, "/brand/indian-peacock");
        }
        if (req.params.url == "Baarique") {
            res.redirect(301, "/brand/baarique");
        }
        if (req.params.url == "Teori") {
            res.redirect(301, "/brand/teori");
        }
        if (req.params.url == "Peeli-Dori") {
            res.redirect(301, "/brand/peeli-dori");
        }
        if (req.params.url == "Gulmohar-Lane") {
            res.redirect(301, "/brand/gulmohar-lane");
        }
        if (req.params.url == "Festivya") {
            res.redirect(301, "/brand/festivya");
        }
        if (req.params.url == "Itr-by-Khyati-Pande") {
            res.redirect(301, "/brand/itr-by-khyati-pande");
        }
        if (req.params.url == "Home-Artisan") {
            res.redirect(301, "/brand/home-artisan");
        }
        if (req.params.url == "Coppre") {
            res.redirect(301, "/brand/coppre");
        }
        if (req.params.url == "Devnaagri") {
            res.redirect(301, "/brand/devnaagri");
        }
        if (req.params.url == "Basil-Leaf") {
            res.redirect(301, "/brand/basil-leaf");
        }
        if (req.params.url == "Tribe-by-Amrapali") {
            res.redirect(301, "/brand/tribe-by-amrapali");
        }
        if (req.params.url == "Mogra-Designs") {
            res.redirect(301, "/brand/mogra-designs");
        }
        if (req.params.url == "Monsoon-The-Designer-Store") {
            res.redirect(301, "/brand/monsoon-the-designer-store");
        }
        if (req.params.url == "Khara-Kapas") {
            res.redirect(301, "/brand/khara-kapas");
        }
        if (req.params.url == "Pure-Ghee-Designs") {
            res.redirect(301, "/brand/pure-ghee-designs");
        }
        if (req.params.url == "Ashwin-Thiyagarajan") {
            res.redirect(301, "/brand/ashwin-thiyagarajan");
        }
        if (req.params.url == "Matsya") {
            res.redirect(301, "/brand/matsya");
        }
        if (req.params.url == "Vrisa") {
            res.redirect(301, "/brand/vrisa");
        }
        if (req.params.url == "Citrine") {
            res.redirect(301, "/brand/citrine");
        }
        if (req.params.url == "Garo") {
            res.redirect(301, "/brand/garo");
        }
        if (req.params.url == "Shyamal-And-Bhumika") {
            res.redirect(301, "/brand/shyamal-and-bhumika");
        }
        if (req.params.url == "Bunosilo") {
            res.redirect(301, "/brand/bunosilo");
        }
        if (req.params.url == "Vraj:bhoomi") {
            res.redirect(301, "/brand/vraj:bhoomi");
        }
        if (req.params.url == "The-Yarn-Story") {
            res.redirect(301, "/brand/the-yarn-story");
        }
        if (req.params.url == "Desi-Hangover") {
            res.redirect(301, "/brand/desi-hangover");
        }
        if (req.params.url == "Bent-chair") {
            res.redirect(301, "/brand/bent-chair");
        }
        if (req.params.url == "The-Loom") {
            res.redirect(301, "/brand/the-loom");
        }
        if (req.params.url == "Translate-Handwoven-Ikat") {
            res.redirect(301, "/brand/translate-handwoven-ikat");
        }
        if (req.params.url == "Bunaai") {
            res.redirect(301, "/brand/bunaai");
        }
        if (req.params.url == "Hathkargha") {
            res.redirect(301, "/brand/hathkargha");
        }
        if (req.params.url == "Chidiyaa") {
            res.redirect(301, "/brand/chidiyaa");
        }
        if (req.params.url == "Siyaahi") {
            res.redirect(301, "/brand/siyaahi");
        }
        if (req.params.url == "Gaatha-A-Tale-of-Crafts") {
            res.redirect(301, "/brand/gaatha-a-tale-of-crafts");
        }
        if (req.params.url == "Bhaane") {
            res.redirect(301, "/brand/bhaane");
        }
        if (req.params.url == "ISHARYA") {
            res.redirect(301, "/brand/isharya");
        }
        if (req.params.url == "Lovebirds") {
            res.redirect(301, "/brand/lovebirds");
        }
        if (req.params.url == "Bias") {
            res.redirect(301, "/brand/bias");
        }
        if (req.params.url == "Kalki-by-K") {
            res.redirect(301, "/brand/kalki-by-k");
        }
        if (req.params.url == "Doodlage") {
            res.redirect(301, "/brand/doodlage");
        }
        if (req.params.url == "Studio-Metallurgy") {
            res.redirect(301, "/brand/studio-metallurgy");
        }
        if (req.params.url == "Khanijo") {
            res.redirect(301, "/brand/khanijo");
        }
        if (req.params.url == "Prerto") {
            res.redirect(301, "/brand/prerto");
        }
        if (req.params.url == "Scarlet-Sage") {
            res.redirect(301, "/brand/scarlet-sage");
        }
        if (req.params.url == "Gauri-Nainika") {
            res.redirect(301, "/brand/gauri-nainika");
        }
        if (req.params.url == "Namrata-Joshipura") {
            res.redirect(301, "/brand/namrata-joshipura");
        }
        if (req.params.url == "Ritu-Beri-Couture") {
            res.redirect(301, "/brand/ritu-beri-couture");
        }
        if (req.params.url == "Rina-Dhaka") {
            res.redirect(301, "/brand/rina-dhaka");
        }
        if (req.params.url == "Mynah's-Reynu-Taandon") {
            res.redirect(301, "/brand/mynah's-reynu-taandon");
        }
        if (req.params.url == "Rahul-Mishra") {
            res.redirect(301, "/brand/rahul-mishra");
        }
        if (req.params.url == "Falguni-Shane-Peacock") {
            res.redirect(301, "/brand/falguni-shane-peacock");
        }
        if (req.params.url == "Pinnacle-Shruti-Sancheti") {
            res.redirect(301, "/brand/pinnacle-shruti-sancheti");
        }
        if (req.params.url == "Shivan-Narresh") {
            res.redirect(301, "/brand/shivan-narresh");
        }
        if (req.params.url == "Samant-Chauhan") {
            res.redirect(301, "/brand/samant-chauhan");
        }
        if (req.params.url == "Vineet-Bahl") {
            res.redirect(301, "/brand/vineet-bahl");
        }
        if (req.params.url == "Malini-Ramani") {
            res.redirect(301, "/brand/malini-ramani");
        }
        if (req.params.url == "Wendell-Rodricks") {
            res.redirect(301, "/brand/wendell-rodricks");
        }
        if (req.params.url == "Ashish-N-Soni") {
            res.redirect(301, "/brand/ashish-n-soni");
        }
        if (req.params.url == "Nachiket-Barve") {
            res.redirect(301, "/brand/nachiket-barve");
        }
        if (req.params.url == "Shehlaa-by-Shehla-Khan") {
            res.redirect(301, "/brand/shehlaa-by-shehla-khan");
        }
        if (req.params.url == "House-of-Kotwara") {
            res.redirect(301, "/brand/house-of-kotwara");
        }
        if (req.params.url == "Rimple-and-Harpreet-Narula") {
            res.redirect(301, "/brand/rimple-and-harpreet-narula");
        }
        if (req.params.url == "Taika-by-Poonam-Bhagat") {
            res.redirect(301, "/brand/taika-by-poonam-bhagat");
        }
        if (req.params.url == "Ridhi-Mehra") {
            res.redirect(301, "/brand/ridhi-mehra");
        }
        if (req.params.url == "Chumbak") {
            res.redirect(301, "/brand/chumbak");
        }
        if (req.params.url == "Amrita-Thakur-Studio") {
            res.redirect(301, "/brand/amrita-thakur-studio");
        }
        if (req.params.url == "Veto") {
            res.redirect(301, "/brand/veto");
        }
        if (req.params.url == "Purvi-Doshi") {
            res.redirect(301, "/brand/purvi-doshi");
        }
        if (req.params.url == "Tussah-by-Siddhi") {
            res.redirect(301, "/brand/tussah-by-siddhi");
        }
        if (req.params.url == "Dhara-Shah-Studio") {
            res.redirect(301, "/brand/dhara-shah-studio");
        }
        if (req.params.url == "Shaarav-Couture") {
            res.redirect(301, "/brand/shaarav-couture");
        }
        if (req.params.url == "Aagman-Sarees") {
            res.redirect(301, "/brand/aagman-sarees");
        }
        if (req.params.url == "Orra") {
            res.redirect(301, "/brand/orra");
        }
        if (req.params.url == "Zevar-by-Geeta") {
            res.redirect(301, "/brand/zevar-by-geeta");
        }
        if (req.params.url == "Tyaani") {
            res.redirect(301, "/brand/tyaani");
        }
        if (req.params.url == "Azotiique") {
            res.redirect(301, "/brand/azotiique");
        }
        if (req.params.url == "Deepkala") {
            res.redirect(301, "/brand/deepkala");
        }
        if (req.params.url == "Manyavar") {
            res.redirect(301, "/brand/manyavar");
        }
        if (req.params.url == "Chhapa") {
            res.redirect(301, "/brand/chhapa");
        }
        if (req.params.url == "Oak-Pine") {
            res.redirect(301, "/brand/oak-pine");
        }
        if (req.params.url == "Runi") {
            res.redirect(301, "/brand/runi");
        }
        if (req.params.url == "Atosa") {
            res.redirect(301, "/brand/atosa");
        }
        if (req.params.url == "Kasheesh.K") {
            res.redirect(301, "/brand/kasheesh.k");
        }
        if (req.params.url == "Seema-Mehta") {
            res.redirect(301, "/brand/seema-mehta");
        }
        if (req.params.url == "San's-the-Multi-Designer-Store") {
            res.redirect(301, "/brand/san's-the-multi-designer-store");
        }
        if (req.params.url == "Dressfolk") {
            res.redirect(301, "/brand/dressfolk");
        }
        if (req.params.url == "Antar-Agni") {
            res.redirect(301, "/brand/antar-agni");
        }
        if (req.params.url == "Nimi's-Curio") {
            res.redirect(301, "/brand/nimi's-curio");
        }
        if (req.params.url == "Amrapali") {
            res.redirect(301, "/brand/amrapali");
        }
        if (req.params.url == "Eleven-On-Ten") {
            res.redirect(301, "/brand/eleven-on-ten");
        }
        if (req.params.url == "Zari") {
            res.redirect(301, "/brand/zari");
        }
        if (req.params.url == "Rana's") {
            res.redirect(301, "/brand/rana's");
        }
        if (req.params.url == "Suprint") {
            res.redirect(301, "/brand/suprint");
        }
        if (req.params.url == "Sattva") {
            res.redirect(301, "/brand/sattva");
        }
        if (req.params.url == "Kishori") {
            res.redirect(301, "/brand/kishori");
        }
        if (req.params.url == "Kessa") {
            res.redirect(301, "/brand/kessa");
        }
        if (req.params.url == "Pasha-India") {
            res.redirect(301, "/brand/pasha-india");
        }
        if (req.params.url == "Armuse") {
            res.redirect(301, "/brand/armuse");
        }
        if (req.params.url == "The-Studio-M") {
            res.redirect(301, "/brand/the-studio-m");
        }
        if (req.params.url == "Vhannah") {
            res.redirect(301, "/brand/vhannah");
        }
        if (req.params.url == "Saachi") {
            res.redirect(301, "/brand/saachi");
        }
        if (req.params.url == "Aarti-Sethia-Studio") {
            res.redirect(301, "/brand/aarti-sethia-studio");
        }
        if (req.params.url == "Banjaran") {
            res.redirect(301, "/brand/banjaran");
        }
        if (req.params.url == "Swati-Ubroi") {
            res.redirect(301, "/brand/swati-ubroi");
        }
        if (req.params.url == "Anupama-Bose") {
            res.redirect(301, "/brand/anupama-bose");
        }
        if (req.params.url == "Sakh-by-Neha-Khatri") {
            res.redirect(301, "/brand/sakh-by-neha-khatri");
        }
        if (req.params.url == "Satayam") {
            res.redirect(301, "/brand/satayam");
        }
        if (req.params.url == "Milk-Design-Shop") {
            res.redirect(301, "/brand/milk-design-shop");
        }
        if (req.params.url == "Vareena-Couture") {
            res.redirect(301, "/brand/vareena-couture");
        }
        if (req.params.url == "Nayika") {
            res.redirect(301, "/brand/nayika");
        }
        if (req.params.url == "Hot-Pink") {
            res.redirect(301, "/brand/hot-pink");
        }
        if (req.params.url == "IDLI-by-Thierry-Journo") {
            res.redirect(301, "/brand/idli-by-thierry-journo");
        }
        if (req.params.url == "Sunita-Shekhawat") {
            res.redirect(301, "/brand/sunita-shekhawat");
        }
        if (req.params.url == "Motisons-Jewellers") {
            res.redirect(301, "/brand/motisons-jewellers");
        }
        if (req.params.url == "Birdhichand-Ghanshyamdas") {
            res.redirect(301, "/brand/birdhichand-ghanshyamdas");
        }
        if (req.params.url == "Shilpi-Boutique") {
            res.redirect(301, "/brand/shilpi-boutique");
        }
        if (req.params.url == "Sangini-Sarees") {
            res.redirect(301, "/brand/sangini-sarees");
        }
        if (req.params.url == "Srijak") {
            res.redirect(301, "/brand/srijak");
        }
        if (req.params.url == "Mangalmayee") {
            res.redirect(301, "/brand/mangalmayee");
        }
        if (req.params.url == "Radha-Raman-Fashion") {
            res.redirect(301, "/brand/radha-raman-fashion");
        }
        if (req.params.url == "Pallavi-Jaipur") {
            res.redirect(301, "/brand/pallavi-jaipur");
        }
        if (req.params.url == "Rambhajo-Jewellers") {
            res.redirect(301, "/brand/rambhajo-jewellers");
        }
        if (req.params.url == "Kalajee-Jewellery") {
            res.redirect(301, "/brand/kalajee-jewellery");
        }
        if (req.params.url == "Virgin-Jewel") {
            res.redirect(301, "/brand/virgin-jewel");
        }
        if (req.params.url == "Savio-Jewellery") {
            res.redirect(301, "/brand/savio-jewellery");
        }
        if (req.params.url == "Aryan's-Designer-Studio") {
            res.redirect(301, "/brand/aryan's-designer-studio");
        }
        if (req.params.url == "Rakhee-Saraogi") {
            res.redirect(301, "/brand/rakhee-saraogi");
        }
        if (req.params.url == "Anmol-by-Deepa-Shah") {
            res.redirect(301, "/brand/anmol-by-deepa-shah");
        }
        if (req.params.url == "Missori") {
            res.redirect(301, "/brand/missori");
        }
        if (req.params.url == "Fuel-The-Store") {
            res.redirect(301, "/brand/fuel-the-store");
        }
        if (req.params.url == "Kushal's-Fashion-Jewellery") {
            res.redirect(301, "/brand/kushal's-fashion-jewellery");
        }
        if (req.params.url == "Kora") {
            res.redirect(301, "/brand/kora");
        }
        if (req.params.url == "DPR-Jewellery") {
            res.redirect(301, "/brand/dpr-jewellery");
        }
        if (req.params.url == "Steel-All-Male") {
            res.redirect(301, "/brand/steel-all-male");
        }
        if (req.params.url == "A-B-Jewels") {
            res.redirect(301, "/brand/a-b-jewels");
        }
        if (req.params.url == "Manubhai-Zaveri") {
            res.redirect(301, "/brand/manubhai-zaveri");
        }
        if (req.params.url == "Anjalee-Jewellers") {
            res.redirect(301, "/brand/anjalee-jewellers");
        }
        if (req.params.url == "Zinzuwadia-Jewellers") {
            res.redirect(301, "/brand/zinzuwadia-jewellers");
        }
        if (req.params.url == "Alite-Ornatto") {
            res.redirect(301, "/brand/alite-ornatto");
        }
        if (req.params.url == "Tanisi-Designer-Jewellery") {
            res.redirect(301, "/brand/tanisi-designer-jewellery");
        }
        if (req.params.url == "Blinkk") {
            res.redirect(301, "/brand/blinkk");
        }
        if (req.params.url == "The-Shoe-Tales") {
            res.redirect(301, "/brand/the-shoe-tales");
        }
        if (req.params.url == "Kzari-by-Karishma-Hingorani") {
            res.redirect(301, "/brand/kzari-by-karishma-hingorani");
        }
        if (req.params.url == "Ratios") {
            res.redirect(301, "/brand/ratios");
        }
        if (req.params.url == "Sabyasachi") {
            res.redirect(301, "/brand/sabyasachi");
        }
        if (req.params.url == "The-White-Teak-Company") {
            res.redirect(301, "/brand/the-white-teak-company");
        }

        var optionsBlog = {
            url: URLStore + '/stores/search?URL=' + req.params.url,
            method: 'GET',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            }
        };
        return new Promise(function(resolve, reject) {
            request(optionsBlog, function(error, response, body) {
                resolve(body)
            });
        }).then((results) => {
            var store = JSON.parse(results)['data'][0];
            if (store !== undefined) {
                var catBlogs = {
                    url: URLStore + '/stores/' + store._id,
                    method: 'GET',
                    headers: {
                        'Authorization': "maximumvsminimumsecurity",
                        'Content-Type': "application/json"
                    }
                };
                return new Promise(function(resolve, reject) {
                    request(catBlogs, function(error, response, body) {
                        resolve(body)
                    });
                }).then((storedata) => {
                    var storedatas = JSON.parse(storedata)['data'];
                    if (storedatas.storeCatalogs) {
                        var catkeyword = _.map(storedatas.categoriesIds, 'category');
                    }
                    var cat = '';

                    if (catkeyword.length > 1) {
                        cat = catkeyword[0] + ", " + catkeyword[1];
                    } else {
                        cat = catkeyword[0]
                    }

                    if (catkeyword == undefined || cat == undefined) {
                        cat = 'Clothing Home-Decor Accessories Jewellery';
                    }
                    var seoData = '';
                    // if (storedatas.buisnessOffline || storedatas.buisnessBoth) {
                    //     seoData = {
                    //         title: "Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", India",
                    //         // title: storedatas.storeName + " For " + cat + " in " + storedatas.storeCity + ", " + storedatas.storeState + " | Zeepzoop",
                    //         description: "Check Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", " + storedatas.storeState + ".Visit Zeepzoop for " + storedatas.storeName + " address, contact number, reviews & catalogue",
                    //         keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                    //         image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                    //         type: 'store',
                    //         // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                    //         url: 'https://' + req.get('host') + req.originalUrl,
                    //         site: 'Zeepzoop',
                    //         domain: 'zeepzoop.com'
                    //     }
                    // } else if (storedatas.buisnessOnline) {
                    //     seoData = {
                    //         title: storedatas.storeName + " For " + cat + " Shop Online | Zeepzoop",
                    //         description: "Check Designer " + cat + " By " + storedatas.storeName + " .Visit " + storedatas.storeName + " Website from ZeepZoop for Online Shopping.",
                    //         keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                    //         image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                    //         type: 'store',
                    //         // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                    //         url: 'https://' + req.get('host') + req.originalUrl,
                    //         site: 'Zeepzoop',
                    //         domain: 'zeepzoop.com'
                    //     }
                    // }

                    if (storedatas.buisnessOffline || storedatas.buisnessBoth) {
                        var seoData = {
                            title: "Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", India",
                            description: "Check out " + storedatas.storeName + " designer " + cat + " collection on ZeepZoop. Visit ZeepZoop for " + storedatas.storeName + " catalogue, address and contact number.",
                            keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    } else if (storedatas.buisnessOnline) {
                        var seoData = {
                            title: "Designer " + cat + " in " + storedatas.storeName + " Shop Online | Zeepzoop",
                            description: "Check out " + storedatas.storeName + " designer " + cat + " collection on ZeepZoop. Visit ZeepZoop for " + storedatas.storeName + " catalogue, address and contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "darshi-shah-bhavin-trivedi") {
                        var seoData = {
                            title: "Darshi Shah Bhavin Trivedi | Wedding Outfits for Men and Women",
                            description: "Label Darshi Shah Bhavin Trivedi, Ahmedabad, also known as DSBT. Visit ZeepZoop for DSBT traditional, indo-westren and wedding wear collections, reviews, address and contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "traveler's-home") {
                        var seoData = {
                            title: "Travelers Home Ahmedabad | Home Decor Stores in Ahmedabad",
                            description: "Travelers Home is a one-stop shop for home decor from France, Switzerland, Netherland, Italy, Indonesia. Visit ZeepZoop for Traveler's Home review, address & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "tvak-designer-store") {
                        var seoData = {
                            title: "Tvak Designer Store | Multi Designer Store in Ahmedabad",
                            description: "Tvak Designer Store is a multi-designer store by Deviba Wala & Sukhi Singh. Visit ZeepZoop for Tvak Designer Store ethnic, western & Indo-western wear catalogue, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "kasheesh.k") {
                        var seoData = {
                            title: "Kasheesh.K | KK Atelier | Fashion Designer in Ahmedabad",
                            description: "Kasheesh K, an Indian fashion designer in Ahmedabad. Visit ZeepZoop for Kasheesh.K's wedding trousseau for bride & groom & corporate attire catalogue, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "purva-couture") {
                        var seoData = {
                            title: "Purva Couture | Bridal Couture in Ahmedabad",
                            description: "Purva Couture is a Bridal boutique in Ahmedabad, perfect for all the wedding ceremonies. Visit ZeepZoop for Purva Couture's traditional & contemporary outfits catalogue, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "intelligent-idiots") {
                        var seoData = {
                            title: "Intelligent Idiots | Home Decor | Gift Store in Ahmedabad",
                            description: "Intelligent Idiots a unique products store that you will find nowhere in Ahmedabad. Visit ZeepZoop for Intelligent Idiots for designer home decor. accessories catalogue, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "zinzuwadia-jewellers") {
                        var seoData = {
                            title: "Zinzuwadia Jewellers | Jewellery Designers in Ahmedabad",
                            description: "Zinzuwadia Jewellers is a renowned jewellery retail brand of Ahmedabad, India. Visit ZeepZoop for Zinzuwadia Jewellers wedding, party, festival jewellery catalogue, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "the-shoe-tales") {
                        var seoData = {
                            title: "The Shoe Tales | Designer Wedding Shoes Ahmedabad",
                            description: "The Shoe Tales, known for ethnic footwear, designer juttis, Wedges and Kolhapuri Chappals. Visit ZeepZoop for The Shoe Tales catalogue, address and contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "sivi") {
                        var seoData = {
                            title: "Sivi - The Bespoke Boutique | Designer Boutiques in Ahmedabad",
                            description: "Sivi - The Bespoke Boutique provides a wide range of products including Suits, Kurtis, and Bandhanies. Visit ZeepZoop for Sivi   catalogue, reviews, address and contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    if (req.params.url == "aryan's-designer-studio") {
                        var seoData = {
                            title: "Aryans Designer Store | Designer Boutique in Ahmedabad",
                            description: "Aryans Designer Studio based in Ahmedabad by Sujata Agrawal. Visit ZeepZoop for Aryans Designer Studio's indo western, gowns, bridal, dresses and kurti catalogues, reviews & contact number.",
                            keywords: storedatas.storeName + " for " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                            url: 'https://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }

                    res.render('storedetail', {
                        seo: true,
                        seoData: seoData,
                        page: 'storedetail-page',
                        titleurl: req.params.url,
                        store: storedatas,
                        storeCatalogs: storedatas.storeCatalogs,
                        lengthstoreCatalogs: storedatas.storeCatalogs.length,
                        storeOffers: storedatas.storeOffers,
                        reviews: storedatas.reviews,
                        reviewslength: storedatas.reviews.length,
                        moment: moment,
                        lengthstoreOffers: storedatas.storeOffers.length,
                        shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl
                    })
                });
            } else {
                res.redirect(301, '/')
                // res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }
        })
    }
}

module.exports = SdetailHandler;