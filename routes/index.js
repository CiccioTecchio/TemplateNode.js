let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send({msg: "Ciao"}).status(200).end();
    //res.render('index', { title: 'Hello' });
});

module.exports = router;
