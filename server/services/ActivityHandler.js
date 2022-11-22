const { ObjectID } = require('bson');
const Activity = require('../models/activity.model');

exports.createActivity = (activityType, activityName, description, res) => {
    const newActivity = new Activity({activityType: activityType, activityName: activityName, description: description});
    newActivity.save(
        (err) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. ${err}`});
			}
			else {
				return res.json({success: true, activityName: activityName, description: description});
			}
		}
    );
}

exports.getActivities= (res) => {
	Activity.find({});
}

exports.updateActivity = (ObjectID, activityName, activityType, description, res) =>{
	Activity.findOneAndUpdate({_id:ObjectID},{activityName: activityName, activityType: activityType, description: description},
		(err) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. ${err}`});
			}
			else {
				return res.json({success: true, objectID:ObjectID, activityName: activityName, description: description});
			}
		}
	).orFail();
}

exports.deleteActivity = (objectID, res) =>{
	Activity.findByIdAndRemove(
		objectID,
		(err) => {
			if (err){
				return res.status(404).send({message: `Failed to delete user. ${err}`});
			}
			else{
				return res.json({success: true});
			}
		}
	).orFail();

}