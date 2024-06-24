import { query } from "../database/db.js";

export const getKategoriProduk = async (req, res) => {
    try {
        const result = await query('SELECT * FROM kategoriproduk');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertKategoriProduk = async (req, res) => {
    const { id_kategori_produk, kategori_produk } = req.body;
    try {
        await query("INSERT INTO kategoriproduk(id_kategori_produk, kategori_produk) VALUES (?, ?)", [id_kategori_produk, kategori_produk]);
        return res.status(200).json({ msg: "kategori produk ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateKategoriProduk = async (req, res) => {
    const { kategori_produk } = req.body;
    const { id_kategori_produk } = req.params;
    try {
        await query("UPDATE kategoriproduk SET kategori_produk = ? WHERE id_kategori_produk = ?", [kategori_produk, id_kategori_produk]);
        return res.status(200).json({ msg: "kategori produk diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteKategoriProduk = async (req, res) => {
    const { id_kategori_produk } = req.params;
    try {
        await query("DELETE FROM kategoriproduk WHERE id_kategori_produk = ?", [id_kategori_produk]);
        return res.status(200).json({ msg: "kategori produk dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getKategoriProdukById = async (req, res) => {
    const { id_kategori_produk } = req.params;
    try {
        const result = await query('SELECT * FROM kategoriproduk WHERE id_kategori_produk = ?', [id_kategori_produk]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getKategoriProdukTest = async (req, res) => {
    const { id_kategori_produk, kategori_produk } = req.query;
    console.log(id_kategori_produk, kategori_produk);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM kategoriproduk WHERE id_kategori_produk = ? AND kategori_produk = ?', [id_kategori_produk, kategori_produk]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
