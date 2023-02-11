const mongoose = require("mongoose");
//taking connection from mongo wtih thw help of connection string
const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://goolu:TGyU1XkvydsMpwnd@cluster0.ukfgr7m.mongodb.net/?retryWrites=true&w=majority"
    )
};

module.exports = connect;

//TGyU1XkvydsMpwnd
//mongodb+srv://goolu:<password>@cluster0.ukfgr7m.mongodb.net/?retryWrites=true&w=majority