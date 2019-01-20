let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let ip =  require('./credential/ip.json');
let indexRouter = require('./routes/index');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

let server = app.listen(ip.port, ip.address, function(){
    let address = server.address().address;
    let port = server.address().port;
    console.log("Listening on " + address + ":" + port);
});
module.exports = app;
