let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res) {
    res.send({msg: "Hello"});
});

module.exports = router;
