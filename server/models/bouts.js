let Bout = mongoose.Schema(
    {
        // _id: <generated Object ID>,  // don't care
        tournament: String,             // tournament id
        round_id: Number,               // n-th round, i.e. 4=eighth-finals, 3=quarterfinals, 2=semifinals, 1=final
                                        // refer to https://en.wikipedia.org/wiki/Single-elimination_tournament
        match_id: Number,               // index of the match in that round, from 1
        player_1: String,               // user id of player 1
        player_2: String,               // user id of player 2
        score_1: Number,                // score of player 1
        score_2: Number,                // score of player 2
        winner: String,                 // user id of the winner
        status: String,                 // status of the match, either "scheduled", "in progress" or "completed"
    }, {
        collection: "bouts",
    }
);
