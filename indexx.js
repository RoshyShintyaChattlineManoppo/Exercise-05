const moment = require('moment');
const user = require('./users.js');
const morgan = require ("morgan");
const express = require("express");
const app = express();
const port = 3000;


//Middleware untuk error handling
const errorHandling = (err, req, res, next) => {
    res.json({
        status : "error",
        message : "Terjadi kesalahan pada server",
    });
};
app.use(errorHandling);

//Middleware untuk 404
const notFound = (req, res, next) => {
    res.json({
        status : "Error",
        message : "Resource tidak ditemukan",
    });
};
app.use(notFound);


app.listen(port, ()=> 
    console.log(`Server running at http://localhost:${port}`)
);
