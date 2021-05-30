const {connection } = require('../init');

var sql = 'CREATE TABLE IF NOT EXISTS userinfo(id INT UNSIGNED AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255),createTime VARCHAR(255),grade tinyint(10), PRIMARY KEY ( `id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8';
// 创建用户表userinfoL：用户名，用户密码，注册时间，用户等级(0表示管理员，1表示普通用户)
connection.query(sql, function (err, result) {
  if(err){
    console.log(`SQL error: ${err}!`);
  }else{
      console.log(result);
  }
})