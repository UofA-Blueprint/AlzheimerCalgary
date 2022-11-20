const { ObjectId } = require('mongodb');
const Activity = require('../models/activity.model');
const ActivityHandler = require('../services/ActivityHandler');

exports.createActivity = (req, res) => {
    const activityName = req.body.activityName;
    const activityType = req.body.activityType;
    const description = req.body.description;
    ActivityHandler.createActivity(activityName, activityType, description, res);
}

exports.deleteActivity = (req, res) => {
    const objectID = ObjectId(req.body.objectID);
    ActivityHandler.deleteActivity(objectID, res);
}

exports.createOrUpdateActivity = (req, res) => {
    const objectID = ObjectId(req.body.objectID);
    const activityName = req.body.activityName;
    const activityType = req.body.activityType;
    const description = req.body.description;
    ActivityHandler.createOrUpdateActivity(objectID, activityName, activityType, description, res);
}
