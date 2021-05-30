const { connection } = require('../../../database/init.js');
const login = function (req, res) {
    // 获取请求参数
    const userName = req.body.userName;
    const password = req.body.password;

    const createTime = Math.floor(new Date().getTime() / 1000);
    
    // 1.查询数据库是否有这个用户，如果没有则直接注册,
    var queryUserSql = `SELECT * FROM userinfo WHERE username='${userName}'`;
    console.log(queryUserSql)
    var setUserSql = `INSERT INTO userinfo VALUES (NULL, NULL, NULL, NULL, NULL);`

    // connection.query(queryUserSql, function(error, result) {
    //     // 如果用户存在，则返回数据允许登陆
    //     console.log(result, 'result')
    //     if (result && result.length) {
    //         res.status(200).json({
    //             message: '登陆成功', 
    //             status: 1, 
    //             data: {
    //                 grade: result[0].grade
    //             },
    //             token: 'asdasd',
    //         }) 
    //     } else {
    //         console.log('sss')
    //         connection.query(setUserSql, function(error, results) {
    //             // 如果用户存在，则返回数据允许登陆
    //             console.log(results, 'results')
    //             if (results) {
    //                 res.status(200).json({
    //                     message: '登陆成功', 
    //                     status: 1, 
    //                     data: {
    //                         grade: results[0].grade
    //                     },
    //                     token: 'asdasd',
    //                 }) 
    //             }
    //         })
    //     }
    // })
    // 2.如果有则校验用户名和密码是否正确
}
// connection.end()
module.exports = login;