const models = require('../models/index');
const fs = require('fs');

// Create Beer
exports.createBeer = (req, res) => {
    // Empty Inputs
    if (req.body.name === "" || req.body.brewery === "" || req.body.type === "" || req.body.description === "" || req.body.country === "" || req.body.alcool === "" || req.body.format === "" || req.body.EAN === "" || req.body.color === "" || req.body.price === "") {
        return res.status(400).json({ message: "Merci de renseigner tous les Champs Obligatoires"});
    }
    models.Beers.create({
        name: req.body.name,
        brewery: req.body.brewery,
        type: req.body.type,
        description: req.body.description,
        country: req.body.country,
        alcool: req.body.alcool,
        format: req.body.format,
        EAN: req.body.EAN,
        price: req.body.price,
        bitterness: req.body.bitterness,
        color: req.body.color,
        imageUrl: req.file ? 
        `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        :null
    })
    .then(() => res.status(201).json(req.body))
    .catch(error => res.status(400).json({ error }));    
};

// Edit Beer
exports.modifyBeer = async (req, res) => {   
    // Empty Inputs
    if (req.body.name === "" || req.body.brewery === "" || req.body.type === "" || req.body.description === "" || req.body.country === "" || req.body.alcool === "" || req.body.format === "" || req.body.EAN === "" || req.body.color === "" || req.body.price === "") {
        return res.status(400).json({ message: "Merci de renseigner tous les Champs Obligatoires"});
    }
    const beer = await models.Beers.findOne({
        where: { id: req.params.id }
    })
    await beer.update(
        {
            name: req.body.name,
            brewery: req.body.brewery,
            type: req.body.type,
            description: req.body.description,
            country: req.body.country,
            alcool: req.body.alcool,
            format: req.body.format,
            EAN: req.body.EAN,
            price: req.body.price,
            bitterness: req.body.bitterness,
            color: req.body.color,
            imageUrl: req.file ? 
            `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            :null
        }
    )
    .then(() => res.status(200).json({ message: 'Produit modifié' }))
    .catch(error => res.status(400).json({ error }));       
};

// Delete Beer
exports.deleteBeer = (req, res) => {
    models.Beers.findOne({ where: { id: req.params.id } })
        .then(beer => {
            let filename = beer.imageUrl.split('/images/')[1];
            if (filename !== undefined) {
                fs.unlink(`images/${filename}`,
                    function (err) {
                        if (err) {
                            console.log('error');
                        } else {
                            console.log('fichier supprimé');
                        }
                    },
                );
            }
        })
    models.Beers.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Produit supprimé' }))
        .catch(error => res.status(400).json({ error }));
};

// Get One Beer
exports.getOneBeer = (req, res) => {
    models.Beers.findOne({
        where: { id: req.params.id }})
    .then(beer => res.status(200).json(beer))
    .catch(error => res.status(404).json({ error }));
};

// Get All Beers
exports.getAllBeers = (req, res) => {
    models.Beers.findAll({
        order: [['name', 'ASC']],
    })
        .then((beers) => {res.send(beers)})
        .catch(error => res.status(400).json({ error }));
};

//