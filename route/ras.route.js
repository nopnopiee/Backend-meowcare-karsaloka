import express from 'express'
import { deleteRas, getRas, getRasById, getRasTest, insertRas, updateRas } from '../controller/ras.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/ras', getRas)
router.get('/Ras/:id_ras', getRasById)
router.get('/rasfilter', getRasTest)
router.post('/ras', insertRas)
router.put('/ras/:id_ras', updateRas)
router.delete('/ras/:id_ras', deleteRas)


export default router
