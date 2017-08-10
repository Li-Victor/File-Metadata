var express = require('express');
var bodyParser = require('body-parser');
var upload = require('multer')();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//middleware for static pages
app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

app.all('*', function (req, res, next) {
    return res.status(404).send({
        error: 'This web page does not lead to anywhere'
    });
});

var port = 3000;
app.listen(port, function () {
    console.log('Listening on port ' + port);
})
