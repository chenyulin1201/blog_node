const { connection } = require('../../../database/init.js');
const register = function (req, res) {
    // 获取req数据 去数据库查询， 查到返回已注册了请去登录；
    // 没查到则直接塞到数据库了；并且返回注册成功

    
    var sql = "INSERT INTO userinfo VALUES (1, 'test_name', 'test_password')"
    connection.query(sql, function(error, result) {
      console.log(result, 'result')
      res.status(200).json({success:true,msg:"注册成功"}) 
    })
}

connection.end()
module.exports = register