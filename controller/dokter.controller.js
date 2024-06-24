import { query } from "../database/db.js";

export const getDokter = async (req, res) => {
    try {
        const result = await query('SELECT * FROM dokter');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertDokter = async (req, res) => {
    const { id_dokter, nama_dokter } = req.body;
    try {
        await query("INSERT INTO dokter(id_dokter, nama_dokter) VALUES (?, ?)", [id_dokter, nama_dokter]);
        return res.status(200).json({ msg: "dokter ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateDokter = async (req, res) => {
    const { nama_dokter } = req.body;
    const { id_dokter } = req.params;
    try {
        await query("UPDATE dokter SET nama_dokter = ? WHERE id_dokter = ?", [nama_dokter, id_dokter]);
        return res.status(200).json({ msg: "dokter diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteDokter = async (req, res) => {
    const { id_dokter } = req.params;
    try {
        await query("DELETE FROM dokter WHERE id_dokter = ?", [id_dokter]);
        return res.status(200).json({ msg: "dokter dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getDokterById = async (req, res) => {
    const { id_dokter } = req.params;
    try {
        const result = await query('SELECT * FROM dokter WHERE id_dokter = ?', [id_dokter]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getDokterTest = async (req, res) => {
    const { id_dokter, nama_dokter } = req.query;
    console.log(id_dokter, nama_dokter);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM dokter WHERE id_dokter = ? AND nama_dokter = ?', [id_dokter, nama_dokter]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
