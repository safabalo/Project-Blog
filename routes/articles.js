const articlesController = require('../controllers/articles')
const router = require('express').Router()

router.post('/addArticle', articlesController.addArticle)

router.get('/', articlesController.getAllArticles)

router.get('/:id', articlesController.getOneArticle)

router.put('/:id', articlesController.updateArticles)

router.delete('/:id', articlesController.deleteArticle)

module.exports = router