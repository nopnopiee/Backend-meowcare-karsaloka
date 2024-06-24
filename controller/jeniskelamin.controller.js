import { query } from "../database/db.js";

export const getJenisKelamin = async (req, res) => {
    try {
        const result = await query('SELECT * FROM jeniskelamin');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertJenisKelamin = async (req, res) => {
    const { id_jenis_kelamin, jenis_kelamin } = req.body;
    try {
        await query("INSERT INTO jeniskelamin(id_jenis_kelamin, jenis_kelamin) VALUES (?, ?)", [id_jenis_kelamin, jenis_kelamin]);
        return res.status(200).json({ msg: "jenis kelamin ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateJenisKelamin = async (req, res) => {
    const { jenis_kelamin } = req.body;
    const { id_jenis_kelamin } = req.params;
    try {
        await query("UPDATE jeniskelamin SET jenis_kelamin = ? WHERE id_jenis_kelamin = ?", [jenis_kelamin, id_jenis_kelamin]);
        return res.status(200).json({ msg: "kategori produk diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteJenisKelamin = async (req, res) => {
    const { id_jenis_kelamin } = req.params;
    try {
        await query("DELETE FROM jeniskelamin WHERE id_jenis_kelamin = ?", [id_jenis_kelamin]);
        return res.status(200).json({ msg: "kategori produk dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getJenisKelaminById = async (req, res) => {
    const { id_jenis_kelamin } = req.params;
    try {
        const result = await query('SELECT * FROM jeniskelamin WHERE id_jenis_kelamin = ?', [id_jenis_kelamin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getJenisKelaminTest = async (req, res) => {
    const { id_jenis_kelamin, jenis_kelamin } = req.query;
    console.log(id_jenis_kelamin, jenis_kelamin);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM jeniskelamin WHERE id_jenis_kelamin = ? AND jenis_kelamin = ?', [id_jenis_kelamin, jenis_kelamin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
