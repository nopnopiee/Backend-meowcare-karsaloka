import express from 'express'
import { deletePengiriman, getPengiriman, getPengirimanById, getPengirimanTest, insertPengiriman, updatePengiriman } from '../controller/pengiriman.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/pengiriman', getPengiriman)
router.get('/pengiriman/:id_pengiriman', getPengirimanById)
router.get('/pengirimanfilter', getPengirimanTest)
router.post('/pengiriman', insertPengiriman)
router.put('/pengiriman/:id_pengiriman', updatePengiriman)
router.delete('/pengiriman/:id_pengiriman', deletePengiriman)


export default router
