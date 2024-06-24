import { query } from "../database/db.js";

export const getRas = async (req, res) => {
    try {
        const result = await query('SELECT * FROM ras');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertRas = async (req, res) => {
    const { id_ras, nama_ras } = req.body;
    try {
        await query("INSERT INTO ras(id_ras, nama_ras) VALUES (?, ?)", [id_ras, nama_ras]);
        return res.status(200).json({ msg: "ras ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateRas = async (req, res) => {
    const { nama_ras } = req.body;
    const { id_ras } = req.params;
    try {
        await query("UPDATE ras SET nama_ras = ? WHERE id_ras = ?", [nama_ras, id_ras]);
        return res.status(200).json({ msg: "ras diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteRas = async (req, res) => {
    const { id_ras } = req.params;
    try {
        await query("DELETE FROM ras WHERE id_ras = ?", [id_ras]);
        return res.status(200).json({ msg: "ras dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getRasById = async (req, res) => {
    const { id_ras } = req.params;
    try {
        const result = await query('SELECT * FROM ras WHERE id_ras = ?', [id_ras]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getRasTest = async (req, res) => {
    const { id_ras, nama_ras } = req.query;
    console.log(id_ras, nama_ras);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM ras WHERE id_ras = ? AND nama_ras = ?', [id_ras, nama_ras]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
