import request from '@/utils/request'
/**
 * 注册接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'post',
    data: {
      username,
      password,
      repassword
    }
  })
}
