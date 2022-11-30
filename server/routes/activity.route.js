/////////////////////// Import dependencies /////////////////////
const express = require('express');
const activityController = require('../controllers/activity.controller');
const {validateJwtToken} = require('../services/verifyToken')
const router = express.Router();
/////////////////////////////////////////////////////////////////

router.post('/', validateJwtToken, activityController.createActivity)
router.put('/', validateJwtToken, activityController.updateActivity);
router.delete('/',validateJwtToken, activityController.deleteActivity);
router.get('/',validateJwtToken, activityController.getActivity);

module.exports = router;