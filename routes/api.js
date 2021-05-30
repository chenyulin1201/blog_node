const express = require("express")
const router = express()

const login = require('./user/login')

router.post('/login',(req,res)=>{
    login(req, res)
})

router.get("/index",(req,res)=>{
})
module.exports = router