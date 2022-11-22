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
    const objectID = ObjectId(req.body.ObjectID);
    ActivityHandler.deleteActivity(objectID, res);
}

exports.getActivity = (req, res) => {
    // const activityType = req.body.activityType;
    // if(activityType){
    //     ActivityHandler.getActivitiesByType(activityType, res);
    // }
    ActivityHandler.getActivities(res);
}

exports.updateActivity = (req, res) => {
    const objectID = ObjectId(req.body.ObjectID);
    const activityName = req.body.activityName;
    const activityType = req.body.activityType;
    const description = req.body.description;
    ActivityHandler.updateActivity(objectID, activityName, activityType, description, res);
}
