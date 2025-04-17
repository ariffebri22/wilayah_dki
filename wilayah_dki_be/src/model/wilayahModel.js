const db = require("../config/db");

const getLocationsBySearch = async (keyword) => {
    if (!keyword || typeof keyword !== "string") {
        throw new Error("Keyword pencarian tidak valid");
    }

    const searchTerm = keyword.trim();
    if (searchTerm === "") return [];

    const query = `
      SELECT 
        id, 
        kecamatan, 
        kota, 
        provinsi
      FROM 
        wilayah
      WHERE
        kecamatan LIKE CONCAT('%', ?, '%') OR
        kota LIKE CONCAT('%', ?, '%') OR
        provinsi LIKE CONCAT('%', ?, '%')
      ORDER BY
        CASE
          WHEN kecamatan LIKE CONCAT(?, '%') THEN 1
          WHEN kota LIKE CONCAT(?, '%') THEN 2
          WHEN provinsi LIKE CONCAT(?, '%') THEN 3
          ELSE 4
        END,
        kota ASC, kecamatan ASC
      LIMIT 50;
    `;

    try {
        const [results] = await db.query(query, [
            searchTerm,
            searchTerm,
            searchTerm,
            searchTerm,
            searchTerm,
            searchTerm,
        ]);

        return results;
    } catch (error) {
        console.error("Database error:", error);
        throw new Error("Gagal melakukan pencarian");
    }
};

const getAllData = async () => {
    console.log("model get all data");
    try {
        const [result] = await db.execute(`SELECT * FROM wilayah`);
        return result;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getLocationsBySearch,
    getAllData,
};
