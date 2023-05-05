const { ObjectId } = require('mongodb');
const Activity = require('../models/activity.model');

exports.getActivity = ((req, res) => {
	// TODO: Need to filter based on activity and return a JSON object containing all the activities
	// Error in converting Mongoose Query object to json
    const activityType = req.body.activityType;
    if(activityType){
        const activityCollection = Activity.find({activityType: activityType})
    }
    // Activity.find({activityType: activityType})
})

exports.createActivity = ((req, res) => {
    const activityName = req.body.activityName;
    const activityType = req.body.activityType;
    const description = req.body.description;
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
})

exports.deleteActivity = ((req, res) => {
    const objectID = ObjectId(req.body.ObjectID);
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
})


exports.updateActivity = ((req, res) => {
    const ObjectID = ObjectId(req.body.ObjectID);
    const activityName = req.body.activityName;
    const activityType = req.body.activityType;
    const description = req.body.description;
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
})
