///////////////////////////// Import dependencies ///////////////////////////////
const ActivityType = require('../models/ActivityType.model');
/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////// CRUD Callbacks for Activity Types ///////////////////////////////////////////
exports.getAllActivityTypes = (req, res) => {
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

exports.createNewActivityType = (req, res) => {
	const activityTypeName = req.body.activityTypeName;
	const newActivityType = new ActivityType({ name: activityTypeName });
	newActivityType.save(
		(err) => {
				if (err) {
					return res.status(400).send({message: `Failed to save new activity type. ${err}`});
				}
				else {
					return res.json({success: true, name: activityTypeName});
				}
			}
	);
}

exports.updateActivityType = (req, res) => {
	const activityTypeName = req.body.activityTypeName;
	const newActivityTypeName = req.body.newActivityTypeName;
	ActivityType.findOneAndUpdate(
		{ name: activityTypeName },
		{ $set: {name: newActivityTypeName} },
		(err, updatedActivityType) => {
			if (err) {return res.status(400).json({ message: `Failed to update activity type. ${err}` });}
			else {
				return res.status(200).json({ success: true, name: updatedActivityType.name });
			}
		}
	);
}

exports.deleteActivityType = (req, res) => {
	const activityTypeToDelete = req.body.activityTypeName;
	ActivityType.findOneAndDelete(
		{ name: activityTypeToDelete },
		(err) => {
			if (err) {return res.status(400).json({ message: `Failed to delete activity type. ${err}` });}
			else {
				return res.status(200).json({ success: true, deleted_activity: activityTypeToDelete});
			}
		}
	);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////