const express = require("express");

const app = express();

app.use(express.static(__dirname + "dist/SheinBoot"));

app.get('/*', (req, res) => {
    res.sendFile("./dist/SheinBoot/index.html")
})

app.listen(process.env.PORT);