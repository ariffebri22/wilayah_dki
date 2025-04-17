const wilayahModel = require("../model/wilayahModel");

const getLocations = async (req, res) => {
    try {
        const { search } = req.query;

        if (!search || typeof search !== "string" || search.trim() === "") {
            return res.status(400).json({
                success: false,
                message: 'Parameter "search" harus berupa string tidak kosong',
            });
        }

        const keyword = search.trim();

        const locations = await wilayahModel.getLocationsBySearch(keyword);

        const responseData = locations.map((item) => ({
            id: item.id,
            kecamatan: item.kecamatan,
            kota: item.kota,
            provinsi: item.provinsi,
        }));

        res.status(200).json(responseData);
    } catch (error) {
        console.error("Error in controller:", error);

        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan server",
        });
    }
};

const getData = async (req, res, next) => {
    try {
        const dataWilayah = await wilayahModel.getAllData();
        console.log("dataWilayah");
        console.log(dataWilayah);
        res.status(200).json({
            status: 200,
            message: "get data wilayah success",
            data: dataWilayah,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            message: "Internal server error",
        });
    }
};

module.exports = {
    getLocations,
    getData,
};
