const router = require('express').Router();
const db = require('mongoose').connection;
module.exports = router

router.get('/user', async (req,res)=>{
    db.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).json(result)
        db.close();
      });
})