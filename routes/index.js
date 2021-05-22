const express = require('express');
const router = express.Router();


router.get('/api/v1/health',(req,res)=>{
    res.send({"msg": "server is working"});
})
module.exports = router;