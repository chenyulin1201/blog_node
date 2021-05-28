const {connection } = require('../init');

var sql = 'CREATE TABLE IF NOT EXISTS userinfo(id INT UNSIGNED AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY ( `id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8';
connection.query(sql, function (err, result) {
  if(err){
    console.log(`SQL error: ${err}!`);
  }else{
      console.log(result);
  }
})