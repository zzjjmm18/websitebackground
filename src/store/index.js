import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '', // 1. 用来存储登录成功之后，得到的 token
    userInfo: {} // 定义用户信息对象
  },
  mutations: {
    // 2. 更新 token 的 mutation 函数
    updateToken (state, newToken) {
      state.token = newToken
    },
    // 更新用户的信息
    updateUserInfo (state, info) {
      state.userInfo = info
    }
  },
  actions: {
    // 定义初始化用户基本信息的 action 函数 请求用户信息
    async getUserInfoActions (context) {
      const { data: res } = await getUserInfoAPI()
      if (res.code === 0) {
        // console.log(res.data)
        context.commit('updateUserInfo', res.data)
      }
    }
  },
  modules: {
  },
  getters: {
    nickname: state => state.userInfo.nickname, // 昵称
    username: state => state.userInfo.username, // 用户名
    user_pic: state => state.userInfo.user_pic // 用户头像
  },
  // 配置为 vuex 的插件
  plugins: [createPersistedState()]
})
