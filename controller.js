"use strict";

var respon = require("./res");
var connection = require("./koneksi");
// const { response } = require('express');

exports.index = function (req, res) {
  respon.ok("aplikasi rest ku berjalan", res);
};

//menampilkan data
exports.tampilProduct = function (req, res) {
  connection.query("SELECT * FROM product", function (error, rows, fileds) {
    if (error) {
      connection.log(error);
    } else {
      respon.ok(rows, res);
    }
  });
};

//menampilkan data berdasarkan ID

exports.tampilId = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id],
    function (error, rows, fileds) {
      if (error) {
        connection.log(error);
      } else {
        respon.ok(rows, res);
      }
    }
  );
};
