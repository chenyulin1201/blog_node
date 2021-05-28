const login = function (req, res) {
    console.log(req.body)
    res.status(200).json({success:true,msg:"登录成功"}) 
}

module.exports = login