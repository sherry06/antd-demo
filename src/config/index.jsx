/**
 * 系统配置类入口
 */
const Config = {
    BASE_URL: 'http://localhost:8090', // mock地址
    MOCKABLE: false  
  }
  
  // // 方便运行时态对配置修改
  // if (window && window.mungConfig) {
  //   Object.assign(Config, window.mungConfig)
  // }
  
  export default Config
  