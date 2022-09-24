import axios from 'axios'

const service = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

export default service
