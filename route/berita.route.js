import express from 'express';
import { getBerita, insertBerita, updateBerita, deleteBerita, getBeritaById, getBeritaTest } from '../controller/berita.controller.js'

const router = express.Router();

router.get('/berita', getBerita);
router.post('/berita', insertBerita);
router.put('/berita/:id_berita', updateBerita);
router.delete('/berita/:id_berita', deleteBerita);
router.get('/berita/:id_berita', getBeritaById);
router.get('/berita/test', getBeritaTest);  // Route baru untuk getBeritaTest

export default router;
