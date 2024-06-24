import { query } from "../database/db.js";

export const getBerita = async (req, res) => {
    try {
        const result = await query('SELECT * FROM berita');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertBerita = async (req, res) => {
    const { id_berita, judul_berita, isi_berita, img_berita, id_admin } = req.body;
    try {
        // Validasi id_admin ada di tabel admin
        const [admin] = await query("SELECT id_admin FROM admin WHERE id_admin = ?", [id_admin]);
        if (!admin) {
            return res.status(400).json({ msg: "ID admin tidak valid" });
        }

        await query("INSERT INTO berita (id_berita, judul_berita, isi_berita, img_berita, id_admin) VALUES (?, ?, ?, ?, ?)", [id_berita, judul_berita, isi_berita, img_berita, id_admin]);
        return res.status(200).json({ msg: "Berita ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateBerita = async (req, res) => {
    const { judul_berita, isi_berita, img_berita, id_admin } = req.body;
    const { id_berita } = req.params;
    try {
        // Validasi id_admin ada di tabel admin jika disertakan
        if (id_admin) {
            const [admin] = await query("SELECT id_admin FROM admin WHERE id_admin = ?", [id_admin]);
            if (!admin) {
                return res.status(400).json({ msg: "ID admin tidak valid" });
            }
        }

        await query("UPDATE berita SET judul_berita = ?, isi_berita = ?, img_berita = ?, id_admin = ? WHERE id_berita = ?", [judul_berita, isi_berita, img_berita, id_admin, id_berita]);
        return res.status(200).json({ msg: "Berita diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteBerita = async (req, res) => {
    const { id_berita } = req.params;
    try {
        await query("DELETE FROM berita WHERE id_berita = ?", [id_berita]);
        return res.status(200).json({ msg: "Berita dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getBeritaById = async (req, res) => {
    const { id_berita } = req.params;
    try {
        const result = await query('SELECT * FROM berita WHERE id_berita = ?', [id_berita]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getBeritaTest = async (req, res) => {
    const { id_berita, judul_berita } = req.query;
    console.log(id_berita, judul_berita);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM berita WHERE id_berita = ? AND judul_berita = ?', [id_berita, judul_berita]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
