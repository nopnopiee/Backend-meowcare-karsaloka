import express from 'express'
import { deleteUser, getUser, getUserById, getUserTest, insertUser, updateUser } from '../controller/user.controller.js'
import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:id_user', getUserById)
router.get('/userfilter', getUserTest)
router.post('/user', insertUser)
router.put('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)


export default router
