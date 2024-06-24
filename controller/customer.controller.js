import { query } from "../database/db.js";

// Mendapatkan semua data pelanggan
export const getCustomer = async (req, res) => {
    try {
        const result = await query('SELECT * FROM customer');
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// app.get('/customers/:id', (req, res) => {
//     const { id } = req.params;
//     db.get("SELECT * FROM customers WHERE id = ?", [id], (err, row) => {
//         if (err) {
//         return res.status(400).json({ error: err.message });
//     }
//     res.json(row);
//     });
// });

// Menambahkan data pelanggan baru
export const insertCustomer = async (req, res) => {
    const { id_customer, nama_customer, no_telepon, alamat_customer, nama_kucing, warna_kucing, img_kucing, id_ras, id_jenis_kelamin } = req.body;
    try {
        // Validasi id_ras dan id_jenis_kelamin
        const rasExists = await query("SELECT id_ras FROM ras WHERE id_ras = ?", [id_ras]);
        const jenisKelaminExists = await query("SELECT id_jenis_kelamin FROM jeniskelamin WHERE id_jenis_kelamin = ?", [id_jenis_kelamin]);
        
        if (!rasExists || !jenisKelaminExists) {
            return res.status(400).json({ msg: "ID ras atau ID jenis kelamin tidak valid" });
        }

        await query("INSERT INTO customer (id_customer, nama_customer, no_telepon, alamat_customer, nama_kucing, warna_kucing, img_kucing, id_ras, id_jenis_kelamin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [id_customer, nama_customer, no_telepon, alamat_customer, nama_kucing, warna_kucing, img_kucing, id_ras, id_jenis_kelamin]);

        return res.status(200).json({ msg: "Data pelanggan ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Menghapus data pelanggan
export const deleteCustomer = async (req, res) => {
    const { id_customer } = req.params;
    try {
        await query("DELETE FROM customer WHERE id_customer = ?", [id_customer]);
        return res.status(200).json({ msg: "Data pelanggan dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mengupdate data pelanggan
export const updateCustomer = async (req, res) => {
    const { id_customer } = req.params;
    const { nama_customer, no_telepon, alamat_customer, nama_kucing, warna_kucing, img_kucing, id_ras, id_jenis_kelamin } = req.body;
    try {
        // Validasi id_ras dan id_jenis_kelamin
        const rasExists = await query("SELECT id_ras FROM ras WHERE id_ras = ?", [id_ras]);
        const jenisKelaminExists = await query("SELECT id_jenis_kelamin FROM jeniskelamin WHERE id_jenis_kelamin = ?", [id_jenis_kelamin]);
        
        if (!rasExists || !jenisKelaminExists) {
            return res.status(400).json({ msg: "ID ras atau ID jenis kelamin tidak valid" });
        }

        await query("UPDATE customer SET nama_customer = ?, no_telepon = ?, alamat_customer = ?, nama_kucing = ?, warna_kucing = ?, id_ras = ?, id_jenis_kelamin = ? WHERE id_customer = ?",
            [nama_customer, no_telepon, alamat_customer, nama_kucing, warna_kucing, img_kucing, id_ras, id_jenis_kelamin, id_customer]);

        return res.status(200).json({ msg: "Data pelanggan diperbarui" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mendapatkan data pelanggan berdasarkan ID
export const getCustomerById = async (req, res) => {
    const { id_customer } = req.params;
    try {
        const result = await query('SELECT * FROM customer WHERE id_customer = ?', [id_customer]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// Mendapatkan data pelanggan untuk pengujian
export const getCustomerTest = async (req, res) => {
    const { id_customer, nama_customer } = req.query;
    console.log(id_customer, nama_customer);
    console.log("GET CUSTOMER TEST");
    try {
        const result = await query('SELECT * FROM customer WHERE id_customer = ? AND nama_customer = ?', [id_customer, nama_customer]);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};
