const db = require('../models');

const Categorie = db.categories;
// const article = db.articles;

const addCategorie = async(req, res)=>{
    let categ  = { 
        title: req.body.title
    };
    
    const categorie = await Categorie.create(categ)
    res.status(200).send(categorie)
}

const getAllCategories = async (req, res) =>{
    let categories = await Categorie.findAll({}) 
    
    res.status(200).send(categories)
}

const getOneCategorie = async (req, res) =>{
    let id = req.params.id
    let categorie = await Categorie.findOne({ where: {id: id}}) 
    
    res.status(200).send(categorie)
}

const updateCategories = async(req, res)=>{
    let  id = req.params.id
    const categorie = await Categorie.update(req.body, {where: {id: id}})
    res.status(200).send(categorie)
}

const deleteCategorie = async(req,res)=>{
    let id = req.params.id

    await Categorie.destroy({ where: { id : id}})

    res.status(200).send('Product is deleted')
}

module.exports = {
    addCategorie,
    getAllCategories,
    getOneCategorie,
    updateCategories,
    deleteCategorie 
}