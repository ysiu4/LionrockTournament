var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");

module.exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}

module.exports.tournment = function(req, res, next) {
    res.render('tournment/dashboard', { title: 'Tournment listing' });
}