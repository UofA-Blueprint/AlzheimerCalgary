/////////////////////// Import dependencies /////////////////////
const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////


/////////////////////////// Routes ///////////////////////////
router.route('/tasks')
.post(userController.loginRequired, userController.profile);

router.route('/auth/register')
.post(userController.register);

router.route('/auth/sign_in')
.post(userController.sign_in);
//////////////////////////////////////////////////////////////


//////// Exports ////////
module.exports = router;
/////////////////////////