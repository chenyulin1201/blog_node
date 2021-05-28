const express = require("express")
const router = express()

const login = require('./user/login')
const register = require('./user/register')

router.post('/login',(req,res)=>{
    console.log('sss')
    login(req, res)
})

router.get("/user/register",(req,res)=>{
    register(req, res)
})

router.get("/index",(req,res)=>{
    console.log('ss')
})
module.exports = router