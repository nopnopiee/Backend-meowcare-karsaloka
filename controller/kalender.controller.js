import { query } from "../database/db.js";

export const getKalender = async (req, res) => {
    try {
        const result = await query('SELECT * FROM kalender');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const insertKalender = async (req, res) => {
    const { id_kalender, id_jadwal } = req.body;
    try {
        // Validasi id_jadwal ada di tabel jadwal
        const [jadwal] = await query("SELECT id_jadwal FROM jadwal WHERE id_jadwal = ?", [id_jadwal]);
        if (!jadwal) {
            return res.status(400).json({ msg: "ID jadwal tidak valid" });
        }

        await query("INSERT INTO kalender (id_kalender, id_jadwal) VALUES (?, ?)", [id_kalender, id_jadwal]);
        return res.status(200).json({ msg: "kalender ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateKalender = async (req, res) => {
    const { id_jadwal } = req.body;
    const { id_kalender } = req.params;
    try {
        // Validasi id_jadwal ada di tabel jadwal jika disertakan
        if (id_jadwal) {
            const [jadwal] = await query("SELECT id_jadwal FROM jadwal WHERE id_jadwal = ?", [id_jadwal]);
            if (!jadwal) {
                return res.status(400).json({ msg: "ID jadwal tidak valid" });
            }
        }

        await query("UPDATE kalender SET id_jadwal = ? WHERE id_kalender = ?", [id_jadwal, id_kalender]);
        return res.status(200).json({ msg: "kalender diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteKalender = async (req, res) => {
    const { id_kalender } = req.params;
    try {
        await query("DELETE FROM kalender WHERE id_kalender = ?", [id_kalender]);
        return res.status(200).json({ msg: "kalender dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getKalenderById = async (req, res) => {
    const { id_kalender } = req.params;
    try {
        const result = await query('SELECT * FROM kalender WHERE id_kalender = ?', [id_kalender]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getKalenderTest = async (req, res) => {
    const { id_kalender } = req.query;
    console.log(id_kalender, judul_kalender);
    console.log("TERPANGGIL");
    try {
        const result = await query('SELECT * FROM kalender WHERE id_kalender = ?' , [id_kalender]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
