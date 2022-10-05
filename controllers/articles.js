const db = require('../models');

const Article = db.articles;
// const article = db.articles;

const addArticle = async(req, res)=>{
    let art  = { 
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        image: req.body.image,
        categoryId: req.body.categoryId
    };
    
    const article = await Article.create(art)
    res.status(200).send(article)
}

const getAllArticles = async (req, res) =>{
    let articles = await Article.findAll({}) 
    
    res.status(200).send(articles)
}

const getOneArticle = async (req, res) =>{
    let id = req.params.id
    let article = await Article.findOne({ where: {id: id}}) 
    
    res.status(200).send(article)
}

const updateArticles = async(req, res)=>{
    let  id = req.params.id
    const article = await Article.update(req.body, {where: {id: id}})
    res.status(200).send(article)
}

const deleteArticle = async(req,res)=>{
    let id = req.params.id

    await Article.destroy({ where: { id : id}})

    res.status(200).send('article is deleted')
}

module.exports = {
    addArticle,
    getAllArticles,
    getOneArticle,
    updateArticles,
    deleteArticle 
}