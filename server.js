let express = require("express");
let bodyParser = require("body-parser");

const userController = require('./controllers/UserController');
const websiteController = require('./controllers/WebsiteController');
const pageController = require("./controllers/PageController");

require('./database/db')();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

userController(app);
websiteController(app);
pageController(app);

app.listen(3000);


