import express from 'express'
import { deleteDokter, getDokter, getDokterById, getDokterTest, insertDokter, updateDokter } from '../controller/dokter.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/dokter', getDokter)
router.get('/dokter/:id_dokter', getDokterById)
router.get('/dokterfilter', getDokterTest)
router.post('/dokter', insertDokter)
router.put('/dokter/:id_dokter', updateDokter)
router.delete('/dokter/:id_dokter', deleteDokter)


export default router
