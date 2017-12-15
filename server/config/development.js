/**
 * 生产环境配置
 */
module.exports = {
  port: 3000, //端口号
  mongodb: "mongodb://localhost:27017/myblog", //mongodb地址 myblog为db名
  session: {
    secret: "myblog",
    key: "myblog",
    maxAge: 2592000000
  }, //express-session配置信息
};
