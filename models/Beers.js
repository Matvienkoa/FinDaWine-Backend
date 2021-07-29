const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../config/config');

const Beers = db.define('beer', {
    name: {
        type: Sequelize.STRING
    },
    brewery: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    alcool: {
        type: Sequelize.DECIMAL
    },
    format: {
        type: Sequelize.DECIMAL
    },
    price: {
        type: Sequelize.DECIMAL
    },
    EAN: {
        type: Sequelize.INTEGER,
        unique: 'EAN'
    },
    imageUrl: {
        type: Sequelize.STRING
    },
    bitterness: {
        type: Sequelize.INTEGER
    },
    color: {
        type: STRING
    }
});

module.exports = Beers;



