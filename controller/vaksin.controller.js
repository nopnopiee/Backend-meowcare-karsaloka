import { query } from "../database/db.js";

export const getVaksin = async (req, res) => {
    try {
        const result = await query('SELECT * FROM vaksin');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertVaksin = async (req, res) => {
    const { id_vaksin, nama_vaksin } = req.body;
    try {
        await query("INSERT INTO vaksin(id_vaksin, nama_vaksin) VALUES (?, ?)", [id_vaksin, nama_vaksin]);
        return res.status(200).json({ msg: "vaksin ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateVaksin = async (req, res) => {
    const { nama_vaksin } = req.body;
    const { id_vaksin } = req.params;
    try {
        await query("UPDATE vaksin SET nama_vaksin = ? WHERE id_vaksin = ?", [nama_vaksin, id_vaksin]);
        return res.status(200).json({ msg: "vaksin diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteVaksin = async (req, res) => {
    const { id_vaksin } = req.params;
    try {
        await query("DELETE FROM vaksin WHERE id_vaksin = ?", [id_vaksin]);
        return res.status(200).json({ msg: "vaksin dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getVaksinById = async (req, res) => {
    const { id_vaksin } = req.params;
    try {
        const result = await query('SELECT * FROM vaksin WHERE id_vaksin = ?', [id_vaksin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getVaksinTest = async (req, res) => {
    const { id_vaksin, nama_vaksin } = req.query;
    console.log(id_vaksin, nama_vaksin);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM vaksin WHERE id_vaksin = ? AND nama_vaksin = ?', [id_vaksin, nama_vaksin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
