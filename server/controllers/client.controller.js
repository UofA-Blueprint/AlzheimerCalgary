const { ObjectId } = require('mongodb');
const Client = require('../models/client.model');


exports.createClient = ((req, res) => {
    const clientName = req.body.clientName;
    const clientBirthdate = req.body.clientBirthdate;
    const newActivity = new Client({clientName: clientName, clientBirthdate: clientBirthdate});
    newActivity.save(
        (err) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. ${err}`});
			}
			else {
				return res.json({success: true, clientName: clientName});
			}
		}
    );
})

exports.updateClient = ((req, res) => {
    const ObjectID = ObjectId(req.body.ObjectID);
    const clientName = req.body.clientName;
    const clientBirthdate = req.body.clientBirthdate;
    Client.findOneAndUpdate({_id:ObjectID},{clientName: clientName, clientBirthdate: clientBirthdate},
		(err) => {
			if (err) {
				return res.status(400).send({message: `Failed to save user. ${err}`});
			}
			else {
				return res.json({success: true, objectID:ObjectID, clientName: clientName, clientBirthdate: clientBirthdate});
			}
		}
	).orFail();
})

exports.deleteActivity = ((req, res) => {
    const objectID = ObjectId(req.body.ObjectID);
    Client.findByIdAndRemove(
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

