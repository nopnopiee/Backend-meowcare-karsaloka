import express from 'express'
import { deleteVaksin, getVaksin, getVaksinById, getVaksinTest, insertVaksin, updateVaksin } from '../controller/vaksin.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/vaksin', getVaksin)
router.get('/vaksin/:id_vaksin', getVaksinById)
router.get('/vaksinfilter', getVaksinTest)
router.post('/vaksin', insertVaksin)
router.put('/vaksin/:id_vaksin', updateVaksin)
router.delete('/vaksin/:id_vaksin', deleteVaksin)


export default router
