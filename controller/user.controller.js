import { query } from "../database/db.js";

export const getUser = async (req, res) => {
    try {
        const result = await query('SELECT * FROM User');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertUser = async (req, res) => {
    const { username } = req.body;
    try {
        await query("INSERT INTO User(username) VALUES (?)", [username]);
        return res.status(200).json({ msg: "User ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateUser = async (req, res) => {
    const { username } = req.body;
    const { id_User } = req.params;
    try {
        await query("UPDATE User SET username = ? WHERE id_User = ?", [username, id_User]);
        return res.status(200).json({ msg: "User diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteUser = async (req, res) => {
    const { id_User } = req.params;
    try {
        await query("DELETE FROM User WHERE id_User = ?", [id_User]);
        return res.status(200).json({ msg: "User dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getUserById = async (req, res) => {
    const { id_User } = req.params;
    try {
        const result = await query('SELECT * FROM User WHERE id_User = ?', [id_User]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getUserTest = async (req, res) => {
    const { id_User, username } = req.query;
    console.log(id_User, username);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM User WHERE id_User = ? AND username = ?', [id_User, username]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
