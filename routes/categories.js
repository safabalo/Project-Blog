const categoriesController = require('../controllers/categories')

const router = require('express').Router()

router.post('/addCategorie', categoriesController.addCategorie)

router.get('/', categoriesController.getAllCategories)

router.get('/:id', categoriesController.getOneCategorie)

router.put('/:id', categoriesController.updateCategories)

router.delete('/:id', categoriesController.deleteCategorie)

module.exports = router