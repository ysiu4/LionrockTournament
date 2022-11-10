var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");

let Tournament = require("../models/tournament");
let Player = require("../models/player");


module.exports.add = function(req, res, next) {

    var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

    let newEntry = new Tournament({
        name: req.body.name,
        owner_id : id,
        description : req.body.description,
        enroll_start_at: req.body.enroll_start_at,
        enroll_end_at: req.body.enroll_end_at,
        has_started : req.body.has_started,
        has_finished : req.body.has_finished,
        champion : "",
        no_of_players : req.body.no_of_players,
        players : []
    });

    Tournament.create(newEntry, (err, resultdata) => {
        if (err) {
            console.log(err);
            res.json({ status: 0 , 'message' : 'Insertion Error' });
        } else {
          // refresh the book list
            res.json({ status: 1 , 'message' : 'OK' });
        }
      });
}

module.exports.edit = function(req, res, next) {
    let id = mongoose.Types.ObjectId(req.params.id);

    let item = {
        name: req.body.name,
        description : req.body.description,
        enroll_start_at: req.body.enroll_start_at,
        enroll_end_at: req.body.enroll_end_at,
        has_started : req.body.has_started,
        has_finished : req.body.has_finished,
        no_of_players : req.body.no_of_players,
    };
      Tournament.updateOne({ _id: id }, item, (err) => {
        if (err) {
            console.log(err);
            res.json({ status: 0 , 'message' : 'Update Error' });
        } else {
          //refresh the book list
          res.json({ status: 1 , 'message' : 'OK' });
        }
      });
}

module.exports.delete = function(req, res, next) {
    let id = mongoose.Types.ObjectId(req.params.id);

    
    Tournament.remove({ _id: id }, (err) => {
        if (err) {
            res.json({ status: 0 , 'message' : 'Delete Error' });
        } else {
          //refresh book list
          res.json({ status: 1 , 'message' : 'OK' });
        }
    });
}

module.exports.list = function(req, res, next) {
    console.log('123');
    Tournament.find().sort({name:1}).then( ( items ) => {
        res.json({ status: 1 , 'data' : items });       
    });
}

module.exports.get = function(req, res, next) {

    let id = mongoose.Types.ObjectId(req.params.id);
    console.log(req.params.id);
    Tournament.find({
        _id : id
    } ).then( ( items ) => {
        res.json({ status: 1 , 'data' : items });       
    });
}