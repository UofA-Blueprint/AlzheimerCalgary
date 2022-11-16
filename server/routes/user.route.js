/////////////////////// Import dependencies /////////////////////
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////


/////////////////////////// Routes ///////////////////////////
router.route('/auth/register')
.post(userController.loginRequired, userController.register);

router.route('/auth/login')
.post(userController.login);

router.route('/auth/sign_up')
.post(userController.sign_up);
//////////////////////////////////////////////////////////////


///////// Exports /////////
module.exports = router;
//////////////////////////