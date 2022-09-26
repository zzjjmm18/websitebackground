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

/**
 * 登录接口
 * @param {*} param0 { username: 用户名, password: 密码 }
 * @returns Promise对象
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取-用户信息
 * @returns Promise对象
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo'
  })
}

/**
 * 获取-侧边栏菜单数据
 * @returns Promise对象
 */
export const getMenusAPI = () => {
  return request({
    url: '/my/menus'
  })
}

/**
 * 更新-用户基本资料
 * @param {*} param0 { id: 用户id, email: 用户邮箱, nickname: 用户昵称, user_pic: 用户头像地址, username: 用户名 }
 * @returns Promise对象
 */
export const updateUserInfoAPI = ({ id, email, nickname, user_pic, username }) => {
  return request({
    url: '/my/userinfo',
    method: 'PUT',
    data: {
      id,
      email,
      nickname,
      user_pic,
      username
    }
  })
}

/**
 * 更新-用户密码
 * @param {*} param0 { old_pwd: 旧密码, new_pwd: 新密码, re_pwd: 新密码确认 }
 * @returns Promise对象
 */
export const updatePwdAPI = ({ old_pwd, new_pwd, re_pwd }) => {
  return request({
    url: '/my/updatepwd',
    method: 'PATCH',
    data: {
      old_pwd,
      new_pwd,
      re_pwd
    }
  })
}
