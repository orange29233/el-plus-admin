import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from "@/utils/auth.js";

// 创建axios实例
const http = axios.create({
  baseURL: '/api', // api的base_url process.env.BASE_API
  timeout: 5000 // 请求超时时间
})

// request拦截器
http.interceptors.request.use(config => {
  // Do something before request is sent
  const token = getToken()
  if (token) {
    config.headers['blade-auth'] =`bearer ${token}` 
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
http.interceptors.response.use(
  response => {
    const res = response.data
    return res.data
  },

  error => {
    console.log('err' + error)// for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default http
