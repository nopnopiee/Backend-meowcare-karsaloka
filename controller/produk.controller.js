import { query } from "../database/db.js";

export const getProduk = async (req, res) => {
    try {
        const result = await query('SELECT * FROM produk');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertProduk = async (req, res) => {
    const { id_produk, nama_produk, deskripsi_produk, harga_produk, img_produk, id_kategori_produk } = req.body;
    try {
        // Validasi id_kategori ada di tabel kategori
        const [kategori] = await query("SELECT id_kategori_produk FROM kategoriproduk WHERE id_kategori_produk = ?", [id_kategori_produk]);
        if (!kategori) {
            return res.status(400).json({ msg: "ID kategori produk tidak valid" });
        }

        await query("INSERT INTO produk (id_produk, nama_produk, deskripsi_produk, harga_produk, img_produk, id_kategori_produk) VALUES (?, ?, ?, ?, ?)", [id_produk, nama_produk, deskripsi_produk, harga_produk, img_produk, id_kategori_produk]);
        return res.status(200).json({ msg: "produk ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateProduk = async (req, res) => {
    const { nama_produk, deskripsi_produk, harga_produk, img_produk, id_kategori_produk } = req.body;
    const { id_produk } = req.params;
    try {
        // Validasi id_kategori ada di tabel kategori jika disertakan
        if (id_kategori_produk) {
            const [kategoriproduk] = await query("SELECT id_kategori_produk FROM kategoriproduk WHERE id_kategori_produk = ?", [id_kategori_produk]);
            if (!kategoriproduk) {
                return res.status(400).json({ msg: "ID kategori tidak valid" });
            }
        }

        await query("UPDATE produk SET nama_produk = ?, deskripsi_produk = ?, harga_produk = ?, img_produk = ?, id_kategori_produk = ? WHERE id_produk = ?", [nama_produk, deskripsi_produk, harga_produk, img_produk, id_kategori_produk, id_produk]);
        return res.status(200).json({ msg: "produk diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteProduk = async (req, res) => {
    const { id_produk } = req.params;
    try {
        await query("DELETE FROM produk WHERE id_produk = ?", [id_produk]);
        return res.status(200).json({ msg: "produk dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getProdukById = async (req, res) => {
    const { id_produk } = req.params;
    try {
        const result = await query('SELECT * FROM produk WHERE id_produk = ?', [id_produk]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getProdukTest = async (req, res) => {
    const { id_produk, nama_produk } = req.query;
    console.log(id_produk, nama_produk);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM produk WHERE id_produk = ? AND nama_produk = ?', [id_produk, nama_produk]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
