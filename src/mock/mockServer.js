//mock/server/mockServer.js
let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock
let app = express(); //实例化express
//设置允许跨域

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
 
app.get("/mock/getData", function(req, res) {
  res.json(
    Mock.mock({
    "data|10": [
      {
        "key|+1": 1,
        "words|1": ["哈哈", "嘿嘿", "biubiu", "啾啾", "喵喵","啦啦"],
        "activity|1": ["吃饭", "睡觉", "打豆豆"]
      }
    ]
  }))
});

app.listen("8090", () => {
  console.log("监听端口 8090");
});