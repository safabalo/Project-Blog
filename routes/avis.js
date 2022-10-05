const avisController = require('../controllers/avis')

const router = require('express').Router()


router.post('/addAvis', avisController.addAvis)

router.get('/:id', avisController.getOneAvis)

router.put('/:id', avisController.updateAvis)

router.delete('/:id', avisController.deleteAvis)

module.exports = router