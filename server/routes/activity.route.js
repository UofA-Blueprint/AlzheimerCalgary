/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityController = require('../controllers/activity.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////
router.route('/createActivity')
.post(activityController.createActivity);
router.route('/createActivity')
.put(activityController.createOrUpdateActivity);
router.route('/deleteActivity')
.delete(activityController.deleteActivity);

// router.route('/getActivities')
// .get(activityController.getActivity)

router.stack.forEach(l => console.log(l.route.path, l.route.methods))
module.exports = router;