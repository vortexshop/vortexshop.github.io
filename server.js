const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const port = 8080;

const server = http.createServer(app)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.use(express.static("public"));

server.listen(port)