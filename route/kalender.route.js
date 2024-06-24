import express from 'express';
import { getKalender, insertKalender, updateKalender, deleteKalender, getKalenderById, getKalenderTest } from '../controller/kalender.controller.js'

const router = express.Router();

router.get('/kalender', getKalender);
router.post('/kalender', insertKalender);
router.put('/kalender/:id_kalender', updateKalender);
router.delete('/kalender/:id_kalender', deleteKalender);
router.get('/kalender/:id_kalender', getKalenderById);
router.get('/kalender/test', getKalenderTest);  // Route baru untuk getKalenderTest

export default router;
