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
.post(userController.staffLoginRequired, activityTypeController.create);

router.route('/update')
.put(userController.staffLoginRequired, activityTypeController.update);

router.route('/delete')
.delete(userController.staffLoginRequired, activityTypeController.delete);
//////////////////////////////////////////////////////////////


///////// Exports /////////
module.exports = router;
//////////////////////////