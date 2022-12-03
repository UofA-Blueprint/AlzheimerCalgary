/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityTypeController = require('../controllers/ActivityType.controller');
const userController = require('../controllers/user.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////


/////////////////////////// Routes ///////////////////////////
router.route('/all')
.get(userController.loginRequired, activityTypeController.getAll);

router.route('/create')
.post(userController.loginRequired, activityTypeController.create);

router.route('/update')
.put(userController.loginRequired, activityTypeController.update);

router.route('/delete')
.delete(userController.loginRequired, activityTypeController.delete);
//////////////////////////////////////////////////////////////


///////// Exports /////////
module.exports = router;
//////////////////////////