const commentsController = require('../controllers/comments')

const router = require('express').Router()


router.post('/AddComment', commentsController.addComment)

router.get('/:id', commentsController.getOneComment)

router.put('/:id', commentsController.updateComments)

router.delete('/:id', commentsController.deleteComment)

module.exports = router