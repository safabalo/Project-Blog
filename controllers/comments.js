const db = require('../models');

const Comment = db.comments;

const addComment = async(req, res)=>{
    let art  = { 
        emails: req.body.emails,
        description: req.body.description
    };
    
    const comment = await Comment.create(art)
    res.status(200).send(comment)
}

const getAllComments = async (req, res) =>{
    let comment = await Comment.findAll({}) 
    
    res.status(200).send(comment)
}

const getOneComment = async (req, res) =>{
    let id = req.params.id
    let article = await Comment.findOne({ where: {id: id}}) 
    
    res.status(200).send(article)
}

const updateComments = async(req, res)=>{
    let  id = req.params.id
    const comment = await Comment.update(req.body, {where: {id: id}})
    res.status(200).send(comment)
}

const deleteComment = async(req,res)=>{
    let id = req.params.id

    await Comment.destroy({ where: { id : id}})

    res.status(200).send('comment is deleted')
}

module.exports = {
    addComment,
    getAllComments,
    getOneComment,
    updateComments,
    deleteComment
}