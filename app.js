const express = require('express');

const { connecter } = require('./bd/connect');

const routeUtilisateur = require('./route/utilisateur');

const app = express();


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use('/api/v1', routeUtilisateur);


// Connexion à MongoDB
connecter("mongodb://127.0.0.1:27017/test", (erreur) => {

    if (erreur) {

        console.error("Erreur de connexion à MongoDB :", erreur);

        process.exit(1);

    } else {

        console.log("Connexion à MongoDB réussie !");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });

    }

});