const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/config');

const Wines = db.define('wine', {
    domaine: {
        type: Sequelize.STRING
    },
    millesime: {
        type: Sequelize.DECIMAL
    },
    cepage: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    pays: {
        type: Sequelize.STRING
    },
    alcool: {
        type: Sequelize.DECIMAL
    },
    format: {
        type: Sequelize.DECIMAL
    },
    prix: {
        type: Sequelize.DECIMAL
    },
    EAN: {
        type: Sequelize.INTEGER,
        unique: 'EAN'
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    gouts: {
        type: Sequelize.STRING
    },
    couleur: {
        type: STRING
    },
    region: {
        type: Sequelize.STRING
    },
    oeil: {
        type: Sequelize.STRING
    },
    nez: {
        type: Sequelize.STRING
    },
    bouche: {
        type: Sequelize.STRING
    },
    temperature: {
        type: Sequelize.STRING
    },
    conservation: {
        type: Sequelize.STRING
    },
    accords: {
        type: Sequelize.STRING
    }
});

module.exports = Wines;



