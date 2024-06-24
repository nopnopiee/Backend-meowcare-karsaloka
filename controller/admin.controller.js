import { query } from "../database/db.js";

export const getAdmin = async (req, res) => {
    try {
        const result = await query('SELECT * FROM admin');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertAdmin = async (req, res) => {
    const { nama_admin } = req.body;
    try {
        await query("INSERT INTO admin(nama_admin) VALUES (?)", [nama_admin]);
        return res.status(200).json({ msg: "Admin ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateAdmin = async (req, res) => {
    const { nama_admin } = req.body;
    const { id_admin } = req.params;
    try {
        await query("UPDATE admin SET nama_admin = ? WHERE id_admin = ?", [nama_admin, id_admin]);
        return res.status(200).json({ msg: "Admin diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteAdmin = async (req, res) => {
    const { id_admin } = req.params;
    try {
        await query("DELETE FROM admin WHERE id_admin = ?", [id_admin]);
        return res.status(200).json({ msg: "Admin dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getAdminById = async (req, res) => {
    const { id_admin } = req.params;
    try {
        const result = await query('SELECT * FROM admin WHERE id_admin = ?', [id_admin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getAdminTest = async (req, res) => {
    const { id_admin, nama_admin } = req.query;
    console.log(id_admin, nama_admin);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM admin WHERE id_admin = ? AND nama_admin = ?', [id_admin, nama_admin]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
