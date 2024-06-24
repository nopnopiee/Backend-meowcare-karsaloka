import express from 'express';
import { getProduk, insertProduk, updateProduk, deleteProduk, getProdukById, getProdukTest } from '../controller/produk.controller.js'

const router = express.Router();

router.get('/produk', getProduk);
router.post('/produk', insertProduk);
router.put('/produk/:id_produk', updateProduk);
router.delete('/produk/:id_produk', deleteProduk);
router.get('/produk/:id_produk', getProdukById);
router.get('/produk/test', getProdukTest);  // Route baru untuk getProdukTest

export default router;
