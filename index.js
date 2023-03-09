const express = require("moment");
const app = express();
const moment = require("moment");
var morgan = require("morgan");
const port = 3000;

// Middleware untuk log
const log = (req, res, next) => {
    console.log(`${moment().format()} - ${req.ip} = ${req.originalUrl}`);
    next();
};

app.use(log);
app.use(morgan("combined"));

//Deklarasi Routing
app.get("/", (req, res) => {
    res.send("House");
});

app.get("/post/:id", (req, res) => {
    res.send(`Artikel-${req.params.id}`);
});

app.get("/post/:id?", (req, res) => {
    res.send(`Artikel-none`);
});

app.get("/foods", (req, res) => {
    res.send(req.query);
    res.end();
});

app.get("/page-*", (req, res) => {
    res.send(`route : ${req.path}`);
});

//Middleware untuk error handling
const errorHandling = (err, req, res, next) => {
    res.json({
        status: "error",
        message: "terjadi kesalahan pada server",
    });
};

app.use(errorHandling);

//Middleware untuk 404
const notFound = (req, res, next) => {
    res.json({
        status: "Error",
        message: "Resource tidak ditemukan",
    });
};

app.use(notFound);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});