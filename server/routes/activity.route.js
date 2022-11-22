/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityController = require('../controllers/activity.controller');
const router = express.Router();
/////////////////////////////////////////////////////////////////
router.route('/')
.post(activityController.createActivity);
router.route('/')
.put(activityController.updateActivity);
router.route('/')
.delete(activityController.deleteActivity);
router.route('/')
.get(activityController.getActivity)
// router.route('/getActivities')
// .get(activityController.getActivity)

router.stack.forEach(l => console.log(l.route.path, l.route.methods))
module.exports = router;