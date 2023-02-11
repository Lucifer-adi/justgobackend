const app = require('./index')
const connect = require('./configs/db.js');
// const { connect } = require('mongoose');

//now listen to app

app.listen(4000, async () =>{
    try {
      await connect()  
      console.log("connection is listening");
    } catch (error) {
       console.log(error); 
    }
});

