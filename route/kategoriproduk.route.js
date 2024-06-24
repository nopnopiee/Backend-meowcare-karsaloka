import express from 'express'
import { deleteKategoriProduk, getKategoriProduk, getKategoriProdukById, getKategoriProdukTest, insertKategoriProduk, updateKategoriProduk } from '../controller/kategoriproduk.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/kategoriproduk', getKategoriProduk)
router.get('/kategoriproduk/:id_kategori_produk', getKategoriProdukById)
router.get('/kategoriprodukfilter', getKategoriProdukTest)
router.post('/kategoriproduk', insertKategoriProduk)
router.put('/kategoriproduk/:id_kategori_produk', updateKategoriProduk)
router.delete('/kategoriproduk/:id_kategori_produk', deleteKategoriProduk)


export default router
