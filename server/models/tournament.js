let mongoose = require("mongoose");



let Tournament = mongoose.Schema(
    {
        // _id: <generated Object ID>,  // tournament id
        name: { type : String , default : "" , trim : true , required : "name is required" },                   // name of tournament
        description: { type : String , default : "" , trim : true  },            // description of tournament
        owner_id: { type : mongoose.Schema.Types.ObjectId , trim : true , required : "owner_id is required" },               // user id for tournament owner
        
        //start_at: Number,               // epoch time of tournament starts
        //end_at: Number,                 // epoch time of tournament ends
        enroll_start_at: { type : Date , default: Date.now , trim : true , required : "name is required" },        // epoch time of enrollment starts
        enroll_end_at: { type : Date , default: Date.now , trim : true , required : "name is required" },          // epoch time of enrollment ends
        has_started: { type : Boolean , default : false , trim : true  } ,           // has the tournament started?
        has_finished: { type : Boolean , default : false , trim : true } ,          // has the tournament finished?
        champion: { type : String , default : "" , trim : true  } ,               // user id of champion

        no_of_players: { type : Number , default : "" , trim : true  },          // number of players joined the tournament
        players: { type : Array , default : undefined , trim : true }              // registered players for the tournament
    }, {
        collection: "tounaments",
    }
);

module.exports = mongoose.model("tournament", Tournament);