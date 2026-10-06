const Utilisateur = require("../model/utilisateur");

const client = require("../bd/connect").bd();

const ajouterUtilisateur = async (req, res) => {
    try {

        let utilisateur = new Utilisateur(
            req.body.noms,
            req.body.adresse,
            req.body.telephone
        );

        let result = await client
            .collection("utilisateurs")
            .insertOne(utilisateur);

        res.status(201).json(result);

    } catch (erreur) {

        console.log(erreur);

        res.status(500).json({
            error: erreur.message
        });
    }
};


const getTousUtilisateur = async (req, res) => {
    try {

        let cursor = client
            .collection("utilisateurs")
            .find();

        let result = await cursor.toArray();

        if (result.length > 0) {

            res.status(200).json(result);

        } else {

            res.status(404).json({
                message: "Aucun utilisateur trouvé"
            });
        }

    } catch (erreur) {

        console.log(erreur);

        res.status(500).json({
            error: erreur.message
        });
    }
};


const getUtilisateur = async (req, res) => {
    try {
        let id = new ObjectID(req.param.id);
        let cursor = client.db()
            .collection("utilisateurs")
            .find({_id : id});

        let result = await cursor.toArray();

        if (result.length > 0) {

            res.status(200).json(result);

        } else {

            res.status(404).json({
                message: "Cet utilisateur n'existe pas"
            });
        }

    } catch (erreur) {

        console.log(erreur);

        res.status(500).json({
            error: erreur.message
        });
    }
};




module.exports = {
    ajouterUtilisateur,
    getTousUtilisateur
};