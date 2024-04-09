const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());

app.options("*", cors());

app.use(express.static('public'))

app.get("/datos", (req, res) => {
    res.sendFile(path.join(process.cwd(),"private","datos.json"));
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
