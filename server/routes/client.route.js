/////////////////////// Import dependencies /////////////////////
const express = require('express');
const clientController = require('../controllers/client.controller');
// const {validateJwtToken} = require('../services/verifyToken')
const router = express.Router();
/////////////////////////////////////////////////////////////////

router.post('/', clientController.createClient)
router.put('/', clientController.updateClient);
router.delete('/', clientController.deleteActivity);
// router.get('/', clientController.getActivity);

module.exports = router;