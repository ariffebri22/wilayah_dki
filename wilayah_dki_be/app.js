const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Router = require("./src/router");
const helmet = require("helmet");
const path = require("path");

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);
    console.log("Request Path:", req.path);
    next();
});

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "server running" });
});

app.use("/api", Router);

app.use((err, req, res, next) => {
    console.error("Error occurred:", err);
    res.status(500).json({ message: "Internal Server Error" });
});

app.use(express.static(path.join(__dirname, "build")));

app.get(["/", "/index.html"], (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
