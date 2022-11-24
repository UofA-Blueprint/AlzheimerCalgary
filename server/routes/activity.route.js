/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityController = require('../controllers/activity.controller');
const {validateJwtToken} = require('../services/verifyToken')
const router = express.Router();
/////////////////////////////////////////////////////////////////
// router.route('/')
// .post(verifyToken, activityController.createActivity);
router.post('/', validateJwtToken, activityController.createActivity)
router.put('/', validateJwtToken, activityController.updateActivity);
router.delete('/',validateJwtToken, activityController.deleteActivity);
router.get('/',validateJwtToken, activityController.getActivity);

// router.route('/')
// .put(activityController.updateActivity);
// router.route('/')
// .delete(activityController.deleteActivity);
// router.route('/')
// .get(activityController.getActivity)
// router.route('/getActivities')
// .get(activityController.getActivity)

router.stack.forEach(l => console.log(l.route.path, l.route.methods))
module.exports = router;