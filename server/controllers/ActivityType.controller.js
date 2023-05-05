///////////////////////////// Import dependencies ///////////////////////////////
const ActivityType = require('../models/ActivityType.model');
const JWTVerifier = require('../services/JWTVerifier');
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////// CRUD Callbacks for Activity Types ///////////////////////////////////////////
exports.getAll = (req, res) => {
	ActivityType.find({}, (err, types) => {
		if (err) {return res.status(400).json({ message: `Failed to find activity types. ${err}` });}
		else {
			if (types.length === 0) {return res.status(404).json({ message: "No activity type exists." });}
			else {
				return res.status(200).json({ success: true, activity_types: types.map((typeObject) => {return typeObject.name;}) });
			}
		}
	});
}

exports.create = (req, res) => {
	const activityTypeName = req.body.name;
	const newActivityType = new ActivityType({ name: activityTypeName });
	newActivityType.save(
		(err) => {
				if (err) {
					return res.status(400).send({message: `Failed to save new activity type. ${err}`});
				}
				else {
					return res.status(200).json({success: true, name: activityTypeName});
				}
			}
	);
}

exports.update = (req, res) => {
	const activityTypeName = req.body.current_name;
	const newActivityTypeName = req.body.new_name;
	ActivityType.findOneAndUpdate(
		{ name: activityTypeName },
		{ $set: {name: newActivityTypeName} },
		(err, updatedActivityType) => {
			if (err) {return res.status(400).json({ message: `Failed to update activity type. ${err}` });}
			else if (!updatedActivityType) {return res.status(400).json({ message: `Activity type ${activityTypeName} does not exist.` });} 
			else {
				return res.status(200).json({ success: true, old_name: updatedActivityType.name, updated_name: newActivityTypeName });
			}
		}
	);
}

exports.delete = (req, res) => {
	const activityTypeToDelete = req.body.name;
	ActivityType.findOneAndDelete(
		{ name: activityTypeToDelete },
		(err, activity) => {
			if (err) {return res.status(400).json({ message: `Failed to delete activity type. ${err}` });}
			else if (!activity) {return res.status(400).json({message: `Activity type ${activityTypeToDelete} does not exist.`});}
			else {
				return res.status(200).json({ success: true, deleted_activity: activityTypeToDelete});
			}
		}
	);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////