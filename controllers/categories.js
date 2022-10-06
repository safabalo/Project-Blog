const ejs = require('ejs');
const db = require('../models');

const Categorie = db.categories;
// const article = db.articles;
const getViewCategorie = (req, res)=>{
    res.render('addCategorie')
}
    

const addCategorie = async(req, res)=>{
    let categ  = { 
        title: req.body.title
    };

    const categorie = await Categorie.create(categ)
    res.status(200).send(categorie)
}


const getAllCategories = async (req, res) =>{
    let titles = await Categorie.findAll({}) 
    
    res.render('table', {
        categories: titles
    })
}

const getOneCategorie = async (req, res) =>{
    let id = req.params.id
    let Onecategory = await Categorie.findOne({ where: {id: id}}) 
    
    res.render('updateCategorie',{
        categorie: Onecategory
    }) 
}

const updateCategories = async(req, res)=>{
    let  id = req.params.id
    const categorie = await Categorie.update(req.body, {where: {id: id}})
    res.status(200).send(categorie)
}
const getOneDeleteCategorie = async (req, res) =>{
    let id = req.params.id
    let Onecategory = await Categorie.findOne({ where: {id: id}}) 
    
    res.render('deleteCategorie',{
        categorie: Onecategory
    })

    
}
const deleteCategorie = async(req,res)=>{
    let id = req.params.id

    await Categorie.destroy({ where: { id : id}})

    res.status(200).redirect('/')

}

module.exports = {
    getViewCategorie,
    addCategorie,
    getAllCategories,
    getOneCategorie,
    updateCategories,
    getOneDeleteCategorie,
    deleteCategorie 
}