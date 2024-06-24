import express from 'express';
import { getJadwal, insertJadwal, updateJadwal, deleteJadwal, getJadwalById, getJadwalTest } from '../controller/jadwal.controller.js'

const router = express.Router();

router.get('/jadwal', getJadwal);
router.post('/jadwal', insertJadwal);
router.put('/jadwal/:id_jadwal', updateJadwal);
router.delete('/jadwal/:id_jadwal', deleteJadwal);
router.get('/jadwal/:id_jadwal', getJadwalById);
router.get('/jadwal/test', getJadwalTest);  // Route baru untuk getJadwalTest

export default router;
