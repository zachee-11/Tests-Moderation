# Application de Modération (serveur node.js)

Ce projet est une application Node.js qui fournit des fonctionnalités d'interaction avec l'API Logora de modération. Il inclut des routes pour obtenir des prédictions de modération et des scores de qualité basés sur le contenu textuel.

### `Note`: les routes `POST /api/moderation/predict` et `POST /api/moderation/score` ont été implémentées mais ne sont pas disponibles sur notre API.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine (v18.18.2 pour moi).
3. Dans le répertoire racine du projet, exécutez `npm install` pour installer toutes les dépendances.

## Utilisation

1. Pour démarrer le serveur, exécutez `node server.js` depuis la racine du projet.
2. Tester le serveur en utilisant un outil comme Postman (des exemples dans le dossier `/images` à la racine du projet)

## Tests Unitaires

Ce projet inclut des tests unitaires pour vérifier le bon fonctionnement des routes et des fonctionnalités de l'API Logora. Les tests sont écrits avec `Jest et Supertest`.

1. Pour exécuter les tests, utilisez la commande `npx jest` depuis la racine du projet:
2. 02 tests passent sur 04. Les 02 qui ne passent pas n'ont pas de routes sur l'API Logora

3. Assurez-vous que le serveur est en cours d'exécution avant d'exécuter les tests.
