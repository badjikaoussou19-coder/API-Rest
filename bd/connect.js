const { MongoClient } = require("mongodb");

let client = null;

function connecter(url, callback) {

    if (client == null) {

        client = new MongoClient(url);

        client.connect((erreur) => {

            if (erreur) {
                client = null;
                callback(erreur);
            } else {
                console.log("MongoDB connecté !");
                callback();
            }

        });

    } else {

        callback();

    }
}

function bd() {
    return client.db("dbOk");
}

function fermerConnexion() {

    if (client) {
        client.close();
        client = null;
        console.log("Connexion MongoDB fermée !");
    }
}

module.exports = {
    connecter,
    bd,
    fermerConnexion
};