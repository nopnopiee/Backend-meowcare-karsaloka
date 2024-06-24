import { query } from "../database/db.js";

export const getPengiriman = async (req, res) => {
    try {
        const result = await query('SELECT * FROM pengiriman');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertPengiriman = async (req, res) => {
    const { id_pengiriman, nama_pengiriman } = req.body;
    try {
        await query("INSERT INTO pengiriman(id_pengiriman, nama_pengiriman) VALUES (?, ?)", [id_pengiriman, nama_pengiriman]);
        return res.status(200).json({ msg: "pengiriman ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updatePengiriman = async (req, res) => {
    const { nama_pengiriman } = req.body;
    const { id_pengiriman } = req.params;
    try {
        await query("UPDATE pengiriman SET nama_pengiriman = ? WHERE id_pengiriman = ?", [nama_pengiriman, id_pengiriman]);
        return res.status(200).json({ msg: "pengiriman diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deletePengiriman = async (req, res) => {
    const { id_pengiriman } = req.params;
    try {
        await query("DELETE FROM pengiriman WHERE id_pengiriman = ?", [id_pengiriman]);
        return res.status(200).json({ msg: "pengiriman dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getPengirimanById = async (req, res) => {
    const { id_pengiriman } = req.params;
    try {
        const result = await query('SELECT * FROM pengiriman WHERE id_pengiriman = ?', [id_pengiriman]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getPengirimanTest = async (req, res) => {
    const { id_pengiriman, nama_pengiriman } = req.query;
    console.log(id_pengiriman, nama_pengiriman);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM pengiriman WHERE id_pengiriman = ? AND nama_pengiriman = ?', [id_pengiriman, nama_pengiriman]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
