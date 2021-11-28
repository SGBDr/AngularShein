const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "dist/SheinBoot"));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "dist/SheinBoot"))
    res.send("fghjkljfcgvhbjk")
})

app.listen(process.env.PORT);