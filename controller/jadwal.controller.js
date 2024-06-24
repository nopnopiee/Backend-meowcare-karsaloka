import { query } from "../database/db.js";

// Mendapatkan semua data pelanggan
export const getJadwal = async (req, res) => {
    try {
        const result = await query('SELECT * FROM jadwal');
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Menambahkan data pelanggan baru
export const insertJadwal = async (req, res) => {
    const { id_jadwal, tanggal, id_customer, id_dokter, id_vaksin } = req.body;
    try {
        // Validasi id_ras dan id_jenis_kelamin
        const customerExists = await query("SELECT id_customer FROM customer WHERE id_customer = ?", [id_customer]);
        const dokterExists = await query("SELECT id_dokter FROM dokter WHERE id_dokter = ?", [id_dokter]);
        const vaksinExists = await query("SELECT id_vaksin FROM vaksin WHERE id_vaksin = ?", [id_vaksin]);
        
        if (!customerExists || !dokterExists || !vaksinExists) {
            return res.status(400).json({ msg: "ID ras atau ID jenis kelamin atau id vaksin tidak valid" });
        }

        await query("INSERT INTO jadwal (id_jadwal, tanggal, id_customer, id_dokter, id_vaksin) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [id_jadwal, tanggal, id_customer, id_dokter, id_vaksin]);

        return res.status(200).json({ msg: "Data jadwal ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Menghapus data pelanggan
export const deleteJadwal = async (req, res) => {
    const { id_jadwal } = req.params;
    try {
        await query("DELETE FROM jadwal WHERE id_jadwal = ?", [id_jadwal]);
        return res.status(200).json({ msg: "Data jadwal dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mengupdate data pelanggan
export const updateJadwal = async (req, res) => {
    const { id_jadwal } = req.params;
    const { tanggal, id_customer, id_dokter, id_vaksin } = req.body;
    try {
        // Validasi id_ras dan id_jenis_kelamin
        const customerExists = await query("SELECT id_customer FROM customer WHERE id_customer = ?", [id_customer]);
        const dokterExists = await query("SELECT id_dokter FROM dokter WHERE id_dokter = ?", [id_dokter]);
        const vaksinExists = await query("SELECT id_vaksin FROM dokter WHERE id_vaksin = ?", [id_vaksin]);
        
        if (!customerExists || !dokterExists || !vaksinExists) {
            return res.status(400).json({ msg: "ID ras atau ID jenis kelamin atau id vaksin tidak valid" });
        }

        await query("UPDATE jadwal SET tanggal = ?, id_customer = ?, id_dokter = ?, id_vaksin = ?, WHERE id_jadwal = ?",
            [tanggal, id_customer, id_dokter, id_vaksin, id_jadwal]);

        return res.status(200).json({ msg: "Data jadwal diperbarui" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mendapatkan data pelanggan berdasarkan ID
export const getJadwalById = async (req, res) => {
    const { id_jadwal } = req.params;
    try {
        const result = await query('SELECT * FROM jadwal WHERE id_jadwal = ?', [id_jadwal]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mendapatkan data pelanggan untuk pengujian
export const getJadwalTest = async (req, res) => {
    const { id_jadwal, tanggal } = req.query;
    console.log(id_jadwal, tanggal);
    console.log("GET jadwal TEST");
    try {
        const result = await query('SELECT * FROM jadwal WHERE id_jadwal = ? AND tanggal = ?', [id_jadwal, tanggal]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
