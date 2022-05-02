const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
dotenv.config();

//mongoDB

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('DB CONNECTED'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});


app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, (err)=>{
    if(err) console.log(err);
    console.log(`SERVER ON`);
});

