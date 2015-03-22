var express = require("express")
    , site = require("../controller/site")
    , account = require("../controller/account")
    , router = express.Router()

router.get('/', site.index);
router.post('/login', site.login);
router.get('/about', site.about);
router.get('/oauth/callback', site.callback);
router.get('/account/o', account.list);
router.get('/account/:id', account.view);

module.exports = router;