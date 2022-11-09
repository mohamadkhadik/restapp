"use strict";

// const { response } = require('express');

module.exports = function (app) {
    var jsondata = require("./controller");

    app.route("/").get(jsondata.index);

    // mengambil data dan menampilkan
    app.route("/tampil").get(jsondata.tampilProduct);
    
    app.route("/tampil/:id")
    .get(jsondata.tampilId);
    };

