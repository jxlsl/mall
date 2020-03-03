import axios from "axios"
//回调函数的方式
// export function request(config,success,failure){
//   //创建axios实例
//   const instance =axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     method:"get",
//     timeout:5000
//   })
//   instance(config)
//   .then(res =>{
//    success(res);
//   })
//   .catch(err =>{
//     failure(err);
//   })
// }

// export function request(config){
//   return new Promise((resolve,reject) =>{
//     //创建axios实例
//     const instance = axios.create({
//       baseURL:"http://123.207.32.32:8000",
//       timeout:5000
//     })
//     // 发送网络请求
//     instance(config)
//     .then(res =>{
//       resolve(res);
//     })
//     .catch(err =>{
//       reject(err)
//     })
//   })
// }

export function request(config){
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })
  //axios的拦截器
  instance.interceptors.request.use(config =>{
    console.log(config);
  },err =>{
    console.log(err);
  }
  )
  instance.interceptors.response


  return instance(config)
}