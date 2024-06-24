import express from 'express'
import { deleteJenisKelamin, getJenisKelamin, getJenisKelaminById, getJenisKelaminTest, insertJenisKelamin, updateJenisKelamin } from '../controller/jeniskelamin.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/jeniskelamin', getJenisKelamin)
router.get('/jeniskelamin/:id_jenis_kelamin', getJenisKelaminById)
router.get('/jeniskelaminfilter', getJenisKelaminTest)
router.post('/jeniskelamin', insertJenisKelamin)
router.put('/jeniskelamin/:id_jenis_kelamin', updateJenisKelamin)
router.delete('/jeniskelamin/:id_jenis_kelamin', deleteJenisKelamin)


export default router
