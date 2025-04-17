const express = require("express");
const router = express.Router();
const wilayahController = require("../controller/wilayahController");

router.get("/locations", wilayahController.getLocations);
router.get("/all", wilayahController.getData);

module.exports = router;
