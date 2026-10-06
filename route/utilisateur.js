const express = require('express');
const { ajouterUtilisateur } = require('../controller/utilisateur');
const router = express.Router();

router.route('/utilisateur').post(ajouterUtilisateur);
router.route('/utilisateurs').get(getTousUtilisateur);

module.exports = router;
