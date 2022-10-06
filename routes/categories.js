const categoriesController = require('../controllers/categories')

const express = require('express')
const app = express.Router();

app.get('/addCategorie', categoriesController.getViewCategorie)

app.post('/addCategorie', categoriesController.addCategorie)

app.get('/', categoriesController.getAllCategories)

app.get('/updateCategorie/:id', categoriesController.getOneCategorie)

app.post('/updateCategorie/:id', categoriesController.updateCategories)

app.get('/deleteCategorie/:id', categoriesController.getOneDeleteCategorie)

app.post('/deleteCategorie/:id', categoriesController.deleteCategorie)

module.exports = app