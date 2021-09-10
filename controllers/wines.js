const models = require('../models/index');
const fs = require('fs');

// Create Wine
exports.createWine = (req, res) => {
    // Empty Inputs
    if (req.body.domaine === "" || req.body.appellation === "" || req.body.millesime === "" || req.body.pays === "" || req.body.region === "" || req.body.couleur === "" || req.body.viticulture === "" || req.body.alcool === "" || req.body.format === "" || req.body.prix === "" || req.body.description === "" || req.body.EAN === "" || req.body.promo === "") {
        return res.status(400).json({ message: "Merci de renseigner tous les Champs Obligatoires"});
    }
    models.Wines.create({
        domaine: req.body.domaine,
        appellation: req.body.appellation,
        millesime: req.body.millesime,
        pays: req.body.pays,
        region: req.body.region,
        couleur: req.body.couleur,
        cepage: req.body.cepage,
        viticulture: req.body.viticulture,
        alcool: req.body.alcool,
        format: req.body.format,
        prix: req.body.prix,
        description: req.body.description,
        EAN: req.body.EAN,
        oeil: req.body.oeil,
        nez: req.body.nez,
        bouche: req.body.bouche,
        gouts: req.body.gouts,
        temperature: req.body.temperature,
        conservation: req.body.conservation,
        accords: req.body.accords,
        promo: req.body.promo,
        imageUrl: req.file ? 
        `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        :null
    })
    .then(() => res.status(201).json(req.body))
    .catch(error => res.status(400).json({ error }));    
};

// Edit Wine
exports.modifyWine = async (req, res) => {   
    // Empty Inputs
    if (req.body.domaine === "" || req.body.appellation === "" || req.body.millesime === "" || req.body.pays === "" || req.body.region === "" || req.body.couleur === "" || req.body.viticulture === "" || req.body.alcool === "" || req.body.format === "" || req.body.prix === "" || req.body.description === "" || req.body.EAN === "" || req.body.promo === "") {
        return res.status(400).json({ message: "Merci de renseigner tous les Champs Obligatoires"});
    }
    const wine = await models.Wines.findOne({
        where: { id: req.params.id }
    })
    await wine.update(
        {
        domaine: req.body.domaine,
        appellation: req.body.appellation,
        millesime: req.body.millesime,
        pays: req.body.pays,
        region: req.body.region,
        couleur: req.body.couleur,
        cepage: req.body.cepage,
        viticulture: req.body.viticulture,
        alcool: req.body.alcool,
        format: req.body.format,
        prix: req.body.prix,
        description: req.body.description,
        EAN: req.body.EAN,
        oeil: req.body.oeil,
        nez: req.body.nez,
        bouche: req.body.bouche,
        gouts: req.body.gouts,
        temperature: req.body.temperature,
        conservation: req.body.conservation,
        accords: req.body.accords,
        promo: req.body.promo,
        imageUrl: req.file ? 
        `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        :null
        }
    )
    .then(() => res.status(200).json({ message: 'Produit modifié' }))
    .catch(error => res.status(400).json({ error }));       
};

// Delete Wine
exports.deleteWine = (req, res) => {
    models.Wines.findOne({ where: { id: req.params.id } })
        .then(wine => {
            let filename = wine.imageUrl.split('/images/')[1];
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
    models.Wines.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Produit supprimé' }))
        .catch(error => res.status(400).json({ error }));
};

// Get One Wine
exports.getOneWine = (req, res) => {
    models.Wines.findOne({
        where: { id: req.params.id }})
    .then(wine => res.status(200).json(wine))
    .catch(error => res.status(404).json({ error }));
};

exports.getOneWineByEAN = (req, res) => {
    models.Wines.findOne({
        where: { EAN: req.params.EAN }})
    .then(wine => res.status(200).json(wine))
    .catch(error => res.status(404).json({ error }));
};

// Get All Wines
exports.getAllWines = (req, res) => {
    models.Wines.findAll({
        order: [['domaine', 'ASC']],
    })
        .then((wines) => {res.send(wines)})
        .catch(error => res.status(400).json({ error }));
};

//