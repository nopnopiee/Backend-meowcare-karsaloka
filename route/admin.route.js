import express from 'express'
import { deleteAdmin, getAdmin, getAdminById, getAdminTest, insertAdmin, updateAdmin } from '../controller/admin.controller.js'

const router = express.Router()

router.get('/admin', getAdmin)
router.get('/admin/:id_admin', getAdminById)
router.get('/adminfilter', getAdminTest)
router.post('/admin', insertAdmin)
router.put('/admin/:id_admin', updateAdmin)
router.delete('/admin/:id_admin', deleteAdmin)


export default router
