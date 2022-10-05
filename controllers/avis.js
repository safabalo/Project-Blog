const db = require('../models');

const Avis = db.avis;
// const article = db.articles;

const addAvis = async(req, res)=>{
    let av  = { 
        avis: req.body.avis
    };
    
    const avis = await Avis.create(av)
    res.status(200).send(avis)
}

const getAllAvis = async (req, res) =>{
    let avis = await Avis.findAll({}) 
    
    res.status(200).send(avis)
}

const getOneAvis = async (req, res) =>{
    let id = req.params.id
    let avis = await Avis.findOne({ where: {id: id}}) 
    
    res.status(200).send(avis)
}

const updateAvis = async(req, res)=>{
    let  id = req.params.id
    const avis = await Avis.update(req.body, {where: {id: id}})
    res.status(200).send(avis)
}

const deleteAvis = async(req,res)=>{
    let id = req.params.id

    await Avis.destroy({ where: { id : id}})

    res.status(200).send('avis is deleted')
}

module.exports = {
    addAvis,
    getAllAvis,
    getOneAvis,
    updateAvis,
    deleteAvis 
}