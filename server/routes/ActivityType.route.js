/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityTypeController = require('../controllers/ActivityType.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////


/////////////////////////// Routes ///////////////////////////
router.route('/all')
.get(activityTypeController.getAllActivityTypes);

router.route('/create')
.post(activityTypeController.createNewActivityType);

router.route('/update')
.put(activityTypeController.updateActivityType);

router.route('/delete')
.delete(activityTypeController.deleteActivityType);
//////////////////////////////////////////////////////////////


///////// Exports /////////
module.exports = router;
//////////////////////////