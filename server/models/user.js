let User = mongoose.Schema(
    {
        // _id: <generated Object ID>,  // user id
        username: String,               // username to login
        display_name: String,           // user display name
        email: String,                  // user email

        // salt: String,    // generated by passport
        // hash: String,    // generated by passport
    }, {
        collection: "users",
    }
);