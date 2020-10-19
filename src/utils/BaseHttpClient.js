import axios from 'axios'
import config from '../config/index'
// 引入组件， 提示获取信息错误
import {
  notification
} from 'antd'
//开发模式下开启 mock拦截器
// process.env.NODE_ENV === 'development' && !!config.MOCKABLE && require('@/mocks')
// 引入基础路径
const {BASE_URL} = config
let http = axios.create({
})
Object.assign(http.defaults, {
  // 基础访问路径
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*', 
    // "Cache-Control": 'max-age=300'
  },
  withCredentials: false // 是否允许携带cookie
})

http.defaults.showLoading = true // 是否显示遮罩层
http.defaults.showError = true // 返回错误时是否显示错误信息
http.defaults.timeout = 30000 // 设置超时时间
http.defaults.retry = 4
http.defaults.retryDelay = 1000
// axios request拦截器 在发送数据前可以配置发送的参数
http.interceptors.request.use(function(config) {
  return config
})
// axios response拦截器 在获取数据后进行一定的处理
http.interceptors.response.use(function(response) {
  return response
}, function (error) {
  // let config = error.config
  // if (!config || !config.retry) return Promise.reject(err)
  // config._retryCount = config._retryCount || 0
  // if (config._retryCount >= config.retry) {
    let data = {}
    let status = '000'
    let statusText = error.message || '找不到请求路径！'
    if (error.response) {
      data = error.response.data || {}
      status = data.code || error.response.status
      statusText = data.msg || error.response.statusText || '找不到请求路径！'
    }
    notification['error']({
      message: '出错了，错误码：[' + status + ']',
      description: statusText
    })
  //   return Promise.reject(err)
  // }

  // config._retryCount += 1
  // var backoff = new Promise(function(resolve) {
  //   setTimeout(function() {
  //     resolve()
  //   }, config.retryDelay || 1)
  // })
  // return backoff.then(function() {
  //   return axios(config)
  // })
})

export default http