# Application de Modération (Ruby on Rails)

Cette application est conçue pour modérer automatiquement les contenus en utilisant une API de modération. Elle permet de déterminer si le contenu fourni est acceptable ou non en fonction de certaines règles prédéfinies.

### `Note`: je suis parti du pricipe qu'un contenu est acceptable si la "prediction < 0.5, et inacceptable sinon".

## Configuration requise

- Ruby version 3.2.3
- Rails version 7.1.3.2

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Exécutez `bundle install` pour installer les dépendances.

## Utilisation

Vous pouvez regarder les images du répertoire '/app/assets/images' pour obtenir des exemples d'utilisation.

## Tests

Exécutez les tests avec la commande 'rspec' dans le terminal depuis la racine du projet. Les tests sont situés dans le repertoire '/spec/models'.

